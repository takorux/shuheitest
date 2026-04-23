const championGrid = document.getElementById('championGrid');
const searchInput = document.getElementById('searchInput');
const loading = document.getElementById('loading');
const modal = document.getElementById('championModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const langToggle = document.getElementById('langToggle');
const miniGameBtn = document.getElementById('miniGameBtn');
const miniGameModal = document.getElementById('miniGameModal');
const closeMiniGame = document.getElementById('closeMiniGame');

let championsList = [];
let currentRole = 'All';
let latestVersion = '';

let currentLang = 'ja';
const championDataCache = {
    ja: null,
    en: null
};

const UI_TEXT = {
    ja: {
        search_placeholder: "チャンピオンを検索...",
        role_all: "すべて",
        role_fighter: "ファイター",
        role_mage: "メイジ",
        role_assassin: "アサシン",
        role_marksman: "マークスマン",
        role_support: "サポート",
        role_tank: "タンク",
        loading: "チャンピオンデータを読み込み中...",
        loading_error: "データの読み込みに失敗しました。",
        cd_inherent: "固有",
        cd_sec: "秒",
        counters_title: "おすすめカウンターピック",
        counters_none: "このチャンピオンの対策データは未登録です。（countersData.jsで追加できます）",
        combos_title: "基礎コンボ",
        combos_none: "コンボデータは未登録です。（countersData.jsで追加できます）"
    },
    en: {
        search_placeholder: "Search champions...",
        role_all: "All",
        role_fighter: "Fighter",
        role_mage: "Mage",
        role_assassin: "Assassin",
        role_marksman: "Marksman",
        role_support: "Support",
        role_tank: "Tank",
        loading: "Loading champion data...",
        loading_error: "Failed to load data.",
        cd_inherent: "Inherent",
        cd_sec: "s",
        counters_title: "Recommended Counters",
        counters_none: "Counter data is not registered for this champion.",
        combos_title: "Basic Combos",
        combos_none: "Combo data is not registered for this champion."
    }
};

function updateStaticUI() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (UI_TEXT[currentLang][key]) {
            el.textContent = UI_TEXT[currentLang][key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (UI_TEXT[currentLang][key]) {
            el.setAttribute('placeholder', UI_TEXT[currentLang][key]);
        }
    });
    if (langToggle) {
        langToggle.textContent = currentLang === 'ja' ? 'EN' : '日本語';
    }
}

async function fetchChampionData(lang) {
    if (championDataCache[lang]) return championDataCache[lang];
    const apiLang = lang === 'ja' ? 'ja_JP' : 'en_US';
    const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/${apiLang}/championFull.json`);
    const data = await res.json();
    championDataCache[lang] = Object.values(data.data);
    return championDataCache[lang];
}

async function init() {
    try {
        updateStaticUI();
        const vRes = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
        const versions = await vRes.json();
        latestVersion = versions[0];
        
        championsList = await fetchChampionData(currentLang);
        
        loading.style.display = 'none';
        renderChampions(championsList, latestVersion);
        
        const roleBtns = document.querySelectorAll('.role-btn');
        roleBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                roleBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                currentRole = e.target.getAttribute('data-role');
                filterChampions();
            });
        });

        searchInput.addEventListener('input', () => {
            filterChampions();
        });
        
        if (langToggle) {
            langToggle.addEventListener('click', async () => {
                currentLang = currentLang === 'ja' ? 'en' : 'ja';
                updateStaticUI();
                
                loading.textContent = UI_TEXT[currentLang].loading;
                loading.style.display = 'block';
                championGrid.innerHTML = '';
                
                try {
                    championsList = await fetchChampionData(currentLang);
                    loading.style.display = 'none';
                    filterChampions();
                    
                    if (modal.classList.contains('active')) {
                        const currentChampId = modal.getAttribute('data-current-champ');
                        if (currentChampId) {
                            const champ = championsList.find(c => c.id === currentChampId);
                            if (champ) openModal(champ, latestVersion);
                        }
                    }
                } catch (err) {
                    loading.textContent = UI_TEXT[currentLang].loading_error;
                    console.error(err);
                }
            });
        }

    } catch (err) {
        loading.textContent = UI_TEXT[currentLang].loading_error;
        console.error(err);
    }
}

function filterChampions() {
    const query = searchInput.value.toLowerCase();
    const filtered = championsList.filter(c => {
        const matchesSearch = c.name.toLowerCase().includes(query) || c.id.toLowerCase().includes(query);
        const matchesRole = currentRole === 'All' || c.tags.includes(currentRole);
        return matchesSearch && matchesRole;
    });
    renderChampions(filtered, latestVersion);
}

function renderChampions(champs, version) {
    championGrid.innerHTML = '';
    champs.forEach(champ => {
        const card = document.createElement('div');
        card.className = 'champion-card';
        card.onclick = () => openModal(champ, version);
        
        card.innerHTML = `
            <img src="https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.id}.png" alt="${champ.name}" loading="lazy">
            <span>${champ.name}</span>
        `;
        championGrid.appendChild(card);
    });
}

function openModal(champ, version) {
    modal.setAttribute('data-current-champ', champ.id);
    const keys = ['Q', 'W', 'E', 'R'];
    
    let skillsHTML = `
        <div class="skill-row">
            <div class="skill-icon-wrapper">
                <img src="https://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${champ.passive.image.full}" alt="Passive">
                <span class="skill-key">Passive</span>
            </div>
            <div class="skill-info">
                <h3>${champ.passive.name}</h3>
                <p class="desc">${champ.passive.description}</p>
                <div class="skill-cd"><span>CD:</span> ${UI_TEXT[currentLang].cd_inherent}</div>
            </div>
        </div>
    `;

    champ.spells.forEach((spell, idx) => {
        const cdText = spell.cooldownBurn;
        skillsHTML += `
            <div class="skill-row">
                <div class="skill-icon-wrapper">
                    <img src="https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spell.image.full}" alt="${keys[idx]}">
                    <span class="skill-key">${keys[idx]}</span>
                </div>
                <div class="skill-info">
                    <h3>${spell.name}</h3>
                    <p class="desc">${spell.description}</p>
                    <div class="skill-cd"><span>CD:</span> ${cdText} ${UI_TEXT[currentLang].cd_sec}</div>
                </div>
            </div>
        `;
    });

    let countersHTML = '';
    if (typeof COUNTER_DATA !== 'undefined' && COUNTER_DATA[champ.id]) {
        const counterIds = COUNTER_DATA[champ.id];
        let counterCards = '';
        counterIds.forEach(cId => {
            const counterChamp = championsList.find(c => c.id === cId);
            const champName = counterChamp ? counterChamp.name : cId;
            counterCards += `
                <div class="counter-champ-card">
                    <img src="https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${cId}.png" alt="${champName}" onerror="this.src=''">
                    <span>${champName}</span>
                </div>
            `;
        });
        countersHTML = `
            <div class="counters-section">
                <h3 class="counters-title">${UI_TEXT[currentLang].counters_title}</h3>
                <div class="counter-champs">
                    ${counterCards}
                </div>
            </div>
        `;
    } else {
        countersHTML = `
            <div class="counters-section">
                <h3 class="counters-title">${UI_TEXT[currentLang].counters_title}</h3>
                <p class="no-counter-data">${UI_TEXT[currentLang].counters_none}</p>
            </div>
        `;
    }

    let combosHTML = '';
    if (typeof COMBO_DATA !== 'undefined' && COMBO_DATA[champ.id] && COMBO_DATA[champ.id][currentLang]) {
        const combos = COMBO_DATA[champ.id][currentLang];
        let comboItems = '';
        combos.forEach(combo => {
            comboItems += `<li>${combo}</li>`;
        });
        combosHTML = `
            <div class="combo-section">
                <h3 class="combo-title">${UI_TEXT[currentLang].combos_title}</h3>
                <ul class="combo-list">
                    ${comboItems}
                </ul>
            </div>
        `;
    } else {
        combosHTML = `
            <div class="combo-section">
                <h3 class="combo-title">${UI_TEXT[currentLang].combos_title}</h3>
                <p class="no-counter-data">${UI_TEXT[currentLang].combos_none}</p>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="champ-header">
            <img src="https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.id}.png" alt="${champ.name}">
            <div class="champ-title">
                <h2>${champ.name}</h2>
                <p>${champ.title}</p>
            </div>
        </div>
        ${countersHTML}
        ${combosHTML}
        <div class="skills-container" style="margin-top: 30px;">
            ${skillsHTML}
        </div>
    `;
    
    modal.classList.add('active');
}

closeModal.onclick = () => {
    modal.classList.remove('active');
}
window.onclick = (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
    if (e.target === miniGameModal) {
        miniGameModal.classList.remove('active');
    }
}

if (document.getElementById('miniGameBtn')) {
    document.getElementById('miniGameBtn').onclick = () => {
        console.log('Opening Mini Game...');
        const mgm = document.getElementById('miniGameModal');
        if (mgm) {
            mgm.style.display = 'flex';
            mgm.classList.add('active');
        }
    };
}
if (document.getElementById('closeMiniGame')) {
    document.getElementById('closeMiniGame').onclick = () => {
        const mgm = document.getElementById('miniGameModal');
        if (mgm) {
            mgm.style.display = 'none';
            mgm.classList.remove('active');
        }
    };
}

init();

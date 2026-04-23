const championGrid = document.getElementById('championGrid');
const searchInput = document.getElementById('searchInput');
const loading = document.getElementById('loading');
const modal = document.getElementById('championModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

let championsList = [];
let currentRole = 'All';
let latestVersion = '';

// Fetch latest version first
async function init() {
    try {
        const vRes = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
        const versions = await vRes.json();
        latestVersion = versions[0];
        
        // Fetch champion data
        const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ja_JP/championFull.json`);
        const data = await res.json();
        
        championsList = Object.values(data.data);
        
        // Render
        loading.style.display = 'none';
        renderChampions(championsList, latestVersion);
        
        // Setup Role Filters
        const roleBtns = document.querySelectorAll('.role-btn');
        roleBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                roleBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                currentRole = e.target.getAttribute('data-role');
                filterChampions();
            });
        });

        // Setup Search
        searchInput.addEventListener('input', () => {
            filterChampions();
        });

    } catch (err) {
        loading.textContent = 'データの読み込みに失敗しました。';
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
    const keys = ['Q', 'W', 'E', 'R'];
    
    // Passive
    let skillsHTML = `
        <div class="skill-row">
            <div class="skill-icon-wrapper">
                <img src="https://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${champ.passive.image.full}" alt="Passive">
                <span class="skill-key">Passive</span>
            </div>
            <div class="skill-info">
                <h3>${champ.passive.name}</h3>
                <p class="desc">${champ.passive.description}</p>
                <div class="skill-cd"><span>CD:</span> 固有</div>
            </div>
        </div>
    `;

    // Spells (Q,W,E,R)
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
                    <div class="skill-cd"><span>CD:</span> ${cdText} 秒</div>
                </div>
            </div>
        `;
    });

    // Counters HTML
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
                <h3 class="counters-title">おすすめカウンターピック</h3>
                <div class="counter-champs">
                    ${counterCards}
                </div>
            </div>
        `;
    } else {
        countersHTML = `
            <div class="counters-section">
                <h3 class="counters-title">おすすめカウンターピック</h3>
                <p class="no-counter-data">このチャンピオンの対策データは未登録です。（countersData.jsで追加できます）</p>
            </div>
        `;
    }

    // Combos HTML
    let combosHTML = '';
    if (typeof COMBO_DATA !== 'undefined' && COMBO_DATA[champ.id]) {
        const combos = COMBO_DATA[champ.id];
        let comboItems = '';
        combos.forEach(combo => {
            comboItems += `<li>${combo}</li>`;
        });
        combosHTML = `
            <div class="combo-section">
                <h3 class="combo-title">基礎コンボ</h3>
                <ul class="combo-list">
                    ${comboItems}
                </ul>
            </div>
        `;
    } else {
        combosHTML = `
            <div class="combo-section">
                <h3 class="combo-title">基礎コンボ</h3>
                <p class="no-counter-data">コンボデータは未登録です。（countersData.jsで追加できます）</p>
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
}

// Start
init();

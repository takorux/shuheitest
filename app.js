const championGrid = document.getElementById('championGrid');
const searchInput = document.getElementById('searchInput');
const loading = document.getElementById('loading');
const modal = document.getElementById('championModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

let championsList = [];

// Fetch latest version first
async function init() {
    try {
        const vRes = await fetch('https://ddragon.leagueoflegends.com/api/versions.json');
        const versions = await vRes.json();
        const latest = versions[0];
        
        // Fetch champion data
        const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${latest}/data/ja_JP/championFull.json`);
        const data = await res.json();
        
        championsList = Object.values(data.data);
        
        // Render
        loading.style.display = 'none';
        renderChampions(championsList, latest);
        
        // Setup Search
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = championsList.filter(c => 
                c.name.toLowerCase().includes(query) || 
                c.id.toLowerCase().includes(query)
            );
            renderChampions(filtered, latest);
        });

    } catch (err) {
        loading.textContent = 'データの読み込みに失敗しました。';
        console.error(err);
    }
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

    modalBody.innerHTML = `
        <div class="champ-header">
            <img src="https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champ.id}.png" alt="${champ.name}">
            <div class="champ-title">
                <h2>${champ.name}</h2>
                <p>${champ.title}</p>
            </div>
        </div>
        <div class="skills-container">
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

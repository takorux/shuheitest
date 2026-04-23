/**
 * Skillshot Dodger - Baptiste Edition
 * Core Game Logic
 */

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const startScreen = document.getElementById('start-screen');
const gameOverScreen = document.getElementById('game-over-screen');
const finalScoreEl = document.getElementById('final-score');
const finalTimeEl = document.getElementById('final-time');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const regenCooldownEl = document.getElementById('regen-cooldown');
const immortalityCooldownEl = document.getElementById('immortality-cooldown');
const submitBtn = document.getElementById('submit-score-btn');
const nameInput = document.getElementById('player-name-input');
const rankingArea = document.getElementById('ranking-input-area');
const leaderboardList = document.getElementById('leaderboard-list');

// Assets
const baptisteImg = new Image();
baptisteImg.src = 'assets/baptiste.png';

// Game constants
const PLAYER_RADIUS = 22;
const PLAYER_SPEED_BASE = 5;
const REGEN_SPEED_BOOST = 3;
const PROJECTILE_SPEED_MIN = 2.5;
const PROJECTILE_SPEED_MAX = 5.5;
const REGEN_DURATION_MS = 3000;
const REGEN_COOLDOWN_MS = 10000;
const IMMORTALITY_DURATION_MS = 4000;
const IMMORTALITY_COOLDOWN_MS = 15000;

class Game {
    constructor() {
        this.reset();
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        // Input tracking
        this.mouse = { x: canvas.width / 2, y: canvas.height / 2 };
        
        window.addEventListener('contextmenu', (e) => e.preventDefault());

        window.addEventListener('mousedown', (e) => {
            if (!this.player.isAlive) return;
            const rect = canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            if (e.button === 2) {
                this.player.targetX = clickX;
                this.player.targetY = clickY;
                this.createClickEffect(clickX, clickY);
            }
        });

        window.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
        });

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Shift') this.useRegenBurst();
            if (e.key.toLowerCase() === 'e') this.useImmortalityField();
        });

        startBtn.onclick = () => this.start();
        restartBtn.onclick = () => this.start();
        
        submitBtn.onclick = () => {
            const name = nameInput.value.trim() || 'Anonymous';
            this.saveRanking(name, this.score);
            rankingArea.style.display = 'none';
            this.displayRanking();
        };

        this.displayRanking();
    }

    reset() {
        this.player = {
            x: canvas.width / 2,
            y: canvas.height / 2,
            targetX: canvas.width / 2,
            targetY: canvas.height / 2,
            isAlive: false,
            isRegenActive: false,
            isImmortal: false
        };
        this.projectiles = [];
        this.particles = [];
        this.clickEffects = [];
        this.immortalityFields = [];
        this.score = 0;
        this.startTime = 0;
        this.elapsedTime = 0;
        this.lastSpawnTime = 0;
        this.spawnInterval = 800;
        this.difficulty = 1;
        
        this.isRegenReady = true;
        this.isImmortalityReady = true;

        scoreEl.textContent = '0';
        timerEl.textContent = '00:00';
        regenCooldownEl.style.transform = 'translateY(100%)';
        immortalityCooldownEl.style.transform = 'translateY(100%)';
        rankingArea.style.display = 'flex';
        nameInput.value = '';
    }

    saveRanking(name, score) {
        let rankings = JSON.parse(localStorage.getItem('baptiste_dodge_rankings') || '[]');
        rankings.push({ name, score, date: new Date().getTime() });
        rankings.sort((a, b) => b.score - a.score);
        rankings = rankings.slice(0, 5); // Keep top 5
        localStorage.setItem('baptiste_dodge_rankings', JSON.stringify(rankings));
    }

    displayRanking() {
        const rankings = JSON.parse(localStorage.getItem('baptiste_dodge_rankings') || '[]');
        leaderboardList.innerHTML = rankings.map((r, i) => `
            <li>
                <span class="name">${i + 1}. ${r.name}</span>
                <span class="score">${r.score}</span>
            </li>
        `).join('') || '<li><span class="name">No rankings yet</span></li>';
    }

    resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        if (this.player) {
            this.player.x = canvas.width / 2;
            this.player.y = canvas.height / 2;
            this.player.targetX = this.player.x;
            this.player.targetY = this.player.y;
        }
    }

    start() {
        this.reset();
        this.player.isAlive = true;
        this.startTime = Date.now();
        startScreen.classList.remove('active');
        gameOverScreen.classList.remove('active');
        this.animate();
    }

    useRegenBurst() {
        if (!this.player.isAlive || !this.isRegenReady) return;

        this.player.isRegenActive = true;
        this.isRegenReady = false;
        
        // Visual effect
        this.createExplosion(this.player.x, this.player.y, '#ff9d00', 15);

        // UI Cooldown start immediately
        this.startCooldown(regenCooldownEl, REGEN_COOLDOWN_MS, () => {
            this.isRegenReady = true;
        });

        setTimeout(() => {
            this.player.isRegenActive = false;
        }, REGEN_DURATION_MS);
    }

    useImmortalityField() {
        if (!this.player.isAlive || !this.isImmortalityReady) return;

        this.isImmortalityReady = false;
        
        // Deploy field at current position
        this.immortalityFields.push({
            x: this.player.x,
            y: this.player.y,
            radius: 120,
            endTime: Date.now() + IMMORTALITY_DURATION_MS,
            alpha: 0.8
        });

        this.startCooldown(immortalityCooldownEl, IMMORTALITY_COOLDOWN_MS, () => {
            this.isImmortalityReady = true;
        });
    }

    startCooldown(el, ms, onComplete) {
        el.style.transition = 'none';
        el.style.transform = 'translateY(0%)';
        setTimeout(() => {
            el.style.transition = `transform ${ms}ms linear`;
            el.style.transform = 'translateY(100%)';
        }, 50);
        setTimeout(onComplete, ms);
    }

    createClickEffect(x, y) {
        this.clickEffects.push({ x, y, radius: 5, alpha: 1 });
    }

    createExplosion(x, y, color, count) {
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x, y,
                vx: (Math.random() - 0.5) * 8,
                vy: (Math.random() - 0.5) * 8,
                radius: Math.random() * 3 + 1,
                alpha: 1,
                color: color
            });
        }
    }

    spawnProjectile() {
        const side = Math.floor(Math.random() * 4);
        let x, y;
        const margin = 50;
        if (side === 0) { x = Math.random() * canvas.width; y = -margin; }
        else if (side === 1) { x = canvas.width + margin; y = Math.random() * canvas.height; }
        else if (side === 2) { x = Math.random() * canvas.width; y = canvas.height + margin; }
        else { x = -margin; y = Math.random() * canvas.height; }

        const dx = this.player.x - x;
        const dy = this.player.y - y;
        const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.4;
        const speed = (Math.random() * (PROJECTILE_SPEED_MAX - PROJECTILE_SPEED_MIN) + PROJECTILE_SPEED_MIN) * this.difficulty;

        this.projectiles.push({
            x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
            radius: 10, color: '#ff4655', trail: []
        });
    }

    update() {
        if (!this.player.isAlive) return;

        const now = Date.now();
        this.elapsedTime = now - this.startTime;

        const seconds = Math.floor(this.elapsedTime / 1000);
        timerEl.textContent = `${Math.floor(seconds/60).toString().padStart(2, '0')}:${(seconds%60).toString().padStart(2, '0')}`;

        this.difficulty = 1 + (seconds / 25);
        this.spawnInterval = Math.max(150, 800 - (seconds * 12));

        // Check if player is inside an immortality field
        this.player.isImmortal = this.immortalityFields.some(f => {
            const d = Math.sqrt((f.x - this.player.x)**2 + (f.y - this.player.y)**2);
            return d < f.radius;
        });

        // Move player
        const dx = this.player.targetX - this.player.x;
        const dy = this.player.targetY - this.player.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 3) {
            const angle = Math.atan2(dy, dx);
            const speed = (this.player.isRegenActive ? PLAYER_SPEED_BASE + REGEN_SPEED_BOOST : PLAYER_SPEED_BASE);
            this.player.x += Math.cos(angle) * speed;
            this.player.y += Math.sin(angle) * speed;
        }

        if (now - this.lastSpawnTime > this.spawnInterval) {
            this.spawnProjectile();
            this.lastSpawnTime = now;
            this.score += 10;
            scoreEl.textContent = this.score;
        }

        // Projectiles
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const p = this.projectiles[i];
            p.x += p.vx; p.y += p.vy;
            p.trail.push({x: p.x, y: p.y});
            if (p.trail.length > 8) p.trail.shift();

            const d = Math.sqrt((p.x - this.player.x)**2 + (p.y - this.player.y)**2);
            if (d < p.radius + PLAYER_RADIUS - 10) {
                if (!this.player.isImmortal) this.gameOver();
            }

            if (p.x < -200 || p.x > canvas.width + 200 || p.y < -200 || p.y > canvas.height + 200) {
                this.projectiles.splice(i, 1);
            }
        }

        // Fields
        for (let i = this.immortalityFields.length - 1; i >= 0; i--) {
            const f = this.immortalityFields[i];
            if (now > f.endTime) {
                f.alpha -= 0.05;
                if (f.alpha <= 0) this.immortalityFields.splice(i, 1);
            }
        }

        // Particles & Effects
        this.particles.forEach((p, i) => {
            p.x += p.vx; p.y += p.vy; p.alpha -= 0.02;
            if (p.alpha <= 0) this.particles.splice(i, 1);
        });
        this.clickEffects.forEach((ef, i) => {
            ef.radius += 1.5; ef.alpha -= 0.05;
            if (ef.alpha <= 0) this.clickEffects.splice(i, 1);
        });
    }

    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw Fields (Enhanced grid effect)
        this.immortalityFields.forEach(f => {
            // Outer ring
            ctx.beginPath();
            ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(0, 212, 255, ${f.alpha})`;
            ctx.lineWidth = 4;
            ctx.stroke();
            
            // Grid effect
            ctx.strokeStyle = `rgba(0, 212, 255, ${f.alpha * 0.2})`;
            ctx.lineWidth = 1;
            for (let i = -f.radius; i <= f.radius; i += 20) {
                const h = Math.sqrt(f.radius**2 - i**2);
                ctx.beginPath(); ctx.moveTo(f.x + i, f.y - h); ctx.lineTo(f.x + i, f.y + h); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(f.x - h, f.y + i); ctx.lineTo(f.x + h, f.y + i); ctx.stroke();
            }
            
            ctx.fillStyle = `rgba(0, 212, 255, ${f.alpha * 0.1})`;
            ctx.fill();
            
            // Drone at center (spinning)
            ctx.save();
            ctx.translate(f.x, f.y);
            ctx.rotate(Date.now() / 200);
            ctx.fillStyle = '#fff';
            ctx.fillRect(-8, -2, 16, 4);
            ctx.fillRect(-2, -8, 4, 16);
            ctx.restore();
        });

        // Draw Projectiles
        this.projectiles.forEach(p => {
            ctx.beginPath();
            ctx.moveTo(p.trail[0]?.x, p.trail[0]?.y);
            p.trail.forEach(t => ctx.lineTo(t.x, t.y));
            ctx.strokeStyle = p.color; ctx.lineWidth = 3; ctx.globalAlpha = 0.3; ctx.stroke(); ctx.globalAlpha = 1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color; ctx.shadowBlur = 15; ctx.shadowColor = p.color; ctx.fill(); ctx.shadowBlur = 0;
        });

        // Click effects
        this.clickEffects.forEach(ef => {
            ctx.beginPath(); ctx.arc(ef.x, ef.y, ef.radius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(0, 255, 100, ${ef.alpha})`; ctx.lineWidth = 2; ctx.stroke();
        });

        // Draw Player (Baptiste - Comical Edition)
        if (this.player.isAlive) {
            const now = Date.now();
            const bobbing = Math.sin(now / 150) * 8; // Funny bobbing
            const scaleX = 1 + Math.sin(now / 100) * 0.1; // Squish/stretch
            const scaleY = 1 - Math.sin(now / 100) * 0.1;

            if (this.player.isImmortal) {
                ctx.beginPath(); ctx.arc(this.player.x, this.player.y, PLAYER_RADIUS + 10, 0, Math.PI * 2);
                ctx.strokeStyle = '#00d4ff'; ctx.lineWidth = 3; ctx.setLineDash([5, 5]); ctx.stroke(); ctx.setLineDash([]);
            }

            // Draw image
            const size = PLAYER_RADIUS * 2.8;
            ctx.save();
            ctx.translate(this.player.x, this.player.y + bobbing);
            ctx.scale(scaleX, scaleY);
            
            const dx = this.player.targetX - this.player.x;
            const dy = this.player.targetY - this.player.y;
            if (Math.sqrt(dx*dx + dy*dy) > 5) {
                ctx.rotate(Math.atan2(dy, dx) + Math.PI/2);
            }
            ctx.drawImage(baptisteImg, -size/2, -size/2, size, size);
            ctx.restore();

            // Draw name tag (now bobbing too!)
            ctx.fillStyle = "#fff";
            ctx.font = "black 16px 'Inter', sans-serif";
            ctx.textAlign = "center";
            ctx.shadowBlur = 4; ctx.shadowColor = "#000";
            ctx.fillText("ぱかす３１", this.player.x, this.player.y + bobbing - PLAYER_RADIUS - 25);
            ctx.shadowBlur = 0;

            if (this.player.isRegenActive) {
                ctx.beginPath(); ctx.arc(this.player.x, this.player.y, PLAYER_RADIUS + 5, 0, Math.PI * 2);
                ctx.strokeStyle = '#ff9d00'; ctx.lineWidth = 4; ctx.stroke();
            }
        }

        // Particles
        this.particles.forEach(p => {
            ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color; ctx.globalAlpha = p.alpha; ctx.fill(); ctx.globalAlpha = 1;
        });
    }

    animate() {
        if (!this.player.isAlive) return;
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }

    gameOver() {
        this.player.isAlive = false;
        this.createExplosion(this.player.x, this.player.y, '#ffffff', 40);
        setTimeout(() => this.showGameOverScreen(), 1000);
    }

    showGameOverScreen() {
        finalScoreEl.textContent = this.score;
        finalTimeEl.textContent = timerEl.textContent;
        gameOverScreen.classList.add('active');
    }
}

new Game();

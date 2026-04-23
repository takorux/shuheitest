// ==========================================
// チャンピオン対策（カウンター）データ
// ==========================================
const COUNTER_DATA = {
    // --- TOP ---
    "Aatrox": ["Fiora", "Irelia", "Kled"],
    "Camille": ["Jax", "Fiora", "Darius"],
    "ChoGath": ["Fiora", "Gwen", "Kled"],
    "Darius": ["Teemo", "Vayne", "Quinn"],
    "DrMundo": ["Gwen", "Aatrox", "Kled"],
    "Fiora": ["Malphite", "Jax", "Pantheon"],
    "Gangplank": ["Riven", "Vladimir", "Quinn"],
    "Garen": ["Darius", "Camille", "Kayle"],
    "Gnar": ["Irelia", "Yasuo", "Wukong"],
    "Gragas": ["Garen", "Illaoi", "Darius"],
    "Gwen": ["Fiora", "Jax", "Riven"],
    "Illaoi": ["Mordekaiser", "Yorick", "Tryndamere"],
    "Irelia": ["Sett", "Volibear", "Jax"],
    "Jayce": ["Irelia", "Wukong", "Malphite"],
    "KSante": ["Gwen", "Fiora", "Garen"],
    "Kayle": ["Jax", "Irelia", "Camille"],
    "Kennen": ["Irelia", "Sylas", "Nasus"],
    "Kled": ["Fiora", "Jax", "Shen"],
    "Malphite": ["Sylas", "Mordekaiser", "Rumble"],
    "Mordekaiser": ["Olaf", "Fiora", "Vayne"],
    "Nasus": ["Darius", "Garen", "Illaoi"],
    "Olaf": ["Kled", "Illaoi", "Fiora"],
    "Ornn": ["Fiora", "Gwen", "Illaoi"],
    "Pantheon": ["Malphite", "Shen", "Ornn"],
    "Poppy": ["Darius", "Olaf", "Garen"],
    "Quinn": ["Malphite", "Irelia", "Camille"],
    "Renekton": ["Illaoi", "Garen", "Quinn"],
    "Riven": ["Renekton", "Poppy", "Kennen"],
    "Rumble": ["Aatrox", "Darius", "Irelia"],
    "Sett": ["Volibear", "Kled", "Malphite"],
    "Shen": ["Aatrox", "Darius", "Sett"],
    "Sion": ["Aatrox", "Darius", "Gwen"],
    "TahmKench": ["Vayne", "Gwen", "Heimerdinger"],
    "Teemo": ["Pantheon", "Rumble", "Aatrox"],
    "Tryndamere": ["Malphite", "TahmKench", "Nasus"],
    "Urgot": ["Rammus", "Shen", "Illaoi"],
    "Volibear": ["Illaoi", "Teemo", "Quinn"],
    "Wukong": ["Malphite", "Garen", "Darius"],
    "Yorick": ["Irelia", "Tryndamere", "Jax"],

    // --- JUNGLE ---
    "Amumu": ["KhaZix", "Shaco", "LeeSin"],
    "BelVeth": ["Rammus", "Poppy", "Amumu"],
    "Briar": ["Rammus", "Nocturne", "Amumu"],
    "Diana": ["Zac", "Nunu", "Rammus"],
    "Ekko": ["Rengar", "KhaZix", "Evelynn"],
    "Elise": ["Rengar", "KhaZix", "LeeSin"],
    "Evelynn": ["Rengar", "RekSai", "KhaZix"],
    "Fiddlesticks": ["XinZhao", "JarvanIV", "LeeSin"],
    "Graves": ["Zac", "Nunu", "Rammus"],
    "Hecarim": ["Nunu", "Rammus", "Sejuani"],
    "Ivern": ["Rengar", "KhaZix", "Nidalee"],
    "JarvanIV": ["XinZhao", "Graves", "Trundle"],
    "Karthus": ["KhaZix", "Rengar", "Evelynn"],
    "Kayn": ["Graves", "Kindred", "XinZhao"],
    "KhaZix": ["Rengar", "LeeSin", "Elise"],
    "Kindred": ["KhaZix", "LeeSin", "XinZhao"],
    "LeeSin": ["RekSai", "Elise", "Vi"],
    "Lillia": ["KhaZix", "Rengar", "JarvanIV"],
    "MasterYi": ["Rammus", "Udyr", "Jax"],
    "Nidalee": ["Rengar", "KhaZix", "Evelynn"],
    "Nocturne": ["Olaf", "Rammus", "Udyr"],
    "Nunu": ["KhaZix", "Rengar", "LeeSin"],
    "Rammus": ["Amumu", "Zac", "Sejuani"],
    "RekSai": ["KhaZix", "Evelynn", "Nidalee"],
    "Rengar": ["LeeSin", "XinZhao", "Udyr"],
    "Sejuani": ["Trundle", "Amumu", "Zac"],
    "Shaco": ["RekSai", "LeeSin", "KhaZix"],
    "Shyvana": ["XinZhao", "LeeSin", "KhaZix"],
    "Skarner": ["Olaf", "Morgana", "Trundle"],
    "Trundle": ["Teemo", "Jax", "Vayne"],
    "Udyr": ["Ashe", "Vayne", "Kite"],
    "Vi": ["Morgana", "Jax", "Ekko"],
    "Viego": ["Rammus", "XinZhao", "Nocturne"],
    "Warwick": ["Olaf", "Udyr", "Volibear"],
    "XinZhao": ["Jax", "Rammus", "Trundle"],
    "Zac": ["Vi", "JarvanIV", "LeeSin"],

    // --- MID ---
    "Ahri": ["Yasuo", "Zed", "Fizz"],
    "Akali": ["Vex", "Galio", "TwistedFate"],
    "Anivia": ["Kassadin", "Fizz", "Zed"],
    "Annie": ["Syndra", "Orianna", "Xerath"],
    "AurelionSol": ["Zed", "Fizz", "Katarina"],
    "Azir": ["Xerath", "VelKoz", "Zigss"],
    "Cassiopeia": ["Syndra", "Xerath", "VelKoz"],
    "Corki": ["Yasuo", "Zed", "Talon"],
    "Fizz": ["Lissandra", "Galio", "Kassadin"],
    "Galio": ["Lucian", "Tristana", "Vayne"],
    "Heimerdinger": ["Syndra", "Xerath", "Yasuo"],
    "Hwei": ["Zed", "Fizz", "Katarina"],
    "Kassadin": ["Talon", "Zed", "Lucian"],
    "Katarina": ["Kassadin", "Vex", "Galio"],
    "LeBlanc": ["Lissandra", "Malzahar", "Galio"],
    "Lissandra": ["Syndra", "Orianna", "Xerath"],
    "Lux": ["Yasuo", "Zed", "Fizz"],
    "Malzahar": ["Syndra", "Orianna", "Xerath"],
    "Naafiri": ["Vex", "Malzahar", "Lissandra"],
    "Neeko": ["Syndra", "Xerath", "VelKoz"],
    "Orianna": ["Syndra", "Zed", "AurelionSol"],
    "Qiyana": ["Vex", "Lissandra", "Malzahar"],
    "Ryze": ["Cassiopeia", "Anivia", "Xerath"],
    "Swain": ["Sylas", "Katarina", "Yone"],
    "Sylas": ["Cassiopeia", "Heimerdinger", "Vex"],
    "Syndra": ["Fizz", "Ekko", "Katarina"],
    "Talon": ["Lissandra", "Malzahar", "Vex"],
    "TwistedFate": ["Yasuo", "Zed", "Fizz"],
    "Veigar": ["Katarina", "Zed", "Fizz"],
    "VelKoz": ["Yasuo", "Zed", "Fizz"],
    "Vex": ["Syndra", "Xerath", "Orianna"],
    "Viktor": ["Syndra", "Xerath", "Ekko"],
    "Vladimir": ["Malzahar", "Anivia", "Kassadin"],
    "Xerath": ["Fizz", "Zed", "Katarina"],
    "Yasuo": ["Renekton", "Pantheon", "Lissandra"],
    "Yone": ["Renekton", "Pantheon", "Jax"],
    "Zed": ["Lissandra", "Malzahar", "Vladimir"],
    "Ziggs": ["Yasuo", "Zed", "Fizz"],
    "Zoe": ["Yasuo", "Zed", "Syndra"],

    // --- ADC ---
    "Aphelios": ["Ashe", "Twitch", "Draven"],
    "Ashe": ["Ezreal", "Sivir", "Lucian"],
    "Caitlyn": ["Sivir", "Ashe", "Jhin"],
    "Draven": ["Caitlyn", "Ashe", "MissFortune"],
    "Ezreal": ["Vayne", "Sivir", "Twitch"],
    "Jhin": ["Tristana", "Lucian", "Vayne"],
    "Jinx": ["Twitch", "Draven", "Lucian"],
    "Kaisa": ["Caitlyn", "Draven", "Ashe"],
    "Kalista": ["Ashe", "Draven", "Caitlyn"],
    "KogMaw": ["Lucian", "Draven", "Tristana"],
    "Lucian": ["Caitlyn", "Draven", "MissFortune"],
    "MissFortune": ["Draven", "Tristana", "Lucian"],
    "Nilah": ["Xayah", "Caitlyn", "Ashe"],
    "Samira": ["Nilah", "Senna", "Ashe"],
    "Sivir": ["Vayne", "Twitch", "Draven"],
    "Smolder": ["Draven", "Lucian", "Tristana"],
    "Tristana": ["Draven", "Caitlyn", "Xayah"],
    "Twitch": ["Draven", "Lucian", "Tristana"],
    "Varus": ["Ashe", "Sivir", "Jhin"],
    "Vayne": ["Caitlyn", "Draven", "Ashe"],
    "Xayah": ["Ashe", "Caitlyn", "MissFortune"],
    "Zeri": ["Twitch", "Draven", "Lucian"],

    // --- SUPPORT ---
    "Alistar": ["Morgana", "Janna", "Thresh"],
    "Bard": ["Engage", "Nautilus", "Leona"],
    "Braum": ["Morgana", "Zyra", "Karma"],
    "Blitzcrank": ["Morgana", "Leona", "Alistar"],
    "Janna": ["Sona", "Nami", "Soraka"],
    "Karma": ["Sona", "Soraka", "Yuumi"],
    "Leona": ["Morgana", "Janna", "Alistar"],
    "Lulu": ["Soraka", "Sona", "Senna"],
    "Milio": ["Nautilus", "Blitzcrank", "Pyke"],
    "Morgana": ["Karma", "Sona", "Zyra"],
    "Nami": ["Leona", "Nautilus", "Blitzcrank"],
    "Nautilus": ["Morgana", "Leona", "Braum"],
    "Pyke": ["Nautilus", "Leona", "Thresh"],
    "Rakan": ["Morgana", "Janna", "Thresh"],
    "Renata": ["Xerath", "Zyra", "Brand"],
    "Senna": ["Leona", "Nautilus", "Pyke"],
    "Seraphine": ["Leona", "Nautilus", "Pyke"],
    "Sona": ["Leona", "Nautilus", "Pyke"],
    "Soraka": ["Leona", "Nautilus", "Pyke"],
    "Taric": ["Morgana", "Zyra", "Brand"],
    "Thresh": ["Morgana", "Zyra", "Brand"],
    "Yuumi": ["Leona", "Nautilus", "Pyke"],
    "Zilean": ["Morgana", "Karma", "Lulu"],
    "Zyra": ["Leona", "Nautilus", "Pyke"]
};

// ==========================================
// チャンピオン基礎コンボデータ
// ==========================================
const COMBO_DATA = {
    // --- TOP ---
    "Aatrox": {
        ja: ["Q1 -> W -> Q2 -> E -> AA -> Q3 (フルコンボ)", "E -> Q1 (基本ハラス)"],
        en: ["Q1 -> W -> Q2 -> E -> AA -> Q3 (Full Combo)", "E -> Q1 (Basic Harass)"]
    },
    "Camille": {
        ja: ["E1 -> E2 -> W -> Q1 -> AA -> Q2", "Q1 -> ミニオン -> E1 -> E2 -> Q2"],
        en: ["E1 -> E2 -> W -> Q1 -> AA -> Q2", "Q1 -> Minion -> E1 -> E2 -> Q2"]
    },
    "ChoGath": {
        ja: ["Q -> W -> E -> AA -> R"],
        en: ["Q -> W -> E -> AA -> R"]
    },
    "Darius": {
        ja: ["E -> AA -> W -> Q (基本トレード)", "AA -> W -> Q (接近戦)"],
        en: ["E -> AA -> W -> Q (Basic Trade)", "AA -> W -> Q (Close Combat)"]
    },
    "DrMundo": {
        ja: ["Q -> E -> AA -> W"],
        en: ["Q -> E -> AA -> W"]
    },
    "Fiora": {
        ja: ["Q -> AA -> E1 -> Tiamat -> E2", "W (パリィ) -> Q -> AA"],
        en: ["Q -> AA -> E1 -> Tiamat -> E2", "W (Parry) -> Q -> AA"]
    },
    "Gangplank": {
        ja: ["E1 -> E2 -> Q (基本樽)", "E1 -> E2 -> Q -> E3 (3連樽)"],
        en: ["E1 -> E2 -> Q (Basic Barrel)", "E1 -> E2 -> Q -> E3 (Triple Barrel)"]
    },
    "Garen": {
        ja: ["Q -> E -> W -> R (必殺コンボ)", "AA -> Q -> E (ショートトレード)"],
        en: ["Q -> E -> W -> R (Finishing Combo)", "AA -> Q -> E (Short Trade)"]
    },
    "Gnar": {
        ja: ["Q -> AA -> W(スタック)", "E(ジャンプ) -> R(壁ドン) -> W -> Q"],
        en: ["Q -> AA -> W(Stack)", "E(Jump) -> R(Wall Stun) -> W -> Q"]
    },
    "Gragas": {
        ja: ["W -> E -> Q -> R (バースト)"],
        en: ["W -> E -> Q -> R (Burst)"]
    },
    "Gwen": {
        ja: ["Q(4スタック) -> E -> AA -> R"],
        en: ["Q(4 Stacks) -> E -> AA -> R"]
    },
    "Illaoi": {
        ja: ["E(魂抜き) -> R -> W -> Q"],
        en: ["E(Spirit Pull) -> R -> W -> Q"]
    },
    "Irelia": {
        ja: ["E1 -> R -> Q -> E2 -> Q -> AA -> Q", "E1 -> E2 -> Q -> AA -> Q"],
        en: ["E1 -> R -> Q -> E2 -> Q -> AA -> Q", "E1 -> E2 -> Q -> AA -> Q"]
    },
    "Jayce": {
        ja: ["Q -> E (キャノン) -> W -> R -> Q -> W -> AA", "Q -> E (遠距離ポーク)"],
        en: ["Q -> E (Cannon) -> W -> R -> Q -> W -> AA", "Q -> E (Long Range Poke)"]
    },
    "KSante": {
        ja: ["Q3(打ち上げ) -> W(壁ドン) -> R -> Q -> AA"],
        en: ["Q3(Knock Up) -> W(Wall Stun) -> R -> Q -> AA"]
    },
    "Kayle": {
        ja: ["Q -> AA -> E -> AA"],
        en: ["Q -> AA -> E -> AA"]
    },
    "Kennen": {
        ja: ["E -> R -> W -> Q (集団戦エンゲージ)"],
        en: ["E -> R -> W -> Q (Teamfight Engage)"]
    },
    "Kled": {
        ja: ["E -> Q -> W(4回AA) -> E"],
        en: ["E -> Q -> W(4x AA) -> E"]
    },
    "Malphite": {
        ja: ["Q -> E -> W -> AA", "R -> E -> Q -> W -> AA (ワンショット)"],
        en: ["Q -> E -> W -> AA", "R -> E -> Q -> W -> AA (One Shot)"]
    },
    "Mordekaiser": {
        ja: ["E -> Q -> AA (パッシブ発動)", "R -> E -> Q -> AA"],
        en: ["E -> Q -> AA (Procs Passive)", "R -> E -> Q -> AA"]
    },
    "Nasus": {
        ja: ["W -> E -> Q", "R -> W -> E -> Q"],
        en: ["W -> E -> Q", "R -> W -> E -> Q"]
    },
    "Olaf": {
        ja: ["Q -> AA -> E -> W -> AA -> Q"],
        en: ["Q -> AA -> E -> W -> AA -> Q"]
    },
    "Ornn": {
        ja: ["Q -> E(壁ドン) -> W -> AA", "R1 -> R2 -> Q -> E -> W"],
        en: ["Q -> E(Wall Stun) -> W -> AA", "R1 -> R2 -> Q -> E -> W"]
    },
    "Pantheon": {
        ja: ["W(強化) -> Q -> AA -> E", "R -> W(強化) -> E -> Q"],
        en: ["W(Empowered) -> Q -> AA -> E", "R -> W(Empowered) -> E -> Q"]
    },
    "Poppy": {
        ja: ["E(壁ドン) -> Q -> AA", "R(チャージ) -> 打ち上げ"],
        en: ["E(Wall Stun) -> Q -> AA", "R(Charge) -> Knock Up"]
    },
    "Quinn": {
        ja: ["E -> AA -> Q -> AA"],
        en: ["E -> AA -> Q -> AA"]
    },
    "Renekton": {
        ja: ["E -> W -> Q -> E (ヒットアンドアウェイ)", "Flash -> W(強化) -> R -> Q -> E"],
        en: ["E -> W -> Q -> E (Hit and Away)", "Flash -> W(Empowered) -> R -> Q -> E"]
    },
    "Riven": {
        ja: ["Q -> AA -> Q -> AA -> Q -> AA (基本Qコンボ)", "E -> R -> Flash -> Q3 (エンゲージ)"],
        en: ["Q -> AA -> Q -> AA -> Q -> AA (Basic Q Combo)", "E -> R -> Flash -> Q3 (Engage)"]
    },
    "Rumble": {
        ja: ["E -> E -> Q -> W (熱量管理)"],
        en: ["E -> E -> Q -> W (Heat Management)"]
    },
    "Sett": {
        ja: ["E -> AA -> AA -> Q -> Q -> W", "R -> E -> W (集団戦エンゲージ)"],
        en: ["E -> AA -> AA -> Q -> Q -> W", "R -> E -> W (Teamfight Engage)"]
    },
    "Shen": {
        ja: ["E -> Q -> W -> AA", "R(味方) -> E -> Q"],
        en: ["E -> Q -> W -> AA", "R(Ally) -> E -> Q"]
    },
    "Sion": {
        ja: ["E -> Q(チャージ) -> W", "R -> Q(チャージ) -> E"],
        en: ["E -> Q(Charge) -> W", "R -> Q(Charge) -> E"]
    },
    "TahmKench": {
        ja: ["Q -> W(ノックアップ) -> AA", "AA -> AA -> Q(スタン)"],
        en: ["Q -> W(Knock Up) -> AA", "AA -> AA -> Q(Stun)"]
    },
    "Teemo": {
        ja: ["AA -> Q -> AA (ハラス)"],
        en: ["AA -> Q -> AA (Harass)"]
    },
    "Tryndamere": {
        ja: ["E -> AA -> W -> AA", "R -> 殴り続ける"],
        en: ["E -> AA -> W -> AA", "R -> Keep hitting"]
    },
    "Urgot": {
        ja: ["Q -> E -> W (パッシブ発動させながら回る)"],
        en: ["Q -> E -> W (Spin while proccing passive)"]
    },
    "Volibear": {
        ja: ["Q -> E -> W -> AA", "R -> Q -> E -> W"],
        en: ["Q -> E -> W -> AA", "R -> Q -> E -> W"]
    },
    "Wukong": {
        ja: ["E -> Q -> AA -> W", "E -> R -> Q -> W -> R"],
        en: ["E -> Q -> AA -> W", "E -> R -> Q -> W -> R"]
    },
    "Yorick": {
        ja: ["E -> W -> Q (グール召喚)"],
        en: ["E -> W -> Q (Summon Ghouls)"]
    },

    // --- JUNGLE ---
    "Amumu": {
        ja: ["Q -> W -> E -> AA", "Q -> R -> W -> E"],
        en: ["Q -> W -> E -> AA", "Q -> R -> W -> E"]
    },
    "BelVeth": {
        ja: ["Q -> W -> Q -> E", "W -> Q -> E"],
        en: ["Q -> W -> Q -> E", "W -> Q -> E"]
    },
    "Briar": {
        ja: ["W1 -> W2 -> Q -> E", "R -> W1 -> W2 -> Q"],
        en: ["W1 -> W2 -> Q -> E", "R -> W1 -> W2 -> Q"]
    },
    "Diana": {
        ja: ["Q -> E -> W -> AA", "Q -> E -> R -> W -> AA"],
        en: ["Q -> E -> W -> AA", "Q -> E -> R -> W -> AA"]
    },
    "Ekko": {
        ja: ["W -> E -> Q -> AA (パッシブ発動)", "E -> Q -> AA"],
        en: ["W -> E -> Q -> AA (Procs Passive)", "E -> Q -> AA"]
    },
    "Elise": {
        ja: ["(ヒト)E -> Q -> W -> R -> (クモ)Q -> W -> AA", "(クモ)E -> Q -> W"],
        en: ["(Human)E -> Q -> W -> R -> (Spider)Q -> W -> AA", "(Spider)E -> Q -> W"]
    },
    "Evelynn": {
        ja: ["W(チャージ) -> Q -> E -> R", "Q -> E -> Q -> Q"],
        en: ["W(Charge) -> Q -> E -> R", "Q -> E -> Q -> Q"]
    },
    "Fiddlesticks": {
        ja: ["R -> Q -> E -> W (集団戦)"],
        en: ["R -> Q -> E -> W (Teamfight)"]
    },
    "Graves": {
        ja: ["AA -> E -> AA -> Q -> R", "W -> AA -> E -> AA"],
        en: ["AA -> E -> AA -> Q -> R", "W -> AA -> E -> AA"]
    },
    "Hecarim": {
        ja: ["E(チャージ) -> Q -> AA -> W", "R -> E -> Q -> W"],
        en: ["E(Charge) -> Q -> AA -> W", "R -> E -> Q -> W"]
    },
    "Ivern": {
        ja: ["Q -> E -> AA", "R(デイジー) -> Q -> E(デイジーにつける)"],
        en: ["Q -> E -> AA", "R(Daisy) -> Q -> E(Attach to Daisy)"]
    },
    "JarvanIV": {
        ja: ["E -> Q -> AA -> W -> R", "R -> E -> Q (確実な逃げ潰し)"],
        en: ["E -> Q -> AA -> W -> R", "R -> E -> Q (Secure escape denial)"]
    },
    "Karthus": {
        ja: ["W -> Q -> Q -> E", "R (フィニッシュ)"],
        en: ["W -> Q -> Q -> E", "R (Finisher)"]
    },
    "Kayn": {
        ja: ["Q -> AA -> W", "W -> Q -> R (青ケインバースト)"],
        en: ["Q -> AA -> W", "W -> Q -> R (Blue Kayn Burst)"]
    },
    "KhaZix": {
        ja: ["W -> E -> Q -> AA", "E -> Q -> W -> AA -> R"],
        en: ["W -> E -> Q -> AA", "E -> Q -> W -> AA -> R"]
    },
    "Kindred": {
        ja: ["W -> Q -> E -> AA", "Q -> W -> AA -> E"],
        en: ["W -> Q -> E -> AA", "Q -> W -> AA -> E"]
    },
    "LeeSin": {
        ja: ["Q1 -> R -> Flash -> Q2 (インセク)", "Q1 -> Q2 -> Ward -> W -> R"],
        en: ["Q1 -> R -> Flash -> Q2 (Insec)", "Q1 -> Q2 -> Ward -> W -> R"]
    },
    "Lillia": {
        ja: ["E -> Q -> W", "Q -> R(睡眠) -> W(中心)"],
        en: ["E -> Q -> W", "Q -> R(Sleep) -> W(Center)"]
    },
    "MasterYi": {
        ja: ["Q -> E -> AA -> W(AAキャンセル) -> AA", "R -> Q -> E -> AA"],
        en: ["Q -> E -> AA -> W(AA Cancel) -> AA", "R -> Q -> E -> AA"]
    },
    "Nidalee": {
        ja: ["Q(槍) -> R -> W(ジャンプ) -> E -> Q", "AA -> R -> W -> E -> Q"],
        en: ["Q(Spear) -> R -> W(Jump) -> E -> Q", "AA -> R -> W -> E -> Q"]
    },
    "Nocturne": {
        ja: ["Q -> E -> W -> AA", "R -> Q -> E -> W"],
        en: ["Q -> E -> W -> AA", "R -> Q -> E -> W"]
    },
    "Nunu": {
        ja: ["W(雪玉) -> E -> Q -> R", "E -> Q -> R"],
        en: ["W(Snowball) -> E -> Q -> R", "E -> Q -> R"]
    },
    "Rammus": {
        ja: ["Q -> W -> E -> R", "Q -> Flash -> E"],
        en: ["Q -> W -> E -> R", "Q -> Flash -> E"]
    },
    "RekSai": {
        ja: ["(潜行)Q -> W(ノックアップ) -> Q -> E -> R"],
        en: ["(Burrowed)Q -> W(Knock Up) -> Q -> E -> R"]
    },
    "Rengar": {
        ja: ["R -> Q(ジャンプ) -> E -> W -> 強化Q"],
        en: ["R -> Q(Jump) -> E -> W -> Empowered Q"]
    },
    "Sejuani": {
        ja: ["Q -> W -> AA -> E -> R", "R -> Q -> W -> E"],
        en: ["Q -> W -> AA -> E -> R", "R -> Q -> W -> E"]
    },
    "Shaco": {
        ja: ["Q -> W(箱) -> 背後AA -> E", "R -> Q -> 背後AA"],
        en: ["Q -> W(Box) -> Back AA -> E", "R -> Q -> Back AA"]
    },
    "Shyvana": {
        ja: ["E -> W -> Q -> AA", "R -> E -> W -> Q"],
        en: ["E -> W -> Q -> AA", "R -> E -> W -> Q"]
    },
    "Skarner": {
        ja: ["E -> R -> 引き寄せ -> Q", "W -> E -> AA"],
        en: ["E -> R -> Pull -> Q", "W -> E -> AA"]
    },
    "Trundle": {
        ja: ["E(柱) -> W -> Q -> AA -> R"],
        en: ["E(Pillar) -> W -> Q -> AA -> R"]
    },
    "Udyr": {
        ja: ["E(スタン) -> Q(覚醒) -> AA", "E -> R(覚醒) -> W"],
        en: ["E(Stun) -> Q(Awakened) -> AA", "E -> R(Awakened) -> W"]
    },
    "Vi": {
        ja: ["Q(チャージ) -> AA -> E -> R", "R -> Q -> AA -> E"],
        en: ["Q(Charge) -> AA -> E -> R", "R -> Q -> AA -> E"]
    },
    "Viego": {
        ja: ["W -> AA -> Q -> AA -> R", "E -> W(チャージ) -> Q -> AA"],
        en: ["W -> AA -> Q -> AA -> R", "E -> W(Charge) -> Q -> AA"]
    },
    "Warwick": {
        ja: ["W -> Q(長押し) -> E -> R", "R -> Q -> E"],
        en: ["W -> Q(Hold) -> E -> R", "R -> Q -> E"]
    },
    "XinZhao": {
        ja: ["E -> AA -> Q1 -> Q2 -> Q3 -> W", "W -> E -> AA -> Q"],
        en: ["E -> AA -> Q1 -> Q2 -> Q3 -> W", "W -> E -> AA -> Q"]
    },
    "Zac": {
        ja: ["E -> W -> Q -> ミニオンAA -> R", "Q -> 敵AA -> 敵AA -> E -> W -> R"],
        en: ["E -> W -> Q -> Minion AA -> R", "Q -> Enemy AA -> Enemy AA -> E -> W -> R"]
    },

    // --- MID ---
    "Ahri": {
        ja: ["E -> Q -> W -> AA", "R -> E -> Q -> W -> R"],
        en: ["E -> Q -> W -> AA", "R -> E -> Q -> W -> R"]
    },
    "Akali": {
        ja: ["R1 -> E1 -> E2 -> AA -> Q -> W -> R2", "Q -> W -> AA -> Q"],
        en: ["R1 -> E1 -> E2 -> AA -> Q -> W -> R2", "Q -> W -> AA -> Q"]
    },
    "Anivia": {
        ja: ["Q -> Q(起爆) -> E", "R -> W(壁) -> Q -> E"],
        en: ["Q -> Q(Detonate) -> E", "R -> W(Wall) -> Q -> E"]
    },
    "Annie": {
        ja: ["Flash -> R(クマ) -> Q -> W", "Q(スタック溜め) -> W -> R"],
        en: ["Flash -> R(Tibbers) -> Q -> W", "Q(Stacking) -> W -> R"]
    },
    "AurelionSol": {
        ja: ["E -> Q(長押し)", "R -> E -> Q -> W(追いかけ)"],
        en: ["E -> Q(Hold)", "R -> E -> Q -> W(Chase)"]
    },
    "Azir": {
        ja: ["W -> Q -> AA", "W -> E -> Q -> R (シュリーマシャッフル)"],
        en: ["W -> Q -> AA", "W -> E -> Q -> R (Shurima Shuffle)"]
    },
    "Cassiopeia": {
        ja: ["Q -> E -> E -> E", "W -> Q -> E -> R"],
        en: ["Q -> E -> E -> E", "W -> Q -> E -> R"]
    },
    "Corki": {
        ja: ["Q -> E -> R -> AA", "W(パッケージ) -> Q -> E -> R"],
        en: ["Q -> E -> R -> AA", "W(Package) -> Q -> E -> R"]
    },
    "Fizz": {
        ja: ["R -> E -> W -> Q", "Q -> AA -> W -> E(離脱)"],
        en: ["R -> E -> W -> Q", "Q -> AA -> W -> E(Disengage)"]
    },
    "Galio": {
        ja: ["E -> W(タメ) -> Q -> AA", "R -> W -> E -> Q"],
        en: ["E -> W(Hold) -> Q -> AA", "R -> W -> E -> Q"]
    },
    "Heimerdinger": {
        ja: ["E(スタン) -> W -> Q(砲台レーザー)", "RE(強化スタン) -> W"],
        en: ["E(Stun) -> W -> Q(Turret Laser)", "RE(Empowered Stun) -> W"]
    },
    "Hwei": {
        ja: ["Q -> Q (ポーク)", "E -> W -> Q -> Q -> R"],
        en: ["Q -> Q (Poke)", "E -> W -> Q -> Q -> R"]
    },
    "Kassadin": {
        ja: ["R -> E -> W -> Q", "R -> Flash -> E -> W -> Q"],
        en: ["R -> E -> W -> Q", "R -> Flash -> E -> W -> Q"]
    },
    "Katarina": {
        ja: ["E -> W -> Q -> E -> R", "Q -> E -> W -> R"],
        en: ["E -> W -> Q -> E -> R", "Q -> E -> W -> R"]
    },
    "LeBlanc": {
        ja: ["W -> Q -> R -> E (バースト)", "Q -> W -> AA -> W(戻り)"],
        en: ["W -> Q -> R -> E (Burst)", "Q -> W -> AA -> W(Return)"]
    },
    "Lissandra": {
        ja: ["E1 -> E2 -> W -> Q -> R", "R(自分) -> W -> Q"],
        en: ["E1 -> E2 -> W -> Q -> R", "R(Self) -> W -> Q"]
    },
    "Lux": {
        ja: ["Q -> E -> R -> E(起爆) -> AA", "E -> E(起爆) -> Q -> R"],
        en: ["Q -> E -> R -> E(Detonate) -> AA", "E -> E(Detonate) -> Q -> R"]
    },
    "Malzahar": {
        ja: ["E -> W -> Q -> R", "Q -> E -> W -> R"],
        en: ["E -> W -> Q -> R", "Q -> E -> W -> R"]
    },
    "Naafiri": {
        ja: ["W -> E -> Q1 -> Q2", "R -> W -> Q1 -> E -> Q2"],
        en: ["W -> E -> Q1 -> Q2", "R -> W -> Q1 -> E -> Q2"]
    },
    "Neeko": {
        ja: ["E -> Q -> W(強化AA)", "R(チャージ中にFlash) -> E -> Q"],
        en: ["E -> Q -> W(Empowered AA)", "R(Flash during Charge) -> E -> Q"]
    },
    "Orianna": {
        ja: ["Q -> W -> AA -> E", "Q -> R -> W -> E"],
        en: ["Q -> W -> AA -> E", "Q -> R -> W -> E"]
    },
    "Qiyana": {
        ja: ["Q(水) -> W(岩) -> E -> Q", "E -> R -> Q -> W -> Q"],
        en: ["Q(Water) -> W(Rock) -> E -> Q", "E -> R -> Q -> W -> Q"]
    },
    "Ryze": {
        ja: ["Q -> E -> Q -> W -> Q", "E -> W -> Q -> E -> Q"],
        en: ["Q -> E -> Q -> W -> Q", "E -> W -> Q -> E -> Q"]
    },
    "Swain": {
        ja: ["E -> 引き寄せ -> W -> Q", "R -> E -> W -> Q"],
        en: ["E -> Pull -> W -> Q", "R -> E -> W -> Q"]
    },
    "Sylas": {
        ja: ["E1 -> E2 -> AA -> Q -> AA -> W -> AA", "W -> AA -> E1 -> E2 -> Q"],
        en: ["E1 -> E2 -> AA -> Q -> AA -> W -> AA", "W -> AA -> E1 -> E2 -> Q"]
    },
    "Syndra": {
        ja: ["Q -> E (スタン) -> W -> Q -> R", "Q -> W -> Q -> E"],
        en: ["Q -> E (Stun) -> W -> Q -> R", "Q -> W -> Q -> E"]
    },
    "Talon": {
        ja: ["W -> Q -> AA -> R", "R -> W -> Q -> AA"],
        en: ["W -> Q -> AA -> R", "R -> W -> Q -> AA"]
    },
    "TwistedFate": {
        ja: ["W(黄) -> Q -> AA", "R -> W(黄) -> Q"],
        en: ["W(Yellow) -> Q -> AA", "R -> W(Yellow) -> Q"]
    },
    "Veigar": {
        ja: ["E(檻) -> W -> Q -> R", "Q -> R (フィニッシュ)"],
        en: ["E(Cage) -> W -> Q -> R", "Q -> R (Finisher)"]
    },
    "VelKoz": {
        ja: ["Q -> Q(起爆) -> W -> E -> R", "E -> W -> Q -> R"],
        en: ["Q -> Q(Detonate) -> W -> E -> R", "E -> W -> Q -> R"]
    },
    "Vex": {
        ja: ["R1 -> R2 -> W(フィアー) -> E -> Q", "E -> Q -> W(フィアー)"],
        en: ["R1 -> R2 -> W(Fear) -> E -> Q", "E -> Q -> W(Fear)"]
    },
    "Viktor": {
        ja: ["E -> Q -> AA", "W -> R -> E -> Q"],
        en: ["E -> Q -> AA", "W -> R -> E -> Q"]
    },
    "Vladimir": {
        ja: ["Q(強化) -> E -> W(潜り) -> R", "R -> E(溜め) -> Q"],
        en: ["Q(Empowered) -> E -> W(Pool) -> R", "R -> E(Charge) -> Q"]
    },
    "Xerath": {
        ja: ["E -> W -> Q", "R -> R -> R"],
        en: ["E -> W -> Q", "R -> R -> R"]
    },
    "Yasuo": {
        ja: ["E -> Q -> Flash (EQフラッシュ)", "Q3 -> R -> Ignite", "AA -> Q -> AA -> E"],
        en: ["E -> Q -> Flash (EQ Flash)", "Q3 -> R -> Ignite", "AA -> Q -> AA -> E"]
    },
    "Yone": {
        ja: ["E -> Q3 -> W -> AA -> R -> Q -> E戻り", "Q3 -> Flash -> R"],
        en: ["E -> Q3 -> W -> AA -> R -> Q -> E Return", "Q3 -> Flash -> R"]
    },
    "Zed": {
        ja: ["W -> E -> Q -> W (基本ハラス)", "R -> W -> E -> Q -> AA -> R (フルコンボ)"],
        en: ["W -> E -> Q -> W (Basic Harass)", "R -> W -> E -> Q -> AA -> R (Full Combo)"]
    },
    "Ziggs": {
        ja: ["E -> W -> Q -> R", "W(自分飛ばし) -> Q -> E"],
        en: ["E -> W -> Q -> R", "W(Self Knockback) -> Q -> E"]
    },
    "Zoe": {
        ja: ["E -> Q1(後ろ) -> Q2(前) -> R", "R -> E -> Q1 -> Q2"],
        en: ["E -> Q1(Backward) -> Q2(Forward) -> R", "R -> E -> Q1 -> Q2"]
    },

    // --- ADC ---
    "Aphelios": {
        ja: ["(武器依存) 白赤: 接近してAA連打 -> 赤Q", "紫: 遠距離AA -> Q(スネア)"],
        en: ["(Weapon Dependent) White/Red: Approach and spam AA -> Red Q", "Purple: Long range AA -> Q(Snare)"]
    },
    "Ashe": {
        ja: ["W -> AA -> Q -> AA", "R -> W -> AA -> Q"],
        en: ["W -> AA -> Q -> AA", "R -> W -> AA -> Q"]
    },
    "Caitlyn": {
        ja: ["W(罠) -> Q -> 強化AA -> E -> 強化AA", "E -> Q -> 強化AA"],
        en: ["W(Trap) -> Q -> Empowered AA -> E -> Empowered AA", "E -> Q -> Empowered AA"]
    },
    "Draven": {
        ja: ["W -> AA -> Q(キャッチ) -> W -> AA", "E -> R -> AA"],
        en: ["W -> AA -> Q(Catch) -> W -> AA", "E -> R -> AA"]
    },
    "Ezreal": {
        ja: ["W -> Q -> AA", "W -> E -> AA -> Q -> R"],
        en: ["W -> Q -> AA", "W -> E -> AA -> Q -> R"]
    },
    "Jhin": {
        ja: ["AA -> Q -> AA", "W(スネア) -> AA -> Q -> 4th AA"],
        en: ["AA -> Q -> AA", "W(Snare) -> AA -> Q -> 4th AA"]
    },
    "Jinx": {
        ja: ["AA -> W -> E (罠ハメ)", "E -> AA -> W -> R"],
        en: ["AA -> W -> E (Trap Lock)", "E -> AA -> W -> R"]
    },
    "Kaisa": {
        ja: ["AA -> Q -> AA -> W", "W -> R -> AA -> Q -> AA"],
        en: ["AA -> Q -> AA -> W", "W -> R -> AA -> Q -> AA"]
    },
    "Kalista": {
        ja: ["AA(跳躍) -> AA(跳躍) -> E", "Q -> AA(跳躍) -> E"],
        en: ["AA(Jump) -> AA(Jump) -> E", "Q -> AA(Jump) -> E"]
    },
    "KogMaw": {
        ja: ["W -> AA -> AA -> Q -> R", "E -> W -> AA連打"],
        en: ["W -> AA -> AA -> Q -> R", "E -> W -> Spam AA"]
    },
    "Lucian": {
        ja: ["E -> AA -> Q -> AA -> W -> AA", "W -> AA -> E -> AA -> Q -> AA"],
        en: ["E -> AA -> Q -> AA -> W -> AA", "W -> AA -> E -> AA -> Q -> AA"]
    },
    "MissFortune": {
        ja: ["AA -> Q(後方バウンド) -> AA", "E -> R"],
        en: ["AA -> Q(Bounce) -> AA", "E -> R"]
    },
    "Nilah": {
        ja: ["E -> Q -> AA -> AA -> W", "R -> E -> Q -> AA"],
        en: ["E -> Q -> AA -> AA -> W", "R -> E -> Q -> AA"]
    },
    "Samira": {
        ja: ["AA -> Q -> AA -> E -> W -> R (Sランクコンボ)"],
        en: ["AA -> Q -> AA -> E -> W -> R (S-Rank Combo)"]
    },
    "Sivir": {
        ja: ["AA -> W -> Q -> AA", "R -> AA -> W -> Q"],
        en: ["AA -> W -> Q -> AA", "R -> AA -> W -> Q"]
    },
    "Smolder": {
        ja: ["Q -> W -> AA", "E -> Q -> W -> R"],
        en: ["Q -> W -> AA", "E -> Q -> W -> R"]
    },
    "Tristana": {
        ja: ["E -> Q -> AA -> AA -> W -> AA(起爆)", "W -> E(空中) -> R"],
        en: ["E -> Q -> AA -> AA -> W -> AA(Detonate)", "W -> E(Mid-air) -> R"]
    },
    "Twitch": {
        ja: ["Q(ステルス) -> W -> R -> AA連打 -> E", "W -> AA -> E"],
        en: ["Q(Stealth) -> W -> R -> Spam AA -> E", "W -> AA -> E"]
    },
    "Varus": {
        ja: ["E -> AA -> AA -> AA -> WQ", "R -> WQ -> E"],
        en: ["E -> AA -> AA -> AA -> WQ", "R -> WQ -> E"]
    },
    "Vayne": {
        ja: ["AA -> Q -> AA -> E (壁ドン)", "R -> Q -> AA -> E -> AA"],
        en: ["AA -> Q -> AA -> E (Wall Stun)", "R -> Q -> AA -> E -> AA"]
    },
    "Xayah": {
        ja: ["Q -> AA -> E (即スネア)", "W -> AA連打 -> R -> E"],
        en: ["Q -> AA -> E (Instant Snare)", "W -> Spam AA -> R -> E"]
    },
    "Zeri": {
        ja: ["Q -> Q -> W(壁越し) -> E -> Q", "R -> Q連打 -> E"],
        en: ["Q -> Q -> W(Over Wall) -> E -> Q", "R -> Spam Q -> E"]
    },

    // --- SUPPORT ---
    "Alistar": {
        ja: ["W -> Q (WQコンボ)", "Flash -> Q -> W(押し出し)"],
        en: ["W -> Q (WQ Combo)", "Flash -> Q -> W(Push)"]
    },
    "Bard": {
        ja: ["Q(壁スタン) -> 強化AA", "R(敵) -> Q(スタン準備)"],
        en: ["Q(Wall Stun) -> Empowered AA", "R(Enemy) -> Q(Prep Stun)"]
    },
    "Braum": {
        ja: ["Q -> W(味方) -> E", "R -> Q -> AA(スタック)"],
        en: ["Q -> W(Ally) -> E", "R -> Q -> AA(Stack)"]
    },
    "Blitzcrank": {
        ja: ["Q -> E -> R", "W(接近) -> E(打ち上げ) -> Q(逃げ先)"],
        en: ["Q -> E -> R", "W(Approach) -> E(Knock Up) -> Q(Escape path)"]
    },
    "Janna": {
        ja: ["Q(タメ) -> W -> E(味方)", "R(弾き飛ばし) -> Q"],
        en: ["Q(Hold) -> W -> E(Ally)", "R(Knockback) -> Q"]
    },
    "Karma": {
        ja: ["R -> Q (強化Qハラス)", "E -> W -> R -> Q (スネアコンボ)"],
        en: ["R -> Q (Empowered Q Harass)", "E -> W -> R -> Q (Snare Combo)"]
    },
    "Leona": {
        ja: ["E -> Q -> W -> R", "R -> E -> Q -> W"],
        en: ["E -> Q -> W -> R", "R -> E -> Q -> W"]
    },
    "Lulu": {
        ja: ["E(敵) -> Q -> AA", "W(味方) -> E(味方) -> R"],
        en: ["E(Enemy) -> Q -> AA", "W(Ally) -> E(Ally) -> R"]
    },
    "Milio": {
        ja: ["Q(弾き) -> W -> E(味方)", "R(全体回復・クレンズ)"],
        en: ["Q(Knockback) -> W -> E(Ally)", "R(AoE Heal/Cleanse)"]
    },
    "Morgana": {
        ja: ["Q -> W -> R -> Zhonya", "E(ブラックシールド) -> R"],
        en: ["Q -> W -> R -> Zhonya", "E(Black Shield) -> R"]
    },
    "Nami": {
        ja: ["E(味方/自分) -> W -> Q(泡)", "R -> Q -> W"],
        en: ["E(Ally/Self) -> W -> Q(Bubble)", "R -> Q -> W"]
    },
    "Nautilus": {
        ja: ["Q -> AA(パッシブ) -> W -> E -> R", "R -> Q -> AA -> W -> E"],
        en: ["Q -> AA(Passive) -> W -> E -> R", "R -> Q -> AA -> W -> E"]
    },
    "Pyke": {
        ja: ["Q(チャージ) -> E -> AA -> R", "E -> Flash -> Q -> R"],
        en: ["Q(Charge) -> E -> AA -> R", "E -> Flash -> Q -> R"]
    },
    "Rakan": {
        ja: ["R -> W(打ち上げ) -> E(味方帰還)", "W -> Q -> E(味方)"],
        en: ["R -> W(Knock Up) -> E(Return to Ally)", "W -> Q -> E(Ally)"]
    },
    "Renata": {
        ja: ["Q1 -> Q2(投げる) -> E", "R -> W(味方)"],
        en: ["Q1 -> Q2(Throw) -> E", "R -> W(Ally)"]
    },
    "Senna": {
        ja: ["AA -> Q -> AA", "W -> R -> E"],
        en: ["AA -> Q -> AA", "W -> R -> E"]
    },
    "Seraphine": {
        ja: ["E(スロウ) -> Q -> W", "R -> E -> Q"],
        en: ["E(Slow) -> Q -> W", "R -> E -> Q"]
    },
    "Sona": {
        ja: ["Q -> 強化AA(青)", "R -> Q -> 強化AA"],
        en: ["Q -> Empowered AA(Blue)", "R -> Q -> Empowered AA"]
    },
    "Soraka": {
        ja: ["Q -> W(味方回復)", "E(沈黙) -> Q"],
        en: ["Q -> W(Ally Heal)", "E(Silence) -> Q"]
    },
    "Taric": {
        ja: ["E(スタン) -> W -> Q -> AA", "R -> E -> W"],
        en: ["E(Stun) -> W -> Q -> AA", "R -> E -> W"]
    },
    "Thresh": {
        ja: ["Q1 -> Q2 -> E -> R", "E(手前引き) -> Q -> R"],
        en: ["Q1 -> Q2 -> E -> R", "E(Pull close) -> Q -> R"]
    },
    "Yuumi": {
        ja: ["W(乗る) -> Q -> E(回復)", "R -> Q"],
        en: ["W(Attach) -> Q -> E(Heal)", "R -> Q"]
    },
    "Zilean": {
        ja: ["Q -> W -> Q (ダブルボム)", "E(味方/敵) -> Q -> W -> Q"],
        en: ["Q -> W -> Q (Double Bomb)", "E(Ally/Enemy) -> Q -> W -> Q"]
    },
    "Zyra": {
        ja: ["E -> W(種) -> Q -> W(種) -> R", "Q -> W -> E"],
        en: ["E -> W(Seed) -> Q -> W(Seed) -> R", "Q -> W -> E"]
    }
};

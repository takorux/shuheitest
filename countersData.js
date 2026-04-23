// ここに対面チャンピオンの英字IDと、そのカウンター（有利）となるチャンピオンの英字IDを登録します。
// 例: "相手のピック": ["出すべきカウンター1", "出すべきカウンター2"]

const COUNTER_DATA = {
    "Yasuo": ["Renekton", "Pantheon", "Lissandra"],
    "Zed": ["Lissandra", "Malzahar", "Vladimir"],
    "Darius": ["Teemo", "Vayne", "Quinn"],
    "Yone": ["Renekton", "Pantheon", "Jax"],
    "Ahri": ["Yasuo", "Zed", "Fizz"],
    "Garen": ["Darius", "Teemo", "Camille"],
    "Teemo": ["Pantheon", "Rumble", "Aatrox"],
    "Aatrox": ["Fiora", "Irelia", "Kled"]
    // 追加したい場合は、上記のように "相手の英字ID": ["カウンター1", "カウンター2"] と追記してください。
};

// ここにチャンピオンの基礎コンボを登録します。
// 例: "チャンピオンの英字ID": ["コンボ1", "コンボ2"]
const COMBO_DATA = {
    "Yasuo": ["E -> Q -> Flash (EQフラッシュ)", "Q3 -> R -> Ignite", "AA -> Q -> AA -> E"],
    "Zed": ["W -> E -> Q -> W (基本ハラス)", "R -> W -> E -> Q -> AA -> R (フルコンボ)"],
    "Darius": ["E -> AA -> W -> Q", "AA -> W -> Q"],
    "Ahri": ["E -> Q -> W -> AA", "R -> E -> Q -> W -> R"],
    "Aatrox": ["Q1 -> W -> Q2 -> E -> AA -> Q3"]
};

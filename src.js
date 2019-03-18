const $keyword = document.getElementById('keyword');
const $champions = document.getElementById('champions');
const $wards = document.getElementById('wards');
const champions = [["garen","가렌","ㄱㅏㄹㅔㄴ","탑"],["galio","갈리오","ㄱㅏㄹㄹㅣㅇㅗ","서포터"],["gangplank","갱플랭크","ㄱㅐㅇㅍㅡㄹㄹㅐㅇㅋㅡ","탑"],["gragas","그라가스","ㄱㅡㄹㅏㄱㅏㅅㅡ","정글"],["graves","그레이브즈","ㄱㅡㄹㅔㅇㅣㅂㅡㅈㅡ","정글"],["gnar","나르","ㄴㅏㄹㅡ","탑"],["nami","나미","ㄴㅏㅁㅣ","서포터"],["nasus","나서스","ㄴㅏㅅㅓㅅㅡ","탑"],["nautilus","노틸러스","ㄴㅗㅌㅣㄹㄹㅓㅅㅡ","서포터"],["nocturne","녹턴","ㄴㅗㄱㅌㅓㄴ","정글"],["nunu","누누와윌럼프","ㄴㅜㄴㅜㅇㅘㅇㅟㄹㄹㅓㅁㅍㅡ","정글"],["nidalee","니달리","ㄴㅣㄷㅏㄹㄹㅣ","정글"],["neeko","니코","ㄴㅣㅋㅗ","탑"],["darius","다리우스","ㄷㅏㄹㅣㅇㅜㅅㅡ","탑"],["diana","다이애나","ㄷㅏㅇㅣㅇㅐㄴㅏ","미드"],["draven","드레이븐","ㄷㅡㄹㅔㅇㅣㅂㅡㄴ","바텀"],["ryze","라이즈","ㄹㅏㅇㅣㅈㅡ","미드"],["rakan","라칸","ㄹㅏㅋㅏㄴ","서포터"],["rammus","람머스","ㄹㅏㅁㅁㅓㅅㅡ","정글"],["lux","럭스","ㄹㅓㄱㅅㅡ","서포터"],["rumble","럼블","ㄹㅓㅁㅂㅡㄹ","탑"],["renekton","레넥톤","ㄹㅔㄴㅔㄱㅌㅗㄴ","탑"],["leona","레오나","ㄹㅔㅇㅗㄴㅏ","서포터"],["reksai","렉사이","ㄹㅔㄱㅅㅏㅇㅣ","정글"],["rengar","렝가","ㄹㅔㅇㄱㅏ","탑"],["lucian","루시안","ㄹㅜㅅㅣㅇㅏㄴ","바텀"],["lulu","룰루","ㄹㅜㄹㄹㅜ","서포터"],["leblanc","르블랑","ㄹㅡㅂㅡㄹㄹㅏㅇ","미드"],["leesin","리신","ㄹㅣㅅㅣㄴ","정글"],["riven","리븐","ㄹㅣㅂㅡㄴ","탑"],["lissandra","리산드라","ㄹㅣㅅㅏㄴㄷㅡㄹㅏ","미드"],["masteryi","마스터이","ㅁㅏㅅㅡㅌㅓㅇㅣ","정글"],["maokai","마오카이","ㅁㅏㅇㅗㅋㅏㅇㅣ","탑"],["malzahar","말자하","ㅁㅏㄹㅈㅏㅎㅏ","미드"],["malphite","말파이트","ㅁㅏㄹㅍㅏㅇㅣㅌㅡ","탑"],["mordekaiser","모데카이저","ㅁㅗㄷㅔㅋㅏㅇㅣㅈㅓ",""],["morgana","모르가나","ㅁㅗㄹㅡㄱㅏㄴㅏ","서포터"],["drmundo","문도박사","ㅁㅜㄴㄷㅗㅂㅏㄱㅅㅏ","탑"],["missfortune","미스포츈","ㅁㅣㅅㅡㅍㅗㅊㅠㄴ","바텀"],["bard","바드","ㅂㅏㄷㅡ","서포터"],["varus","바루스","ㅂㅏㄹㅜㅅㅡ","바텀"],["vi","바이","ㅂㅏㅇㅣ","정글"],["veigar","베이가","ㅂㅔㅇㅣㄱㅏ","미드"],["vayne","베인","ㅂㅔㅇㅣㄴ","바텀"],["velkoz","벨코즈","ㅂㅔㄹㅋㅗㅈㅡ","서포터"],["volibear","볼리베어","ㅂㅗㄹㄹㅣㅂㅔㅇㅓ","탑"],["braum","브라움","ㅂㅡㄹㅏㅇㅜㅁ","서포터"],["brand","브랜드","ㅂㅡㄹㅐㄴㄷㅡ","서포터"],["vladimir","블라디미르","ㅂㅡㄹㄹㅏㄷㅣㅁㅣㄹㅡ","탑"],["blitzcrank","블리츠크랭크","ㅂㅡㄹㄹㅣㅊㅡㅋㅡㄹㅐㅇㅋㅡ","서포터"],["viktor","빅토르","ㅂㅣㄱㅌㅗㄹㅡ","미드"],["poppy","뽀삐","ㅃㅗㅃㅣ","탑"],["sion","사이온","ㅅㅏㅇㅣㅇㅗㄴ","탑"],["sylas","사일러스","ㅅㅏㅇㅣㄹㄹㅓㅅㅡ","탑"],["shaco","샤코","ㅅㅑㅋㅗ","정글"],["sejuani","세주아니","ㅅㅔㅈㅜㅇㅏㄴㅣ","정글"],["sona","소나","ㅅㅗㄴㅏ","서포터"],["soraka","소라카","ㅅㅗㄹㅏㅋㅏ","서포터"],["shen","쉔","ㅅㅞㄴ","탑"],["shyvana","쉬바나","ㅅㅟㅂㅏㄴㅏ","정글"],["swain","스웨인","ㅅㅡㅇㅞㅇㅣㄴ","미드"],["skarner","스카너","ㅅㅡㅋㅏㄴㅓ","정글"],["sivir","시비르","ㅅㅣㅂㅣㄹㅡ","바텀"],["xinzhao","신짜오","ㅅㅣㄴㅉㅏㅇㅗ","정글"],["syndra","신드라","ㅅㅣㄴㄷㅡㄹㅏ","미드"],["singed","신지드","ㅅㅣㄴㅈㅣㄷㅡ","탑"],["thresh","쓰레쉬","ㅆㅡㄹㅔㅅㅟ","서포터"],["ahri","아리","ㅇㅏㄹㅣ","미드"],["amumu","아무무","ㅇㅏㅁㅜㅁㅜ","정글"],["aurelionsol","아우렐리온솔","ㅇㅏㅇㅜㄹㅔㄹㄹㅣㅇㅗㄴㅅㅗㄹ","미드"],["ivern","아이번","ㅇㅏㅇㅣㅂㅓㄴ","정글"],["azir","아지르","ㅇㅏㅈㅣㄹㅡ","미드"],["akali","아칼리","ㅇㅏㅋㅏㄹㄹㅣ","탑"],["aatrox","아트록스","ㅇㅏㅌㅡㄹㅗㄱㅅㅡ","탑"],["alistar","알리스타","ㅇㅏㄹㄹㅣㅅㅡㅌㅏ","서포터"],["annie","애니","ㅇㅐㄴㅣ","미드"],["anivia","애니비아","ㅇㅐㄴㅣㅂㅣㅇㅏ","미드"],["ashe","애쉬","ㅇㅐㅅㅟ","바텀"],["yasuo","야스오","ㅇㅑㅅㅡㅇㅗ","미드"],["ekko","에코","ㅇㅔㅋㅗ","미드"],["elise","엘리스","ㅇㅔㄹㄹㅣㅅㅡ","정글"],["monkeyking","오공","ㅇㅗㄱㅗㅇ","탑"],["ornn","오른","ㅇㅗㄹㅡㄴ","탑"],["orianna","오리아나","ㅇㅗㄹㅣㅇㅏㄴㅏ","미드"],["olaf","올라프","ㅇㅗㄹㄹㅏㅍㅡ","탑"],["yorick","요릭","ㅇㅛㄹㅣㄱ","탑"],["udyr","우디르","ㅇㅜㄷㅣㄹㅡ","정글"],["urgot","우르곳","ㅇㅜㄹㅡㄱㅗㅅ","탑"],["warwick","워윅","ㅇㅝㅇㅟㄱ","정글"],["irelia","이렐리아","ㅇㅣㄹㅔㄹㄹㅣㅇㅏ","탑"],["evelynn","이블린","ㅇㅣㅂㅡㄹㄹㅣㄴ","정글"],["ezreal","이즈리얼","ㅇㅣㅈㅡㄹㅣㅇㅓㄹ","바텀"],["illaoi","일라오이","ㅇㅣㄹㄹㅏㅇㅗㅇㅣ","탑"],["jarvaniv","자르반4세","ㅈㅏㄹㅡㅂㅏㄴㅅㅔ","정글"],["xayah","자야","ㅈㅏㅇㅑ","바텀"],["zyra","자이라","ㅈㅏㅇㅣㄹㅏ","서포터"],["zac","자크","ㅈㅏㅋㅡ","정글"],["janna","잔나","ㅈㅏㄴㄴㅏ","서포터"],["jax","잭스","ㅈㅐㄱㅅㅡ","탑"],["zed","제드","ㅈㅔㄷㅡ","미드"],["xerath","제라스","ㅈㅔㄹㅏㅅㅡ","미드"],["jayce","제이스","ㅈㅔㅇㅣㅅㅡ","탑"],["zoe","조이","ㅈㅗㅇㅣ","미드"],["ziggs","직스","ㅈㅣㄱㅅㅡ","미드"],["jhin","진","ㅈㅣㄴ","바텀"],["zilean","질리언","ㅈㅣㄹㄹㅣㅇㅓㄴ","서포터"],["jinx","징크스","ㅈㅣㅇㅋㅡㅅㅡ","바텀"],["chogath","초가스","ㅊㅗㄱㅏㅅㅡ","탑"],["karma","카르마","ㅋㅏㄹㅡㅁㅏ","서포터"],["camille","카밀","ㅋㅏㅁㅣㄹ","탑"],["kassadin","카사딘","ㅋㅏㅅㅏㄷㅣㄴ","미드"],["karthus","카서스","ㅋㅏㅅㅓㅅㅡ","정글"],["cassiopeia","카시오페아","ㅋㅏㅅㅣㅇㅗㅍㅔㅇㅏ","미드"],["kaisa","카이사","ㅋㅏㅇㅣㅅㅏ","바텀"],["khazix","카직스","ㅋㅏㅈㅣㄱㅅㅡ","정글"],["katarina","카타리나","ㅋㅏㅌㅏㄹㅣㄴㅏ","미드"],["kalista","칼리스타","ㅋㅏㄹㄹㅣㅅㅡㅌㅏ","바텀"],["kennen","케넨","ㅋㅔㄴㅔㄴ","탑"],["caitlyn","케이틀린","ㅋㅔㅇㅣㅌㅡㄹㄹㅣㄴ","바텀"],["kayn","케인","ㅋㅔㅇㅣㄴ","정글"],["kayle","케일","ㅋㅔㅇㅣㄹ","탑"],["kogmaw","코그모","ㅋㅗㄱㅡㅁㅗ","바텀"],["corki","코르키","ㅋㅗㄹㅡㅋㅣ","미드"],["quinn","퀸","ㅋㅟㄴ","탑"],["kled","클레드","ㅋㅡㄹㄹㅔㄷㅡ","탑"],["kindred","킨드레드","ㅋㅣㄴㄷㅡㄹㅔㄷㅡ","정글"],["taric","타릭","ㅌㅏㄹㅣㄱ","서포터"],["talon","탈론","ㅌㅏㄹㄹㅗㄴ","미드"],["taliyah","탈리야","ㅌㅏㄹㄹㅣㅇㅑ","정글"],["tahmkench","탐켄치","ㅌㅏㅁㅋㅔㄴㅊㅣ","서포터"],["trundle","트런들","ㅌㅡㄹㅓㄴㄷㅡㄹ",""],["tristana","트리스타나","ㅌㅡㄹㅣㅅㅡㅌㅏㄴㅏ","바텀"],["tryndamere","트린다미어","ㅌㅡㄹㅣㄴㄷㅏㅁㅣㅇㅓ","탑"],["twistedfate","트위스티드페이트","ㅌㅡㅇㅟㅅㅡㅌㅣㄷㅡㅍㅔㅇㅣㅌㅡ","미드"],["twitch","트위치","ㅌㅡㅇㅟㅊㅣ","바텀"],["teemo","티모","ㅌㅣㅁㅗ","탑"],["pyke","파이크","ㅍㅏㅇㅣㅋㅡ","서포터"],["pantheon","판테온","ㅍㅏㄴㅌㅔㅇㅗㄴ","정글"],["fiddlesticks","피들스틱","ㅍㅣㄷㅡㄹㅅㅡㅌㅣㄱ","서포터"],["fiora","피오라","ㅍㅣㅇㅗㄹㅏ","탑"],["fizz","피즈","ㅍㅣㅈㅡ","미드"],["heimerdinger","하이머딩거","ㅎㅏㅇㅣㅁㅓㄷㅣㅇㄱㅓ","탑"],["hecarim","헤카림","ㅎㅔㅋㅏㄹㅣㅁ","정글"]];
function hangul_split(keyword) {
    return [...keyword].reduce((s, char) => {
        const c = char.charCodeAt()-0xac00;
        if (c >= 0 && c <= 0x2ba3)
            return [...s, "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ"[c/588|0],"ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ"[(c/28|0)%21]," ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ"[c%28]];
        else
            return [...s, char];
    },[]).filter(e => e !== ' ').join('');
}
function andro_split(keyword) {
    return [...keyword].map(char => {
        const c = char.charCodeAt()
        if (c >= 65 && c <= 90)
            return "ㅁㅠㅊㅇㄸㄹㅎㅛㅑㅓㅏㅣㅡㅠㅒㅖㅃㄲㄴㅆㅕㅍㅉㅌㅛㅋ"[c - 65]
        else if (c >= 97 && c <= 122)
            return "ㅁㅠㅊㅇㄷㄹㅎㅗㅑㅓㅏㅣㅡㅜㅐㅔㅂㄱㄴㅅㅕㅍㅈㅌㅛㅋ"[c - 97]
        else
            return char;
    }).join('')
}
function suggest(keyword) {
    return champions.filter(champion => 
    champion[1].search(keyword) !== -1 ||
    champion[0].search(keyword) !== -1 ||
    new RegExp([...hangul_split(keyword)].join('.*')).test(champion[2]) ||
    new RegExp([...andro_split(keyword)].join('.*')).test(champion[2])
    )
}
const store = {
    cursor: 0,
    focus: true,
    tabdown: false,
    champions: [],
    selecttwice: { value: -1, id: 0 },
};
const qwertymap = "";
const position_wrap = {
    "탑": "top",
    "정글": "jungle",
    "미드": "mid",
    "바텀": "bot",
    "서포터": "support"
};
const position_alias = {
    "탑": "탑",
    "정글": "정글",
    "미드": "미드",
    "바텀": "원딜",
    "서포터": "서폿"
};
const keymap = "1234QWERDF";
function display(champions) {
    const maximum = 3;
    const size = Math.min(champions.length, maximum);
    return `<ul>
    ${champions.slice(0, size).map((champion, i) => `<li class="champion" data-selected=${store.cursor === i} data-index="${i}" onmouseenter="mouseenter(event)">
    <a href="https://www.op.gg/champion/${champion[0]}/statistics/${position_wrap[champion[3]]}" target="_blank">선택<span class="key">${i + 1}</span></a>
    <a href="https://www.op.gg/champion/${champion[0]}/statistics/${position_wrap[champion[3]]}" target="_blank">${position_alias[champion[3]]} ${champion[1]}<span class="key">Q</span></a>
    <a href="https://www.op.gg/champion/${champion[0]}/statistics/${position_wrap[champion[3]]}/item" target="_blank">아이템<span class="key">W</span></a>
    <a href="https://www.op.gg/champion/${champion[0]}/statistics/${position_wrap[champion[3]]}/skill" target="_blank">스킬<span class="key">E</span></a>
    <a href="https://www.op.gg/champion/${champion[0]}/statistics/${position_wrap[champion[3]]}/rune" target="_blank">룬<span class="key">R</span></a>
    </li>`).join("\n")}
    <span id="and-then">
    ${champions.length > maximum ? `...그리고 ${champions.length - size}명의 더 많은 챔피언`: ""}
    </span>
    </ul>`;
}
function render() {
    const s = store.champions;

    $champions.innerHTML = s.length > 0 ? display(s) : '<span class="warn">해당하는 챔피언이 없습니다.</span>';
}
function mouseenter(e) {
    const index = parseInt(e.target.dataset.index, 10);
    const last = store.cursor;
    store.cursor = index;

    if (last !== store.cursor) {
        render();
    }
}
$keyword.addEventListener("keyup", e => {
    if (e.key === "Tab") {
        if (!store.tabdown && store.focus) {
            $keyword.blur();
            store.focus = false;
        }
        store.tabdown = false;
        e.preventDefault();
    } else {
        store.champions = suggest($keyword.value);
        if (store.cursor > store.champions.length - 1) {
            store.cursor = Math.max(store.champions.length - 1, 0);
        }
    }
    render();
});
$keyword.addEventListener("focusin", e => {
    store.focus = true;
});
$keyword.addEventListener("focusout", e => {
    store.focus = false;
});
const open = (type = "") => {
    const champion = store.champions[store.cursor];
    const champion_key = champion[0];
    const champion_position = position_wrap[champion[3]];
    const link = `https://www.op.gg/champion/${champion_key}/statistics/${champion_position}${type}`;
    
    window.open(link, "_blank");
}
window.addEventListener("keydown", e => {
    if (e.key === "Tab") {
        if (!store.focus) {
            $keyword.focus();
            store.tabdown = true;
        }
        e.preventDefault();
    } else
    if (e.key === "Enter") {
        open();
        e.preventDefault();
    } else
    if (/^[qwer]$/i.test(e.key)) {
        if (!store.focus) {
            const key = e.key.toLowerCase();
            switch (key) {
                case "q": open();
                break;
                case "w": open("/item");
                break;
                case "e": open("/skill");
                break;
                case "r": open("/rune");
                break;
            }
            e.preventDefault();
        }
    } else
    if (/^[1234]$/i.test(e.key)) {
        const key = e.key;
        switch (key) {
            case "1":
            case "2":
            case "3": {
                const num = parseInt(key, 10);
                if (num === store.selecttwice.value) {
                    open();
                    store.selecttwice.value = -1;
                    clearTimeout(store.selecttwice.id);
                } else {
                    store.selecttwice.value = num;
                    store.selecttwice.id = setTimeout(() => store.selecttwice.value = -1, 500);
                    store.cursor = Math.min(num, store.champions.length) - 1;
                    render();
                }
            }
            break;
            case "4": {
                const $ward = document.createElement('div');
                $ward.className = "ward";
                $ward.style.left = `${Math.random() * 80 + 10 | 0}vw`;
                $ward.style.top = `${Math.random() * 100 | 0}vh`;
                $wards.appendChild($ward);
            } break;
        }
        $keyword.blur();
        e.preventDefault();
    }
});
(function init() {
    store.champions = suggest($keyword.value);
    render();
})();
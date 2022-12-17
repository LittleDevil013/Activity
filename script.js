let input = document.getElementById('pName');
let addBtn = document.getElementById('addBtn');
let pList = document.getElementById('pList');
let pListArea = document.getElementById('playerListArea');
const players = [];
let startBtn = document.getElementById('startBtn');
const modes = ['mutogatás', 'körülírás', 'rajzolás'];

const words = ['ablakfüggöny', 'ablakmosó', 'ablaknyílás', 'ablakpárkány', 'ablaktisztítás', 'ablaktörés', 'ábrándozás', 'acélgyár',
    'acélgyár', 'acélszívű', 'ácsceruza', 'ácsmester', 'adalékanyag', 'adáshiba', 'adatfeldolgozó', 'adóhatóság', 'adventi kalendárium',
    'áfonyalekvár', 'agglegény', 'aggszűz', 'agyagedény', 'agyalágyult', 'agybaj', 'agyhalál', 'ágykeret', 'agymosás', 'ágynemű',
    'agysebész', 'ágyúgolyó', 'bábjáték', 'babszem', 'bagóleső', 'bájgúnár', 'bakancslista', 'bakkecske', 'bakterház', 'baleset',
    'balettcipő', 'balfácán', 'bálkirálynő', 'balszerencse', 'banánfa', 'bandavezér', 'bankjegy', 'bankrabló', 'bányaló', 'bányarém',
    'barackfa', 'báránybőr', 'barátfüle', 'bárhol', 'barlangrajz', 'baromfiudvar', 'basszusgitár', 'bébicsősz', 'bejárónő', 'békacomb',
    'békepipa', 'benzingőz', 'benzinkút', 'bérgyilkos', 'betegápoló', 'betonkeverő', 'bikakábel', 'biliárdasztal', 'bikaviadal',
    'billentyűzet', 'biológiatanár', 'birkatürelem', 'birsalma', 'bitófa', 'bokalánc', 'bokazokni', 'bokszeralsó', 'bokszkesztyű',
    'bolhacsípés', 'bolhapiac', 'bombariadó', 'boncmester', 'bordacsont', 'borélesztő', 'borospohár', 'borosüveg', 'borsmenta', 'borvidék',
    'borvirág', 'bosszúszomjas', 'boszorkánykonyha', 'boszorkányüldözés', 'botfülű', 'bőrápoló', 'búcsúajándék', 'Budapest', 'bunkósbot',
    'bukósisak', 'buszjegy', 'buszmegálló', 'búvárruha', 'bűnbarlang', 'céllövölde', 'céltábla', 'céltudatos', 'cigánykerék', 'cigánypecsenye',
    'cigarettacsikk', 'címerállat', 'címlap', 'címlapsztori', 'cinkostárs', 'cintányér', 'cipőbolt', 'cipőkanál', 'citromhéj',
    'cukorbeteg', 'cumisüveg', 'családfakutatás', 'csapatjáték', 'csaptelep', 'császármorzsa', 'császárpingvin', 'csatakiáltás',
    'csatahajó', 'csatabárd', 'császárzsemle', 'csatornafedél', 'csavarkulcs', 'csekkfüzet', 'csendélet', 'csendőr', 'cseppkőbarlang',
    'cserbenhagyás', 'cserejátékos', 'cserejátékos', 'cseresznyefa', 'csigaház', 'csikóhal', 'csillagfény', 'csillagkép', 'csillagtök',
    'csínytevő', 'csipkebokor', 'csípőfogó', 'csirkefogó', 'csodaszarvas', 'csónakház', 'csontváz', 'csörgőkígyó', 'csúcspont', 'darázsfészek',
    'derékszög', 'diákcsemege', 'díjlovaglás', 'diódaráló', 'diszkoszvetés', 'disznóláb', 'dobókocka', 'dögkeselyű', 'drágakő', 'drótkerítés',
    'dühroham', 'ébresztőóra', 'egérfogó', 'elefántagyar', 'elemlámpa', 'életerő', 'elmebeteg', 'esernyő', 'esőfelhő', 'évgyűrű', 'fakanál',
    'farkaséhség', 'faszén', 'favágó', 'fecskefark', 'fegyház', 'fegyverszünet', 'fejlövés', 'fejvadász', 'féknyom', 'felcsigáz',
    'felhőkarcoló', 'fenevad', 'filmfelirat', 'focilabda', 'fogcsikorgatás', 'fogpiszkáló', 'forgószék', 'földalatti', 'földgömb',
    'földműves', 'főszerep', 'fúrótorony', 'futóhomok', 'fülkagyló', 'fűnyíró', 'fürdőruha', 'gázálarc', 'gépfegyver'];

let modeGenerator = document.getElementById('addMode');
let myModeTextArea = document.getElementById('mode');
let wordGenerator = document.getElementById('addWord');
let myWordTextArea = document.getElementById('word');
let timeStarter = document.getElementById('startClock');
let timeArea = document.getElementById('clock');
let openTime = 150;
let nextPlayer = document.getElementById('nextPlayer');
let cardPlace = document.getElementById('cardPlace');
let pNameText = document.getElementById('pNameText');
let iForgotBtn = document.getElementById('iForgot');
let actualPlayer = document.getElementById('actualPlayer');
let playerIndex = 0;
let catchBtn = document.getElementById('catch');



input.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        addBtn.onclick();
        event.preventDefault();

    }
});

addBtn.onclick = function () {
    let player = input.value;
    players.push(player);
    input.value = "";
    writeToPList();
};

startBtn.onclick = function () {
    players.push('');
    writeToPList();
    clearGameArea();


};

function writeToPList() {
    pList.innerHTML = players.join(' : ' + '<input type = number id = score></input><br>');
};

function clearGameArea() {
    input.remove();
    addBtn.remove();
    startBtn.remove();
    pNameText.remove();
    startCardArea();
    showActualPlayer();

};

modeGenerator.onclick = function () {
    let myModeNum = Math.floor(Math.random() * 3);
    myModeTextArea.innerHTML = modes[myModeNum];
};

wordGenerator.onclick = function () {
    let myWordNum = Math.floor(Math.random() * words.length);
    myWordTextArea.innerHTML = words[myWordNum];

};

let newTime = {
    start: function () {
        openTime--;
        timeArea.innerHTML = openTime;
        if (openTime === 30) {
            alertSound = new Audio('alarm.wav');
            alertSound.play();
            timeArea.style.color = 'red';
        }
        else if (openTime === 3 || openTime === 2 || openTime === 1) {
            lastMinSound = new Audio('lastMin.wav');
            lastMinSound.play();
        }
        else if (openTime === 0) {

            clearInterval(clicking);
            changePlayer();

        }
    }

};

timeStarter.onclick = function () {

    inGame();
    timeArea.innerHTML = openTime;
    clicking = setInterval(newTime.start, 1000);
};

nextPlayer.onclick = function () {
    openTime = 150;
    getNewPlayer();
    playerIndex++;
    if (playerIndex === players.length - 1) {
        playerIndex = 0;
    };
    showActualPlayer();


};

iForgotBtn.onclick = function () {
    showModeAndWord();
    setTimeout(hideModeAndWord, 2000);
};

catchBtn.onclick = function () {
    clearInterval(clicking);
    changePlayer();

}

function showActualPlayer() {
    actualPlayer.innerHTML = players[playerIndex] + `'s card`;
};

function inGame() {
    myModeTextArea.style.visibility = 'hidden';
    myWordTextArea.style.visibility = 'hidden';
    modeGenerator.style.visibility = 'hidden';
    wordGenerator.style.visibility = 'hidden';
    timeStarter.style.visibility = 'hidden';
    iForgotBtn.style.visibility = 'visible';
    catchBtn.style.visibility = 'visible';
}

function changePlayer() {
    myModeTextArea.style.visibility = 'visible';
    myWordTextArea.style.visibility = 'visible';
    nextPlayer.style.visibility = 'visible';
    modeGenerator.style.visibility = 'hidden';
    wordGenerator.style.visibility = 'hidden';
    timeStarter.style.visibility = 'hidden';
    iForgotBtn.style.visibility = 'hidden';
    catchBtn.style.visibility = 'hidden';

};

function getNewPlayer() {
    modeGenerator.style.visibility = 'visible';
    wordGenerator.style.visibility = 'visible';
    timeStarter.style.visibility = 'visible';
    nextPlayer.style.visibility = 'hidden';
    myModeTextArea.innerHTML = "";
    myWordTextArea.innerHTML = "";
    timeArea.innerHTML = "";
    timeArea.style.color = 'white';

};

function showModeAndWord() {
    myModeTextArea.style.visibility = 'visible';
    myWordTextArea.style.visibility = 'visible';
};

function hideModeAndWord() {
    myModeTextArea.style.visibility = 'hidden';
    myWordTextArea.style.visibility = 'hidden';
}

function startCardArea() {
    pListArea.style.marginLeft = '25px';
    cardPlace.style.visibility = 'visible';
    modeGenerator.style.visibility = 'visible';
    wordGenerator.style.visibility = 'visible';
    timeStarter.style.visibility = 'visible';

}












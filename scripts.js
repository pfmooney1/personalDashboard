/*eslint-env es6*/
/*eslint-env browser*/
// =====================================================
// First things to load with the page
// =====================================================
let coderAccount = [
    [
        {"name":"Stack Overflow","address":"http://www.example.com"},{"name":"GitHub","address":"http://www.example.com"},
        {"name":"W3 Schools JS reference","address":"http://www.example.com"},
        {"name":"CSS cheatsheet","address":"http://www.example.com"},
        {"name":"JS cheatsheet","address":"http://www.example.com"},
        {"name":"Code Academy","address":"http://www.example.com"},
        {"name":"Quick color picker","address":"http://www.example.com"}
    ],
    [
        {"userName":"Your Name Here","nickname":"Programmer","theme":"default"}
    ],
    [
        {"countdownTo":"client's project due","date":"2022-06-03","measure":"days"},{"countdownTo":"VACATION!","date":"2022-06-27","measure":"days"}
    ],
    [
        {"websterSearch":false, "youtubeSearch":false, "googleSearch":true, "latinSearch":false, "periodicTable":false, "latinNouns":false, "jeopardy":false, "latinVerbs":false, "notepaper":false}
    ],
    [
        {"memopadContent":"- Email Paul\n\n- Fix modal bug\n\n- Reply to client email\n\n- Pull request project to GitHub\n\n- Get a desk rubber duck specifically for React problems"},{"memopadContent":"Brush up on my regex\n-email input especially "}
    ]
];
let studentAccount = [
    [
        {"name":"Online Bio Textbook","address":"http://www.example.com"},
        {"name":"My Grades","address":"http://www.example.com"},
        {"name":"Spanish Dictionary","address":"http://www.example.com"},
        {"name":"Spark Notes","address":"http://www.example.com"},
        {"name":"Library Catalogue ","address":"http://www.example.com"}
    ],
    [
        {"userName":"Your Name Here","nickname":"Student","theme":"default"}
    ],
    [
        {"countdownTo":"History paper due","date":"2022-05-20","measure":"days"},{"countdownTo":"Summer Break!","date":"2022-05-31","measure":"days"}
    ],[
        {"websterSearch":false,"youtubeSearch":true,"googleSearch":true,"latinSearch":false,"periodicTable":false,"latinNouns":false,"jeopardy":false,"latinVerbs":false,"notepaper":false}
    ],
    [
        {"memopadContent":"GROUP PROJECT NOTES\n-Brian does slides 1-5\n-Alexa does slides 6-10\n-Kenneth does slides 11-15\n-I do slides 16-20\n\nPractice presentation this Thursday!"},
        {"memopadContent":"LIT CLASS NOTES\nLit paper on Jane Austin due next Monday.\n\nRead last three chapters of Persuasion\n\nDo super rough first draft tonight\n\nDear future me: stop procrastinating on readings."},
        {"memopadContent":"Ask Dr. R for letter of recommendation\n\nAsk Dr. B for letter of recommendation\n\nSend thank you letter to Dr. L"}
    ]
];
let teacherAccount = [
    [
        {name: "Attendance", address: "www.example.com"},
        {name: "Online Gradebook", address: "www.example.com"}
    ],
    [
        {userName: "Your Name Here", nickname: "Teacher", theme: "default"}
    ],
    [
        {countdownTo: "Summer Break", date: "2022-5-26", measure: "days"},
        {countdownTo: "End of Summer", date: "2022-08-01", measure: "days"}
    ],
    [
        {websterSearch: true,
        youtubeSearch: true,
        googleSearch: true,
        latinSearch: false,
        periodicTable: true,
        latinNouns: true,
        jeopardy: true,
        latinVerbs: true,
        notepaper: true}
    ],
    [
        {memopadContent: "Grades due Friday!\n\nPass back tests to 5th grade.\n\nFinish Geography slides."}
    ]
];
let userData = "";

function selectAccount(id){
    document.getElementById("coderVersion").style.border = "2px solid white";
    document.getElementById("studentVersion").style.border = "2px solid white";
    document.getElementById("teacherVersion").style.border = "2px solid white";
    document.getElementById("coderVersion").style.backgroundColor = "inherit";
    document.getElementById("studentVersion").style.backgroundColor = "inherit";
    document.getElementById("teacherVersion").style.backgroundColor = "inherit";
    document.getElementById(id).style.border = "1px solid black";
    document.getElementById(id).style.backgroundColor = "lightblue";
    let tempSave = "";
    if (id == "coderVersion") {
        tempSave = JSON.stringify(coderAccount);
    }
    if (id == "studentVersion") {
        tempSave = JSON.stringify(studentAccount);
    }
    if (id == "teacherVersion") {
        tempSave = JSON.stringify(teacherAccount);
    }
    userData = undefined;
    userData = tempSave;
    userData = JSON.parse(userData);
    updateTheWholeDashboard();
}
selectAccount("coderVersion");
updateTheWholeDashboard();
displayDateAndTime();
setInterval(displayDateAndTime, 5000)

// =====================================================
// For displaying the dashboard and components
// =====================================================
function displayDateAndTime() {
    let dateAndTimeSpot = document.getElementById("dateAndTime");
    let listOfMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let listOfDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let currentDate = new Date();
    let dayOfMonth = currentDate.getDate();
    let month = currentDate.getMonth();
    let dayOfWeek = currentDate.getDay();
    let currentTime = currentDate.toLocaleTimeString();
    let secondColon = currentTime.lastIndexOf(":");
    let amPM = currentTime.slice(currentTime.length-2, currentTime.length);
    let timeToShow = currentTime.slice(0,secondColon);
    let dateAndTimecontent = timeToShow + " " + amPM + " <br /> " + listOfDays[dayOfWeek] + ", " + listOfMonths[month] + " " + dayOfMonth;
    dateAndTimeSpot.innerHTML = dateAndTimecontent;
}
function updateTheWholeDashboard() {
    document.getElementById("dashboardUserName").innerHTML = userData[1][0].nickname;
    let dashboardArea = document.getElementById("dashboardButtons");
    dashboardArea.innerHTML = "";
    let contentToAddToDashboard = "";
    contentToAddToDashboard = contentToAddToDashboard + updateUniversalComponents();
    contentToAddToDashboard = contentToAddToDashboard + updateCountdownComponent();
    contentToAddToDashboard = contentToAddToDashboard + updateLinkComponents();
    contentToAddToDashboard = contentToAddToDashboard + updateMemoComponents()
    dashboardArea.innerHTML = contentToAddToDashboard;

}
function updateUniversalComponents(){
    let websterSearchComponent = 
        `<div class="searchDiv" id="websterSearch">
            <h3>Webster Search</h3><br>
            <input id="websterSearchInput" placeholder="Webster">
            <button id="websterSearchButton" onClick="quickWebster()">Go</button>
            <h3 class="closeXButton" onClick="deleteFromBoard('universal','webster')">X</h3>
        </div>`;
    let youtubeSearchComponent = 
        `<div class="searchDiv" id="youtubeSearch">
            <h3>YouTube Search</h3><br>
            <input id="youtubeSearchInput" placeholder="YouTube">
            <button id="youtubeSearchButton" onClick="quickYouTube();">Go</button>
            <h3 class="closeXButton" onClick="deleteFromBoard('universal','youtube')">X</h3>
        </div>`;
    let googleSearchComponent = 
        `<div class="searchDiv" id="googleSearch">
            <h3>Google Search</h3><br>
            <input id="googleSearchInput" placeholder="Google">
            <button id="googleSearchButton" onClick="quickGoogle();">Go</button>
            <h3 class="closeXButton" onClick="deleteFromBoard('universal','google')">X</h3>
        </div>`;
    let latinSearchComponent = 
        `<div class="searchDiv" id="latinSearch">
            <h3>Latin Word Search</h3><br>
            <input id="latinSearchInput" placeholder="Latin">
            <button id="latinSearchButton" onClick="quickLatinToEnglish()">Go</button>
            <input id="englishSearchInput" placeholder="English">
            <button id="englishSearchButton" onClick="quickEnglishToLatin()">Go</button>
            <h3 class="closeXButton" onClick="deleteFromBoard('universal','latin')">X</h3>
        </div>`;
    let periodicTableComponent = `<div class="searchDiv internalLink">
                <h2 onClick="quickLink('periodicTable.html')">Periodic Table</h2>
                <h3 class="closeXButton" onClick="deleteFromBoard('universal','periodicTable')">X</h3>
        </div>`;
    let latinNounsComponent = `<div class="searchDiv internalLink">
                <h2 onClick="quickLink('LatinNouns.html')">Latin Nouns</h2>
                <h3 class="closeXButton" onClick="deleteFromBoard('universal','latinNouns')">X</h3>
        </div>`;
    let jeopardyComponent = `<div class="searchDiv internalLink">
                <h2 onClick="quickLink('jeopardy.html')">Instant Jeopardy</h2>
                <h3 class="closeXButton" onClick="deleteFromBoard('universal','jeopardy')">X</h3>
        </div>`;
    let latinVerbsComponent = `<div class="searchDiv internalLink">
                <h2 onClick="quickLink('https://pfmooney1.github.io/Patrick-Mooney-Portfolio/VerbChartApp/verbChartGenerator.html')">Latin Verbs</h2>
                <h3 class="closeXButton" onClick="deleteFromBoard('universal','latinVerbs')">X</h3>
        </div>`;
    let notepaperComponent = `<div class="searchDiv internalLink">
                <h2 onClick="quickLink('graphPaper.html')">Notepaper Screen</h2>
                <h3 class="closeXButton" onClick="deleteFromBoard('universal','notepaper')">X</h3>
        </div>`;
    let universalComponentsToAdd = "";
    if (userData[3][0].websterSearch == true) {
        universalComponentsToAdd += websterSearchComponent;
    }
    if (userData[3][0].youtubeSearch == true) {
        universalComponentsToAdd += youtubeSearchComponent;
    }
    if (userData[3][0].googleSearch == true) {
        universalComponentsToAdd += googleSearchComponent;
    }
    if (userData[3][0].latinSearch == true) {
        universalComponentsToAdd += latinSearchComponent;
    }
    if (userData[3][0].periodicTable == true) {
        universalComponentsToAdd += periodicTableComponent;
    }
    if (userData[3][0].latinNouns == true) {
        universalComponentsToAdd += latinNounsComponent;
    }
    if (userData[3][0].latinVerbs == true) {
        universalComponentsToAdd += latinVerbsComponent;
    }
    if (userData[3][0].jeopardy == true) {
        universalComponentsToAdd += jeopardyComponent;
    }
    if (userData[3][0].notepaper == true) {
        universalComponentsToAdd += notepaperComponent;
    }
    return universalComponentsToAdd;
}
function updateCountdownComponent() {
    let countdownComponentsToAdd = "";
	let mappedCountdownComponents = userData[2].map((i, index) => `
            <div class="daysUntilDiv" id="countdown${index}">
                <h2>${getDaysUntil(i.date)} ${i.measure} until <br> ${i.countdownTo}</h2><br>
                <h3 class="closeXButton" onClick="deleteFromBoard('countdown','${index}')">X</h3>
            </div>`);
    countdownComponentsToAdd = mappedCountdownComponents.join("");
    return countdownComponentsToAdd;
}
function updateLinkComponents() {
    let linkComponentsToAdd = "";
	let mappedComponents = userData[0].map((i, index) => `
			<div class="buttonLink" id="quickLink${index}">
					<h2 onClick="quickLink('${i.address}')">${i.name}</h2>
                    <h3 class="closeXButton" onClick="deleteFromBoard('quickLink','${index}')">X</h3>
			</div>`);    
	linkComponentsToAdd = mappedComponents.join("");
    return linkComponentsToAdd;
}
function updateMemoComponents() {
    let memoComponentsToAdd = "";
	let mappedComponents = userData[4].map((i, index) => `<div class="memopad" id="memopad${index}">
            <h2 class="memopadHeader">Memo Pad</h2>
            <textarea class="memopadInput" id="memopadContent${index}" placeholder="Click to write" onInput="saveMemoPadToUserData(id, ${index})">${i.memopadContent}</textarea>
            <h3 class="closeXButton" onClick="deleteFromBoard('memopad','${index}')">X</h3>
        </div>`);    
	memoComponentsToAdd = mappedComponents.join("");
    return memoComponentsToAdd;
}


// =====================================================
// For component behavior and actions
// =====================================================
// Days until function
function getDaysUntil(passedYMD){
    let yearMonthDay = passedYMD.split("-");
    let year = yearMonthDay[0];
    let month = yearMonthDay[1] - 1;
    let day = yearMonthDay[2];
    let currentDate = new Date();
    let dateToGet = new Date();
    dateToGet.setFullYear(year, month, day);
    // calculates distance between two dates
    function distanceBetweenDates(today, futureDate) {
        return Math.round((futureDate-today)/(1000*60*60*24));
    }
    let numberOfDays = distanceBetweenDates(currentDate, dateToGet);
    return numberOfDays;
}

//Google Search function
function quickGoogle() {
    let googleInput = document.getElementById("googleSearchInput");
    let newAddress = 'https://www.google.com/search?q=' + googleInput.value;
    window.open(newAddress, '_blank');
    googleInput.value = "";
}

//Whitaker's Search function
function quickLatinToEnglish() {
    let latinInput = document.getElementById("latinSearchInput");
    let newAddress = 'http://www.archives.nd.edu/cgi-bin/wordz.pl?keyword=' + latinInput.value;
    window.open(newAddress, '_blank');
    latinInput.value = "";
}
function quickEnglishToLatin() {
    let englishInput = document.getElementById("englishSearchInput");
    let newAddress = 'http://www.archives.nd.edu/cgi-bin/wordz.pl?english=' + englishInput.value;
    window.open(newAddress, '_blank');
    englishInput.value = "";
}

//Custon user link function
function quickLink(address){
    let newAddress = address;
    /*if (newAddress.includes("http") == false){
        newAddress = "https://" + newAddress;
    } */
    window.open(newAddress, '_blank');
}

//YouTube Search function
function quickYouTube() {
    let youtubeInput = document.getElementById("youtubeSearchInput");
    let newAddress = 'https://www.youtube.com/results?search_query=' + youtubeInput.value;
    window.open(newAddress, '_blank');
    youtubeInput.value = "";
}
   
//Webster Search function
function quickWebster() {
    let websterInput = document.getElementById("websterSearchInput");
    let newAddress = 'https://www.merriam-webster.com/dictionary/' + websterInput.value;
    window.open(newAddress, '_blank');
    websterInput.value = "";
}

// Memo pad input save
function saveMemoPadToUserData(id, passedIndex){
	userData[4][passedIndex].memopadContent = document.getElementById(id).value;
}

// =====================================================
// For adding and deleting components
// =====================================================
function createNewCountdownComponent() {
	let countdownTo = document.getElementById("countdownEventToAdd").value;
	let date = document.getElementById("countdownDateToAdd").value;
    document.getElementById("countdownEventToAdd").value = "";
    document.getElementById("countdownDateToAdd").value = "";
//	let measure = prompt("Count down by...", "days");
	function NewCountdownComponent() {
		this.countdownTo = countdownTo;
		this.date = date;
		this.measure = "days";
	}
    let newCountdown = new NewCountdownComponent();
	userData[2].push(newCountdown);
	updateTheWholeDashboard();
    toggleComponentModal('off');
    switchModalScreens('select');
}

function createNewLinkComponent() {
	let newName = document.getElementById("linkModalLabelToAdd").value;
	let newAddress = document.getElementById("linkModalLinkToAdd").value;
    document.getElementById("linkModalLabelToAdd").value = "";
    document.getElementById("linkModalLinkToAdd").value = "";
	function NewLinkComponent() {
		this.name = newName;
		this.address = newAddress;
	}
    let newLink = new NewLinkComponent();
	userData[0].push(newLink);
	updateTheWholeDashboard();
    toggleComponentModal('off')
    switchModalScreens('select');
}

function createNewMemoComponent() {
	function NewMemoComponent() {
		this.memopadContent = "";
	}
    let newMemo = new NewMemoComponent();
	userData[4].push(newMemo);
	updateTheWholeDashboard();
    toggleComponentModal('off')
    switchModalScreens('select');
}

function deleteFromBoard(type, arrayIndex) {
    if (type == "quickLink") {
        userData[0].splice(arrayIndex, 1);
    }
    else if (type == "countdown") {
        userData[2].splice(arrayIndex, 1);
    }
    else if (type == "universal") {
        toggleUniversalComponent(arrayIndex);
    }
    else if (type == "memopad") {
        userData[4].splice(arrayIndex, 1);
    }
	updateTheWholeDashboard();
}

function switchModalScreens(screen) {
    document.getElementById("newCountdownComponentScreen").style.display = "none";
    document.getElementById("newLinkComponentScreen").style.display = "none";
    document.getElementById("newComponentSelectScreen").style.display = "none";
    if (screen == "countdown") {
        document.getElementById("newCountdownComponentScreen").style.display = "block";
    }
    else if (screen == "link") {
        document.getElementById("newLinkComponentScreen").style.display = "block";
    }
    else if (screen == "select") {
        document.getElementById("newComponentSelectScreen").style.display = "block";
    }
}

function toggleChangeUserScreen(onoff) {
    if (onoff == "off") {
        document.getElementById("changeUserScreen").style.display = "none";
    }
    if (onoff == "on") {
        document.getElementById("changeUserScreen").style.display = "block";
    }
}

function toggleComponentModal(onoff) {
    if (onoff == "off") {
        document.getElementById("newComponentModal").style.display = "none";
    }
    else {
        document.getElementById("newComponentModal").style.display = "block";
        switchModalScreens('select');
    }
}

function toggleUniversalComponent(arrayIndex) {
    // ADD ID AS A PARAMETER BEFORE IT IS FINISHED
    if (arrayIndex == "webster"){
        if (userData[3][0].websterSearch == true){
            userData[3][0].websterSearch = false;
            //document.getElementById(id).className = "";
        }
        else {
            userData[3][0].websterSearch = true;
            //document.getElementById(id).className = "toggled";
        }
    }
    else if (arrayIndex == "latin"){
        if (userData[3][0].latinSearch == true){
            userData[3][0].latinSearch = false;
            //document.getElementById(id).className = "";
        }
        else {
            userData[3][0].latinSearch = true;
            //document.getElementById(id).className = "toggled";
        }
    }   
    else if (arrayIndex == "google"){
        if (userData[3][0].googleSearch == true){
            userData[3][0].googleSearch = false;
            //document.getElementById(id).className = "";
        }
        else {
            userData[3][0].googleSearch = true;
            //document.getElementById(id).className = "toggled";
        }
    }    
    else if (arrayIndex == "youtube"){
        if (userData[3][0].youtubeSearch == true){
            userData[3][0].youtubeSearch = false;
            //document.getElementById(id).className = "";
        }
        else {
            userData[3][0].youtubeSearch = true;
            //document.getElementById(id).className = "toggled";
        }
    }
    else if (arrayIndex == "periodicTable"){
        if (userData[3][0].periodicTable == true){
            userData[3][0].periodicTable = false;
            //document.getElementById(id).className = "";
        }
        else {
            userData[3][0].periodicTable = true;
            //document.getElementById(id).className = "toggled";
        }
    }
    else if (arrayIndex == "latinNouns"){
        if (userData[3][0].latinNouns == true){
            userData[3][0].latinNouns = false;
            //document.getElementById(id).className = "";
        }
        else {
            userData[3][0].latinNouns = true;
            //document.getElementById(id).className = "toggled";
        }
    }
    else if (arrayIndex == "latinVerbs"){
        if (userData[3][0].latinVerbs == true){
            userData[3][0].latinVerbs = false;
            //document.getElementById(id).className = "";
        }
        else {
            userData[3][0].latinVerbs = true;
            //document.getElementById(id).className = "toggled";
        }
    }
    else if (arrayIndex == "jeopardy"){
        if (userData[3][0].jeopardy == true){
            userData[3][0].jeopardy = false;
            //document.getElementById(id).className = "";
        }
        else {
            userData[3][0].jeopardy = true;
            //document.getElementById(id).className = "toggled";
        }
    }
    else if (arrayIndex == "notepaper"){
        if (userData[3][0].notepaper == true){
            userData[3][0].notepaper = false;
            //document.getElementById(id).className = "";
        }
        else {
            userData[3][0].notepaper = true;
           //document.getElementById(id).className = "toggled";
        }
    }
    updateTheWholeDashboard();
}

// =====================================================
// ==========       UNDER  CONSTRUCTION       ==========
// =====================================================

function consoleLogUserData() {
    let textVersionOfData = JSON.stringify(userData);
    console.log(textVersionOfData);
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game Start
// Creating components
let startGame = document.querySelector('.startGame');

//create a input with the players name
let inputName = document.createElement('input');
inputName.classList.add('inputName');
inputName.classList.add('marginBottom');

//div Cor
let corDiv = document.createElement('div');
corDiv.classList.add('divTeams');

//div Pal
let palDiv = document.createElement('div');
palDiv.classList.add('divTeams');

//div SP
let spDiv = document.createElement('div');
spDiv.classList.add('divTeams');
    
//div San
let sanDiv = document.createElement('div');
sanDiv.classList.add('divTeams');

//logo Cor
let corLogo = document.createElement('img');
corLogo.setAttribute('src','./images/logo-do-corinthians-256.png');
corLogo.classList.add('logo');

//logo Pal
let palLogo = document.createElement('img');
palLogo.setAttribute('src','./images/logo-palmeiras-256.png');
palLogo.classList.add('logo');

//logo SP
let spLogo = document.createElement('img')
spLogo.setAttribute('src','./images/logo-sao-paulo-256.png')
spLogo.classList.add('logo')

//logo San
let sanLogo = document.createElement('img')
sanLogo.setAttribute('src','./images/logo-santos-256.png')
sanLogo.classList.add('logo')

//button Cor
let corButton = document.createElement('button');
corButton.innerHTML = "Corinthians";
corButton.classList.add('buttonTeam');
corButton.classList.add('corColor');

//button Pal
let palButton = document.createElement('button');
palButton.innerHTML = "Palmeiras";
palButton.classList.add('buttonTeam');
palButton.classList.add('palColor');

//button SP
let spButton = document.createElement('button')
spButton.innerHTML = "São Paulo";
spButton.classList.add('buttonTeam');
spButton.classList.add('spColor');

//button San
let sanButton = document.createElement('button')
sanButton.innerHTML = "Santos";
sanButton.classList.add('buttonTeam');
sanButton.classList.add('sanColor');

//Button Next
let newGame = document.createElement('button')
newGame.innerHTML = "Próximo";
newGame.classList.add('startGame');
newGame.classList.add('textCenter');
newGame.classList.add('marginTop');

//Call the body
let gameSpace = document.getElementsByClassName('gameSpace');
let body = document.querySelector('.backgroundSpace');

// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Team Information
//Creating components for the team information

// Create components for the game space
let divGame = document.createElement('div');
divGame.classList.add('gameSpace')

// Create components for the team information
let divTeamInfo = document.createElement("div")
let teamNameInfo = document.createElement("h1")
teamNameInfo.classList.add("h1Team")
let coachNameInfo = document.createElement("h2");
coachNameInfo.classList.add("h2Team")

//Create middle div
let divMiddle = document.createElement("div")
divMiddle.classList.add("divMiddle")

//Create components for the name of the players
let divPlayersInfo = document.createElement("div")
let playersDiv = document.createElement("div")
playersDiv.classList.add("divListInfo")
let playersList = document.createElement("ul")
playersList.classList.add("playersList")
let playerListTitle = document.createElement("li")
playerListTitle.classList.add("liTitle")
playerListTitle.innerHTML = "Jogadores"

//Create components for the position of the players
let positionDiv = document.createElement("div")
positionDiv.classList.add("divListInfoPosHab")
let positionList = document.createElement("ul")
positionList.classList.add("playersList")
let positionListTitle = document.createElement("li")
positionListTitle.classList.add("liTitle")
positionListTitle.innerHTML = "Posição"

//Create components for the hability of the players
let habilityDiv = document.createElement("div")
habilityDiv.classList.add("divListInfoPosHab")
let habilityList = document.createElement("ul")
habilityList.classList.add("playersList")
let habilityListTitle = document.createElement("li")
habilityListTitle.classList.add("liTitle")
habilityListTitle.innerHTML = "Força"

//DOM - Create components for the next game
let divMiddleRight = document.createElement("div")
divMiddleRight.classList.add("divMiddleRight")
let nextGameDiv = document.createElement("div")
let nextGameTeam = document.createElement("h2")
nextGameTeam.classList.add("h2NextOp")

//DOM - Create div for the formation
let divFormation = document.createElement("div")
let titleFormation = document.createElement("h2")
titleFormation.classList.add("h2NextOp")

//DOM - Create buttons for choose the formation
let formation1Button = document.createElement('button')
formation1Button.innerHTML = "3-4-3";
formation1Button.classList.add("formationButton")
let formation2Button = document.createElement('button')
formation2Button.innerHTML = "3-5-2";
formation2Button.classList.add("formationButton")
let formation3Button = document.createElement('button')
formation3Button.innerHTML = "4-4-2";
formation3Button.classList.add("formationButton")
let formation4Button = document.createElement('button')
formation4Button.innerHTML = "4-3-3";
formation4Button.classList.add("formationButton")
let formation5Button = document.createElement('button')
formation5Button.innerHTML = "Selecionar Melhores";
formation5Button.classList.add("formationButton")

//DOM - Create a button to start match
let newMatch = document.createElement('button')
newMatch.innerHTML = "Jogo";
newMatch.classList.add('startGame');
newMatch.classList.add('textCenter');
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game Start
// Function to act on the Start Game button
startGame.onclick = function() {
  
  //Remove image, button and title from the start
  let startSpace = document.getElementsByClassName('startSpace');
  let body = document.querySelector('.backgroundSpace');
  body.removeChild(startSpace[0]);
  
  //Add the gaming area;
  let divGame = document.createElement('div');
  divGame.classList.add('gameSpace')
  body.appendChild(divGame)
  
  // Add title asking the players name; 
  let h2TagName = document.createElement('h2');
  h2TagName.classList.add('titleBegin');
  h2TagName.innerHTML = "Olá professor(a), qual o seu nome?";
  divGame.appendChild(h2TagName);
  
  //Add Input to colect the name;
  divGame.appendChild(inputName);
  
  // Add title asking the whick team he choose; 
  let h2TagTeam = document.createElement('h2');
  h2TagTeam.classList.add('titleBegin');
  h2TagTeam.innerHTML = "Qual time gostaria de treinar?";
  h2TagTeam.classList.add('marginBottom');
  divGame.appendChild(h2TagTeam);

  // Add buttons to select teams
  let divTeams = document.createElement('div');
  divTeams.classList.add('divTeams');
  divTeams.classList.add('marginBottom');
  divGame.appendChild(divTeams);
  
  //Corinthians
  divTeams.appendChild(corDiv);
  corDiv.appendChild(corLogo);
  corDiv.appendChild(corButton);
  
  //Palmeiras
  divTeams.appendChild(palDiv);
  palDiv.appendChild(palLogo);
  palDiv.appendChild(palButton);
  
  //São Paulo
  divTeams.appendChild(spDiv);
  spDiv.appendChild(spLogo);
  spDiv.appendChild(spButton);
  
  //Santos
  divTeams.appendChild(sanDiv);
  sanDiv.appendChild(sanLogo);
  sanDiv.appendChild(sanButton);
  
  //Button to the next step
  divGame.appendChild(newGame);
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game Start
// Fuction to put a different background color for each team
function colorTeam(player, components, classNew) {
  if (player.nameTeam === "Corinthians") {
    components.classList.add(classNew)
    components.classList.add("corColor")
  } else if (player.nameTeam === "Palmeiras") {
    components.classList.add(classNew)
    components.classList.add("palColor")
  } else if (player.nameTeam === "São Paulo") {
    components.classList.add(classNew)
    components.classList.add("spColor")
  } else {
    components.classList.add(classNew)
    components.classList.add("sanColor")
  }
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game Start
// Fuction to put a different background color for each team during the game
function colorGame(team, components) {
  if (team === "Corinthians") {
    components.classList.add("corColor")
  } else if (team === "Palmeiras") {
    components.classList.add("palColor")
  } else if (team === "São Paulo") {
    components.classList.add("spColor")
  } else {
    components.classList.add("sanColor")
  }
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game Start
// Function to act on the buttons to choose a team

//Variables to know which team is active
let corActive = false;
let palActive = false;
let spActive = false;
let sanActive = false;

//Enable or disable team Cor
corDiv.onclick = function() {  
  if (corActive) {
    corActive = !corActive;
    corDiv.classList.remove('buttonActiveCor');
  } else {
    corActive = !corActive;
    palActive = false;
    spActive = false;
    sanActive = false;
    corDiv.classList.add('buttonActiveCor');
    palDiv.classList.remove('buttonActivePal');
    spDiv.classList.remove('buttonActiveSP');
    sanDiv.classList.remove('buttonActiveSan');    
  }
}

//Enable or disable team Pal
palDiv.onclick = function() {  
  if (palActive) {
    palActive = !palActive;
    palDiv.classList.remove('buttonActivePal');
  } else {
    palActive = !palActive;
    corActive = false;
    spActive = false;
    sanActive = false;
    palDiv.classList.add('buttonActivePal');
    corDiv.classList.remove('buttonActiveCor');
    spDiv.classList.remove('buttonActiveSP');
    sanDiv.classList.remove('buttonActiveSan');    
  }
}

//Enable or disable team SP
spDiv.onclick = function() {  
  if (spActive) {
    spActive = !spActive;
    spDiv.classList.remove('buttonActiveSP');
  } else {
    spActive = !spActive;
    corActive = false;
    palActive = false;
    sanActive = false;
    spDiv.classList.add('buttonActiveSP');
    corDiv.classList.remove('buttonActiveCor');
    palDiv.classList.remove('buttonActivePal');
    sanDiv.classList.remove('buttonActiveSan');    
  }
}

//Enable or disable team San
sanDiv.onclick = function() {  
  if (sanActive) {
    sanActive = !sanActive;
    sanDiv.classList.remove('buttonActiveSan');
  } else {
    sanActive = !sanActive;
    corActive = false;
    palActive = false;
    spActive = false;
    sanDiv.classList.add('buttonActiveSan');
    corDiv.classList.remove('buttonActiveCor');
    palDiv.classList.remove('buttonActivePal');
    spDiv.classList.remove('buttonActiveSP');    
  }
}

// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game Start
// Function to act after the selection of the team
let startGame2st = newGame.onclick = function() {
  
  //Create a new player
  let playerName = inputName.value;
  function playerTeam() {
    if (corActive) {
      return "Corinthians"
    } else if (spActive) {
      return "São Paulo"
    } else if (palActive) {
      return "Palmeiras"
    } else return "Santos"
  }
  
  //Remove image, button and title from the start
  body.removeChild(gameSpace[0]);
  // Call the function createChampioship
  createChampioship(playerName, playerTeam())
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation
// Function to act on the buttons to choose a formation

//Variables to know which formation is active
let for1Active = false;
let for2Active = false;
let for3Active = false;
let for4Active = false;
let for5Active = false;

//Enable or disable formation
formation1Button.onclick = function() {  
  if (for1Active) {
    for1Active = !for1Active;
    formation1Button.classList.remove('buttonActiveForm');
  } else {
    for1Active = !for1Active;
    for2Active = false;
    for3Active = false;
    for4Active = false;
    for5Active = false;
    formation1Button.classList.add('buttonActiveForm');
    formation2Button.classList.remove('buttonActiveForm');
    formation3Button.classList.remove('buttonActiveForm');
    formation4Button.classList.remove('buttonActiveForm');
    formation5Button.classList.remove('buttonActiveForm');    
  }
}

formation2Button.onclick = function() {  
  if (for2Active) {
    for2Active = !for2Active;
    formation2Button.classList.remove('buttonActiveForm');
  } else {
    for2Active = !for2Active;
    for1Active = false;
    for3Active = false;
    for4Active = false;
    for5Active = false;
    formation2Button.classList.add('buttonActiveForm');
    formation1Button.classList.remove('buttonActiveForm');
    formation3Button.classList.remove('buttonActiveForm');
    formation4Button.classList.remove('buttonActiveForm');
    formation5Button.classList.remove('buttonActiveForm');    
  }
}

formation3Button.onclick = function() {  
  if (for3Active) {
    for3Active = !for3Active;
    formation3Button.classList.remove('buttonActiveForm');
  } else {
    for3Active = !for3Active;
    for2Active = false;
    for1Active = false;
    for4Active = false;
    for5Active = false;
    formation3Button.classList.add('buttonActiveForm');
    formation2Button.classList.remove('buttonActiveForm');
    formation1Button.classList.remove('buttonActiveForm');
    formation4Button.classList.remove('buttonActiveForm');
    formation5Button.classList.remove('buttonActiveForm');    
  }
}

formation4Button.onclick = function() {  
  if (for4Active) {
    for4Active = !for4Active;
    formation4Button.classList.remove('buttonActiveForm');
  } else {
    for4Active = !for4Active;
    for2Active = false;
    for3Active = false;
    for1Active = false;
    for5Active = false;
    formation4Button.classList.add('buttonActiveForm');
    formation2Button.classList.remove('buttonActiveForm');
    formation3Button.classList.remove('buttonActiveForm');
    formation1Button.classList.remove('buttonActiveForm');
    formation5Button.classList.remove('buttonActiveForm');    
  }
}

formation5Button.onclick = function() {  
  if (for5Active) {
    for5Active = !for5Active;
    formation5Button.classList.remove('buttonActiveForm');
  } else {
    for5Active = !for5Active;
    for2Active = false;
    for3Active = false;
    for4Active = false;
    for1Active = false;
    formation5Button.classList.add('buttonActiveForm');
    formation2Button.classList.remove('buttonActiveForm');
    formation3Button.classList.remove('buttonActiveForm');
    formation4Button.classList.remove('buttonActiveForm');
    formation1Button.classList.remove('buttonActiveForm');    
  }
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
//DOM Manipulation
//Function to create the layout of the team information
function teamInformation(player, pc) {
  
  //DOM - adding components - Team Information
  colorTeam(player, divTeamInfo, "divTeamInfo");
  divGame.appendChild(divTeamInfo)
  
  //DOM - Adding information of the team
  teamNameInfo.innerHTML = player.nameTeam;
  divTeamInfo.appendChild(teamNameInfo);
  coachNameInfo.innerHTML = "Técnico: " + player.nameCoach;
  divTeamInfo.appendChild(coachNameInfo);

  //DOM - Creating components - Player Information
  divGame.appendChild(divMiddle)
  colorTeam(player, divPlayersInfo, "divPlayersInfo");
  divMiddle.appendChild(divPlayersInfo)

  //DOM - Adding name of the player
  divPlayersInfo.appendChild(playersDiv)
  playersDiv.appendChild(playersList)
  playersList.appendChild(playerListTitle)
  for (let i = 0; i < player.players.length; i++) {
    let playerName = document.createElement("li");
    playerName.innerHTML = player.players[i].name;
    playerName.classList.add("liList")
    playersList.appendChild(playerName)
  };

  //DOM - Adding position of the player
  divPlayersInfo.appendChild(positionDiv)
  positionDiv.appendChild(positionList)
  positionList.appendChild(positionListTitle)
  for (let i = 0; i < player.players.length; i++) {
    let positionName = document.createElement("li");
    positionName.innerHTML = player.players[i].position;
    positionName.classList.add("liList")
    positionList.appendChild(positionName)
  };

  //DOM - Adding hability of the player
  divPlayersInfo.appendChild(habilityDiv)
  habilityDiv.appendChild(habilityList)
  habilityList.appendChild(habilityListTitle)
  for (let i = 0; i < player.players.length; i++) {
    let habilityName = document.createElement("li");
    habilityName.innerHTML = player.players[i].hability;
    habilityName.classList.add("liList")
    habilityList.appendChild(habilityName)
  };
   
  //DOM - Adding Information of the next game
  colorTeam(player, nextGameDiv,"divTeamInfo");
  divMiddle.appendChild(divMiddleRight)
  divMiddleRight.appendChild(nextGameDiv)
  nextGameTeam.innerHTML = "Próximo adversário: " + pc.nameTeam;
  nextGameDiv.appendChild(nextGameTeam);

  //DOM - Adding Information of the formation
  colorTeam(player, divFormation, "divFormation");
  divMiddleRight.appendChild(divFormation)
  titleFormation.innerHTML = "Selecione a formação para o próximo jogo:"
  divFormation.appendChild(titleFormation)
  divFormation.appendChild(formation1Button)
  divFormation.appendChild(formation2Button)
  divFormation.appendChild(formation3Button)
  divFormation.appendChild(formation4Button)
  divFormation.appendChild(formation5Button)

  //DOM - add button to go to the game
  divMiddleRight.appendChild(newMatch)
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game Start
// Function to act on a button to start a game
newMatch.onclick = function() {
  //Remove image, button and title from the start
  body.removeChild(divGame);

  //Choose the return of buttons formation
  function formationChoose() {
    if (for1Active) {
      return "3-4-3"
    } else if (for2Active) {
      return "3-5-2"
    } else if (for3Active) {
      return "4-4-2"
    } else if (for4Active) {
      return "4-3-3"
    } else if (for5Active) {
      return "Select Best"
  }
  }
  
  gamePlayerPC(player1, computer1, formationChoose());
}

// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// Create components while the game happens

//DOM - Add the gaming area;
let gameArea = document.createElement("div")
gameArea.classList.add("gameSpace")

//Create the header information
let divHeaderGame = document.createElement("div")
let gameTimer = document.createElement("h3")
let divTimer = document.createElement("div")

//Create homeHeader
let divHomeGame = document.createElement("div")
let nameHomeTeam =  document.createElement("h2")
let scoreHomeTeam =  document.createElement("h2")

//Create awayHeader
let divAwayGame = document.createElement("div")
let nameAwayTeam =  document.createElement("h2")
let scoreAwayTeam =  document.createElement("h2")

//Create div with players list and game events
let playersEventsArea = document.createElement("div")
playersEventsArea.classList.add("divHeaderGame")

//Create div with the event area
let eventsArea = document.createElement("div")

//Create list 11 home
let divElevenHome = document.createElement("div")
let divELevenHomeList = document.createElement("ul")
divELevenHomeList.classList.add("playersList")

//Create list 11 away
let divElevenAway = document.createElement("div")
let divELevenAwayList = document.createElement("ul")
divELevenAwayList.classList.add("playersList")
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// Function to add components inside the game area
function gameInformation(player, away, gameTime) {
  //Adding header information
  body.appendChild(gameArea)
  gameArea.appendChild(divHeaderGame)
  divHeaderGame.classList.add("divHeaderGame")

  //Adding components homeHeader
  divHomeGame.appendChild(nameHomeTeam)
  divHomeGame.classList.add("divTeamsHeader")
  nameHomeTeam.innerHTML = player
  divHomeGame.appendChild(scoreHomeTeam)
  scoreHomeTeam.innerHTML = homeScore
  divHeaderGame.appendChild(divHomeGame)
  colorGame(player, divHomeGame)

  //Adding timer
  divTimer.appendChild(gameTimer)
  gameTimer.innerHTML = gameTime;
  divTimer.classList.add("gameTimer")
  divHeaderGame.appendChild(divTimer)

  //Adding components away Header
  divAwayGame.appendChild(nameAwayTeam)
  divAwayGame.classList.add("divTeamsHeader")
  nameAwayTeam.innerHTML = away
  divAwayGame.appendChild(scoreAwayTeam)
  scoreAwayTeam.innerHTML = awayScore
  divHeaderGame.appendChild(divAwayGame)
  colorGame(away, divAwayGame)

  //Adding list home team
  gameArea.appendChild(playersEventsArea)
  playersEventsArea.appendChild(divElevenHome)
  divElevenHome.classList.add("divEleven")
  divElevenHome.appendChild(divELevenHomeList)
  for (let i = 0; i < listElevenHome.length; i++){
    let playerHome = document.createElement("li");
    playerHome.classList.add("liListGame")
    playerHome.innerHTML = listElevenHome[i].name;
    divELevenHomeList.appendChild(playerHome)
  }
  colorGame(player, divElevenHome)

  //Adding event area 
  playersEventsArea.appendChild(eventsArea)
  eventsArea.classList.add("divEvents")

  //Adding list away team
  playersEventsArea.appendChild(divElevenAway)
  divElevenAway.classList.add("divEleven")
  divElevenAway.appendChild(divELevenAwayList)
  for (let i = 0; i < listElevenAway.length; i++){
    let playerAway = document.createElement("li");
    playerAway.classList.add("liListGame")
    playerAway.innerHTML = listElevenAway[i].name;
    divELevenAwayList.appendChild(playerAway)
  }
  colorGame(away, divElevenAway)
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// Function to update the game area

function updateGame (gameTime, homeScore, awayScore) {
  gameTimer.innerHTML = gameTime;
  scoreHomeTeam.innerHTML = homeScore
  scoreAwayTeam.innerHTML = awayScore
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// Create elements of events 

//Elemensts of opportunity of goal
let oppGoal = document.createElement("img")
oppGoal.setAttribute('src','./images/OportunityGoal.png')
oppGoal.classList.add("oppGoal")
let oppGoalTitle = document.createElement("h3")
let explicationScore = document.createElement("h4")

//Elements of opportunity of defend
let oppDef = document.createElement("img")
oppDef.setAttribute('src','./images/defendGoal.png')
oppDef.classList.add("defGoal")
let oppDefTitle = document.createElement("h3")
let explicationDef = document.createElement("h4")

//Elements of score a goal
let scoreGoal = document.createElement("img")
scoreGoal.setAttribute('src','./images/goal.png')
let scoreGoalTitle = document.createElement("h3")

//Elements of score a goal
let defendGoal = document.createElement("img")
defendGoal.setAttribute('src','./images/goalkeeper.png')
let defendGoalTitle = document.createElement("h3")


// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// Function opportunity of goal 

function chanceGoal(teamName, player){
  apito.play()
  eventsArea.appendChild(oppGoalTitle)
  colorGame(teamName, oppGoalTitle)
  oppGoalTitle.classList.add("h2EventTitle")
  oppGoalTitle.innerHTML = player + " tem uma oportunidade de gol";
  eventsArea.appendChild(oppGoal)
  eventsArea.appendChild(explicationScore)
  explicationScore.classList.add("explication")
  explicationScore.innerHTML = "Escolha o lado para chutar (clique <= / =>)";
  
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// Function opportunity of defend

function chanceDefend(teamName, player) {
  apito.play()
  eventsArea.appendChild(oppDefTitle)
  colorGame(teamName, oppDefTitle)
  oppDefTitle.classList.add("h2EventTitle")
  oppDefTitle.innerHTML = player + " tem uma oportunidade de gol";
  eventsArea.appendChild(oppDef)
  eventsArea.appendChild(explicationDef)
  explicationDef.classList.add("explication")
  explicationDef.innerHTML = "Escolha o lado para defender (clique <= / =>)";
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// Function Goal

function removeChanceGoal(){
  eventsArea.removeChild(oppGoalTitle);
  eventsArea.removeChild(oppGoal);
  eventsArea.removeChild(explicationScore);
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// Function Goal

function removeChanceDef(){
  eventsArea.removeChild(oppDefTitle);
  eventsArea.removeChild(oppDef);
  eventsArea.removeChild(explicationDef);
}

// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// Function Goal 
function goalScore() {
  eventsArea.appendChild(scoreGoalTitle)
  eventsArea.appendChild(scoreGoal)
  scoreGoal.classList.add("imgGoal")
  scoreGoalTitle.classList.add("goal")
  scoreGoalTitle.innerHTML = "GOOOOOOL!"
}

// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// Function Defend
function goalDefend() {
  eventsArea.appendChild(defendGoalTitle)
  eventsArea.appendChild(defendGoal)
  defendGoal.classList.add("imgGoal")
  defendGoalTitle.classList.add("goal")
  defendGoalTitle.innerHTML = "DEFENDEEEEU!"
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// function to remove the Defend componets
function removeDefend() {
  eventsArea.removeChild(defendGoalTitle);
  eventsArea.removeChild(defendGoal);

  stateGame = true;
  // callEvents (nameHome, nameAway, listElevenHome, listElevenAway);
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// function to remove the score componets
function removeScore() {
  eventsArea.removeChild(scoreGoalTitle);
  eventsArea.removeChild(scoreGoal);

  stateGame = true;
  // callEvents (nameHome, nameAway, listElevenHome, listElevenAway);
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// Function select the choose of a player

document.onkeydown = function (e) {
  switch (e.keyCode) {   
    case 37: // left arrow
      chooseSide = 0;
      decision = chooseLeftRight(chooseSide, eventHappening);
      if (decision === "Defend"){
        defendAudio.play()
        setTimeout(() => removeDefend(), 1000)
      } else if (decision === "Score") {
          golAudio.play()
          setTimeout(() => removeScore(), 1000)
      }      
      break;
    case 39: // right arrow
      chooseSide =  1;
      decision = chooseLeftRight(chooseSide, eventHappening);
      if (decision === "Defend"){
        defendAudio.play()
        setTimeout(() => removeDefend(), 1000)
      } else if (decision === "Score")  {
        golAudio.play()
        setTimeout(() => removeScore(), 1000)
      }
    break;
  }
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// Create components of card

let redCard = document.createElement("img")
redCard.setAttribute('src','/images/redCard.png')
let redCardTitle = document.createElement("h2")


let yellowCard = document.createElement("img")
yellowCard.setAttribute('src','/images/yellowCard.png')
let yellowCardTitle = document.createElement("h2")

// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// Function to call the red card components

function redCardCall(player) {
  apito.play()
  eventsArea.appendChild(redCardTitle)
  redCardTitle.innerHTML = player + " foi expulso"
  redCardTitle.classList.add("redCardTitle")
  eventsArea.appendChild(redCard)
  redCard.classList.add("cardSize")
}

// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// Function to remove the red card components

function redCardRemove() {
  eventsArea.removeChild(redCardTitle)
  eventsArea.removeChild(redCard)
  stateGame = true;
}

// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// Function to call the red card components

function yellowCardCall(player) {
  apito.play()
  eventsArea.appendChild(yellowCardTitle)
  yellowCardTitle.innerHTML = player + " levou cartão amarelo"
  yellowCardTitle.classList.add("yellowCardTitle")
  eventsArea.appendChild(yellowCard)
  yellowCard.classList.add("cardSize")
}

// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// Function to remove the red card components

function yellowCardRemove() {
  eventsArea.removeChild(yellowCardTitle)
  eventsArea.removeChild(yellowCard)
  stateGame = true;
}

// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// Create components win

let divWin = document.createElement("div")
divWin.classList.add("gameSpace")
divWin.classList.add("winCenter")
let trophy = document.createElement("img")
trophy.classList.add("trophy")
trophy.setAttribute('src','/images/trophy.png')
let champTitle = document.createElement("h1")
champTitle.classList.add("champTitle1")

// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// Function to call champion

function winner() {
  body.appendChild(divWin)
  divWin.appendChild(champTitle)
  champTitle.innerHTML = "Campeão da Ironhack Champioship!!!"
  divWin.appendChild(trophy)
}

// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// Create components lose

let divLose = document.createElement("div")
divLose.classList.add("gameSpace")
divLose.classList.add("winCenter")
let practiceMore = document.createElement("img")
practiceMore.classList.add("practiceMore")
practiceMore.setAttribute('src','/images/practicemore.png')
let practiceTitle = document.createElement("h1")
practiceTitle.classList.add("champTitle1")

// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// Function to call practice more

function loser() {
  body.appendChild(divLose)
  divLose.appendChild(practiceTitle)
  practiceTitle.innerHTML = "Pratique mais e tente outra vez!!!"
  divLose.appendChild(practiceMore)
}

// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// DOM Manipulation - Game
// Adding a sound

let apito = new Audio('/audio/apitodefutebol.mp3')
let golAudio = new Audio('/audio/gol.mp3')
let defendAudio = new Audio('/audio/defend.mp3')
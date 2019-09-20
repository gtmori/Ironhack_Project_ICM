let indexTeam = [teams[0].name, teams[1].name, teams[2].name, teams[3].name]
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
//Create a new player 
class player {
  constructor(namePl, teamName){
    this.indexTeam = indexTeam.indexOf(teamName);    
    this.nameTeam = teamName;
    this.players = teams[this.indexTeam].players;
    this.nameCoach = namePl;
    this.formation = ["3-4-3", "3-5-2", "4-4-2", "4-3-3", "Select Best"]
    // this.listGame = [];
  }

  //Function to choose the eleven players that will go to the match
  elevenPlayers(formation) {

    // Get only players with the same position;        
    let players__GK = this.players.filter(playerGK => playerGK.position === "GK");
    let players__DE = this.players.filter(playerDE => playerDE.position === "DE");
    let players__MF = this.players.filter(playerMF => playerMF.position === "MF");
    let players__OF = this.players.filter(playerOF => playerOF.position === "OF");
    let players__ALL = this.players.filter(playerOF => playerOF.position === "OF" || playerOF.position === "MF" || playerOF.position === "DE");
    // The Eleven Players
    let listGame = [];
    
    switch (formation) {
      case "3-4-3":
        // Choosing the GK
        listGame.push(players__GK.sort((a, b) => b.hability - a.hability)[0]);
        // Choosing 3 DE
        for(let i = 0; i < 3; i++){listGame.push(players__DE.sort((a, b) => b.hability - a.hability)[i])};
        // Choosing 4 MF
        for(let i = 0; i < 4; i++){listGame.push(players__MF.sort((a, b) => b.hability - a.hability)[i])};
        // Choosing 3 AT
        for(let i = 0; i < 3; i++){listGame.push(players__OF.sort((a, b) => b.hability - a.hability)[i])};
        break;

      case "3-5-2":
        // Choosing the GK
        listGame.push(players__GK.sort((a, b) => b.hability - a.hability)[0]);
        // Choosing 3 DE
        for(let i = 0; i < 3; i++){listGame.push(players__DE.sort((a, b) => b.hability - a.hability)[i])};
        // Choosing 5 MF
        for(let i = 0; i < 5; i++){listGame.push(players__MF.sort((a, b) => b.hability - a.hability)[i])};
        // Choosing 2 AT
        for(let i = 0; i < 2; i++){listGame.push(players__OF.sort((a, b) => b.hability - a.hability)[i])};
        break;

      case "4-4-2":
        // Choosing the GK
        listGame.push(players__GK.sort((a, b) => b.hability - a.hability)[0]);
        // Choosing 4 DE
        for(let i = 0; i < 4; i++){listGame.push(players__DE.sort((a, b) => b.hability - a.hability)[i])};
        // Choosing 4 MF
        for(let i = 0; i < 4; i++){listGame.push(players__MF.sort((a, b) => b.hability - a.hability)[i])};
        // Choosing 2 AT
        for(let i = 0; i < 2; i++){listGame.push(players__OF.sort((a, b) => b.hability - a.hability)[i])};
        break;

      case "4-3-3":
        // Choosing the GK
        listGame.push(players__GK.sort((a, b) => b.hability - a.hability)[0]);
        // Choosing 4 DE
        for(let i = 0; i < 4; i++){listGame.push(players__DE.sort((a, b) => b.hability - a.hability)[i])};
        // Choosing 3 MF
        for(let i = 0; i < 3; i++){listGame.push(players__MF.sort((a, b) => b.hability - a.hability)[i])};
        // Choosing 3 AT
        for(let i = 0; i < 3; i++){listGame.push(players__OF.sort((a, b) => b.hability - a.hability)[i])};
        break;

      case "Select Best":
        
        listGame.push(players__GK.sort((a, b) => b.hability - a.hability)[0]);
        // Choosing 10 best players
        for(let i = 0; i < 10; i++){listGame.push(players__ALL.sort((a, b) => b.hability - a.hability)[i])};
        break;
    }
    return listGame;  
  }
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
// Create a computer
class computer {
  constructor(name) {
    this.indexTeam = indexTeam.indexOf(name);
    this.nameTeam = teams[this.indexTeam].name;
    this.players = teams[this.indexTeam].players;
    this.listGamePC = [] 
    this.player = "";
  }

  elevenPlayers(){
    // Get only players with the same position;        
    let playersPC__GK = this.players.filter(playerGK => playerGK.position === "GK");
    let playersPC__ALL = this.players.filter(playerOF => playerOF.position === "OF" || playerOF.position === "MF" || playerOF.position === "DE");
    // Choosing GK
    this.listGamePC.push(playersPC__GK.sort((a, b) => b.hability - a.hability)[0]);
    // Choosing 10 best players
    for(let i = 0; i < 10; i++){this.listGamePC.push(playersPC__ALL.sort((a, b) => b.hability - a.hability)[i])};
    return this.listGamePC;
  }  
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
//Choose a random player to single event
//First Thought: Giving a probability of 33% to a OF player to score, 33% to a MF player and 33% to a DE player
function choosePlayer(arr){
  // Link a array
  let listPlayerPC = arr
  // Choose one player to have a chance to score in a game
  let random10 = Math.floor(Math.random()*1000);
  //Calculate the probability
  if (random10 <= 333) {
    let arrPlayer = listPlayerPC.filter((player) => player.position === "DE");
    if (arrPlayer.length === 0){
      let index = Math.floor(Math.random()*listPlayerPC.length);
      player = listPlayerPC[index];
      return player 
    } else {
      let index = Math.floor(Math.random()*arrPlayer.length);
      player = arrPlayer[index];
      return player;
    }

  } else if (random10 > 333 && random10 <= 333){
    let arrPlayer = listPlayerPC.filter((player) => player.position === "MF");
    if (arrPlayer.length === 0){
      let index = Math.floor(Math.random()*listPlayerPC.length);
      player = listPlayerPC[index];
      return player         
    } else {
      let index = Math.floor(Math.random()*arrPlayer.length);
      player = arrPlayer[index];
      return player;
    }

  } else {
    let arrPlayer = listPlayerPC.filter((player) => player.position === "OF");
    if (arrPlayer.length === 0){
      let index = Math.floor(Math.random()*listPlayerPC.length);
      player = listPlayerPC[index];
      return player        
    } else {
      let index = Math.floor(Math.random()*arrPlayer.length);
      player = arrPlayer[index];
      return player;
    }
  }
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
//Choose a random player to score
//First Thought: Giving a probability of 50% to a OF player to score, 30% to a MF player and 20% to a DE player
function choosePlayerGoal(arr){
  // Link a array
  let listPlayerPC = arr
  // Choose one player to have a chance to score in a game
  let random10 = Math.floor(Math.random()*10);
  // Calculate the probability
  if (random10 <= 2) {
    let arrPlayer = listPlayerPC.filter((player) => player.position === "DE");
    if (arrPlayer.length === 0){
      let index = Math.floor(Math.random()*listPlayerPC.length);
      player = listPlayerPC[index];
      return player 
    } else {
      let index = Math.floor(Math.random()*arrPlayer.length);
      player = arrPlayer[index];
      return player;
    }

  } else if (random10 > 2 && random10 <= 5){
    let arrPlayer = listPlayerPC.filter((player) => player.position === "MF");
    if (arrPlayer.length === 0){
      let index = Math.floor(Math.random()*listPlayerPC.length);
      player = listPlayerPC[index];
      return player         
    } else {
      let index = Math.floor(Math.random()*arrPlayer.length);
      player = arrPlayer[index];
      return player;
    }

  } else {
    let arrPlayer = listPlayerPC.filter((player) => player.position === "OF");
    if (arrPlayer.length === 0){
      let index = Math.floor(Math.random()*listPlayerPC.length);
      player = listPlayerPC[index];
      return player        
    } else {
      let index = Math.floor(Math.random()*arrPlayer.length);
      player = arrPlayer[index];
      return player;
    }
  }
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
//Function to create a champioship
computerPlayer = []
playerList = []

function createChampioship(name, team) {
    console.log(name);
    console.log(team);
    
    
  //Create a new player    
  player1 = new player(name, team)
  playerList.push(player1)

  //DOM - Add the gaming area;
  body.appendChild(divGame)
  
  let computerList = indexTeam.filter((name) => name !== team);
  let i = Math.floor(Math.random()*computerList.length)
  
  computer1 = new computer(computerList[i])
  
  computerPlayer.push(computer1)
  
  teamInformation(player1, computer1);
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
//Game Time 
let gameTime = 0;
let stateGame = true;

// Score
let homeScore = 0;
let awayScore = 0;

// Formation
let newFormation;

// Eleven players choosen
let listElevenAway
let listElevenHome

// Name of the teams
let nameHome;
let nameAway;

// A game of 90sec with happens 90 random Game events - Player x PC
function gamePlayerPC(player, away, formation) {
  //List the eleven players that will play
  listElevenHome = player.elevenPlayers(formation);
  console.log(listElevenHome);
  
  listElevenAway = away.elevenPlayers();
  console.log(listElevenAway);
  console.log(away.nameTeam);  

  nameHome = player.nameTeam;
  nameAway = away.nameTeam

  //Store the new Formation
  newFormation = formation;

  //Adding DOM
  gameInformation(nameHome, nameAway, gameTime, homeScore, awayScore, listElevenHome, listElevenAway);
  
  //Call of game events
  callEvents();
      
  }
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
//Random of events
function callEvents () {
  setInterval(function () {      
    if (stateGame){
      if (gameTime < 90) {

        gameEventsPlayerPC();
        //Time of the game
        gameTime += 1;
        console.log(gameTime);
        //Atualization of the score
        updateGame (gameTime, homeScore, awayScore)      
      } else {
        clearInterval(callEvents())
        gameFinish()
      }
    }
  }, 1000); 
}

// <------------------------------------------------------------------------------------------------------------------------------------------------------>
function gameFinish(){
  body.removeChild(gameArea)
  if (homeScore > awayScore) {
    winner()
  } else {
    loser()
  }  
  gameTime = 0;
  stateGame = false;
  homeScore = 0;
  awayScore = 0;
  newFormation = "";
  listElevenAway = [];
  listElevenHome = [];
  nameHome = "";
  nameAway = "";

  
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
let eventHappening = '';

//Random of events
//Chance of nothing happens 85%, chance of a gol happens 10%, chance of yellow card happens 4%, chance of a red card happens 1%
function gameEventsPlayerPC() {

  // //Calculate probability of a event happens
  let probabilityG = Math.floor(Math.random()*100);
  if (probabilityG <= 1) {
  
    let chooseTeam = Math.floor(Math.random()*10);
    if (chooseTeam <= 4) {
      stateGame = false;
      let player = choosePlayer(listElevenHome);
      // listElevenHome = listElevenHome.slice(listElevenHome.indexOf(`${player.name}`),1)
      redCardCall(player.name)
      setTimeout(() => redCardRemove(), 1000)

    } else {
      stateGame = false;
      let player = choosePlayer(listElevenAway);
      // listElevenAway = listElevenAway.slice(listElevenAway.indexOf(`${player.name}`),1)
      redCardCall(player.name)
      setTimeout(() => redCardRemove(), 1000)
    }

  } else if (probabilityG > 1 && probabilityG <= 5) {
      let chooseTeam = Math.floor(Math.random()*10);
      if (chooseTeam <= 4) {        
        let player = choosePlayer(listElevenHome);
          yellowCardCall(player.name)
          setTimeout(() => yellowCardRemove(), 1000)         
        
      } else {
        let player = choosePlayer(listElevenAway);
          yellowCardCall(player.name)
          setTimeout(() => yellowCardRemove(), 1000)
        }
      
  } else if (probabilityG > 5 && probabilityG <= 15) {
      //Calculate the average of the habilities players
      let aveHabHome = Math.floor(listElevenHome.reduce((acc, curValue) => parseInt(acc) + parseInt(curValue.hability), 0) / listElevenHome.length);
      let aveHabAway = Math.floor(listElevenAway.reduce((acc, curValue) => parseInt(acc) + parseInt(curValue.hability), 0) / listElevenHome.length);
      let probHome = 50 + (aveHabHome - aveHabAway)
      let probability = Math.floor(Math.random()*100)
      if (probability <= probHome) {
        let player = choosePlayerGoal(listElevenHome);        
        eventHappening = "attack";        
        prob50Attack(nameHome, player);

      } else {
        let player = choosePlayerGoal(listElevenAway);
        eventHappening = "defend";
        prob50Defend(nameAway, player);
      }
  } else { 
      console.log("Nada ocorreu");
  }  
}

// <------------------------------------------------------------------------------------------------------------------------------------------------------>
//Function to call chance to score a goal or defend
//PC will choose random 1 or 0, player will choose left(0) or right(0)

function prob50Attack(teamHome, player) {
  stateGame = false;
  chanceGoal(teamHome, player.name)  
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
//Function to call chance to score a goal or defend
function prob50Defend(teamAway, player) {
  stateGame = false;
  chanceDefend(teamAway, player.name)  
}
// <------------------------------------------------------------------------------------------------------------------------------------------------------>
//Function to call chance to redCard

// <------------------------------------------------------------------------------------------------------------------------------------------------------>
//Function to call chance to score a goal or defend


let chooseSide;
let decision;
function chooseLeftRight(chooseSide, event) {
  let pcRandom = Math.floor(Math.random() * 2)  
  if (pcRandom == chooseSide) {
    if (event == "attack"){
      console.log("Defendeu");
      removeChanceGoal()
      goalDefend()    
      return "Defend"
    } else if (event == "defend") {
      removeChanceDef()
      console.log("Defendeu");
      goalDefend()    
      return "Defend"
    }
  } else {
      if (event == "attack") {
        console.log(`Goal`);
        removeChanceGoal()
        goalScore()
        homeScore += 1;
        return "Score"
      } else if (event == "defend"){
        console.log(`Goal`);
        removeChanceDef()
        goalScore()
        awayScore += 1;
        return "Score"
      }
  }
}


// 1- Mostrar informações do time, campeonato, próximo adversário.
// 2- Selecionar a formação










// function round(){
    //   let i = 0;
    //   let cronometer = setInterval(() => {
      //     i += 1;
      //     console.log(i);     
      //     return (i)}
//      , 1000)
//   if (cronometer <= 5){clearInterval(cronometer)}
// }

// round();

// let teste = new player("Corinthians")
// let teste1 = new computer(1)
// teste.elevenPlayers("4-3-3")
// teste1.elevenPlayers()
// let cronometer = setInterval(() => game("Corinthians", "Palmeiras")
//    , 1000)
// console.log(teste1.choosePlayer())
const DOM = {

}


const display = {

}


function testTurn(){
    ++counter;
    if(counter % 5 === 0){
        rate += 1
    } 
    
    number += rate;
    console.log(counter);
    console.log(number)
  }

  const gameStatus = {
    eventActive: false,
    regulateOn: false,
    overheatOn: false,
    lowEnergy: false,
    increaseBreath: false,
    increaseHeart: false,
  }

const gameController = {
    noActions: false,
    turnCount: 1,
    healthRate: 1,
    
    endTurn(){
        this.checkActions();
        if(this.noActions === true){
            this.noActions = false;
            if(this.turnCount % 5 === 0){
                this.healthRate++
            }
            this.turnCount++
            gameVariables.actions = 3;
            if(gameStatus.lowEnergy === true){
                if(gameStatus.increaseBreath === true && gameStatus.increaseHeart === true){
                    gameStatus.lowEnergy = false;
                    gameStatus.increaseBreath = false;
                    gameStatus.increaseHeart = false;
                    gameStatus.eventActive = false;
                    console.log("The body receieved all the oxygen it needed and transported it to the cells. Homeostasis has been restored!")

                } else{
                    gameVariables.water = Math.max(0,gameVariables.water -= 1);
                    gameVariables.glucose = Math.max(0,gameVariables.glucose -= 1);
                }
            }
            gameVariables.oxygen = Math.max(0,gameVariables.oxygen -= 2);
            gameVariables.water = Math.max(0,gameVariables.water -= 2);
            gameVariables.glucose = Math.max(0,gameVariables.glucose -= 2);
            gameVariables.amino = Math.max(0,gameVariables.amino -= 2)
            if(!gameStatus.regulateOn){
                    gameVariables.health = Math.max(0,gameVariables.health -= this.healthRate);
            } else{
                gameStatus.regulateOn = false;
            }
           /* let conditionsMet = 0
            const condition1 = gameVariables.oxygen === 0;
            const condition2 = gameVariables.water === 0;
            const condition3 = gameVariables.amino === 0;
            const condition4 = gameVariables.co2 === 10;
            const condition5 = gameVariables.glucose === 0;
            if(condition1){
                conditionsMet++
            }
            if(condition2){
                conditionsMet++
            }
            if(condition3){
                conditionsMet++
            }
            if(condition4){
                conditionsMet++
            }
            if(condition5){
                conditionsMet++
            }
            gameVariables.health = Math.max(0,gameVariables.oxygen -= conditionsMet);*/
            console.log(gameVariables);
            console.log(gameController);
            if(gameVariables.health === 0){
                console.log(`Game over! Health: ${gameVariables.health}`);
            }
    
        } else {
            console.log(`actions remaining: ${gameVariables.actions}`)
        }
    
    },

    checkActions(){
        if (gameVariables.actions === 0){
            gameController.noActions = true;
        }
    },

    getEvent() {

        let randomNumber = Math.floor(Math.random() * 10) + 1
        console.log(randomNumber);
        for (const { range, situation } of gameEvents.events) {
          if (randomNumber >= range[0] && randomNumber <= range[1]) {
            return situation();
          }
        }
      
        return "Default phrase";
      },
}

const gameEvents = {
events: [
    { 
        range: [1,10], 
        situation: () => {
            "event 1";
            gameStatus.lowEnergy = true;
            gameStatus.eventActive = true;
            console.log("While going for a run, the body needs more energy to function!")

            }
        
        },
    { 
        range: [11,15], 
        situation: ()=>{
            "event 2"
            gameStatus.overheatOn = true;
            console.log("After some intense exercise, the body has overheated!")
        }
    },
    { range: [16,17], situation: ()=> "event 3"},
    { range: [18,20], situation: ()=> "event 4"},
]
}

const gameVariables = {
    oxygen: 5,
    water: 5,
    carbs: 5,
    glucose: 2,
    protein: 5,
    amino: 2,
    co2: 0,
    poxygen: 5,
    pwater: 5,
    pglucose: 5,
    pamino: 5,
    health: 10,
    actions: 3
}

const respSystem = {
    getOxygen(){
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else{
            gameVariables.poxygen += 1;
            gameVariables.actions -= 1;
            console.log(gameVariables)
        }
        
    },

    increaseBreath(){
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions");
        } else if(gameStatus.increaseBreath === true){
            console.log("Breathing is already increased!")
        } else{
            gameStatus.increaseBreath = true
            gameVariables.actions -= 1;
            console.log("The respiratory system has increased breathing, bringing more oxygen into the body!") 
        }
        
    }
}

const circSystem = {
    makeAvailable(){
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else{
            gameVariables.oxygen += gameVariables.poxygen;
            gameVariables.poxygen = 0;
            gameVariables.amino += gameVariables.pamino;
            gameVariables.pamino = 0;
            gameVariables.glucose += gameVariables.pglucose;
            gameVariables.pglucose = 0;
            gameVariables.water += gameVariables.pwater;
            gameVariables.pwater = 0;
            gameVariables.actions -= 1;
            gameVariables.co2 += 3;

        }
    },

    increaseHeart(){
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions");
        } else if(gameStatus.increaseHeart === true){
            console.log("Breathing is already increased!")
        } else{
            gameStatus.increaseHeart = true
            gameVariables.actions -= 1;
            console.log("The heart pumps faster, bringing more blood to the cells of the body!") 
        }
    }
}

const endoSystem = {

}

const nervSystem = {
    regulateSystems(){
        gameController.checkActions()
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else{
            gameStatus.regulateOn = true;
            gameVariables.oxygen -= 2;
            gameVariables.glucose -= 2;
            gameVariables.water -= 2;
            gameVariables.amino -= 2;
            gameVariables.co2 += 2;
            gameVariables.actions--;

        }
    }
}

const immuSystem = {

}

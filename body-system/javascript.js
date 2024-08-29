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

const gameController = {
    noActions: false,
    turnCount: 1,
    healthRate: 1,
    regulateOn: false,
    endTurn(){
        this.checkActions();
        if(this.noActions === true){
            this.noActions = false;
            if(this.turnCount % 5 === 0){
                this.healthRate++
            }
            this.turnCount++
            gameVariables.actions = 3;
            gameVariables.oxygen = Math.max(0,gameVariables.oxygen -= 2);
            gameVariables.water = Math.max(0,gameVariables.water -= 2);
            gameVariables.glucose = Math.max(0,gameVariables.glucose -= 2);
            gameVariables.amino = Math.max(0,gameVariables.amino -= 2)
            if(!this.regulateOn){
                    gameVariables.health = Math.max(0,gameVariables.health -= this.healthRate);
            } else{
                this.regulateOn = false;
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
    
        } else {
            console.log(`actions remaining: ${gameVariables.actions}`)
        }
    
    },

    checkActions(){
        if (gameVariables.actions === 0){
            gameController.noActions = true;
        }
    },
}

const gameEvents = {

}

const gameVariables = {
    oxygen: 5,
    water: 5,
    carbs: 5,
    glucose: 2,
    protein: 5,
    amino: 2,
    co2: 0,
    health: 10,
    actions: 3
}

const respSystem = {
    getOxygen(){
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else{
            gameVariables.oxygen += 1;
            gameVariables.actions -= 1;
            console.log(gameVariables)
        }
        
    }
}

const circSystem = {

}

const endoSystem = {

}

const nervSystem = {
    regulateSystems(){
        gameController.checkActions()
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else{
            gameController.regulateOn = true;
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


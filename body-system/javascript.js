const DOM = {

}


const gameController = {
    noActions: false,
    turnCount: 0,
    endTurn(){
        checkActions();
        if(this.noActions === true){
            this.noActions = false;
            this.turnCount++
            gameVariables.actions = 3;
            gameVariables.oxygen = Math.max(0,gameVariables.oxygen -= 2);
            gameVariables.water = Math.max(0,gameVariables.water -= 2);
            gameVariables.glucose = Math.max(0,gameVariables.glucose -= 2);
            gameVariables.amino = Math.max(0,gameVariables.amino -= 2)
            gameVariables.health = Math.max(0,gameVariables.health -= 2);
            let conditionsMet = 0
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
            gameVariables.health = Math.max(0,gameVariables.oxygen -= conditionsMet);
            console.log(gameVariables)
    
        } else {
            console.log(`actions remaining: ${gameVariables.actions}`)
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
        checkActions();
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

}

const immuSystem = {

}
function endTurn(){
    checkActions();
    if(gameController.noActions === true){
        gameController.noActions = false;
        gameController.turnCount++
        gameVariables.actions = 3;
        gameVariables.oxygen = Math.max(0,gameVariables.oxygen -= 2);
        gameVariables.water = Math.max(0,gameVariables.water -= 2);
        gameVariables.glucose = Math.max(0,gameVariables.glucose -= 2);
        gameVariables.amino = Math.max(0,gameVariables.amino -= 2)
        gameVariables.health = Math.max(0,gameVariables.health -= 2);
        let conditionsMet = 0
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
        gameVariables.health = Math.max(0,gameVariables.oxygen -= conditionsMet);
        console.log(gameVariables)

    } else {
        console.log(`actions remaining: ${gameVariables.actions}`)
    }

}

function checkActions(){
    if (gameVariables.actions === 0){
        gameController.noActions = true;
    }
}


let counter = 0
let number = 0
let rate = 1

function testTurn(){
    ++counter;
    if(counter % 5 === 0){
        rate += 1
    } 
    
    number += rate;
    console.log(counter);
    console.log(number)
  }
const DOM = {
    nerveBtn: document.querySelector("#nervous-button"),
    respBtn: document.querySelector("#resp-button"),
    circBtn: document.querySelector("#circ-button"),
    digestBtn: document.querySelector("#digest-button"),
    endoBtn: document.querySelector("#endo-button"),
    immuneBtn: document.querySelector("#immune-button"),
    nerveBtnContain: document.querySelector("#nervous-system-btns"),
    respBtnContain: document.querySelector("#respiratory-system-btns"),
    circBtnContain: document.querySelector("#circulatory-system-btns"),
    digestBtnContain: document.querySelector("#digestive-system-btns"),
    endoBtnContain: document.querySelector("#endocrine-system-btns"),
    immuneBtnContain:document.querySelector("#immune-system-btns"),
    actionDisplay: document.querySelector(".action-display"),
    unOxDisplay: document.querySelector("#oxygen-un"),
    unGluDisplay: document.querySelector("#glucose-un"),
    unAminoDisplay: document.querySelector("#amino-un"),
    unWaterDisplay: document.querySelector("#water-un"),
    healthDisplay: document.querySelector(".health-display"),
    turnDisplay: document.querySelector(".turn-display"),
    co2Display: document.querySelector(".co2-display"),


    
}

DOM.nerveBtn.addEventListener("click", function(){
    DOM.nerveBtnContain.style.display = "grid";
    DOM.respBtnContain.style.display = "none";
    DOM.circBtnContain.style.display = "none";
    DOM.digestBtnContain.style.display = "none";
    DOM.endoBtnContain.style.display = "none";
    DOM.immuneBtnContain.style.display = "none";
})

DOM.respBtn.addEventListener("click", function(){
    DOM.nerveBtnContain.style.display = "none";
    DOM.respBtnContain.style.display = "grid";
    DOM.circBtnContain.style.display = "none";
    DOM.digestBtnContain.style.display = "none";
    DOM.endoBtnContain.style.display = "none";
    DOM.immuneBtnContain.style.display = "none";
})

DOM.circBtn.addEventListener("click", function(){
    DOM.nerveBtnContain.style.display = "none";
    DOM.respBtnContain.style.display = "none";
    DOM.circBtnContain.style.display = "grid";
    DOM.digestBtnContain.style.display = "none";
    DOM.endoBtnContain.style.display = "none";
    DOM.immuneBtnContain.style.display = "none";
})

DOM.digestBtn.addEventListener("click", function(){
    DOM.nerveBtnContain.style.display = "none";
    DOM.respBtnContain.style.display = "none";
    DOM.circBtnContain.style.display = "none";
    DOM.digestBtnContain.style.display = "grid";
    DOM.endoBtnContain.style.display = "none";
    DOM.immuneBtnContain.style.display = "none";
})

DOM.endoBtn.addEventListener("click", function(){
    DOM.nerveBtnContain.style.display = "none";
    DOM.respBtnContain.style.display = "none";
    DOM.circBtnContain.style.display = "none";
    DOM.digestBtnContain.style.display = "none";
    DOM.endoBtnContain.style.display = "grid";
    DOM.immuneBtnContain.style.display = "none";
})

DOM.immuneBtn.addEventListener("click", function(){
    DOM.nerveBtnContain.style.display = "none";
    DOM.respBtnContain.style.display = "none";
    DOM.circBtnContain.style.display = "none";
    DOM.digestBtnContain.style.display = "none";
    DOM.endoBtnContain.style.display = "none";
    DOM.immuneBtnContain.style.display = "grid";
})

const display = {

    updateDisplay(){
        DOM.actionDisplay.innerHTML = `<b>Actions:</b> ${gameVariables.actions}`;
        DOM.unOxDisplay.innerHTML = `<b>Oxygen</b>: ${gameVariables.poxygen}`;
        DOM.unAminoDisplay.innerHTML = `<b>Amino Acids</b>: ${gameVariables.pamino}`;
        DOM.unGluDisplay.innerHTML = `<b>Glucose</b>: ${gameVariables.pglucose}`;
        DOM.unWaterDisplay.innerHTML = `<b>Water</b>: ${gameVariables.pwater}`;
        DOM.turnDisplay.innerHTML= `<b>Turn:</b> ${gameController.turnCount}`
        DOM.healthDisplay.innerHTML=`<b>Health:</b> ${gameVariables.health}/${gameVariables.maxHealth}`;
        DOM.co2Display.innerHTML= `<b>Carbon Dioxide:</b> ${gameVariables.co2}`

    }

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
    sweatOn: false,
    co2Over: false,
    melatoninOn: false,
    adrenOn: false,
    adrenCount: 2,
    insuOn: false,
    insCount: 2,
    fluOn: false,
    fluAnti: false,
    fluAntiCount: 3,
    fluCreated: false,


    clearStatus(){
        gameController.checkActions();
        
        if(gameVariables.actions === 0){
            console.log("out of actions")
            return
        }

         if(this.eventActive === false){
            console.log("There is no event active.")
            return
        }

        if(this.lowEnergy === true){
            if(this.increaseBreath === true && this.increaseHeart === true){
                this.lowEnergy = false;
                this.increaseBreath = false;
                this.increaseHeart = false;
                this.eventActive = false;
            } else {
                console.log("do not meet the requirements")
            }
        } else if(this.overheatOn === true){
                console.log("overheat test")
        } else{
            console.log("You can't resolve the event here!")
        }
    }
  }

const gameController = {
    noActions: false,
    turnCount: 1,
    healthRate: 1,
    
    endTurn(){
        this.checkActions();
        if(this.noActions === true){
            this.noActions = false;
            if(this.turnCount % 10 === 0){
                this.healthRate++
            };
            if(this.turnCount % 5 === 0 && gameStatus.eventActive === false){
                this.getEvent();
            }
            this.turnCount++;
            gameVariables.actions = 3;
            if(gameStatus.co2Over === true){
                gameVariables.actions -=1
            }
            if(gameStatus.lowEnergy === true){
                    gameVariables.water = Math.max(0,gameVariables.water -= 1);
                    gameVariables.glucose = Math.max(0,gameVariables.glucose -= 1);

            }

            if(gameStatus.overheatOn === true){
                gameVariables.water = Math.max(0,gameVariables.water -= 2);
            }

            if(gameStatus.adrenOn === true){
                if(gameStatus.adrenCount === 0){
                    gameStatus.adrenCount = 2;
                    gameStatus.adrenOn = false;
                } else{
                    gameStatus.adrenCount -= 1;
                    gameVariables.oxygen += 4
                }

            }

            if(gameStatus.insuOn === true){
                if(gameStatus.insCount === 0){
                    gameStatus.insCount = 2;
                    gameStatus.insuOn = false
                } else{
                    gameStatus.insCount -= 1;
                    gameVariables.glucose += 4
                }
            }

            if(gameStatus.fluOn === true){
                if(gameStatus.fluCreated === true){
                    gameStatus.fluOn = false;
                    gameStatus.fluAnti = false;
                    gameStatus.eventActive = false;
                    console.log("you defeated the flu with memory cells!")

                } else if(gameStatus.fluAnti === true){
                    if(gameStatus.fluAntiCount === 0){
                        gameStatus.fluCreated = true;
                        gameStatus.fluAnti = false;
                        gameStatus.fluOn = false;
                        gameStatus.eventActive = false;
                        console.log("you defeated the flu!")
                    } else{
                        gameStatus.fluAntiCount -= 1;
                        gameVariables.health = Math.max(0,gameVariables.health -= 1)
                    }
                } else{
                    gameVariables.health = Math.max(0,gameVariables.health -= 1)
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
            const condition4 = gameVariables.co2 >= 10;
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

        let randomNumber = Math.floor(Math.random() * 20) + 1
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
            gameStatus.eventActive = true;
            console.log("After some intense exercise, the body has overheated!")
        }
    },
    { range: [16,17], 
        situation: ()=> {
            "event 3"
            gameStatus.fluOn = true;
            gameStatus.eventActive = true;
            console.log("A flu virus has invaded the body!")
        }
            
    
    },
    { range: [18,20], situation: ()=> "event 4"},
]
}

const gameVariables = {
    oxygen: 5,
    water: 5,
    carbs: 1,
    glucose: 2,
    protein: 1,
    amino: 2,
    co2: 0,
    poxygen: 5,
    pwater: 5,
    pglucose: 5,
    pamino: 5,
    health: 10,
    maxHealth:10,
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
        
    },

    releaseCO2(){
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else{
            gameVariables.co2 -= 10;
            gameVariables.glucose -= 2;
            gameVariables.amino -=2;
            gameVariables.water -=2;
            gameVariables.actions -=1
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

const digestSystem = {
    getNutrients(){
        gameController.checkActions()
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else{
            gameVariables.actions -=1;
            gameVariables.pwater +=3;
            gameVariables.carbs += 2;
            gameVariables.protein += 2;
            gameVariables.co2 += 2;
            gameVariables.amino -=1;
            gameVariables.glucose -=1;

        }
    },

    digestNutrients(){
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else{
            gameVariables.actions -=1;
            gameVariables.pamino = gameVariables.protein*2 + gameVariables.pamino;
            gameVariables.pglucose = gameVariables.carbs*2 + gameVariables.pglucose;
            gameVariables.carbs = 0;
            gameVariables.protein = 0;
            gameVariables.co2 += 3;
            gameVariables.amino -=1;
            gameVariables.glucose -=1;

        }
    }
}

const endoSystem = {
    produceMel(){
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else {
            gameVariables.actions -= 1;
            gameVariables.amino -= 3;
            gameVariables.glucose -= 1;
            gameStatus.melatoninOn = true;
            console.log("Melatonin produced!")
        }
    },

    produceAdr(){
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else {
            gameVariables.actions -= 1;
            gameVariables.amino -= 3;
            gameVariables.glucose -= 1;
            gameStatus.adrenOn = true;
            console.log("Adrenaline produced!")
        }
    },

    produceIns(){
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else {
            gameVariables.actions -= 1;
            gameVariables.amino -= 3;
            gameVariables.glucose -= 1;
            gameStatus.insuOn = true;
            console.log("Insulin produced!")
        }
    },
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
    },

    produceSweat(){
        gameController.checkActions()
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else{
            gameStatus.sweatOn = true;
            gameVariables.actions -= 1;

        }
    },

    goSleep(){
        gameController.checkActions()
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else if(gameStatus.melatoninOn === true){
            gameStatus.melatoninOn = false;
            gameVariables.amino-=3;
            gameVariables.water-=3;
            gameVariables.glucose-=3;
            gameVariables.oxygen-=3;
            gameVariables.health+=2;
            gameVariables.actions-=1
        } else{
            gameVariables.amino-=3;
            gameVariables.water-=3;
            gameVariables.glucose-=3;
            gameVariables.oxygen-=3;
            gameVariables.health+=1;
            gameVariables.actions-=1
        }
    }
}

const immuSystem = {
    produceFlu(){
        gameController.checkActions()
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else {
            gameStatus.fluAnti = true;
        }
    }
}

display.updateDisplay()

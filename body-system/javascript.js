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
    memCellBtnContain:document.querySelector("#mem-cell-btns"),
    actionDisplay: document.querySelector(".action-display"),
    unOxDisplay: document.querySelector("#oxygen-un"),
    unGluDisplay: document.querySelector("#glucose-un"),
    unAminoDisplay: document.querySelector("#amino-un"),
    unWaterDisplay: document.querySelector("#water-un"),
    healthDisplay: document.querySelector(".health-display"),
    turnDisplay: document.querySelector(".turn-display"),
    co2Display: document.querySelector(".co2-display"),
    avOxDisplay: document.querySelector(".oxygen-av"),
    avAmiDisplay: document.querySelector(".amino-av"),
    avWatDisplay: document.querySelector(".water-av"),
    avCarbDisplay: document.querySelector(".carbs-av"),
    avGluDisplay: document.querySelector(".glucose-av"),
    avProDisplay: document.querySelector(".protein-av"),
    displayMessage: document.querySelector(".message-text"),
    endBtn: document.querySelector("#end-turn"),
    regulateSystemsBtn: document.querySelector("#regulate-systems-btn"),
    regulateImg: document.querySelector("#picture-1"),
    regulateImgTool: document.querySelector("#regulate-tooltip"),
    regulateBtnTool: document.querySelector("#regulate-btn-tooltip"),
    sleepBtn: document.querySelector("#sleep-btn"),
    sleepBtnTool: document.querySelector("#sleep-btn-tooltip"),
    sweatBtn: document.querySelector("#sweat-btn"),


    memCellBtn: document.querySelector("#mem-cell-btn"),
    memCellBackBtn: document.querySelector("#mem-cell-back"),
    fluMemBtn: document.querySelector("#flu-mem-btn"),
    




    
}




DOM.nerveBtn.addEventListener("click", function(){
    DOM.nerveBtnContain.style.display = "grid";
    DOM.respBtnContain.style.display = "none";
    DOM.circBtnContain.style.display = "none";
    DOM.digestBtnContain.style.display = "none";
    DOM.endoBtnContain.style.display = "none";
    DOM.immuneBtnContain.style.display = "none";
    DOM.memCellBtnContain.style.display = "none";
})

DOM.respBtn.addEventListener("click", function(){
    DOM.nerveBtnContain.style.display = "none";
    DOM.respBtnContain.style.display = "grid";
    DOM.circBtnContain.style.display = "none";
    DOM.digestBtnContain.style.display = "none";
    DOM.endoBtnContain.style.display = "none";
    DOM.immuneBtnContain.style.display = "none";
    DOM.memCellBtnContain.style.display = "none";
})

DOM.circBtn.addEventListener("click", function(){
    DOM.nerveBtnContain.style.display = "none";
    DOM.respBtnContain.style.display = "none";
    DOM.circBtnContain.style.display = "grid";
    DOM.digestBtnContain.style.display = "none";
    DOM.endoBtnContain.style.display = "none";
    DOM.immuneBtnContain.style.display = "none";
    DOM.memCellBtnContain.style.display = "none";
})

DOM.digestBtn.addEventListener("click", function(){
    DOM.nerveBtnContain.style.display = "none";
    DOM.respBtnContain.style.display = "none";
    DOM.circBtnContain.style.display = "none";
    DOM.digestBtnContain.style.display = "grid";
    DOM.endoBtnContain.style.display = "none";
    DOM.immuneBtnContain.style.display = "none";
    DOM.memCellBtnContain.style.display = "none";
})

DOM.endoBtn.addEventListener("click", function(){
    DOM.nerveBtnContain.style.display = "none";
    DOM.respBtnContain.style.display = "none";
    DOM.circBtnContain.style.display = "none";
    DOM.digestBtnContain.style.display = "none";
    DOM.endoBtnContain.style.display = "grid";
    DOM.immuneBtnContain.style.display = "none";
    DOM.memCellBtnContain.style.display = "none";
})

DOM.immuneBtn.addEventListener("click", function(){
    DOM.nerveBtnContain.style.display = "none";
    DOM.respBtnContain.style.display = "none";
    DOM.circBtnContain.style.display = "none";
    DOM.digestBtnContain.style.display = "none";
    DOM.endoBtnContain.style.display = "none";
    DOM.immuneBtnContain.style.display = "grid";
    DOM.memCellBtnContain.style.display = "none";
})

DOM.endBtn.addEventListener("click", function(){
    gameController.endTurn()
})

DOM.regulateSystemsBtn.addEventListener("click",function(){
    nervSystem.regulateSystems()
})
DOM.regulateBtnTool.innerHTML = "Regulate all body systems together. Adds `Regulate Systems` status. Cost: 2 oxygen, 2 glucose, 2 water, 2 amino acids";

DOM.sleepBtn.addEventListener("click", function(){
    nervSystem.goSleep()
})
DOM.sleepBtnTool.innerHTML = "Causes body to sleep. Restores 1 point of health. Cost: 3 oxygen, 3 glucose, 3 water, 3 amino acids"


DOM.memCellBtn.addEventListener("click", function(){
    DOM.immuneBtnContain.style.display = "none";
    DOM.memCellBtnContain.style.display = "grid";
})

DOM.memCellBackBtn.addEventListener("click", function(){
    DOM.immuneBtnContain.style.display = "grid";
    DOM.memCellBtnContain.style.display = "none";
})

DOM.fluMemBtn.addEventListener("click", function(){
    immuSystem.produceMemoryCell(1)
})


const display = {

    updateDisplay(){
        DOM.actionDisplay.innerHTML = `<b>Actions:</b> ${gameVariables.actions}`;
        DOM.unOxDisplay.innerHTML = `<b>Oxygen</b>: ${gameVariables.poxygen}`;
        DOM.unAminoDisplay.innerHTML = `<b>Amino Acids</b>: ${gameVariables.pamino}`;
        DOM.unGluDisplay.innerHTML = `<b>Glucose</b>: ${gameVariables.pglucose}`;
        DOM.unWaterDisplay.innerHTML = `<b>Water</b>: ${gameVariables.pwater}`;
        DOM.avWatDisplay.innerHTML = `<b>Water</b>: ${gameVariables.water}`;
        DOM.avOxDisplay.innerHTML = `<b>Oxygen</b>: ${gameVariables.oxygen}`;
        DOM.avAmiDisplay.innerHTML = `<b>Amino Acids</b>: ${gameVariables.amino}`;
        DOM.avCarbDisplay.innerHTML = `<b>Carbs</b>: ${gameVariables.carbs}`;
        DOM.avGluDisplay.innerHTML = `<b>Glucose</b>: ${gameVariables.glucose}`;
        DOM.avWatDisplay.innerHTML = `<b>Water</b>: ${gameVariables.water}`;
        DOM.avProDisplay.innerHTML = `<b>Protein</b>: ${gameVariables.protein}`;
        DOM.turnDisplay.innerHTML= `<b>Turn:</b> ${gameController.turnCount}`
        DOM.healthDisplay.innerHTML=`<b>Health:</b> ${gameVariables.health}/${gameVariables.maxHealth}`;
        DOM.co2Display.innerHTML= `<b>Carbon Dioxide:</b> ${gameVariables.co2}`;

        DOM.regulateImgTool.innerHTML= `<b>Regulate Systems</b>: Prevents health loss when ending turn. Turns Remaining: ${gameStatus.regulateOnCount}`

    }

}



  const gameStatus = {
    eventActive: false,
    regulateOn: false,
    regulateOnCount: 3,
    overheatOn: false,
    lowEnergy: false,
    increaseBreath: false,
    increaseBreathCount: 2,
    increaseHeart: false,
    increaseHeartCount: 2,
    exerciseLungs: false,
    exerciseHeart: false,
    sweatOn: false,
    sweatOnCount:3,
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
    fluMem: false,
    bacteriaOn: false,
    bacteriaAnti: false,
    bacteriaAntiCount: 3,
    bacteriaCreated: false,
    bacMem: false,
    parasiteOn: false,
    parasiteAnti: false,
    parasiteAntiCount: false,
    parasiteCreated: false,
    parasiteMem: false,
    memCellCreated: false,
    injuryOn: false,



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
                gameVariables.actions -= 1;
            } else {
                console.log("do not meet the requirements")
            }
        } else if(this.overheatOn === true){
                if(gameStatus.sweatOn === true){
                    this.overheatOn = false;
                    this.sweatOn = false;
                    this.eventActive = false;
                    gameVariables.actions -=1;
                    
                } else{
                    console.log("do not meet requirements")
                }
        } else if(this.injuryOn === true){
            if(gameVariables.amino >=2 && gameVariables.glucose >= 2){
                this.injuryOn = false;
                this.eventActive = false;
                gameVariables.actions -= 1;
            } else {
                console.log("do not meet requirements")
            }
        } else{
            console.log("You can't resolve the event here!")
        }
    }
  }

const gameController = {
    noActions: false,
    turnCount: 1,
    healthRate: 1,
    upgradeRate: 0,
    resourceCostTurn: 2,
    
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

            if(gameStatus.increaseHeart === true){
                if(gameStatus.increaseHeartCount === 0){
                    gameStatus.increaseHeart = false;
                } else{
                    gameStatus.increaseHeartCount -=1
                }
            }

            if(gameStatus.increaseBreath === true){
                if(gameStatus.increaseBreathCount === 0){
                    gameStatus.increaseBreath = false;
                } else{
                    gameStatus.increaseBreathCount -=1
                }
            }

            if(gameStatus.sweatOn === true){
                if(gameStatus.sweatOnCount === 1){
                    gameStatus.sweatOn=false;
                    gameStatus.sweatOnCount = 3;
                } else {
                    gameStatus.sweatOnCount -= 1
                }
            }
            
            if(gameStatus.lowEnergy === true){
                    gameVariables.water = Math.max(0,gameVariables.water -= 1);
                    gameVariables.glucose = Math.max(0,gameVariables.glucose -= 1);

            }

            if(gameStatus.overheatOn === true){
                gameVariables.water = Math.max(0,gameVariables.water -= 2);
                gameVariables.actions -=1
            }

            if(gameStatus.injuryOn === true){
                gameVariables.health = (Math.max(0,gameVariables.health -= 1))
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
                if(gameStatus.fluMem === true){
                    gameStatus.fluOn = false;
                    gameStatus.fluAnti = false;
                    gameStatus.eventActive = false;
                    console.log("you defeated the flu with memory cells!")

                } else if(gameStatus.fluAnti === true){
                    if(gameStatus.fluAntiCount === 1){
                        gameStatus.memCellCreated = true;
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

            if(gameStatus.bacteriaOn === true){
                if(gameStatus.bacMem === true){
                    gameStatus.bacteriaOn = false;
                    gameStatus.bacteriaAnti = false;
                    gameStatus.eventActive = false;
                    console.log("you defeated the bacteria with memory cells!")

                } else if(gameStatus.bacteriaAnti === true){
                    if(gameStatus.bacteriaAntiCount === 1){
                        gameStatus.memCellCreated = true;
                        gameStatus.bacteriaCreated = true;
                        gameStatus.bacteriaAnti = false;
                        gameStatus.bacteriaOn = false;
                        gameStatus.eventActive = false;
                        console.log("you defeated the bacteria!")
                    } else{
                        gameStatus.bacteriaAntiCount -= 1;
                        gameVariables.health = Math.max(0,gameVariables.health -= 1)
                    }
                } else{
                    gameVariables.health = Math.max(0,gameVariables.health -= 1)
                }
            }
            if(gameStatus.parasiteOn === true){
                if(gameStatus.parasiteMem === true){
                    gameStatus.parasiteOn = false;
                    gameStatus.parasiteAnti = false;
                    gameStatus.eventActive = false;
                    console.log("you defeated the parasite with memory cells!")

                } else if(gameStatus.bacteriaAnti === true){
                    if(gameStatus.parasiteAntiCount === 1){
                        gameStatus.memCellCreated = true;
                        gameStatus.parasiteCreated = true;
                        gameStatus.parasiteAnti = false;
                        gameStatus.parasiteOn = false;
                        gameStatus.eventActive = false;
                        console.log("you defeated the parasite!")
                    } else{
                        gameStatus.parasiteAntiCount -= 1;
                        gameVariables.health = Math.max(0,gameVariables.health -= 1)
                    }
                } else{
                    gameVariables.health = Math.max(0,gameVariables.health -= 1)
                }
            }

            const turnThreshold = 10
            const costAddition = Math.floor(this.turnCount/turnThreshold)
            if(costAddition>=1){
                this.resourceCostTurn += costAddition
            }
            const cost = {
                resource: 2 + costAddition
            }
            gameVariables.oxygen = Math.max(0,gameVariables.oxygen -= cost.resource);
            gameVariables.water = Math.max(0,gameVariables.water -= cost.resource);
            gameVariables.glucose = Math.max(0,gameVariables.glucose -= cost.resource);
            gameVariables.amino = Math.max(0,gameVariables.amino -= cost.resource)
            if(!gameStatus.regulateOn){
                    gameVariables.health = Math.max(0,gameVariables.health -= this.healthRate);
            } else if(gameStatus.regulateOnCount === 1){
                gameStatus.regulateOn = false;
                DOM.regulateImg.style.display = "none"
            } else {
                gameStatus.regulateOnCount -= 1
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
            display.updateDisplay()
            if(gameVariables.health === 0){
                console.log(`Game over! Health: ${gameVariables.health}`);
            }
    
        } else {
            console.log(`actions remaining: ${gameVariables.actions}`);
            DOM.displayMessage.innerHTML = `Actions remaining: ${gameVariables.actions}`
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

      checkResources(cost, resources){

        const resourceName = {
            oxygen: "Oxygen",
            water: "Water",
            glucose: "Glucose",
            amino: "Amino Acids",
            carbs: "Carbohydrates",
            protein: "Protein"
        }
    
        let insufficientResources = [];  // To store all insufficient resources
    
    for (let resource in cost) {
        if (resources[resource] < cost[resource]) {
            console.log(`Not enough ${resource}: ${resources[resource]} < ${cost[resource]}`);
           let displayName = resourceName[resource];
           let resourceCost = cost[resource];
           let playerAmount = resources[resource];
           insufficientResources.push(`${displayName}: ${playerAmount}/${resourceCost}`);
              
        } else {
            console.log(`Sufficient ${resource}: ${resources[resource]} >= ${cost[resource]}`);
        }
    }

    if (insufficientResources.length > 0) {
        console.log("Insufficient resources:", insufficientResources.join(", "));
        DOM.displayMessage.textContent = `Not enough available resources: ${insufficientResources.join(", ")}`;
        return false;  // Return false if any resource is insufficient
    }

    return true;  // Return true if all resources are sufficient
      }
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
    { range: [18,20], 
        situation: ()=> {
            "event 4"
            gameStatus.bacteriaOn = true;
            gameStatus.eventActive = true;
            console.log("A bacteria has invaded the body!")
        }


    },

    { range: [18,20], 
        situation: ()=> {
            "event 5"
            gameStatus.parasiteOn = true;
            gameStatus.eventActive = true;
            console.log("A parasite has invaded the body!")
        }


    },
    { range: [18,20], 
        situation: ()=> {
            "event 6"
            gameStatus.injuryOn = true;
            gameStatus.eventActive = true;
            console.log("The body was injured!")
        }


    },
]
}

const gameVariables = {
    oxygen: 20,
    water: 20,
    carbs: 1,
    glucose: 20,
    protein: 1,
    amino: 20,
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
        } else if(gameStatus.increaseBreath === true){
            gameVariables.poxygen += 8;
            gameVariables.actions-=1;
        } else{
            gameVariables.poxygen += 4;
            gameVariables.actions -= 1;
            console.log(gameVariables)
        }
        
    },

    increaseBreath(){

        const cost = {
            glucose: 2
        }
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions");
        } else if(gameStatus.increaseBreath === true){
            console.log("Breathing is already increased!")
        } else if(gameController.checkResources(cost, gameVariables)){
            gameVariables.glucose -= 2;
            gameStatus.increaseBreath = true
            gameVariables.actions -= 1;
            console.log("The respiratory system has increased breathing, bringing more oxygen into the body!") 
        }
        
    },

    releaseCO2(){

        const cost = {
            glucose: 2,
            amino: 2,
            water: 2
        }
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else if(gameController.checkResources(cost,gameVariables)){
            gameVariables.co2 -= 10;
            gameVariables.glucose -= 2;
            gameVariables.amino -=2;
            gameVariables.water -=2;
            gameVariables.actions -=1
        }
    },

    exerciseResp(){

        const cost = {
            glucose: 3 + gameController.upgradeRate,
            amino: 3 + gameController.upgradeRate,
        }
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else if(gameController.checkResources(cost,gameVariables)){
            gameVariables.glucose -= cost.glucose;
            gameVariables.amino -= cost.amino;
            gameVariables.actions -= 1;
            gameVariables.co2 += 3;
            gameStatus.exerciseLungs = true;

        }
    }
}

const circSystem = {
    makeAvailable(){
        
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions")
        }else if(gameStatus.increaseHeart === true){
            gameVariables.oxygen += gameVariables.poxygen;
            gameVariables.poxygen = 0;
            gameVariables.amino += gameVariables.pamino;
            gameVariables.pamino = 0;
            gameVariables.glucose += gameVariables.pglucose;
            gameVariables.pglucose = 0;
            gameVariables.water += gameVariables.pwater;
            gameVariables.pwater = 0;
            gameVariables.actions -= 1;
            gameVariables.co2 += 2;
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
            gameVariables.co2 += 5;

        }
    },

    increaseHeart(){
        let cost = {
            glucose: 2
        }
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions");
        } else if(gameStatus.increaseHeart === true){
            console.log("Heart rate is already increased!")
        } else if(gameController.checkResources(cost,gameVariables)){
            gameStatus.increaseHeart = true;
            gameVariables.glucose -=2;
            gameVariables.actions -= 1;
            console.log("The heart pumps faster, bringing more blood to the cells of the body!") 
        }
    }
}

const digestSystem = {
    getNutrients(){
        let cost = {
            amino: 1,
            glucose: 1
        }
        gameController.checkActions()
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else if(gameController.checkResources(cost,gameVariables)){
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
        cost = {
            amino: 2,
            glucose: 1
        }
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else if(gameController.checkResources(cost, gameVariables)){
            gameVariables.actions -=1;
            gameVariables.pamino = gameVariables.protein*2 + gameVariables.pamino;
            gameVariables.pglucose = gameVariables.carbs*2 + gameVariables.pglucose;
            gameVariables.carbs = 0;
            gameVariables.protein = 0;
            gameVariables.co2 += 3;
            gameVariables.amino -=2;
            gameVariables.glucose -=1;

        }
    }
}

const endoSystem = {
    produceMel(){
       const cost = {
            amino: 3,
            glucose: 1
        }
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else if(gameController.checkResources(cost, gameVariables)) {
            gameVariables.actions -= 1;
            gameVariables.amino -= 3;
            gameVariables.glucose -= 1;
            gameStatus.melatoninOn = true;
            console.log("Melatonin produced!")
        }
    },

    produceAdr(){
        const cost = {
            amino: 3,
            glucose: 1
        }
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else if(gameController.checkResources(cost, gameVariables)) {
            gameVariables.actions -= 1;
            gameVariables.amino -= 3;
            gameVariables.glucose -= 1;
            gameStatus.adrenOn = true;
            console.log("Adrenaline produced!")
        }
    },

    produceIns(){
        const cost = {
            amino: 3,
            glucose: 1
        }
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else if(gameController.checkResources(cost, gameVariables)){
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
        cost = {
            oxygen: 2,
            glucose: 2,
            water: 2,
            amino: 2
        }
        gameController.checkActions()
        if(gameVariables.actions === 0){
            console.log("out of actions");
            DOM.displayMessage.textContent = "Out of actions"
        } else if(gameStatus.regulateOn === true){
            DOM.displayMessage.textContent = "Regulate Systems is already active"
        } 
        
        else if (gameController.checkResources(cost, gameVariables)){
            gameStatus.regulateOn = true;
            gameVariables.oxygen -= 2;
            gameVariables.glucose -= 2;
            gameVariables.water -= 2;
            gameVariables.amino -= 2;
            gameVariables.co2 += 2;
            gameVariables.actions--;
            DOM.displayMessage.textContent = "Regulate on";
            DOM.regulateImg.style.display = "block";
            display.updateDisplay()

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
        const cost = {
            amino: 3,
            water: 3,
            glucose: 3,
            oxygen: 3
        }
        gameController.checkActions()
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else if(gameStatus.melatoninOn === true && gameController.checkResources(cost,gameVariables)){
            gameStatus.melatoninOn = false;
            gameVariables.amino-=3;
            gameVariables.water-=3;
            gameVariables.glucose-=3;
            gameVariables.oxygen-=3;
            gameVariables.health+=2;
            gameVariables.actions-=1
        } else if(gameController.checkResources(cost, gameVariables)){
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
    produceBacteria(){
        cost = {
            amino: 2
        }
        gameController.checkActions()
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else if(gameController.checkResources(cost, gameVariables)){
            gameStatus.bacteriaAnti = true;
            gameVariables.amino-=2
            gameVariables.actions -=1;
        }
    },
    produceFlu(){
        cost = {
            amino: 2
        }
        gameController.checkActions()
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else if(gameController.checkResources(cost, gameVariables)){
            gameStatus.fluAnti = true;
            gameVariables.amino-=2
            gameVariables.actions -=1;
        }
    },
    produceParasite(){
        cost = {
            amino: 2
        }
        gameController.checkActions()
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else if(gameController.checkResources(cost, gameVariables)){
            gameStatus.parasiteAnti = true;
            gameVariables.amino-=2
            gameVariables.actions -=1;
        }
    },

    produceMemoryCell(cell){
        const cost = {
            amino:2
        }
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else if(gameStatus.memCellCreated === false){
            console.log("You can't produce any memory cells yet.")

        } else if(cell === 1 && gameController.checkResources(cost,gameVariables)){
            if(gameStatus.fluCreated === false){
                DOM.displayMessage.textContent = "You can't produce flu memory cells yet."
            } else{
                DOM.displayMessage.textContent = "Flu memory cells produced!";
                gameStatus.fluMem = true;
                gameVariables.amino -= cost.amino
            }
        } else if(cell === 2 && gameController.checkResources(cost, gameVariables)){

        }
    }
}


const upgrades = {
    get respGluCost() {
        return 3 + gameController.upgradeRate
    },
    upgradeHealth(){
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else if(gameStatus.exerciseHeart === true && gameStatus.exerciseLungs === true){
            gameVariables.maxHealth += 5;
            gameController.upgradeRate += 2;
            DOM.regulateTool.innerHTML = `Cost is <span id="test-span"></span>`
            DOM.testSpan = document.querySelector("#test-span")
            DOM.testSpan.textContent = `${this.respGluCost} glucose`
        } else {
            console.log("have not met conditions")
        }
    }
}





display.updateDisplay();


const DOM = {

    actionMessage: "No more remaining actions.",

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
    sweatBtnTool: document.querySelector("#sweat-btn-tooltip"),
    sweatImg: document.querySelector("#picture-2"),
    sweatImgTool: document.querySelector("#sweat-tooltip"),
    getOxBtn: document.querySelector("#get-oxygen"),
    getOxTool: document.querySelector("#get-oxygen-tooltip"),
    breathBtn: document.querySelector("#breathing-btn"),
    breathBtnTool: document.querySelector("#breathing-btn-tooltip"),
    breathImg: document.querySelector("#picture-3"),
    breathImgTool: document.querySelector("#breathing-tooltip"),
    exerciseLungBtn: document.querySelector("#resp-exercise"),
    exerciseTool: document.querySelector("#resp-exercise-tooltip"),
    exerciseImg: document.querySelector("#picture-4"),
    exerciseImgTool: document.querySelector("#exercise-lungs-tooltip"),
    releaseCO2Btn: document.querySelector("#release-co2"),
    releaseCO2Tool: document.querySelector("#release-co2-tooltip"),
    transportBtn: document.querySelector("#transport-btn"),
    transportTool: document.querySelector("#transport-tooltip"),
    increaseHeartBtn: document.querySelector("#increase-heart-btn"),
    increaseHeartTool: document.querySelector("#increase-heart-tooltip"),
    increaseHeartImg: document.querySelector("#picture-5"),
    increaseHeartImgTool: document.querySelector("#heart-rate-tooltip"),
    exerciseHeartBtn: document.querySelector("#exercise-heart-btn"),
    exerciseHeartTool: document.querySelector("#exercise-heart-tooltip"),
    exerciseHeartImg: document.querySelector("#picture-6"),
    exerciseHeartImgTool: document.querySelector("#heart-exercise-tooltip"),

    

    memCellBtn: document.querySelector("#mem-cell-btn"),
    memCellBackBtn: document.querySelector("#mem-cell-back"),
    fluMemBtn: document.querySelector("#flu-mem-btn"),
    


    warnImg: document.querySelector("#picture-15"),
    WarnImgTool: document.querySelector("#warning-tooltip"),



    eventDisplay: document.querySelector("#event-text"),
    resolveBtn: document.querySelector("#resolve-button"),
    resolveTool: document.querySelector("#resolve-tooltip")


    
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

//nervous system buttons
DOM.regulateSystemsBtn.addEventListener("click",function(){
    nervSystem.regulateSystems()
})
DOM.regulateBtnTool.innerHTML = "Regulate all body systems together. Adds `<b>Regulate Systems</b>` status. <b>Cost:</b> 2 oxygen, 2 glucose, 2 water, 2 amino acids";

DOM.sleepBtn.addEventListener("click", function(){
    nervSystem.goSleep()
})
DOM.sleepBtnTool.innerHTML = "Causes body to sleep. Restores 1 point of health. <b>Cost:</b> -3 oxygen, -3 glucose, -3 water, -3 amino acids"

DOM.sweatBtn.addEventListener("click", function(){
    nervSystem.produceSweat()
})
DOM.sweatBtnTool.innerHTML = "Causes body to sweat. Adds '<b>Sweating</b>' status. <b>Cost:</b> -3 water."

//respiratory system buttons
DOM.getOxBtn.addEventListener("click", function(){
    respSystem.getOxygen()
})
DOM.getOxTool.innerHTML = `Bring oxygen into the body by inhaling. Increase <b>potential</b> oxygen by 4`

DOM.breathBtn.addEventListener("click", function(){
    respSystem.increaseBreath()
})
DOM.breathBtnTool.innerHTML="Increase breathing rate. Adds <b>'Increased Breathing'</b> status. <b>Cost:</b> -2 glucose."

DOM.exerciseLungBtn.addEventListener("click", function(){
    respSystem.exerciseResp()
})
DOM.exerciseTool.innerHTML = `Adds <b>Exercise Respiratory System</b> status. Chance of causing <b>Overheat</b>. <b>Cost:</b> -3 glucose, +3 carbon dioxide`

DOM.releaseCO2Btn.addEventListener("click", function(){
    respSystem.releaseCO2()
})
DOM.releaseCO2Tool.innerHTML = `Releases all carbon dioxide in the body. <b>Cost:</b> -2 glucose, -2 amino acids and -2 water`

//circulatory system buttons

DOM.transportBtn.addEventListener("click", function(){
    circSystem.makeAvailable();
})
DOM.transportTool.innerHTML = `Transports nutrients through the blood. Move all <b>potential</b> resources to <b>available</b> resources. <b>Cost:</b> +5 carbon dioxide. `

DOM.increaseHeartBtn.addEventListener("click", function(){
    circSystem.increaseHeart()
})
DOM.increaseHeartTool.innerHTML = `Heart rate increases. Adds <b>Increased Heart Rate</b> status. <b>Cost:</b> -2 glucose, +2 carbon dioxide`

DOM.exerciseHeartBtn.addEventListener("click", function(){
    circSystem.exerciseCirc()
})
DOM.exerciseHeartTool.innerHTML = `Adds <b>Exercise Circulatory System</b> status. Chance of causing <b>Overheat</b>. <b>Cost:</b> -2 glucose, +2 carbon dioxide`


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


//status effects

DOM.warnImg.addEventListener("click", function(){
    DOM.resolveBtn.onclick = function(){
        gameStatus.clearStatus2("overheat");
    }
    DOM.resolveTool.innerHTML = "test test test"
    DOM.eventDisplay.textContent = "also a test"
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

        

    },

    turnRed(div){
        div.style.color = "red"
        setTimeout(function(){
            div.style.color = "";
        },900)
    },

    turnGreen(div){
        div.style.color = "green"
        setTimeout(function(){
            div.style.color = "";
        },900)
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
    },

    setResolve(action){
        DOM.resolveBtn.onclick = action
    },

    clearStatus2(status){
        gameController.checkActions();
        if(gameVariables.actions === 0){
            DOM.displayMessage.textContent = DOM.actionMessage
        } else if(status === "overheat"){
            DOM.eventDisplay.textContent = "test overheat";
            DOM.resolveTool.innerHTML = "No event selected";
            DOM.resolveBtn.onclick = null
        }
    }
  }

const gameController = {
    noActions: false,
    turnCount: 1,
    healthRate: 1,
    upgradeRate: 2,
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
            
            gameVariables.actions = 3;
            if(gameStatus.co2Over === true){
                gameVariables.actions -=1
            }

            if(gameStatus.increaseHeart === true){
                if(gameStatus.increaseHeartCount === 0){
                    gameStatus.increaseHeart = false;
                    DOM.exerciseHeartImg.style.display = "none"
                } else{
                    gameStatus.increaseHeartCount -=1
                }
            }

            if(gameStatus.increaseBreath === true){
                if(gameStatus.increaseBreathCount === 0){
                    gameStatus.increaseBreath = false;
                    DOM.breathImg.style.display = "none"
                } else{
                    gameStatus.increaseBreathCount -=1
                }
            }

            if(gameStatus.sweatOn === true){
                if(gameStatus.sweatOnCount === 1){
                    gameStatus.sweatOn=false;
                    gameStatus.sweatOnCount = 3;
                    DOM.sweatImg.style.display = "none"
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
            let conditionsMet = 0
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
                conditionsMet+= Math.floor(gameVariables.co2/10)
            }
            if(condition5){
                conditionsMet++
            }
            gameVariables.health = Math.max(0,gameVariables.health -= conditionsMet);
            console.log(gameVariables);
            console.log(gameController);
            this.turnCount++;
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
            console.log("out of actions");
            DOM.displayMessage.innerHTML = DOM.actionMessage
        } else if(gameStatus.increaseBreath === true){
            gameVariables.poxygen += 8;
            gameVariables.actions-=1;
            DOM.displayMessage.innerHTML = "More oxygen has been brought inside the body."
            display.updateDisplay();
            display.turnGreen(DOM.unOxDisplay);
            display.turnRed(DOM.actionDisplay);
        } else{
            gameVariables.poxygen += 4;
            gameVariables.actions -= 1;
            DOM.displayMessage.innerHTML = "More oxygen has been brought inside the body."
            display.updateDisplay();
            display.turnGreen(DOM.unOxDisplay);
            display.turnRed(DOM.actionDisplay);
        }
        
    },

    increaseBreath(){

        const cost = {
            glucose: 2
        }
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions");
            DOM.displayMessage.innerHTML = DOM.actionMessage
        } else if(gameStatus.increaseBreath === true){
            console.log("Breathing is already increased!");
            DOM.displayMessage.innerHTML = 'Breathing is already increased!'
        } else if(gameController.checkResources(cost, gameVariables)){
            gameVariables.glucose -= cost.glucose;
            gameStatus.increaseBreath = true
            gameVariables.actions -= 1;
            DOM.breathImg.style.display = "grid";
            DOM.displayMessage.innerHTML = "The respiratory system has increased breathing, bringing more oxygen into the body!";
            display.updateDisplay();
            display.turnRed(DOM.avGluDisplay);
            display.turnRed(DOM.actionDisplay);

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
            console.log("out of actions");
            DOM.displayMessage.textContent = DOM.actionMessage
        } else if(gameController.checkResources(cost,gameVariables)){
            gameVariables.co2 = Math.max(0,gameVariables.co2 - 10);
            gameVariables.glucose -= cost.glucose;
            gameVariables.amino -=cost.amino;
            gameVariables.water -=cost.water;
            gameVariables.actions -=1;
            DOM.displayMessage.textContent = "Carbon dioxide has been released from the body!"
            display.updateDisplay();
            display.turnRed(DOM.co2Display);
            display.turnRed(DOM.avGluDisplay);
            display.turnRed(DOM.avAmiDisplay);
            display.turnRed(DOM.avWatDisplay);
            display.turnRed(DOM.actionDisplay);
        }
    },

    exerciseResp(){

        const cost = {
            glucose: 3 + gameController.upgradeRate,
            amino: 3 + gameController.upgradeRate,
        }

        console.log(cost)

        gameController.checkActions();
        if(gameStatus.exerciseLungs === true){
            DOM.displayMessage.textContent = "You have already exercised!"
            return
        }
        
        if(gameVariables.actions === 0){
            console.log("out of actions");
            DOM.displayMessage.textContent = DOM.actionMessage
        } else if(gameController.checkResources(cost,gameVariables)){
            gameVariables.glucose -= cost.glucose;
            gameVariables.amino -= cost.amino;
            gameVariables.actions -= 1;
            gameVariables.co2 += 3;
            gameStatus.exerciseLungs = true;
            DOM.displayMessage.textContent = "The respiratory system is strengthened after exercise!";
            DOM.exerciseImg.style.display = "grid";
            display.updateDisplay();
            display.turnRed(DOM.avGluDisplay);
            display.turnRed(DOM.avAmiDisplay);
            display.turnRed(DOM.actionDisplay);
            display.turnGreen(DOM.co2Display);
            if(gameStatus.eventActive === false){
                let randomNumber = Math.floor(Math.random() * 2) + 1;
                if(randomNumber === 1){
                    gameStatus.eventActive = true;
                    gameStatus.overheatOn = true;
                    DOM.warnImg.style.display = "grid";

                }
            }

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
            DOM.displayMessage.textContent = "Nutrients have been transported to the cells of the body!"
            display.updateDisplay()
            display.turnGreen(DOM.avOxDisplay);
            display.turnGreen(DOM.avAmiDisplay);
            display.turnGreen(DOM.avGluDisplay);
            display.turnGreen(DOM.avWatDisplay);
            display.turnRed(DOM.unAminoDisplay);
            display.turnRed(DOM.unGluDisplay);
            display.turnRed(DOM.unOxDisplay);
            display.turnRed(DOM.unWaterDisplay);
            display.turnGreen(DOM.co2Display);
            DOM.turnRed(DOM.actionDisplay);
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
            DOM.displayMessage.textContent = "Nutrients have been transported to the cells of the body!"
            display.updateDisplay()
            display.turnGreen(DOM.avOxDisplay);
            display.turnGreen(DOM.avAmiDisplay);
            display.turnGreen(DOM.avGluDisplay);
            display.turnGreen(DOM.avWatDisplay);
            display.turnRed(DOM.unAminoDisplay);
            display.turnRed(DOM.unGluDisplay);
            display.turnRed(DOM.unOxDisplay);
            display.turnRed(DOM.unWaterDisplay);
            display.turnGreen(DOM.co2Display);
            DOM.turnRed(DOM.actionDisplay);


        }
    },

    increaseHeart(){
        let cost = {
            glucose: 2
        }
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions");
            DOM.displayMessage.textContent = DOM.actionMessage
        } else if(gameStatus.increaseHeart === true){
            console.log("Heart rate is already increased!");
            DOM.displayMessage.textContent = 'Heart rate is already increased!'
        } else if(gameController.checkResources(cost,gameVariables)){
            gameStatus.increaseHeart = true;
            gameVariables.glucose -=cost.glucose;
            gameVariables.co2 += 2;
            gameVariables.actions -= 1;
            DOM.displayMessage.textContent = 'Heart rate has been increased!'
            DOM.increaseHeartImg.style.display = "grid";
            display.updateDisplay();
            display.turnRed(DOM.avGluDisplay);
            display.turnRed(DOM.actionDisplay);
            display.turnGreen(DOM.co2Display);
            
        }
    },


    exerciseCirc(){

        const cost = {
            glucose: 3 + gameController.upgradeRate,
            amino: 3 + gameController.upgradeRate,
        }

        console.log(cost)

        gameController.checkActions();
        if(gameStatus.exerciseHeart === true){
            DOM.displayMessage.textContent = "You have already exercised!"
            return
        }
        
        if(gameVariables.actions === 0){
            console.log("out of actions");
            DOM.displayMessage.textContent = DOM.actionMessage
        } else if(gameController.checkResources(cost,gameVariables)){
            gameVariables.glucose -= cost.glucose;
            gameVariables.amino -= cost.amino;
            gameVariables.actions -= 1;
            gameVariables.co2 += 3;
            gameStatus.exerciseHeart = true;
            DOM.displayMessage.textContent = "The circulatory system is strengthened after exercise!";
            DOM.exerciseHeartImg.style.display = "grid";
            display.updateDisplay();
            display.turnRed(DOM.avGluDisplay);
            display.turnRed(DOM.avAmiDisplay);
            display.turnRed(DOM.actionDisplay);
            display.turnGreen(DOM.co2Display);
            if(gameStatus.eventActive === false){
                let randomNumber = Math.floor(Math.random() * 2) + 1;
                if(randomNumber === 1){
                    gameStatus.eventActive = true;
                    gameStatus.overheatOn = true;
                    DOM.warnImg.style.display = "grid";

                }
            }

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
       const cost = {
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
        const cost = {
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

       const cost = {
            water: 3
        }
        gameController.checkActions()
        if(gameVariables.actions === 0){
            console.log("out of actions");
            DOM.displayMessage.textContent = DOM.actionMessage
        } else if(gameController.checkResources(cost, gameVariables)){
            gameStatus.sweatOn = true;
            gameVariables.actions -= 1;
            gameVariables.water -= cost.water;
            DOM.sweatImg.style.display = "grid"
            display.updateDisplay();
            display.turnRed(DOM.actionDisplay);
            display.turnRed(DOM.avWatDisplay);

        }
    },

    goSleep(){
        let costAddition = 0;
        if(gameStatus.troubleSleep === true){
            costAddition = 3;
        } 

        const cost = {
            amino: 3 + costAddition,
            water: 3,
            glucose: 3,
            oxygen: 3
        }

        if(gameVariables.health/gameVariables.maxHealth === 1){
            DOM.displayMessage.textContent = "Health is already full!";
            return;
        }
        gameController.checkActions()
        if(gameVariables.actions === 0){
            console.log("out of actions");
            DOM.displayMessage.textContent = DOM.actionMessage
        } else if(gameStatus.melatoninOn === true && gameController.checkResources(cost,gameVariables)){
            gameStatus.melatoninOn = false;
            gameVariables.amino-=cost.amino;
            gameVariables.water-=cost.water;
            gameVariables.glucose-=cost.glucose;
            gameVariables.oxygen-=cost.oxygen;
            gameVariables.health = Math.min(gameVariables.health+2,gameVariables.maxHealth);
            gameVariables.actions-=1
        } else if(gameController.checkResources(cost, gameVariables)){
            gameVariables.amino-=cost.amino;
            gameVariables.water-=cost.water;
            gameVariables.glucose-=cost.glucose;
            gameVariables.oxygen-=cost.oxygen;
            gameVariables.health = Math.min(gameVariables.health+1,gameVariables.maxHealth);
            gameVariables.actions-=1
        }
    }
}

const immuSystem = {
    produceBacteria(){
       const cost = {
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
       const cost = {
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
        const cost = {
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
        return {
            glucose: 3 + gameController.upgradeRate
        }
    },
    upgradeHealth(){
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions")
        } else if(gameStatus.exerciseHeart === true && gameStatus.exerciseLungs === true){
            gameVariables.maxHealth += 5;
            gameController.upgradeRate += 2;
            let statusMessage = 3 + gameController.upgradeRate;
            DOM.exerciseTool.innerHTML = `Adds <b>Exercise Respiratory System</b> status. Chance of causing <b>Overheat</b>. <b>Cost:</b> ${statusMessage} glucose`
        } else {
            console.log("have not met conditions")
        }
    }
}





display.updateDisplay();
DOM.regulateImgTool.innerHTML= `<b>Regulate Systems:</b> Prevents health loss when ending turn. Turns Remaining: ${gameStatus.regulateOnCount}`;
DOM.breathImgTool.innerHTML = `<b>Increased Breathing:</b> While active, increase <b>potential</b> oxygen by additional 4 when using <b>Get Oxygen</b>. Turns Remaining: ${gameStatus.increaseBreathCount}`;
DOM.sweatImgTool.innerHTML = `<b>Sweating:</b> Can help lower body temperature when overheated. Turns Remaining: ${gameStatus.sweatOnCount}`
DOM.exerciseImgTool.innerHTML = `<b>Exercise Respiratory System:</b> Exercise has made the repiratory system more efficient!`
DOM.increaseHeartImgTool.innerHTML= `<b>Increased Heart Rate:</b> While active, carbon dioxide gain is reduced to 2 when using <b>Transport Nutrients</b>. Turns Remaining: ${gameStatus.increaseHeartCount}`
DOM.exerciseHeartImgTool.innerHTML = `<b>Exercise Circulatory System:</b> Exercise has made the circulatory system more efficient!`


DOM.WarnImgTool.innerHTML = `<b>Overheat:</b> The body overheated after exercise! While active, lose 1 <b>action</b> every turn.`






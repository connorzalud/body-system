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
    healthDisplayTool: document.querySelector("#health-tooltip"),
    turnDisplay: document.querySelector(".turn-display"),
    co2Display: document.querySelector(".co2-display"),
    avOxDisplay: document.querySelector(".oxygen-av"),
    avOxTool: document.querySelector("#av-ox-tooltip"),
    avAmiDisplay: document.querySelector(".amino-av"),
    avAmiTool: document.querySelector("#av-ami-tooltip"),
    avWatDisplay: document.querySelector(".water-av"),
    avWatTool: document.querySelector("#av-water-tooltip"),
    avCarbDisplay: document.querySelector(".carbs-av"),
    avGluDisplay: document.querySelector(".glucose-av"),
    avGluTool: document.querySelector("#av-glu-tooltip"),
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
    breakBtn: document.querySelector("#break-btn"),
    breakTool: document.querySelector("#break-tooltip"),
    getNutrientsBtn: document.querySelector("#nutrients-btn"),
    getNutrientsTool: document.querySelector("#nutrients-tooltip"),
    insulinBtn:document.querySelector("#insulin-btn"),
    insulinTool:document.querySelector("#insulin-tooltip"),
    insulinImg:document.querySelector("#picture-9"),
    insulinImgTool:document.querySelector("#insulin-img-tooltip"),
    adrenBtn: document.querySelector("#adren-btn"),
    adrenTool: document.querySelector("#adren-tooltip"),
    adrenImg: document.querySelector("#picture-8"),
    adrenImgTool: document.querySelector("#adrenaline-img-tooltip"),
    melaBtn: document.querySelector("#mela-btn"),
    melaTool: document.querySelector("#mela-tooltip"),
    melaImg: document.querySelector("#picture-7"),
    melaImgTool: document.querySelector("#melatonin-img-tooltip"),
    fluBtn: document.querySelector("#flu-btn"),
    fluBtnTool: document.querySelector("#flu-btn-tooltip"),
    fluImg: document.querySelector("#picture-10"),
    fluImgTool: document.querySelector("#flu-antibody-tooltip"),
    bacBtn: document.querySelector("#bac-btn"),
    bacBtnTool: document.querySelector("#bac-btn-tooltip"),
    bacImg: document.querySelector("#picture-11"),
    bacImgTool: document.querySelector("#bacteria-antibody-tooltip"),
    parabtn: document.querySelector("#para-btn"),
    parabtnTool: document.querySelector("#para-btn-tooltip"),
    paraImg: document.querySelector("#picture-12"),
    paraImgTool: document.querySelector("#parasite-antibody-tooltip"),
    

    

    memCellBtn: document.querySelector("#mem-cell-btn"),
    memCellBackBtn: document.querySelector("#mem-cell-back"),
    fluMemBtn: document.querySelector("#flu-mem-btn"),
    fluMemTool: document.querySelector("#flu-mem-btn-tooltip"),
    fluMemImg: document.querySelector("#picture-17"),
    fluMemImgTool: document.querySelector("#flu-mem-tooltip"),
    bacMemBtn: document.querySelector("#bac-mem-btn"),
    bacMemBtnTool: document.querySelector("#bac-mem-btn-tooltip"),
    bacMemImg: document.querySelector("#picture-18"),
    bacMemImgTool: document.querySelector("#bac-mem-tooltip"),
    paraMemBtn: document.querySelector("#para-mem-btn"),
    paraMemBtnTool: document.querySelector("#para-mem-btn-tooltip"),
    paraMemImg: document.querySelector("#picture-16"),
    paraMemImgTool: document.querySelector("#para-mem-tooltip"),

    


    overheatImg: document.querySelector("#picture-15"),
    overheatImgTool: document.querySelector("#overheat-tooltip"),
    lowEnergyImg: document.querySelector("#picture-14"),
    lowEnergyImgTool: document.querySelector("#low-energy-img-tooltip"),
    injuryImg: document.querySelector("#picture-19"),
    injuryImgTool: document.querySelector("#injury-tooltip"),
    fluPathImg: document.querySelector("#picture-13"),
    fluPathImgTool: document.querySelector("#flu-pathogen"),
    bacPathImg: document.querySelector("#picture-20"),
    bacPathImgTool: document.querySelector("#bacteria-pathogen"),
    paraPathImg: document.querySelector("#picture-21"),
    paraPathImgTool: document.querySelector("#parasite-pathogen"),



    eventDisplay: document.querySelector("#event-text"),
    resolveBtn: document.querySelector("#resolve-button"),
    resolveTool: document.querySelector("#resolve-tooltip"),

    upgradeHealthBtn: document.querySelector("#upgrade-health"),
    upgradeHealthTool: document.querySelector("#upgrade-health-tooltip"),
    upgradeActionsBtn: document.querySelector("#upgrade-actions"),
    upgradeActionsTool: document.querySelector("#upgrade-actions-tooltip"),
    neuralBtn: document.querySelector("#neural-btn"),
    neuralBtnTool: document.querySelector("#neural-btn-tooltip"),
    neuralImg: document.querySelector("#picture-22"),
    neuralImgTool: document.querySelector("#neural-tooltip"),
    completeNeuralImg: document.querySelector("#picture-23"),
    completeNeuralImgTool: document.querySelector("#complete-neural-tooltip"),
    upgradeNeuralImg: document.querySelector("#picture-24"),
    upgradeNeuralImgTool: document.querySelector("#upgrade-neural-tooltip"),




    
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
    gameController.endTurn2()
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

DOM.neuralBtn.addEventListener("click", function(){
    nervSystem.neuralNetwork()
})
DOM.neuralBtnTool.innerHTML = `Begins to grow neural networks. Adds <b>Strenghthen Neural Networks</b> status. <b>Cost:</b> -4 glucose, -8 oxygen, -4 amino acids.`

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
DOM.exerciseTool.innerHTML = `Adds <b>Exercise Respiratory System</b> status. Chance of causing <b>Overheat</b>. <b>Cost:</b> -3 glucose, -3 amino acids, -3 oxygen, +3 carbon dioxide`

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
DOM.increaseHeartTool.innerHTML = `Heart rate increases. Adds <b>Increased Heart Rate</b> status. <b>Cost:</b> -2 glucose, -1 oxygen, +2 carbon dioxide`

DOM.exerciseHeartBtn.addEventListener("click", function(){
    circSystem.exerciseCirc()
})
DOM.exerciseHeartTool.innerHTML = `Adds <b>Exercise Circulatory System</b> status. Chance of causing <b>Overheat</b>. <b>Cost:</b> -2 glucose, +2 carbon dioxide`


//digestive system buttons
DOM.getNutrientsBtn.addEventListener("click", function(){
    digestSystem.getNutrients()
})
DOM.getNutrientsTool.innerHTML = `Bring nutrients into the body. Increase <b>potential</b> water by 3, carbs by 2 and protein by 2. <b>Cost:</b> -1 glucose, -1, amino acids, +2 carbon dioxide.`

DOM.breakBtn.addEventListener("click", function(){
    digestSystem.digestNutrients()
})
DOM.breakTool.innerHTML = `Breaks down large nutrients. Double the number of carbs and proteins and adds that amount to <b>potential</b> glucose and amino acids. Set carbs and protein to 0. <b>Cost:</b> -1 glucose, -2 amino acids, +3 carbon dioxide`


//endocrine system buttons
DOM.insulinBtn.addEventListener("click", function (){
    endoSystem.produceIns()
})
DOM.insulinTool.innerHTML = `Produces insulin. Adds <b>Insulin</b> status. <b>Cost:</b> -1 glucose, -3 amino acids.`

DOM.adrenBtn.addEventListener("click", function(){
    endoSystem.produceAdr()
})
DOM.adrenTool.innerHTML = `Produces adrenaline. Adds <b>Adrenaline</b> status. <b>Cost:</b> -1 glucose, -3 amino acids.`

DOM.melaBtn.addEventListener("click", function(){
    endoSystem.produceMel()
})
DOM.melaTool.innerHTML = `Produces melatonin. Adds <b>Melatonin</b> status. <b>Cost:</b> -1 glucose, -3 amino acids.`



//immune system buttons

DOM.fluBtn.addEventListener("click", function(){
    immuSystem.produceFlu()
})
DOM.fluBtnTool.innerHTML = `Produce flu antibodies. Adds <b>Flu Antibodies</b> status. <b>Cost:</b> -2 amino acids`

DOM.bacBtn.addEventListener("click", function(){
    immuSystem.produceBacteria()
})
DOM.bacBtnTool.innerHTML= `Produce bacteria antibodies. Adds <b>Bacteria Antibodies</b> status. <b>Cost:</b> -2 amino acids`

DOM.parabtn.addEventListener("click", function(){
    immuSystem.produceParasite()
})
DOM.parabtnTool.innerHTML = `Produce parasite antibodies. Adds <b>Parasite Antibodies</b> status. <b>Cost:</b> -2 amino acids`


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
DOM.fluMemTool.innerHTML = `Produce flu memory cells. Adds <b>Flu Memory Cells</b> status. <b>Cost: 2 amino acids</b>`

DOM.bacMemBtn.addEventListener("click", function(){
    immuSystem.produceMemoryCell(2)
})
DOM.bacMemBtnTool.innerHTML = `Produce bacteria memory cells. Adds <b>Bacteria Memory Cells</b> status. <b>Cost: 2 amino acids</b>`

DOM.paraMemBtn.addEventListener("click", function(){
    immuSystem.produceMemoryCell(3)
})
DOM.paraMemBtnTool.innerHTML = `Produce parasite memory cells. Adds <b>Parasite Memory Cells</b> status. <b>Cost: 2 amino acids</b>`

//status effects

DOM.overheatImg.addEventListener("click", function(){
    gameStatus.currentStatus = "overheat"
    DOM.resolveTool.innerHTML = "<b>Cost:</b> <b>Sweating</b> must be active. Will become inactive when resolved."
    DOM.eventDisplay.textContent = "The body has overheated!"
})

DOM.lowEnergyImg.addEventListener("click", function(){
    gameStatus.currentStatus = "lowEnergy";
    DOM.resolveTool.innerHTML = `<b>Cost:</b> <b>Increased Heart Rate</b> and <b>Increased Breathing</b> must be active. Both will become inactive when resolved.`;
    DOM.eventDisplay.textContent = `The body has low energy and cannot function properly!`
})

DOM.injuryImg.addEventListener("click", function(){
    gameStatus.currentStatus = "injury";
    DOM.resolveTool.innerHTML = `<b>Cost:</b> 5 amino acids`;
    DOM.eventDisplay.textContent = `The body is injured!`;
})


DOM.resolveBtn.onclick = function (){
    gameStatus.clearStatus2(gameStatus.currentStatus);
}


//upgrades

DOM.upgradeActionsBtn.addEventListener("click", function(){
    upgrades.upgradeActions()
})
DOM.upgradeActionsTool.innerHTML = `Requires strong neural networks to upgrade!`

DOM.upgradeHealthBtn.addEventListener("click", function(){
    upgrades.upgradeHealth()
})
DOM.upgradeHealthTool.innerHTML = `Requires exercise to upgrade!`

const display = {

    updateDisplay(){
        DOM.actionDisplay.innerHTML = `<b>Actions:</b> ${gameVariables.actions}`;
        DOM.unOxDisplay.innerHTML = `<b>Oxygen</b>: ${gameVariables.poxygen}`;
        DOM.unAminoDisplay.innerHTML = `<b>Amino Acids</b>: ${gameVariables.pamino}`;
        DOM.unGluDisplay.innerHTML = `<b>Glucose</b>: ${gameVariables.pglucose}`;
        DOM.unWaterDisplay.innerHTML = `<b>Water</b>: ${gameVariables.pwater}`;
        DOM.avWatDisplay.innerHTML = `<b>Water</b>: ${gameVariables.water}`;
        DOM.avWatTool.innerHTML = `<b>Cost per turn:</b> ${gameController.waterCost}`
        DOM.avOxDisplay.innerHTML = `<b>Oxygen</b>: ${gameVariables.oxygen}`;
        DOM.avOxTool.innerHTML = `<b>Cost per turn:</b> ${gameController.oxygenCost}`
        DOM.avAmiDisplay.innerHTML = `<b>Amino Acids</b>: ${gameVariables.amino}`;
        DOM.avAmiTool.innerHTML = `<b>Cost per turn:</b> ${gameController.aminoCost}`
        DOM.avCarbDisplay.innerHTML = `<b>Carbs</b>: ${gameVariables.carbs}`;
        DOM.avGluDisplay.innerHTML = `<b>Glucose</b>: ${gameVariables.glucose}`;
        DOM.avGluTool.innerHTML = `<b>Cost per turn:</b> ${gameController.glucoseCost}`
        DOM.avWatDisplay.innerHTML = `<b>Water</b>: ${gameVariables.water}`;
        DOM.avProDisplay.innerHTML = `<b>Protein</b>: ${gameVariables.protein}`;
        DOM.turnDisplay.innerHTML= `<b>Turn:</b> ${gameController.turnCount}`
        DOM.healthDisplay.innerHTML=`<b>Health:</b> ${gameVariables.health}/${gameVariables.maxHealth}`;
        DOM.healthDisplayTool.innerHTML = `<b>Health loss per turn:</b> ${gameController.healthRate}`
        DOM.co2Display.innerHTML= `<b>Carbon Dioxide:</b> ${gameVariables.co2}`;

        DOM.regulateImgTool.innerHTML= `<b>Regulate Systems:</b> Prevents health loss when ending turn. Turns Remaining: ${gameStatus.regulateOnCount}`;
        DOM.breathImgTool.innerHTML = `<b>Increased Breathing:</b> While active, increase <b>potential</b> oxygen by additional 4 when using <b>Get Oxygen</b>. Turns Remaining: ${gameStatus.increaseBreathCount}`;
        DOM.sweatImgTool.innerHTML = `<b>Sweating:</b> Can help lower body temperature when overheated. Turns Remaining: ${gameStatus.sweatOnCount}`
        DOM.exerciseImgTool.innerHTML = `<b>Exercise Respiratory System:</b> Exercise has made the repiratory system more efficient!`
        DOM.increaseHeartImgTool.innerHTML= `<b>Increased Heart Rate:</b> While active, carbon dioxide gain is reduced to 2 when using <b>Transport Nutrients</b>. Turns Remaining: ${gameStatus.increaseHeartCount}`
        DOM.exerciseHeartImgTool.innerHTML = `<b>Exercise Circulatory System:</b> Exercise has made the circulatory system more efficient!`
        DOM.insulinImgTool.innerHTML = `<b>Insulin:</b> While active, increase <b>available</b> glucose by 4 at the end of the turn. Turns Remaining: ${gameStatus.insCount}`;
        DOM.adrenImgTool.innerHTML = `<b>Adrenaline:</b> While active, increase <b>available</b> oxygen by 4 at the end of the turn. Turns Remaining: ${gameStatus.adrenCount}`
        DOM.melaImgTool.innerHTML = `<b>Melatonin:</b> While active, restore one additional point of health when using <b>Sleep</b>. Remains active until used.`
        DOM.fluImgTool.innerHTML = `<b>Flu Antibodies:</b> Produces antibodies which can defeat the flu. Takes time to work. Turns Remaining: ${gameStatus.fluAntiCount}`
        DOM.bacImgTool.innerHTML= `<b>Bacteria Antibodies:</b> Produces antibodies which can defeat bacteria. Takes time to work. Turns Remaining: ${gameStatus.bacteriaAntiCount}`
        DOM.paraImgTool.innerHTML = `<b>Parasite Antibodies:</b> Produces antibodies which can defeat parasites. Takes time to work. Turns Remaining: ${gameStatus.parasiteAntiCount}`
        DOM.fluMemImgTool.innerHTML = `<b>Flu Memory Cells:</b> While active, defeats the flu. Remains active until used.`
        DOM.bacMemImgTool.innerHTML = `<b>Bacteria Memory Cells:</b> While active, defeats bacteria. Remains active until used.`
        DOM.paraMemImgTool.innerHTML =  `<b>Parasite Memory Cells:</b> While active, defeats parasite. Remains active until used.`
        DOM.neuralImgTool.innerHTML = `<b>Strenghthen Neural Networks:</b> While active neurons are growing. Turns Remaining: ${gameStatus.neuralNetworkCount}`
        DOM.completeNeuralImgTool.innerHTML = `<b>Strenghthened Neural Networks:</b> Neural networks have become stronger! Upgrade is now available.`
        DOM.upgradeNeuralImgTool.innerHTML = `<b>Upgraded Neural Networks:</b> While active, gain one additional action at the end of every turn.`


        DOM.overheatImgTool.innerHTML = `<b>Overheat:</b> The body overheated after exercise! While active, lose 1 <b>action</b> at the end of each turn.`
        DOM.lowEnergyImgTool.innerHTML = `<b>Low Energy:</b> The body requires more energy to function! While active, lose 2 each <b>available</b> oxygen, glucose, water and amino acids at the end of each turn.`
        DOM.injuryImgTool.innerHTML = `<b>Injury</b>: The body has been injured! While active, lose one <b>health</b> at the end of each turn.`
        DOM.fluPathImgTool.innerHTML = `<b>Flu Infection:</b> The body is infected with the flu virus! While active, lose one <b>health</b> at the end of each turn.`
        DOM.bacPathImgTool.innerHTML = `<b>Bacterial Infection:</b> The body is infected with a bacteria! While active, lose one <b>health</b> at the end of each turn.`
        DOM.paraPathImgTool.innerHTML = `<b>Parasite Infection:</b> The body is infected with a parasite! While active, lose one <b>health</b> at the end of each turn.`




    },

    turnRed(div){
        div.style.color = "red"
        setTimeout(function(){
            div.style.color = "";
        },4000)
    },

    turnGreen(div){
        div.style.color = "green"
        setTimeout(function(){
            div.style.color = "";
        },4000)
    },

    flashImg(img){
        img.classList.add('flash-effect');

        setTimeout(function(){
            img.classList.remove('flash-effect')
        }, 4000)
    },

    endRed(div){
        div.style.color = "red"
        setTimeout(function(){
            div.style.color = "";
        },2000)
    }

}



  const gameStatus = {
    testCondition:false,

    eventActive: false,
    currentStatus: null,
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
    neuralNetwork: false,
    neuralNetworkCount:2,
    neuralNetworkComplete: false,
    actionsUpgraded: false,



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


    

    clearStatus2(status){
        gameController.checkActions();
        if(gameVariables.actions === 0){
            DOM.displayMessage.textContent = DOM.actionMessage
        } else if(status === null){
            DOM.eventDisplay.textContent = "no event selected";
        } else if(statusHandler[status]){
            statusHandler[status]();
            
            
        }
    }
  }


const statusHandler = {
    overheat: function() {

        if(gameStatus.sweatOn){
            DOM.eventDisplay.textContent = "The body sweats and cools itself down!";
            gameStatus.currentStatus = null;
            gameStatus.overheatOn = false;
            gameStatus.sweatOn = false;
            gameStatus.sweatOnCount = 3;
            gameVariables.actions -=1;
            DOM.sweatImg.style.display = "none";
            display.updateDisplay();
            display.turnRed(DOM.actionDisplay)
        } else{
            DOM.eventDisplay.textContent = "You cannot resolve the status yet."
        }
        
        
        
    },

    lowEnergy: function(){

        if(gameStatus.increaseBreath === true && gameStatus.increaseHeart === true){
            DOM.eventDisplay.textContent = "Increased breathing and heart rate has allowed the body to produce more energy!";
            gameStatus.currentStatus = null;
            gameStatus.lowEnergy = false;
            gameStatus.increaseHeart = false;
            gameStatus.increaseBreath = false;
            gameStatus.increaseHeartCount = 2;
            DOM.increaseHeartImg.style.display = "none";
            gameStatus.increaseBreathCount = 2;
            DOM.breathImg.style.display = "none";
            gameVariables.actions -= 1;
            display.updateDisplay();
            display.turnRed(DOM.actionDisplay)

            
        } else {
            DOM.eventDisplay.textContent = "You cannot resolve this status yet."
        }
    },

    injury: function(){
        if(gameVariables.amino >=5){
            DOM.eventDisplay.textContent = "The body is healed of the injury!";
            gameStatus.currentStatus = null
            gameStatus.injuryOn = false;
            gameVariables.amino -= 5;
            gameVariables.actions -= 1;
            DOM.injuryImg.style.display = "none";
            display.updateDisplay();
            display.turnRed(DOM.avAmiDisplay);
            display.turnRed(DOM.actionDisplay);
        } else{
            DOM.eventDisplay = "Not enough available resources to resolve the status."
        }
    }
}


const endTurn = {

    delay(ms){
        return new Promise(resolve=> setTimeout(resolve,ms))
    },

    async checkRegulate(){

        if(gameStatus.actionsUpgraded === true){
            gameVariables.actions = 4;
            DOM.displayMessage.textContent = "Actions restored!"
            display.turnGreen(DOM.actionDisplay);
            await this.delay(4000)
        } else{
            gameVariables.actions = 3;
            DOM.displayMessage.textContent = "Actions restored!"
            display.turnGreen(DOM.actionDisplay);
            await this.delay(4000)
        }

        if(!gameStatus.regulateOn){
            gameVariables.health = Math.max(0,gameVariables.health -= gameController.healthRate);
            display.updateDisplay()
            DOM.displayMessage.textContent = `Regulate Systems is inactive. Health loss: ${gameController.healthRate}`
            display.endRed(DOM.healthDisplay);
            await this.delay(4000)
    } else if(gameStatus.regulateOnCount === 1){
        gameStatus.regulateOn = false;
        DOM.displayMessage.textContent = `Regulate Systems is active. Health loss avoided. Final Turn.`
        display.flashImg(DOM.regulateImg);
        await this.delay(4000)
        DOM.regulateImg.style.display = "none"
    
        
    } else {
        gameStatus.regulateOnCount -= 1
        display.updateDisplay()
        DOM.displayMessage.textContent = `Regulate Systems is active. Health loss avoided. Turns Remaining: ${gameStatus.regulateOnCount}`;
        display.flashImg(DOM.regulateImg)
        await this.delay(4000)
        
        
    }
    },

    async checkHormone(){
        if(gameStatus.adrenOn === true){
            if(gameStatus.adrenCount === 1){
                gameStatus.adrenCount = 2;
                gameStatus.adrenOn = false;
                gameVariables.oxygen += 4;
                DOM.displayMessage.textContent = "Adrenaline increased amount of oxygen!"
                display.updateDisplay();
                display.turnGreen(DOM.avOxDisplay);
                display.flashImg(DOM.adrenImg);
                await this.delay(4000);
                DOM.adrenImg.style.display = "none" 
               
                
            } else{
                gameStatus.adrenCount -= 1;
                gameVariables.oxygen += 4;
                DOM.displayMessage.textContent = "Adrenaline increased amount of oxygen!";
                display.updateDisplay()
                display.turnGreen(DOM.avOxDisplay);
                display.flashImg(DOM.adrenImg);
                await this.delay(4000)
            }

        }
        
        if(gameStatus.insuOn === true){
            
            if(gameStatus.insCount === 1){
                gameStatus.insCount = 2;
                gameStatus.insuOn = false
                gameVariables.avGluDisplay+=4;
                DOM.displayMessage.textContent = "Insulin increased the amount of glucose!"
                display.updateDisplay();
                display.turnGreen(DOM.avGluDisplay);
                display.flashImg(DOM.insulinImg);
                await this.delay(4000);
                DOM.insulinImg.style.display = "none"
                
                
            } else{
                gameStatus.insCount -= 1;
                gameVariables.glucose += 4
                display.updateDisplay()
                DOM.displayMessage.textContent = "Insulin increased the amount of glucose!"
                display.turnGreen(DOM.avGluDisplay);
                display.flashImg(DOM.insulinImg);
                await this.delay(4000)
                
            }
           
            
        }
    },

    async checkPathogen(){
        if(gameStatus.fluOn === true){
            if(gameStatus.fluMem === true){
                
                display.flashImg(DOM.fluPathImg)
                display.flashImg(DOM.fluMemImg)
                gameStatus.fluOn = false;
                gameStatus.fluAnti = false;
                gameStatus.eventActive = false;
                gameStatus.fluAntiCount = 3;
                DOM.displayMessage.textContent = "The flu was defeated quickly by using memory cells!";
                await this.delay(4000);
                    DOM.fluPathImg.style.display = "none";
                    DOM.fluImg.style.display = "none";
                    DOM.fluMemImg.style.display= "none";
               
                

            } else if(gameStatus.fluAnti === true){
                if(gameStatus.fluAntiCount === 1){
                    gameStatus.memCellCreated = true;
                    gameStatus.fluCreated = true;
                    gameStatus.fluAnti = false;
                    gameStatus.fluOn = false;
                    gameStatus.eventActive = false;
                    gameStatus.fluAntiCount = 3;
                    DOM.displayMessage.textContent = "Enough flu antibodies have been produced to defeat it!"
                    display.flashImg(DOM.fluPathImg);
                    display.flashImg(DOM.fluImg);
                    await this.delay(4000)
                        DOM.fluPathImg.style.display = "none"
                        DOM.fluImg.style.display = "none"
                    
                    
                } else{
                    DOM.displayMessage.textContent = "The body is still producing flu antibodies."
                    gameVariables.health = Math.max(0,gameVariables.health -= 1)
                    gameStatus.fluAntiCount -= 1;
                    display.updateDisplay();
                    display.flashImg(DOM.fluPathImg);
                    display.turnRed(DOM.healthDisplay);
                    await this.delay(4000)
                    

                }
            } else{
                DOM.displayMessage.textContent = "The flu virus harms the body.";
                
                gameVariables.health = Math.max(0,gameVariables.health -= 1);
                display.updateDisplay();
                display.flashImg(DOM.fluPathImg);
                display.turnRed(DOM.healthDisplay);
                await this.delay(4000)

            }
        }

        if(gameStatus.bacteriaOn === true){
            if(gameStatus.bacMem === true){
                gameStatus.bacteriaOn = false;
                gameStatus.bacteriaAnti = false;
                gameStatus.eventActive = false;
                gameStatus.bacteriaAntiCount = 3;
                DOM.displayMessage.textContent = "The bacteria was defeated quickly using memory cells!";
                display.flashImg(DOM.bacPathImg);
                display.flashImg(DOM.bacMemImg);
                await this.delay(4000)
                    DOM.bacPathImg.style.display = "none";
                    DOM.bacImg.style.display = "none";
                    DOM.bacMemImg.style.display = "none"
                
                
                

            } else if(gameStatus.bacteriaAnti === true){
                if(gameStatus.bacteriaAntiCount === 1){
                    gameStatus.memCellCreated = true;
                    gameStatus.bacteriaCreated = true;
                    gameStatus.bacteriaAnti = false;
                    gameStatus.bacteriaOn = false;
                    gameStatus.eventActive = false;
                    gameStatus.bacteriaAntiCount = 3;
                    DOM.displayMessage.textContent = "Enough bacteria antibodies were produced to defeat it!";
                    display.flashImg(DOM.bacPathImg);
                    display.flashImg(DOM.bacImg);
                    await this.delay(4000)
                        DOM.bacPathImg.style.display = "none";
                        DOM.bacImg.style.display = "none"
                    


                } else{
                    gameStatus.bacteriaAntiCount -= 1;
                    gameVariables.health = Math.max(0,gameVariables.health -= 1)
                    display.updateDisplay()
                    display.turnRed(DOM.healthDisplay)
                    display.flashImg(DOM.bacPathImg);
                    DOM.displayMessage.textContent = "Bacteria antibodies are still being produced."
                    await this.delay(4000)
                }
            } else{
                gameVariables.health = Math.max(0,gameVariables.health -= 1)
                display.updateDisplay();
                display.turnRed(DOM.healthDisplay);
                display.flashImg(DOM.bacPathImg);
                DOM.displayMessage.textContent = "The bacteria harms the body."
                await this.delay(4000)
            }
            
            
        }
        if(gameStatus.parasiteOn === true){
            if(gameStatus.parasiteMem === true){
                gameStatus.parasiteOn = false;
                gameStatus.parasiteAnti = false;
                gameStatus.eventActive = false;
                gameStatus.parasiteAntiCount = 3;
                display.flashImg(DOM.paraPathImg);
                display.flashImg(DOM.paraMemImg);
                DOM.displayMessage.textContent = "The parasite was defeated quickly with memory cells.";
                await this.delay(4000)
                    DOM.paraImg.style.display = "none";
                    DOM.paraPathImg.style.display = "none";
                    DOM.paraMemImg.style.display = "none"
               

            } else if(gameStatus.bacteriaAnti === true){
                if(gameStatus.parasiteAntiCount === 1){
                    gameStatus.memCellCreated = true;
                    gameStatus.parasiteCreated = true;
                    gameStatus.parasiteAnti = false;
                    gameStatus.parasiteOn = false;
                    gameStatus.eventActive = false;
                    gameStatus.parasiteAntiCount = 3;
                    DOM.displayMessage.textContent = "Enough parasite antibodies were produced to defeat it!";
                    display.flashImg(DOM.paraPathImg);
                    display.flashImg(DOM.paraImg);
                    await this.delay(4000)
                        DOM.paraPathImg.style.display = "none";
                        DOM.paraImg.style.display = "none";
                    
                } else{
                    gameStatus.parasiteAntiCount -= 1;
                    gameVariables.health = Math.max(0,gameVariables.health -= 1)
                    display.updateDisplay();
                    display.turnRed(DOM.healthDisplay)
                    display.flashImg(DOM.paraPathImg)
                    DOM.displayMessage.textContent = "Parasite antibodies are still being produced."
                    await this.delay(4000)
                }
            } else{
                gameVariables.health = Math.max(0,gameVariables.health -= 1)
                display.updateDisplay();
                display.turnRed(DOM.healthDisplay);
                display.flashImg(DOM.paraPathImg);
                DOM.displayMessage.textContent = "The parasite harms the body.";
                await this.delay(4000)
            }
            
            
        }
    },

   async checkStatus(){

        
        if(gameStatus.increaseHeart === true){
            
                if(gameStatus.increaseHeartCount === 1){
                gameStatus.increaseHeart = false;
                gameStatus.increaseHeartCount = 2;
                DOM.displayMessage.textContent = "Heart rate has slowed down."
                display.flashImg(DOM.exerciseHeartImg);
                await this.delay(4000)
                    DOM.exerciseHeartImg.style.display = "none"
                
                
            } else{
                gameStatus.increaseHeartCount -=1;
                DOM.displayMessage.textContent = "Heart rate is still increased."
                display.updateDisplay();
                display.flashImg(DOM.exerciseHeartImg)
                await this.delay(4000)
            }
            
            
        }

        if(gameStatus.increaseBreath === true){
            
                if(gameStatus.increaseBreathCount === 1){
                gameStatus.increaseBreath = false;
                gameStatus.increaseBreathCount = 2;
                display.flashImg(DOM.breathImg)
                DOM.displayMessage.textContent = "Breathing rate has slowed down."
                await this.delay(4000)
                    DOM.breathImg.style.display = "none"
                
                
            } else{
                gameStatus.increaseBreathCount -=1;
                DOM.displayMessage.textContent = "Breathing rate is still increased."
                display.updateDisplay();
                display.flashImg(DOM.breathImg)
                await this.delay(4000)
            }
            
            
        }

        if(gameStatus.sweatOn === true){
           if(gameStatus.sweatOnCount === 1){
                gameStatus.sweatOn=false;
                gameStatus.sweatOnCount = 3;
                DOM.displayMessage.textContent = "The body is no longer sweating."
                await this.delay(4000)
                    DOM.sweatImg.style.display = "none"
                
                
            } else {
                gameStatus.sweatOnCount -= 1
                DOM.displayMessage.textContent = "The body is still sweating.";
                display.updateDisplay();
                display.flashImg(DOM.sweatImg)
                await this.delay(4000)
            }
           
            
        }

        if(gameStatus.neuralNetwork === true){
            if(gameStatus.neuralNetworkCount === 1){
                gameStatus.neuralNetwork = false;
                gameStatus.neuralNetworkComplete = true;
                DOM.displayMessage.textContent = "The neural networks have finished growing!"
                display.flashImg(DOM.neuralImg);
                await this.delay(4000);
                DOM.neuralImg.style.display = "none";
                DOM.completeNeuralImg.style.display = "grid"
            } else{
                gameStatus.neuralNetworkCount -= 1;
                DOM.displayMessage.textContent = "Neural networks are still growing";
                display.updateDisplay();
                display.flashImg(DOM.neuralImg);
                await this.delay(4000)
            }
        }
        
        if(gameStatus.lowEnergy === true){
            
                gameVariables.water = Math.max(0,gameVariables.water -= 2);
                gameVariables.glucose = Math.max(0,gameVariables.glucose -= 2);
                gameVariables.oxygen = Math.max(0,gameVariables.water -= 2);
                gameVariables.amino = Math.max(0,gameVariables.amino -= 2);
                DOM.displayMessage.textContent = "Low energy causes the body to lose more resources.";
                display.updateDisplay();
                display.flashImg(DOM.lowEnergyImg);
                display.turnRed(DOM.avWatDisplay);
                display.turnRed(DOM.avGluDisplay);
                display.turnRed(DOM.avOxDisplay);
                display.turnRed(DOM.avAmiDisplay);
                await this.delay(4000)
            
                

        }

        if(gameStatus.overheatOn === true){
            
                gameVariables.actions -=1;
                DOM.displayMessage.textContent = "Overheat causes you to lose one action.";
                display.updateDisplay();
                display.flashImg(DOM.overheatImg);
                display.turnRed(DOM.actionDisplay);
                await this.delay(4000)
           
            
        }

        if(gameStatus.injuryOn === true){
            
                gameVariables.health = (Math.max(0,gameVariables.health -= 1));
                DOM.displayMessage.textContent = "The injury causes you to lose one health point.";
                display.updateDisplay();
                display.flashImg(DOM.injuryImg);
                display.turnRed(DOM.healthDisplay)
                await this.delay(4000)
            
            
        }
    },

    async deductResources(){
        const turnThreshold = 10
            const costAddition = Math.floor(gameController.turnCount/turnThreshold)
            if(costAddition>=1){
                gameController.aminoCost += costAddition;
                gameController.glucoseCost += costAddition;
                gameController.waterCost += costAddition;
                gameController.oxygenCost =+ costAddition
            }
            const cost = {
                resource: 2 + costAddition,
                oxygen: 4 + costAddition,
                water: 3 + costAddition,
                glucose: 2 + costAddition,
                amino: 2 + costAddition,
            }
            gameVariables.oxygen = Math.max(0,gameVariables.oxygen -= cost.oxygen);
            gameVariables.water = Math.max(0,gameVariables.water -= cost.water);
            gameVariables.glucose = Math.max(0,gameVariables.glucose -= cost.glucose);
            gameVariables.amino = Math.max(0,gameVariables.amino -= cost.amino);
            DOM.displayMessage.textContent = "Resources deducted.";
            display.updateDisplay();
            display.turnRed(DOM.avAmiDisplay);
            display.turnRed(DOM.avGluDisplay);
            display.turnRed(DOM.avWatDisplay);
            display.turnRed(DOM.avOxDisplay);
            await this.delay(4000);

            let conditionsMet = 0
            let conditionsArray = []
            const condition1 = gameVariables.oxygen === 0;
            const condition2 = gameVariables.water === 0;
            const condition3 = gameVariables.amino === 0;
            const condition4 = gameVariables.co2 >= 10;
            const condition5 = gameVariables.glucose === 0;
            if(condition1){
                conditionsMet++
                conditionsArray.push(DOM.avOxDisplay)
            }
            if(condition2){
                conditionsMet++
                conditionsArray.push(DOM.avWatDisplay);
            }
            if(condition3){
                conditionsMet++
                conditionsArray.push(DOM.avAmiDisplay);
            }
            if(condition4){
                conditionsMet+= Math.floor(gameVariables.co2/10)
                conditionsArray.push(DOM.co2Display);
            }
            if(condition5){
                conditionsMet++
                conditionsArray.push(DOM.avGluDisplay);
            }
            if(conditionsMet > 0){
                gameVariables.health = Math.max(0,gameVariables.health -= conditionsMet);
                display.updateDisplay();
                conditionsArray.forEach(item =>{
                    display.turnRed(item)
                })
                display.turnRed(DOM.healthDisplay);
                DOM.displayMessage.textContent = `Health loss due to low resources: ${conditionsMet}`
                await this.delay(4000)
            }
            
    },

   async checkGame(){
        if(gameController.turnCount % 10 === 0){
            gameController.healthRate++
        };
        if(gameController.turnCount % 5 === 0){
            gameController.getEvent();
        }

        gameController.turnCount++;
            display.updateDisplay()
            if(gameVariables.health === 0){
                DOM.displayMessage.textContent = "Game over! Health reached 0."
            } else {
                DOM.nerveBtn.disabled = false;
                DOM.respBtn.disabled = false;
                DOM.circBtn.disabled = false;
                DOM.digestBtn.disabled = false;
                DOM.endoBtn.disabled = false;
                DOM.immuneBtn.disabled = false;
                DOM.resolveBtn.disabled = false;
                DOM.displayMessage.textContent = "Turn Complete"
            }
    }
}

const gameController = {
    noActions: false,
    turnCount: 1,
    healthRate: 1,
    upgradeRate: 2,
    resourceCostTurn: 2,
    oxygenCost: 4,
    waterCost: 3,
    glucoseCost: 2,
    aminoCost:2,
    
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
                    gameVariables.water = Math.max(0,gameVariables.water -= 2);
                    gameVariables.glucose = Math.max(0,gameVariables.glucose -= 2);
                    gameVariables.oxygen = Math.max(0,gameVariables.water -= 2);
                    gameVariables.amino = Math.max(0,gameVariables.amino -= 2);

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
                    DOM.adrenImg.style.display = "none"
                } else{
                    gameStatus.adrenCount -= 1;
                    gameVariables.oxygen += 4
                }

            }

            if(gameStatus.insuOn === true){
                if(gameStatus.insCount === 0){
                    gameStatus.insCount = 2;
                    gameStatus.insuOn = false
                    DOM.insulinImg.style.display = "none"
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
                    DOM.fluPathImg.style.display = "none"
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
                resource: 2 + costAddition,
                oxygen: 4 + costAddition,
                water: 3 + costAddition,
                glucose: 2 + costAddition,
                amino: 2 + costAddition,
            }
            gameVariables.oxygen = Math.max(0,gameVariables.oxygen -= cost.oxygen);
            gameVariables.water = Math.max(0,gameVariables.water -= cost.water);
            gameVariables.glucose = Math.max(0,gameVariables.glucose -= cost.glucose);
            gameVariables.amino = Math.max(0,gameVariables.amino -= cost.amino)
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
      },

      async endTurn2(){
        if(gameVariables.actions !== 0){
            DOM.displayMessage.textContent = `Actions Remaining: ${gameVariables.actions}`
        } else{
            DOM.nerveBtn.disabled = true;
            DOM.respBtn.disabled = true;
            DOM.circBtn.disabled = true;
            DOM.digestBtn.disabled = true;
            DOM.endoBtn.disabled = true;
            DOM.immuneBtn.disabled = true;
            DOM.resolveBtn.disabled = true;
            DOM.nerveBtnContain.style.display = "none";
            DOM.respBtnContain.style.display = "none";
            DOM.circBtnContain.style.display = "none";
            DOM.digestBtnContain.style.display = "none";
            DOM.endoBtnContain.style.display = "none";
            DOM.immuneBtnContain.style.display = "none";
            DOM.memCellBtnContain.style.display = "none";

            await endTurn.checkRegulate();
            await endTurn.checkHormone();
            await endTurn.checkPathogen();
            await endTurn.checkStatus();
            await endTurn.deductResources();
            await endTurn.checkGame();
        
        }
        
      }
}



const gameEvents = {
events: [
    { 
        range: [1,5], 
        situation: () => {
            if(gameStatus.lowEnergy === false){
                gameStatus.lowEnergy = true;
                gameStatus.eventActive = true;
                console.log("While going for a run, the body needs more energy to function!")
                DOM.eventDisplay.textContent = "The body needs more energy to function!";
                DOM.lowEnergyImg.style.display = "grid"
            } else{
                DOM.eventDisplay.textContent = "No event triggered."
            }
            

            }
        
        },
    { 
        range: [6,7], 
        situation: ()=>{
            DOM.eventDisplay.textContent = "No event triggered."
            
            
        }
    },
    { range: [8,10], 
        situation: ()=> {
            if(gameStatus.fluOn === false){
                gameStatus.fluOn = true;
            gameStatus.eventActive = true;
            console.log("A flu virus has invaded the body!");
            DOM.displayMessage.textContent = "A flu virus has infected the body!";
            DOM.fluPathImg.style.display = "grid"
            } else{
                DOM.eventDisplay.textContent = "No event triggered."
            }
            
        }
            
    
    },
    { range: [11,13], 
        situation: ()=> {
            if(gameStatus.bacteriaOn === false){
                gameStatus.bacteriaOn = true;
                gameStatus.eventActive = true;
                DOM.displayMessage.textContent = "A bacteria has infected the body!";
                DOM.bacPathImg.style.display = "grid"
            } else {
                DOM.eventDisplay.textContent = "No event triggered."
            }
            
        }


    },

    { range: [14,16], 
        situation: ()=> {
            if(gameStatus.parasiteOn === false){
                gameStatus.parasiteOn = true;
                gameStatus.eventActive = true;
                DOM.displayMessage.textContent = "A parasite has infected the body!";
                DOM.paraPathImg.style.display = "grid"
            } else {
                DOM.eventDisplay.textContent = "No event triggered."
            }
            
        }


    },
    { range: [17,20], 
        situation: ()=> {
            if(gameStatus.injuryOn === false){
                gameStatus.injuryOn = true;
                gameStatus.eventActive = true;
                DOM.displayMessage.textContent = "The body was injured!";
                DOM.injuryImg.style.display = "grid"
            } else {
                DOM.eventDisplay.textContent = "No event triggered."
            }
            
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
            oxygen: 3 + gameController.upgradeRate
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
            gameVariables.oxygen -= cost.oxygen;
            gameVariables.actions -= 1;
            gameVariables.co2 += 3;
            gameStatus.exerciseLungs = true;
            DOM.displayMessage.textContent = "The respiratory system is strengthened after exercise!";
            DOM.exerciseImg.style.display = "grid";
            display.updateDisplay();
            display.turnRed(DOM.avGluDisplay);
            display.turnRed(DOM.avAmiDisplay);
            display.turnRed(DOM.avOxDisplay);
            display.turnRed(DOM.actionDisplay);
            display.turnGreen(DOM.co2Display);
            if(gameStatus.overheatOn === false){
                let randomNumber = Math.floor(Math.random() * 2) + 1;
                if(randomNumber === 1){
                    gameStatus.eventActive = true;
                    gameStatus.overheatOn = true;
                    DOM.overheatImg.style.display = "grid";

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
            glucose: 2,
            oxygen: 1,
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
            gameVariables.oxygen -= cost.oxygen;
            gameVariables.co2 += 2;
            gameVariables.actions -= 1;
            DOM.displayMessage.textContent = 'Heart rate has been increased!'
            DOM.increaseHeartImg.style.display = "grid";
            display.updateDisplay();
            display.turnRed(DOM.avGluDisplay);
            display.turnRed(DOM.actionDisplay);
            display.turnRed(DOM.avOxDisplay);
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
            if(gameStatus.overheatOn === false){
                let randomNumber = Math.floor(Math.random() * 2) + 1;
                if(randomNumber === 1){
                    gameStatus.eventActive = true;
                    gameStatus.overheatOn = true;
                    DOM.overheatImg.style.display = "grid";

                }
            }

        }
    }
}

const digestSystem = {
    getNutrients(){
        const cost = {
            amino: 1,
            glucose: 1
        }
        gameController.checkActions()
        if(gameVariables.actions === 0){
            console.log("out of actions");
            DOM.displayMessage.textContent = DOM.actionMessage
        } else if(gameController.checkResources(cost,gameVariables)){
            gameVariables.actions -=1;
            gameVariables.pwater +=3;
            gameVariables.carbs += 2;
            gameVariables.protein += 2;
            gameVariables.co2 += 2;
            gameVariables.amino -=cost.amino;
            gameVariables.glucose -=cost.glucose;
            DOM.displayMessage.textContent = "Nutrients have entered the body!"
            display.updateDisplay();
            display.turnGreen(DOM.avCarbDisplay);
            display.turnGreen(DOM.unWaterDisplay);
            display.turnGreen(DOM.avProDisplay);
            display.turnGreen(DOM.co2Display);
            display.turnRed(DOM.actionDisplay);
            display.turnRed(DOM.avAmiDisplay);
            display.turnRed(DOM.avGluDisplay);

        }
    },

    digestNutrients(){
       const cost = {
            amino: 2,
            glucose: 1
        }
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions");
            DOM.displayMessage.textContent = DOM.actionMessage
        } else if(gameController.checkResources(cost, gameVariables)){
            gameVariables.actions -=1;
            gameVariables.pamino = gameVariables.protein*2 + gameVariables.pamino;
            gameVariables.pglucose = gameVariables.carbs*2 + gameVariables.pglucose;
            gameVariables.carbs = 0;
            gameVariables.protein = 0;
            gameVariables.co2 += 3;
            gameVariables.amino -=cost.amino;
            gameVariables.glucose -=cost.glucose;
            DOM.displayMessage.textContent = "Nutrients have been digested!";
            display.updateDisplay();
            display.turnGreen(DOM.unAminoDisplay);
            display.turnGreen(DOM.unGluDisplay);
            display.turnRed(DOM.avCarbDisplay);
            display.turnRed(DOM.avProDisplay);
            display.turnGreen(DOM.co2Display);
            display.turnRed(DOM.avAmiDisplay);
            display.turnRed(DOM.avGluDisplay);

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
            console.log("out of actions");
            DOM.displayMessage.textContent = DOM.actionMessage
        } else if (gameStatus.melatoninOn === true){
            DOM.displayMessage.textContent = "Melatonin has already been produced!"
        } else if(gameController.checkResources(cost, gameVariables)) {
            gameVariables.actions -= 1;
            gameVariables.amino -= cost.amino;
            gameVariables.glucose -= cost.glucose;
            gameStatus.melatoninOn = true;
            console.log("Melatonin produced!");
            DOM.displayMessage.textContent = "The body has produced melatonin!"
            DOM.melaImg.style.display = "grid";
            display.updateDisplay();
            display.turnRed(DOM.avAmiDisplay);
            display.turnRed(DOM.avGluDisplay);
            display.turnRed(DOM.actionDisplay);
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
            DOM.displayMessage.textContent = DOM.actionMessage
        } else if(gameStatus.adrenOn === true){
            DOM.displayMessage.textContent = "Adrenaline has already been produced!"
        } else if(gameController.checkResources(cost, gameVariables)) {
            gameVariables.actions -= 1;
            gameVariables.amino -= cost.amino;
            gameVariables.glucose -= cost.glucose;
            gameStatus.adrenOn = true;
            console.log("Adrenaline produced!")
            DOM.displayMessage.textContent = "The body has produced adrenaline!"
            DOM.adrenImg.style.display = "grid";
            display.updateDisplay();
            display.turnRed(DOM.actionDisplay);
            display.turnRed(DOM.avAmiDisplay);
            display.turnRed(DOM.avGluDisplay);
        }
    },

    produceIns(){
        const cost = {
            amino: 3,
            glucose: 1
        }
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions");
            DOM.displayMessage.textContent = DOM.actionMessage
        } else if(gameStatus.insuOn === true){
            DOM.displayMessage.textContent = "Insuline has already been produced!"
        } else if(gameController.checkResources(cost, gameVariables)){
            gameVariables.actions -= 1;
            gameVariables.amino -= cost.amino;
            gameVariables.glucose -= cost.glucose;
            gameStatus.insuOn = true;
            console.log("Insulin produced!")
            DOM.displayMessage.textContent = "The body has produced insulin!";
            DOM.insulinImg.style.display = "grid";
            display.updateDisplay();
            display.turnRed(DOM.actionDisplay);
            display.turnRed(DOM.avAmiDisplay);
            display.turnRed(DOM.avGluDisplay);

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
    },

    neuralNetwork(){

        const cost = {
            glucose: 4,
            oxygen: 8,
            amino: 4
        }

        gameController.checkActions();
        if(gameVariables.actions === 0){
            DOM.displayMessage.textContent = DOM.actionMessage
        } else if(gameController.checkResources(cost,gameVariables)){
            gameStatus.neuralNetwork = true;
            gameVariables.glucose -= cost.glucose;
            gameVariables.oxygen -= cost.oxygen;
            gameVariables.amino -= cost.amino;
            DOM.displayMessage.textContent = "Neural networks in the brain have started to get stronger!"
            DOM.neuralImg.style.display = "grid";
            display.updateDisplay();
            display.turnRed(DOM.avGluDisplay);
            display.turnRed(DOM.avOxDisplay);
            display.turnRed(DOM.avAmiDisplay);
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
            console.log("out of actions");
            DOM.displayMessage.textContent = DOM.actionMessage
        } else if(gameStatus.bacteriaOn === false){
            DOM.displayMessage.textContent = `You can't produce bacteria antibodies right now!`
        } else if(gameStatus.bacteriaAnti === true){
            DOM.displayMessage.textContent = "Bacteria antibodies already produced!"
        } else if(gameController.checkResources(cost, gameVariables)){
            gameStatus.bacteriaAnti = true;
            gameVariables.amino-=cost.amino
            gameVariables.actions -=1;
            DOM.displayMessage.textContent = "Bacteria antibodies have been produced!";
            DOM.bacImg.style.display = "grid"
            display.updateDisplay();
            display.turnRed(DOM.avAmiDisplay);
            display.turnRed(DOM.actionDisplay);
        }
    },
    produceFlu(){
       const cost = {
            amino: 2
        }
        gameController.checkActions()
        if(gameVariables.actions === 0){
            console.log("out of actions");
            DOM.displayMessage.textContent = DOM.actionMessage
        } else if(gameStatus.fluOn === false){
            DOM.displayMessage.textContent = `You can't produce flu antibodies right now!`
        } else if(gameStatus.fluAnti === true){
            DOM.displayMessage.textContent = "Flu antibodies already produced!"
        } else if(gameController.checkResources(cost, gameVariables)){
            gameStatus.fluAnti = true;
            gameVariables.amino-=cost.amino
            gameVariables.actions -=1;
            DOM.displayMessage.textContent = "Flu antibodies have been produced!";
            DOM.fluImg.style.display = "grid"
            display.updateDisplay();
            display.turnRed(DOM.avAmiDisplay);
            display.turnRed(DOM.actionDisplay);
        }
    },
    produceParasite(){
        const cost = {
            amino: 2
        }
        gameController.checkActions()
        if(gameVariables.actions === 0){
            console.log("out of actions");
            DOM.displayMessage.textContent = DOM.actionMessage
        } else if(gameStatus.parasiteOn === false){
            DOM.displayMessage.textContent = `You can't produce parasite antibodies right now!`
        } else if(gameStatus.parasiteAnti === true){
            DOM.displayMessage.textContent = "Flu antibodies already produced!"
        } else if(gameController.checkResources(cost, gameVariables)){
            gameStatus.parasiteAnti = true;
            gameVariables.amino-=cost.amino
            gameVariables.actions -=1;
            DOM.displayMessage.textContent = "Parasite antibodies have been produced!";
            DOM.paraImg.style.display = "grid"
            display.updateDisplay();
            display.turnRed(DOM.avAmiDisplay);
            display.turnRed(DOM.actionDisplay);
        }
    },

    produceMemoryCell(cell){
        const cost = {
            amino:2
        }
        gameController.checkActions();
        if(gameVariables.actions === 0){
            console.log("out of actions");
            DOM.displayMessage.textContent = DOM.actionMessage
        } else if(gameStatus.memCellCreated === false){
            console.log("You can't produce any memory cells yet.")
            DOM.displayMessage.textContent = "You can't produce any memory cells yet."

        } else if(cell === 1 && gameController.checkResources(cost,gameVariables)){
            if(gameStatus.fluCreated === false){
                DOM.displayMessage.textContent = "You can't produce flu memory cells yet."
            } else if(gameStatus.fluMem === true){
                DOM.displayMessage.textContent = "Flu memory cells already produced!"
            } else {
                DOM.displayMessage.textContent = "Flu memory cells produced!";
                gameStatus.fluMem = true;
                gameVariables.amino -= cost.amino
                gameVariables.actions -=1
                DOM.fluMemImg.style.display = "grid";
                display.updateDisplay();
                display.turnRed(DOM.avAmiDisplay)
                display.turnRed(DOM.actionDisplay)
            }
        } else if(cell === 2 && gameController.checkResources(cost, gameVariables)){
            if(gameStatus.bacteriaCreated === false){
                DOM.displayMessage.textContent = "You can't produce bacteria memory cells yet."
            } else if(gameStatus.bacMem === true){
                DOM.displayMessage.textContent = "Bacteria memory cells already produced!"
            } else {
                DOM.displayMessage.textContent = "Bacteria memory cells produced!";
                gameStatus.bacMem = true;
                gameVariables.amino -= cost.amino
                gameVariables.actions -= 1
                DOM.bacMemImg.style.display = "grid";
                display.updateDisplay();
                display.turnRed(DOM.avAmiDisplay)
                display.turnRed(DOM.actionDisplay)
            }
        } else if(cell === 3 && gameController.checkResources(cost, gameVariables)){
            if(gameStatus.parasiteCreated === false){
                DOM.displayMessage.textContent = "You can't produce parasite memory cells yet."
            } else if(gameStatus.parasiteMem === true){
                DOM.displayMessage.textContent = "Parasite memory cells already produced!"
            } else {
                DOM.displayMessage.textContent = "Parasite memory cells produced!";
                gameStatus.parasiteMem = true;
                gameVariables.amino -= cost.amino
                gameVariables.actions -= 1
                DOM.paraMemImg.style.display = "grid";
                display.updateDisplay();
                display.turnRed(DOM.avAmiDisplay)
                display.turnRed(DOM.actionDisplay)
            }
        }
    }
}


const upgrades = {
    
    upgradeHealth(){
        gameController.checkActions();
        if(gameVariables.actions === 0){
            DOM.displayMessage.textContent = DOM.actionMessage
        } else if(gameStatus.exerciseHeart === true && gameStatus.exerciseLungs === true){
            gameVariables.maxHealth += 5;
            gameController.upgradeRate += 2;
            let statusMessage = 3 + gameController.upgradeRate;
            DOM.exerciseTool.innerHTML = `Adds <b>Exercise Respiratory System</b> status. Chance of causing <b>Overheat</b>. <b>Cost:</b> ${statusMessage} glucose`;
            DOM.exerciseHeartTool.innerHTML =  `Adds <b>Exercise Circulatory System</b> status. Chance of causing <b>Overheat</b>. <b>Cost:</b> ${statusMessage} glucose`;
            display.updateDisplay();
            display.turnGreen(DOM.healthDisplay);
            display.flashImg(DOM.exerciseHeartImg);
            display.flashImg(DOM.exerciseImg);
            setTimeout(()=>{
                DOM.exerciseHeartImg.style.display = "none";
                DOM.exerciseImg.style.display = "none"
            },4000)
        } else {
            DOM.displayMessage.textContent = "Have not met conditions for upgrade."
        }
    },

    upgradeActions(){
        gameController.checkActions();
        if(gameVariables.actions === 0){
            DOM.displayMessage.textContent = DOM.actionMessage
        } else if(gameStatus.actionsUpgraded === true){
            DOM.displayMessage.textContent = "Neural networks have already been strengthened!"
        } else if(gameStatus.neuralNetwork === true){
            DOM.display.textContent = "Neural networks are still getting stronger."
        } else if(gameStatus.neuralNetworkComplete === true){
            gameStatus.actionsUpgraded = true;
            DOM.displayMessage.textContent = "Neural networks are stronger! Gain one additional action at the end of every turn.";
            display.flashImg(DOM.completeNeuralImg);
            setTimeout(()=>{
                DOM.completeNeuralImg.style.display = "none"
                DOM.upgradeNeuralImg.style.display = "grid"
            },4000)
            
        } else{
            DOM.displayMessage.textContent = "Have not met conditions for upgrade."
        }
    }
}





display.updateDisplay();








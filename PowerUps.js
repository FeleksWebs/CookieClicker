
//Cookie / cookie amount
var Cookie_button = document.getElementById('cookie_btn')
var Cookie_number = document.getElementById('cookie_number')
var Cookie_Total = 0;


// WHEN COOKIE IS PRESSED   //
function addCookie(){
    Cookie_Total++
    Cookie_Total += PowerClick
    Cookie_number.innerHTML = Math.round(Cookie_Total);
    //Change Colors & unblock buttons


    CheckButtonValues()    
}

// EFF POWER INCREASE   //
function FindPercentage(total,per){
    return(total/100)*per
}

//  EFFECTIVENESS PERK  // ***need to Improve on this***
var EffPercentage = 0
function EffPerk(id){
    BtnObject = id.replace(/[0-9]|_/g,'');
    BtnID = id.replace(/\D/g,'')
    var StringToNumber = Number(BtnID)
    // ID OF BUTTON = EFFPERK++ //
    if(StringToNumber === 1){
        EffPercentage += 1
    }else if(StringToNumber === 2){
        EffPercentage +=5
    }else{
        EffPercentage += 10
    }
    
    //Changing Cost of Buttons
   var ChildNode = document.getElementById(id).childNodes
   var ChildNodeCost = ChildNode[2].innerHTML
   Object.keys(ObjectValues).forEach(function(key) {
    if(ObjectValues[key][id]!==undefined){
        Cookie_Total -= ChildNodeCost
        Cookie_number.innerHTML = Math.round(Cookie_Total)
        ObjectValues[key][id].cost = FindNextCost(ChildNode[2].innerHTML,EffPercentage)
        ChildNode[2].innerHTML = ObjectValues[key][id].cost 
    }
})
    document.getElementById("EffPowStats").innerHTML = EffPercentage
   CheckButtonValues()    
}



//  AUTOCLICK PERK  //
var AutoPerkAmount = 0
var AutoClicked = 0
function AutoPerk(id){
    AutoClicked++
    BtnObject = id.replace(/[0-9]|_/g,'');

    BtnID = id.replace(/\D/g,'')
    var StringToNumber = Number(BtnID)
    var EffPower = FindPercentage(AutoClicked,EffPercentage)
    AutoPerkAmount+=EffPower
    // ID OF BUTTON = AUTOPERK++ //
    if(StringToNumber === 1){
        AutoPerkAmount += 0.1
    }else if(StringToNumber === 2){
        AutoPerkAmount += 0.5
    }else{
        AutoPerkAmount += 1
    }
    StartAuto()
    //Changing Cost of Buttons
    var ChildNode = document.getElementById(id).childNodes
    var ChildNodeCost = ChildNode[2].innerHTML
    Object.keys(ObjectValues).forEach(function(key) {
     if(ObjectValues[key][id]!==undefined){
         Cookie_Total -= ChildNodeCost
         Cookie_number.innerHTML = Math.round(Cookie_Total)
         ObjectValues[key][id].cost = FindNextCost(ChildNode[2].innerHTML,AutoClicked)
         ChildNode[2].innerHTML = ObjectValues[key][id].cost 
     }
 })
 document.getElementById("AutoStats").innerHTML = AutoClicked
    CheckButtonValues()    
}



//  POWER PERK  //
var PowerClick = 0;
function PowPerk(id){
    BtnObject = id.replace(/[0-9]|_/g,'');
    BtnID = id.replace(/\D/g,'')
    var StringToNumber = Number(BtnID)
    var EffPower =FindPercentage(PowerClick,EffPercentage)
    PowerClick += EffPower
    // ID OF BUTTON = POWERPERK++ //
    if(StringToNumber === 1){
        PowerClick += 1
    }else if(StringToNumber === 2){
        PowerClick += 5
    }else{
        PowerClick += 10
    }
    
    document.getElementById("PowClickStats").innerHTML = PowerClick

    //Changing Cost of Buttons
    var ChildNode = document.getElementById(id).childNodes
    var ChildNodeCost = ChildNode[2].innerHTML
    Object.keys(ObjectValues).forEach(function(key) {
     if(ObjectValues[key][id]!==undefined){
         Cookie_Total -= ChildNodeCost
         Cookie_number.innerHTML = Math.round(Cookie_Total)
         ObjectValues[key][id].cost = FindNextCost(ChildNode[2].innerHTML,PowerClick)
         ChildNode[2].innerHTML = ObjectValues[key][id].cost 

     }
 })

        CheckButtonValues()    
}



    // EVERY SECOND //
var Automatic_Clicks = 1000
function StartAuto(){
    setInterval(() => {
    Cookie_Total += AutoPerkAmount
    Cookie_number.innerHTML = Math.round(Cookie_Total)         
    //  CHANGE COLORS TO BUTTONS //
    CheckButtonValues()    
    },Automatic_Clicks )   
}

    

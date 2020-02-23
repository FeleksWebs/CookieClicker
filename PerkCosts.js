//  OBJECTS & VALUES    //
var ObjectValues ={
    AutoPow:{
        AutoPow1:{
            name:"AutoPow1",
            cost:10
        },
        AutoPow2:{
            name:"AutoPow2",
            cost:15
        },
        AutoPow3:{
            name:"AutoPow3",
            cost:20
        },
    },

    EffPow:{
        EffPow1:{
            name:"EffPow1",
            cost:25
        },
        EffPow2:{
            name:"EffPow2",
            cost:50
        },
        EffPow3:{
            name:"EffPow3",
            cost:75
        },
    },

    PowClick:{
        PowClick1:{
            name:"PowClick1",
            cost:10
        },
        PowClick2:{
            name:"PowClick2",
            cost:20
        },
        PowClick3:{
            name:"PowClick3",
            cost:30
        },
    }
}




function findCost(){
    function findKey (){ Object.keys(ObjectValues).forEach(function(key) {
            for(var i=1;i<=3;i++){
                var MakePrice = document.getElementById("CheckCost_"+key+i)
                MakePrice.innerHTML =ObjectValues[key][key+i].cost
            }
    })}
    findKey()
}
findCost()


function CheckButtonValues(){
    for(var i = 0;i<Object.keys(ObjectValues).length;i++){
        if(i === 0){
            Object.values(ObjectValues.AutoPow).forEach(value =>{

                if(value.cost > Cookie_Total){
                    
                    document.getElementById(value.name).style.background = "red"
                    document.getElementById(value.name).disabled = true
                }else{
                    document.getElementById(value.name).style.background = "green"
                    document.getElementById(value.name).disabled = false
                }
            })
        }else if(i===1){
            Object.values(ObjectValues.EffPow).forEach(value =>{

                if(value.cost > Cookie_Total){
                    document.getElementById(value.name).style.background = "red"
                    document.getElementById(value.name).disabled = true
                }else{
                    document.getElementById(value.name).style.background = "green"
                    document.getElementById(value.name).disabled = false
                }
            })
        }else{
            Object.values(ObjectValues.PowClick).forEach(value =>{

                if(value.cost > Cookie_Total){
                    document.getElementById(value.name).style.background = "red"
                    document.getElementById(value.name).disabled = true
                }else{
                    document.getElementById(value.name).style.background = "green"
                    document.getElementById(value.name).disabled = false
                }
            })
        }
    }

}
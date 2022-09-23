// code your solution here
function saturdayFun(activity = "roller-skate" ){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun("bike ride")

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*", msg = "You are a ") {
    const innerFunction = function (describer = "special"){
        return `${msg} ${flair} ${describer} ${flair}!`;
    };
    return innerFunction ("","");
}


function shout(string){
    return string.toUpperCase()
}
function whisper(string){
    return string.toLowerCase()
}
function logShout(string){
    console.log(string.toUpperCase())
}
function logWhisper(string){
    console.log(string.toLowerCase())
}
function sayHiToHeadphonedRoommate(string){
    console.log(string)
    console.log(string.toLowerCase())
    if(string==string.toLowerCase()){
        return "I can't hear you!"
    }
    if(string==string.toUpperCase()){
        return "YES INDEED!"
    }
    if(string=="Let's have dinner together!"){
        return "I would love to!"
    }
}
function logTwoValues(value1, value2){
    console.log(`The two values are ${value1} and ${value2}.`);
}
function sayHelloTo(firstName = "User"){
    console.log(`Hello, ${firstName}!`);
}
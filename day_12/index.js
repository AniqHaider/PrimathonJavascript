// Exception Handling ( error handling )

// basically we can find out which code block is causing error like this and console log the type and also return the output as error name or message but this lets the rest of the code block execute as it is ...

try{
    console.log(aniq)
}catch(e){
    console.log(e.name)
    console.log(e.message)
}

console.log("ANIQ")
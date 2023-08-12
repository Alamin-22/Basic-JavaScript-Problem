function cubeNumber(number) {
    if(typeof number !== "number"){
        return "Please provide a valid number"
    }
    else{
        const calculation = Math.pow(number,3)
        return calculation;
    }
}
// console.log(cubeNumber(3));
// console.log(cubeNumber(4));
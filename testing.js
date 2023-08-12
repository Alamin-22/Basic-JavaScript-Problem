// problem1
function cubeNumber(number) {
    if (typeof number !== "number") {
        return "Please provide a valid number"
    }
    else {
        const calculation = Math.pow(number, 3)
        return calculation;
    }
}
console.log(cubeNumber(3));
console.log(cubeNumber(4));

// // Problem2

function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "Please provide a valid string"
    }
    else {
        if (string1.includes(string2)) {
            return true;
        }
        else {
            return false;
        }
    }
}
console.log(matchFinder("John Doe", "ohn"))
console.log(matchFinder("JavaScript", "Code"))
console.log(matchFinder("Peter Parker", "Pen"))
console.log(matchFinder("Peter Parker","pet"))



// Problem3

function sortMaker(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid Input";
    } else if (arr[0] < 0 || arr[1] < 0) {
        return "Invalid Input";
    } else if (arr[0] === arr[1]) {
        return "equal";
    } else if (arr[0] > arr[1]) {
        return arr;
    } else {
        const Temporary = arr[0];
        arr[0] = arr[1];
        arr[1] = Temporary;
        return arr;
    }
}

const Arr1 = [2, 3];
const Arr2= [4, 2];
const Arr3= [4,4];
const Arr4= [1,2];
const Arr5= [4,-2];
console.log(sortMaker(Arr1));
console.log(sortMaker(Arr2));
console.log(sortMaker(Arr3));
console.log(sortMaker(Arr4));
console.log(sortMaker(Arr5));



// problem 4-----//

function findAddress(obj) {
    if (typeof obj !== "object") {
        return "Please Provide a valid Object"
    } else {
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__";
        return street + "," + house + "," + society;
    }
}
const object= {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
};
console.log(findAddress(object));


//problem 5 

function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || typeof totalDue !== "number") {
        return "PLease Provide a valid input"
    }
    else if (Array.isArray(changeArray) && changeArray.length === 0) {
        return "Please Provide a valid Array This Array is Empty";
    }
    else {
        let Sum = 0;
        for (let i = 0; i < changeArray.length; i++) {
            let valueofarray = changeArray[i];
            Sum += valueofarray;
        }
        if (Sum >= totalDue) {
            return true
        }
        else {
            return false;
        }

    }

}
const Ar1 = []
const Ar2 = [1,2,5]
const Ar3 = [1,5,5]

console.log(canPay(Ar1, 10))
console.log(canPay(Ar2, 10))
console.log(canPay(Ar3, 10))



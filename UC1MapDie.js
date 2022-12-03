let myMap = new Map()
let dieRoll1 = 0, dieRoll2 = 0, dieRoll3 = 0, dieRoll4 = 0, dieRoll5 = 0, dieRoll6 = 0;

while(true)
{
    let randomDie = Math.floor(Math.random()*6)+1
    if(dieRoll1 == 10 || dieRoll2 == 10 || dieRoll3 == 10 || dieRoll4 == 10 || dieRoll5 == 10 || dieRoll6 == 10)
    {
        break;
    }
    else
    {
        if(randomDie == 1)
        {
            dieRoll1++;
        }
        else if(randomDie == 2)
        {
            dieRoll2++;
        }
        else if(randomDie == 3)
        {
            dieRoll3++;
        }
        else if(randomDie == 4)
        {
            dieRoll4++;
        }
        else if(randomDie == 5)
        {
            dieRoll5++;
        }
        else if(randomDie == 6)
        {
            dieRoll6++;
        }
    }
}

myMap.set(1,dieRoll1);
myMap.set(2,dieRoll2);
myMap.set(3,dieRoll3);
myMap.set(4,dieRoll4);
myMap.set(5,dieRoll5);
myMap.set(6,dieRoll6);

let maxDieNum = Math.max(...myMap.values())
let minDieNum = Math.min(...myMap.values())

function getKey(value) 
{
    return [...myMap].find(([key, val]) => val == value)
}


console.log("The minimum times Repeat die is: " + getKey(minDieNum) )
console.log("The maximum times Repeat die is: " + getKey(maxDieNum) )
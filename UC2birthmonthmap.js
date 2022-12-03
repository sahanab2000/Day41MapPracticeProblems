let myMap = new Map()
let Jan = 0, Feb = 0, March = 0, April = 0, May = 0, June = 0, July =0, Aug =0, Sep = 0, Oct = 0, Nov =0, Dec =0;

for(i = 0; i < 50; i++)
{
    let randomDie = Math.floor(Math.random()*12)+1;
    if(randomDie == 1)
    {
        Jan++;
    }
    else if(randomDie == 2)
    {
        Feb++;
    }
    else if(randomDie == 3)
    {
        March++;
    }
    else if(randomDie == 4)
    {
        April++;
    }
    else if(randomDie == 5)
    {
        May++;
    }
    else if(randomDie == 6)
    {
        June++;
    }
    else if(randomDie == 7)
    {
        July++;
    }
    else if(randomDie == 8)
    {
        Aug++;
    }
    else if(randomDie == 9)
    {
        Sep++;
    }
    else if(randomDie == 10)
    {
        Oct++;
    }
    else if(randomDie == 11)
    {
        Nov++;
    }
    else if(randomDie == 12)
    {
        Dec++;
    }

}

myMap.set('January',Jan);
myMap.set('Fabuary',Feb);
myMap.set('March',March);
myMap.set('April',April);
myMap.set('May',May);
myMap.set('June',June);
myMap.set('July',July);
myMap.set('August',Aug);
myMap.set('September',Sep);
myMap.set('October',Oct);
myMap.set('November',Nov);
myMap.set('December',Dec);


console.log(myMap)
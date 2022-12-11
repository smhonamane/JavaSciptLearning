function display () //function defination
{
console.log("My name:Mohit");
console.log("My sir name is:Sharma");

}
display(); //function call or function invokation
function show()
{
    console.log("Dayanand collage")
}
show();//write a function show which shiuld log you collage name

function showDetails(myName)
{
    console.log("Details",myName);
}
showDetails("Mohit Sharma");
showDetails("Hitesh");
showDetails("Jenny");


function rajubhaiya(Paisa, Bag, Mobile)
{
    console.log(Paisa);
    console.log(Bag);
    console.log(Mobile);
    rajubhaiya(100,"Bag","Mobile");

}

var value1=100;
var value2;
console.log("Before Swap",value1,value2);
var temp=value1;
value1=value2;
value2=temp;
console.log("After Swap",value1,value2);

function SwapValues(value1,value2)
{
    console.log("Before Swap",value1,value2);
var temp=value1;
value1=value2;
value2=temp;
console.log("After Swap",value1,value2);

}
SwapValues(100, 200);
SwapValues(2,4);
SwapValues("Kishor","Hitesh");
SwapValues("You","Me");

function hello(myName){
    console.log(myName);
}
hello("Sachin");


console.log("Function with argument and return value");
function rajubhaiya(Paisa)
{
console.log("Going in market");
console.log("Purches fresh vegitables");
console.log("Come back");
return "Bag of vegitables", Paisa;
return 25+25;
}

var bagOfVegitables=rajubhaiya(100);
console.log(bagOfVegitables);


console.log("============================================================")
console.log("====1] Two function with no argument and no return type ====")
function display()
{
    console.log("I Love JavaScipt");
    console.log("Learning Angular");
}
display();
console.log("============================================================");

console.log("====2] Personal Details====");

function personalDetails(myName)
{
    console.log(myName);
}
personalDetails("First Name: Snehal");
personalDetails("Last Name:  Honamane");
personalDetails("College:    Mangalwedhekar Institute of Management");

console.log("============================================================")

console.log("====3] Swapping Two Values====");

function SwapValueDude(val1, val2)
{
    var temp;
    console.log("===Before SWap===");
    console.log(val1);
    console.log(val2);

    temp=val1;
    val1=val2;
    val2=temp;

    console.log("===After SWap===");
    console.log(val1);
    console.log(val2);
}
SwapValueDude("Virat","Anushka");
SwapValueDude("1000","2000");

console.log("=============================================================");

console.log("====4] Addition of Three Values====");

function addThreeValues(num1,num2,num3)
{
    var sum=num1+num2+num3;
    console.log("Addition:",sum);
    return sum;
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","Good","Morning");

console.log("=============================================================")







function calculate(){
    console.log("print calculate");
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;
    
    num1 = Number(num1);
    num2 = Number(num2);
    if(!num1 || !num2){
        alert("please enteer the  valid number!!!!");
    }

    let operation=document.getElementById("operation").value;
    
    let answer;
    if(operation=="add"){
        answer=add(num1,num2);      
    }
    else if(operation == "subtract"){
        answer = subtract(num1,num2);
    }
    else if(operation=="multiply"){
        answer= multiply(num1,num2);
    }
    else{
        answer = divide(num1,num2);
    }
    
    document.getElementById("calculator-output").innerHTML=answer;
    
}


function add(a,b){
    return a+b;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}

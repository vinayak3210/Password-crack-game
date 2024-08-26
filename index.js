
// Generate a random number between min (inclusive) and max (inclusive)
let min = 1;
let max = 10;
let firstNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(firstNumber);

// Generate a random number between min (inclusive) and max (inclusive)

let secondNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(secondNumber);

function result(){

    let firstInput= document.getElementById('firstNumber').value;
    let secondInput= document.getElementById('secondNumber').value;


console.log(firstInput);
console.log(secondInput);


if(firstNumber==firstInput && secondNumber==secondInput){
    let result =document.querySelector('.result');
    result.style.backgroundColor='green';
    result.style.color='white';
    // result.style.padding='10px'; 
    // result.style.border-radius='5px';
    
    result.innerHTML='Password Crack';

}
    
    else if(firstNumber==firstInput || secondNumber==secondInput){
        let result =document.querySelector('.result');
        result.style.backgroundColor='yellow';
        result.innerHTML='one digite match'
    }
    else{
        let result=document.querySelector('.result');
        result.style.backgroundColor='red'
        result.innerHTML='wrong pass word';
    }
}


    let start = document.querySelector('.start');
    start.addEventListener('click',function(){
        document.querySelector('.main').style.display = 'flex';
        start.style.display='none';
    })
    
    
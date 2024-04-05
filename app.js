//   Israel Lopez
//      4/4/24
// 
// You will need to hit 'C' after every operation.... got kinda late and rushed to submit towards
// the end.. probably shouldve tried a different approach. :(

/*-------------------------------- Constants --------------------------------*/
const screenNum = 0;

/*-------------------------------- Variables --------------------------------*/

let calcArry = [];
let numString = '';

/*------------------------ Cached Element References ------------------------*/
const numbers = document.querySelectorAll('.button');
const display = document.querySelector('.display');



/*----------------------------- Event Listeners -----------------------------*/
numbers.forEach(number => {
    number.addEventListener('click', (event)=>{
        
        

        if(event.target.innerText === '-') {
            calculatorOperation('-');
            
        }else if(event.target.innerText === '/') {
            calculatorOperation('/');
            
        }else if(event.target.innerText === '*') {
            calculatorOperation('*');
            
        }else if(event.target.innerText === '=') {
            sum();
            
        }
        else if(event.target.innerText === 'C') {
            clear();
            
        }
        else {
            numString += event.target.innerHTML;
            display.textContent = numString;

        }
        
    })
})

/*-------------------------------- Functions --------------------------------*/

const calculatorOperation = (operator) =>{
    
    if(numString > 0){
    calcArry.push(numString);
    calcArry.push(operator);
    console.log(calcArry);
    display.textContent = ' ';
    numString = '';
    }

}

const clear = () =>{
    console.log('this is getting pressed');
    calcArry = [];
    display.textContent = '0'
    numString = '';
}

const sum = () =>{
    let sum = 0;
    if(calcArry[1] === '-'){
        sum = parseInt(calcArry[0]) - parseInt(numString);
        display.textContent = sum;
        calcArry = [];
        calcArry.push(sum);
        console.log(calcArry)
        numString = ''
    }else if(calcArry[1] === '/'){
        sum = parseInt(calcArry[0]) / parseInt(numString);
        display.textContent = sum;
        calcArry = [];
        calcArry.push(sum);
        console.log(calcArry)
        numString = ''
    }else if(calcArry[1] === '*'){
        sum = parseInt(calcArry[0]) * parseInt(numString);
        display.textContent = sum;
        calcArry = [];
        calcArry.push(sum);
        console.log(calcArry)
        numString = ''
    }
    
}
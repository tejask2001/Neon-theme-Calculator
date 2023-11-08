let display=document.getElementById('display')
const btn=document.querySelectorAll('.btn')

let operation=""
let input=""

btn.forEach(button=>{
    button.addEventListener('click',()=>{
        if(button.innerText=='+' || button.innerText=='-' || button.innerText=='*' || button.innerText=='/'){
            input=""
            if((button.innerText=='+' || button.innerText=='-' || button.innerText=='*' || button.innerText=='/') && operation==""){
                return
            }
            else if((button.innerText=='+' || button.innerText=='-' || button.innerText=='*' || button.innerText=='/') && (operation.slice(-1)=='+' || operation.slice(-1)=='-' || operation.slice(-1)=='*' || operation.slice(-1)=='/')){
                return
            }
            else{
                operation+=button.innerText
            }
        }
        
        else if(button.innerText=='='){
            operation=eval(operation)
        }
        else if(button.innerText=='.' && (input.includes('.') || input=="")){
            return
        }
        else if(button.innerText=="RESET"){
            operation=""
            input=""
        }
        else if(button.innerText=="DEL"){
            operation=operation.slice(0,-1)
            input=input.slice(0,-1)
        }
        else{
            operation+=button.innerText
            input+=button.innerText
        }
        
        if(operation==""){
            display.innerText='0'
        }
        else{
            display.innerText=operation
        }
    })
})

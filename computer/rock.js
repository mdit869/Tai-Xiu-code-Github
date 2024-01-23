const display = document.getElementById('display')

function fullname(input){
    display.value += input;
}

function fullname2(){
    display.value = ''
}

function fullname3(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = 'error'
    }
}
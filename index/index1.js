
// const listTodo = [
//         {
//             name1:'',
//             date: '',
//         },
//         {
//             name1:'',
//             date: '',
//         }
//     ];

// listName()
// function listName(){

// var listHtml = ''

// for(let i = 0; i < listTodo.length; i++){
//     const todo = listTodo[i];
//     const duename = todo.name1;
//     const duedate = todo.date;
//     let deleteButton = ''
//     if(duename){
//         deleteButton = `<p><button onclick="Deleteitem(${i})">Delete</button></p>`
//     }else{
//         deleteButton = ''
//     }
//     const html = `${duename} ${duedate} ${deleteButton}`
//     listHtml += html;
// }
// console.log(listHtml)
// const label = document.getElementById('label');
// label.innerHTML = listHtml
// }

// function Deleteitem(item){
//     listTodo.splice(item, 1);
//     listName()
// }

// function fullname(){
//     const inputElement = document.getElementById('input');
//     const name = inputElement.value;
//     const dateElement = document.getElementById('date')
//     const date = dateElement.value;
//     inputElement.value = ''
//     dateElement.value = ''
//     listTodo.push({
//        name1: name,
//        date: date
//     });
//     listName()
// }


const listTodo = ['make dinner', 'watch tv']


listName()
function listName(){

var listHtml = ''
for(let i = 0; i < listTodo.length; i++){
    const todo = listTodo[i];
    var deleteindex = '';
    if(todo){
        deleteindex = ` <button onclick= "
        dateElement(${i})
        ">Delete</button>`;
    }else{
        dateElement = ''
    }
    const html = `${todo} 
    ${deleteindex}`
    listHtml += html 
}
console.log(listHtml)
document.getElementById('label').innerHTML = listHtml;
}


function dateElement(index){
    listTodo.splice(index, 1);
    listName()
}

function fullname(){
    const inputElement = document.getElementById('input');
    const name  = inputElement.value;
    inputElement.value = '';
    listTodo.push(name)
    listName()
}
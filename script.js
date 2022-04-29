const toDo1 = { 
    name: 'compra il pane', 
    priority: 3, 
} 

const toDo2 = { 
    name: 'ripassare html', 
    priority: 5, 
} 

const toDo3 = { 
    name: 'ripassa css', 
    priority: 7, 
} 

const toDo4 = { 
    name: 'studia javascript', 
    priority: 9, 
} 

const toDo5 = { 
    name: 'compra il regalo alla mamma', 
    priority: 10, 
} 

const toDoList = [toDo1, toDo2, toDo3, toDo4, toDo5]; 

function logToDos(toDoArray) {
    for (let i = 0; i < toDoArray.length; i++) {
        const toDo = toDoArray[i];
        console.log(toDo.name + ' priority: ' + toDo.priority);
    }
} 

logToDos(toDoList); 

//  document permette a file .js di interagire con pagina web; viene 
//  richiamato tramite id = "" nell'elemento html; 

// const container = document.getElementById('toDoContainer'); 
// //                   prendo da elemento già presente in file html;

// const par = document.createElement('p'); 
// //         creo elemento html dal .document;

// const textNode = document.createTextNode('ciao a tutti'); 
// //          per introdurre stringhe da javasctipt a pagina web

// par.appendChild(textNode); 
// //  assegno il text node al par creato in pagina web;

// container.appendChild(par); 
// //  assegno par a container; 

function writeToDosToDocument(toDoArray) {
    const container = document.getElementById('toDoContainer'); 

//  creo una lista ordinata:
    for (let i = 0; i < toDoArray.length; i++) {
        const toDo = toDoArray[i];
        
        const li = document.createElement('li'); 

        const node = document.createTextNode(toDo.name); 

        const priorityTextNode = document.createTextNode('priority:' + toDo.priority); 
        
        const br = document.createElement('br'); 

        li.appendChild(node);  

        li.appendChild(br);

        li.appendChild(priorityTextNode); 

        container.appendChild(li); 
    }
} 

writeToDosToDocument(toDoList) 

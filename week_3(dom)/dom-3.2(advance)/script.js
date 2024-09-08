
let ctr =1;
function addtodo(){
    const inputval = document.getElementById('inp'); //input value
    const value = inputval.value.trim(); //trim that 

    if(value === ''){
        alert('put some text');
        return;
    }

    const divEl = document.createElement('div'); // create element

    const spanEl = document.createElement('span');
    const buttonEl = document.createElement('button');
    spanEl.innerHTML = value;
    buttonEl.textContent = 'delete';
    /// new part 
    divEl.appendChild(spanEl);
    divEl.appendChild(buttonEl);

    divEl.setAttribute('id',ctr);

    const parentel = document.getElementById('bodyofToDo');
    parentel.appendChild(divEl);

    ctr+=1;
    inputval.value = '';
}

function deletetodo(index){
    
    const element = document.getElementById(index);
    element.parentNode.removeChild(element);
}


const input = document.querySelector("#input");
const ul = document.querySelector("ul");
const submit = document.querySelector("#submit");
let lists = [];


submit.addEventListener('click', addItem);

ul.addEventListener('click', deleteList);

function addItem(event){
  event.preventDefault();

  let input = document.getElementById('input');
  let listItem =input.value

  let li = document.createElement('li');
  
  li.appendChild(document.createTextNode(listItem));

  ul.appendChild(li);

  let deleteButton = document.createElement('button');
  
  deleteButton.className = 'delete'
  
  deleteButton.appendChild(document.createTextNode(" " + 'Remove'));
  
  li.appendChild(deleteButton);
};

function deleteList(event){
if(event.target.classList.contains('delete')){
if(confirm('Do you really want to delete this task?')){
  let li = event.target.parentElement;
  ul.removeChild(li);
    }
  }
}

if(window.localstorage){
  let newInput = document.getElementById('input');
newInput.value = localStorage.getItem('input');
newInput.addEventListener('lists', function(){
  localStorage.setItem('input', newInput.value);
}, false)





}

// function addItem(){
//   submit.addEventListener('click', addItem)
// for (var i = 0; i < input.length; i++) 
//     if (inputs[i].value.length)
//       lists.push(inputs[i].value);
//   console.log(input.value)
//   displayList()
// };
// addItem()

// function displayList(){
// let newList = document.createElement('li'); 
// newList.textContent = input.value; 
// ul.appendChild(newList);
// }

// EXAMINE THE DOCUMENT OBJECT //

console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// //document.title =  123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

GETELEMENTBYID //
console.log(document.getElementById('header-title'));
const headerTitle = document.getElementById('header-title');
// const header = document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent = 'Countries/population';
headerTitle.style.backgroundColor = 'black';
// headerTitle.innerText = 'Aurevoir!';
console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
header.style.borderBottom = 'solid 2px #000';

GETELEMENTSBYCLASSNAME //
const items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Arabic';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// Gives error
items.style.backgroundColor = '#f4f4f4';

for(const i = 0; i < items.length; i++){
  items[i].style.backgroundColor = '#f4f4f4';
}

GETELEMENTSBYTAGNAME //
const li = document.getElementsByTagName('li');
// console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

// Gives error
//items.style.backgroundColor = '#f4f4f4';

for(const i = 0; i < li.length; i++){
  li[i].style.backgroundColor = '#f4f4f4';
}

QUERYSELECTOR //
const header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

const input = document.querySelector('input');
input.value = 'Hello World'

const submit = document.querySelector('input[type="submit"]');
submit.value= "EDIT"

const item = document.querySelector('.list-group-item');
item.style.color = 'red';

const lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

const secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

QUERYSELECTORALL //
const titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello';

const odd = document.querySelectorAll('li:nth-child(odd)');
const even= document.querySelectorAll('li:nth-child(even)');

for(const i = 0; i < odd.length; i++){
  odd[i].style.backgroundColor = '#f4f4f4';
  even[i].style.backgroundColor = '#ccc';
}


// this will run as soon your app shows in the browser
// you can use it to call or execute some functions
document.addEventListener('DOMContentLoaded', () => {
  console.log(`Hello Team...`)
// this code stops your <form> from reloading the page
  document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault();
  });

});
function login() {
    
    const name = document.getElementById('name').value;
    const select = document.getElementById('select').value;

  
  let people = [
    { name: 'hardy', age: 10, color: 'blue', hairStyle: 'dread lock' },
    { name: 'vusumuzi', age: 21, color: 'red', hairStyle: 'chiskop' },
    { name: 'wandile', age: 65, color: 'blue', hairStyle: 'chiskop' },
    { name: 'charity', age: 28, color: 'pink', hairStyle: 'afro' },
    { name: 'precious', age: 17, color: 'pink', hairStyle: 'braid' },
    { name: 'andisiwe', age: 90, color: 'green', hairStyle: 'afro' },
    { name: 'mmapaseka', age: 30, color: 'black', hairStyle: 'braid' },
    { name: 'mhlonipheni', age: 20, color: 'yellow', hairStyle: 'afro' },
    { name: 'khumbulani', age: 30, color: 'blue', hairStyle: 'afro' },
    { name: 'sophie', age: 18, color: 'grey', hairStyle: 'braid' },
    { name: 'lucky', age: 32, color: 'grey', hairStyle: 'chiskop' },
    { name: 'sithembiso', age: 32, color: 'blue', hairStyle: 'chiskop' },
    { name: 'happy', age: 18, color: 'white', hairStyle: 'twist' },
    { name: 'selina', age: 26, color: 'green', hairStyle: 'chiskop' },
    { name: 'nkosiphendule', age: 30, color: 'white', hairStyle: 'chiskop' },
    { name: 'thato', age: 30, color: 'green', hairStyle: 'chiskop' },
  ];
  
  for (let i = 0; i < people.length; i++) {
      
    if ((people[i].name == name) && (people[i].select == select)) {
        people.innerHTML += '<li>' + people[i].name + ' select ' + people[i].select + '</li>';
        location.href = 'home.html';
    }
  }
}
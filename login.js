function login() {
    
    var name = document.getElementById('name').value;
    var year = document.getElementById('year').value;

  
  let people = [
    { name: 'hardy', year: 55 },
    { name: 'vusumuzi', year: 2 },
    { name: 'wandile', year: 65 },
    { name: 'charity', year: 28 },
    { name: 'precious', year: 29 },
    { name: 'andisiwe', year:  30 },
    { name: 'mmapaseka', year: 31 },
    { name: 'mhlonipheni', year: 35 },
    { name: 'khumbulani', year: 25 },
    { name: 'sophie', year: 37 },
    { name: 'lucky', year: 32 },
    { name: 'sithembiso', year: 32 },
    { name: 'happy', year: 18 },
    { name: 'selina', year: 26 },
    { name: 'nkosiphendule', year: 30 },
    { name: 'thato', year: 30 },
    { name: "Willism", year: 26 },
    { name: "Sibusiso", year: 27 },
  ];
  
  for (let i = 0; i < people.length; i++) {
      
    if ((people[i].name == name) && (people[i].year == year)) {
        people.innerHTML += '<li>' + people[i].name + ' year ' + people[i].year + '</li>';
        location.href = 'index.html';
    }
  }
}
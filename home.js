var people = ["Happy 23 year","Nkosiphandule 65 year","Sithembiso 43 year","Andiswe 32 year","Sophie 30 year","Mduduzi 98 year","Wandile 26 year","Vusi 75 year","Precious 34 year","Selina 23 year","Kagisho 75 year","Mhlompheni 27 year","Lucky 89 year","Lebo 56 year","Khumbulani 90 year",];
var name = [];
var display = document.getElementById("display");

for (let i= 0; i < people.length; i++ ) {
    display.innerHTML += "<li>" + people[i] + "</li>";
}


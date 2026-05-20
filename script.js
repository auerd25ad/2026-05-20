// 1. Hozz létre egy üres tömböt, aminek a neve legyen tomb
var tomb = [];

// 2. Töltsd fel a tömböt 10 darab véletlen számmal a Math.random() függvény segítségével
for (var i = 0; i < 10; i++) {
    tomb[i] = Math.ceil(Math.random()*5);
}

// 3. Írd ki a tömb elemeit
for (var i = 0; i < tomb.length; i++) {
    document.write(tomb[i] + "<br>");
}

// Összegzés
var osszeg = 0;
for (var i = 0; i < tomb.length; i++) {
    osszeg = osszeg + tomb[i];
}

document.write(" <br> A jegyek összege: " + osszeg);

// Átlagszámítás
var atlag = osszeg / tomb.length
document.write(" <br> Az átlagom: " + atlag)


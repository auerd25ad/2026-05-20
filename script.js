function fv1() {
    // 1. Hozz létre egy üres tömböt, aminek a neve legyen tomb
    var tomb = [];
    var jegyek = document.getElementById("jegyek");


    // 2. Töltsd fel a tömböt 10 darab véletlen számmal a Math.random() függvény segítségével
    for (var i = 0; i < 10; i++) {
        tomb[i] = Math.ceil(Math.random() * 5);
    }

    // 3. Írd ki a tömb elemeit
    for (var i = 0; i < tomb.length; i++) {
        //document.write(tomb[i] + "<br>");
        jegyek.innerHTML = jegyek.innerHTML + tomb[i] + ",";
    }

    // Összegzés
    var osszeg = 0;
    for (var i = 0; i < tomb.length; i++) {
        osszeg = osszeg + tomb[i];
    }

    //document.write(" <br> A jegyek összege: " + osszeg);
    document.getElementById("jegyekOsszege").innerHTML = osszeg;

    // Átlagszámítás
    //var atlag = osszeg / tomb.length
    //document.write(" <br> Az átlagom: " + atlag);
    document.getElementById("jegyekAtlaga").innerHTML = osszeg / tomb.length;
}




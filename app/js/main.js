function myFunction() {
    var x = "", i;
    for (i=0; i<5; i++) {
        x = x + "The number is " + i + "<br>";
    }
    document.getElementById("demo2").innerHTML = x;
}

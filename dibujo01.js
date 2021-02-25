var texto = document.getElementById("texto_lineas");
var TcEstrella = document.getElementById("TcolorE");
var TcMarco = document.getElementById("TcolorM");
var TcComplemento = document.getElementById("TcolorC");
var ancho1 = document.getElementById("anchoc");
var boton = document.getElementById("botoncito");

// esta funcion o escuchador de eventos es el que esta atento cuando ocurre un click y va a llamar al evento dibujo por click//
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujoPorClick()
{
    d.width=ancho1.value;
    d.height=ancho1.value;
    var ancho2 = parseInt(ancho1.value);
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf, yf, xi, yfn;
    var espacio = (ancho2*0.5) / lineas;
    var o = ancho2 / 2;
    var colorcito = TcEstrella.value;
    var colorcito2 = TcMarco.value;
    var colorcito3 = TcolorC.value;

    //ciclo de dibujo de estrella en el canvas//
    while(l < lineas)
    {
        yi = espacio * l;
        xf = o - (espacio * l);
        yf = o + (espacio * l);
        xi = (o * 2)-(espacio * l);
        p = -ancho2 + (ancho2 * 0.35);

        // codigo de la estrella//

        dibujarLinea(colorcito, o, yi, yf, o);    
        dibujarLinea(colorcito, o, yi, xf, o);
        dibujarLinea(colorcito, yi, o, o, yf);
        dibujarLinea(colorcito, xi, o, o, yf);

        //marco de la estrella//

        dibujarLinea(colorcito2, 0, xf, yi, 0);
        dibujarLinea(colorcito2, ancho2, yi, yf, 0);
        dibujarLinea(colorcito2, 0, yf, yi, ancho2);
        dibujarLinea(colorcito2, xi, ancho2, ancho2, yf);

        //estrella 02//

        dibujarLinea(colorcito3, o+p, yi, yf, o-p);    
        dibujarLinea(colorcito3, o-p, yi, xf, o-p);
        dibujarLinea(colorcito3, yi, o+p, o-p, yf);
        dibujarLinea(colorcito3, xi, o+p, o+p, yf);
        
         //grilla de la estrella//

        dibujarLinea("#2b2b2b", o, 0, o, o*2);
        dibujarLinea("#2b2b2b", 0, o, o*2, o);
        dibujarLinea("#2b2b2b", 1, 1, (o*2)-1, 1);
        dibujarLinea("#2b2b2b", 1, (o*2)-1, (o*2)-1, (o*2)-1);
        dibujarLinea("#2b2b2b", (o*2)-1, 1, (o*2)-1, (o*2)-1);
        dibujarLinea("#2b2b2b", 1, 1, 1, (o*2)-1);

        l = l + 1;
    }
}

//funcion que dibuja las lineas//
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
    {
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.moveTo(xinicial, yinicial);
        lienzo.lineTo(xfinal, yfinal);
        lienzo.stroke();
        lienzo.closePath();
}

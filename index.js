var numeroActual = 1;
var operacion = "";
var n1 = "";
var n2 = "";
var resultado="";
var encendido=true;
var historial = [];



function afterSolutionClick() {
    if (resultado!="" || resultado=="0") {
        resultado="";
        n1="";
        n2="";
        document.getElementById("pantallaOperacion").value="";
    }
}

function afterSolutionOp() {

    if (resultado!="" || resultado=="0") {
        resultado="";
        n2="";
        n1=document.getElementById("pantallaResultado").value;
        document.getElementById("pantallaOperacion").value=n1;
        numeroActual=1;
    }

}

function btNum(a) {
    if (encendido) {
        afterSolutionClick();

        document.getElementById("pantallaOperacion").value=document.getElementById("pantallaOperacion").value+a; 

        if (numeroActual == 1) {
            n1 = n1+a;
        } else {
            n2 = n2+a;
        }
    }

}

function btPu() {
    
    afterSolutionClick();

    if (numeroActual==1 && !n1.includes(".") || numeroActual==2 && !n2.includes(".")) {
        if (document.getElementById("pantallaOperacion").value == "" || numeroActual == 2 & n2=="") {
            document.getElementById("pantallaOperacion").value=document.getElementById("pantallaOperacion").value+"0."; 
        } else {
            document.getElementById("pantallaOperacion").value=document.getElementById("pantallaOperacion").value+"."; 
        }
        if (numeroActual == 1) {
            n1 = n1+".";
        } else {
            n2 = n2+".";
        }
    }
    
}

function btMa() {

    afterSolutionOp()

    if (numeroActual == 1) {
        numeroActual++;
        if (n1 != "") {
            numeroActual=2;

            operacion = "+";

            document.getElementById("pantallaOperacion").value=document.getElementById("pantallaOperacion").value+" + "; 
        }
    }
}

function btMe() {

    afterSolutionOp()

    if (numeroActual == 1) {
        numeroActual++;
        if (n1 != "") {
            numeroActual=2;

            operacion = "-";

            document.getElementById("pantallaOperacion").value=document.getElementById("pantallaOperacion").value+" - "; 
        }
    }
}

function btPo() {

    afterSolutionOp()

    if (numeroActual == 1) {
        numeroActual++;
        if (n1 != "") {
            numeroActual=2;

            operacion = "*";

            document.getElementById("pantallaOperacion").value=document.getElementById("pantallaOperacion").value+" * "; 
        }
    }
}

function btDi() {

    afterSolutionOp()

    if (numeroActual == 1) {
        numeroActual++;
        if (n1 != "") {
            numeroActual=2;

            operacion = "/";

            document.getElementById("pantallaOperacion").value=document.getElementById("pantallaOperacion").value+" / "; 
        }
    }
}

function btEl() {
    afterSolutionOp()

    if (numeroActual == 1) {
        numeroActual++;
        if (n1 != "") {
            numeroActual=2;

            operacion = "^";

            document.getElementById("pantallaOperacion").value=document.getElementById("pantallaOperacion").value+" ^ "; 
        }
    }
}


function btIg() {
    if (numeroActual==2 && n2!="") {
        

        if (operacion == "+") {
            resultado = parseFloat(n1)+parseFloat(n2);
        } else if (operacion == "-") {
            resultado = parseFloat(n1)-parseFloat(n2);
        } else if (operacion == "*") {
            resultado = parseFloat(n1)*parseFloat(n2);
        } else if (operacion == "/") {
            resultado = parseFloat(n1)/parseFloat(n2);
        } else if (operacion = "^") {
            resultado = Math.pow(parseFloat(n1),parseFloat(n2));
        }
        
        if (resultado.toString().length>8) {
            alert("cuidao");
            resultado=parseFloat(resultado).toFixed(5);
        }
        

        numeroActual = 1;
        if (historial.length>3) {
            historial.shift();
        }
        var hist = document.getElementById("pantallaOperacion").value+" = "+resultado;
        historial.push(hist);
        
        document.getElementById("pantallaResultado").value=resultado;
    }
}

function btC() {
    numeroActual = 1;
    n1 = "";
    n2 = "";
    document.getElementById("pantallaOperacion").value="";
    document.getElementById("pantallaResultado").value="";
}

function btBo() {
    texto = document.getElementById("pantallaOperacion").value;

    if (texto.charAt(texto.length-1)==" ") {        
        texto=texto.substring(0,texto.length-3);
        document.getElementById("pantallaOperacion").value=texto;
        operacion="";
        numeroActual=1;
    } else {
        texto=texto.substring(0,texto.length-1);
        document.getElementById("pantallaOperacion").value=texto;      
        if (numeroActual==1) {
            n1=n1.substring(0,n1.length-1);
        } else {
            n2=n2.substring(0,n2.length-1);
        } 
    } 

}

function btOff() {
    encendido=false;
    document.getElementById("pantalla").value="";
    n1="";
    n2="";
    historial="no";
    historial=[""];

    
}
function btOn() {
    encendido=true;
    numeroActual=1;
}

function btHist() {
    var numero=0;
    for (const element of historial) {
        numero++;
        var textName = "hist"+numero;
        document.getElementById(textName).value = historial[numero-1];
    }

    document.getElementById("myDropdown").classList.toggle("show");
  

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
}
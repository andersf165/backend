// JavaScript Document
/* Desarrollado Por Anderson Florez

•	DefinirUso() : Agrega la cantidad de uso del sistema.
•	TamanoMatriz(): Agrega el tamaño de la matriz y cantidad de operaciones.
•	IngresarOperaciones(): Agrega las coordenadas y tipo de operación.
•	limpia (): limpia los valores del sistema.
•	GenerarSalida(): Genera la respuesta de los valores ingresados.
•	suma_cubo(): Suma los valores cada vez que se ejecuta un query.
•	cablear(): Contiene valores ya pre cargados que permiten validar que el flujo del sistema es el correcto.

*/
miArray =new Array() ;//Capturar Valores
var j=0;

function DefinirUso()//Capturar la cantidad de casos a ejecutar
{ 

	NC = document.getElementById("NC").value; //Numero de casos 
	if(NC=="")
	{ 
	alert ("EL Campo numero de casos esta vacio");
	}
	else
	{ 
	miArray.push(NC); 
	var midiv = document.createElement("div");
	midiv.setAttribute("id","DatosEntrada0"+1);
	midiv.innerHTML = "<p>"+NC+ "</p>";
	document.getElementById('DatosEntrada').appendChild(midiv);
	}
}

function TamanoMatriz() //Capturar la cantidad de operaciones y de la matriz
{ 

//Variables del Ejercicio 
CO = document.getElementById("CO").value; //cantidad de Operacion 
TM= document.getElementById("TM").value;  //Tamaño de matriz
valorCambiar = document.getElementById("V").value;   //Valor
if((TM=="")||  (CO==""))
{ 
alert ("EL Campo Matriz y cantidad de operacion estan vacios");
}
else
{ 
miArray.push(TM+"/"+CO);

var midiv = document.createElement("div");
midiv.setAttribute("id","DatosEntrada0"+1);
midiv.innerHTML = "<p>"+TM+" "+CO+ "</p>";
document.getElementById('DatosEntrada').appendChild(midiv);
}
}


function IngresarOperaciones() //Permite Ingresar las operaciones de Update y Query
{ 
	//Coordenadas 
	X1 = document.getElementById("X1").value;
	Y1 = document.getElementById("Y1").value;
	Z1 = document.getElementById("Z1").value; 
	X2 = document.getElementById("X2").value;
	Y2 =  document.getElementById("Y2").value;
	Z2 = document.getElementById("Z2").value;
	TO = document.getElementById("TO").value;  //Tipo de Operacion
	V  = document.getElementById("V").value;   //Valor
		
	if(TO=="UPDATE")
	{ 
		if((X1=="")||  (Y1=="")||  (Z1=="")||  (V==""))
		{ 
		alert ("Ingrese la coordenada X1,Y1,Z1 y el Valor a cambiar");
		}
		else
		{
		miArray.push("UPDATE/"+X1+"/"+Y1+"/"+Z1+"/"+V);
		var midiv = document.createElement("div");
		midiv.setAttribute("id","DatosEntrada0"+1);
		midiv.innerHTML = "<p>"+"UPDATE "+X1+" "+Y1+" "+Z1+" "+V + "</p>";
		document.getElementById('DatosEntrada').appendChild(midiv);
		}
		
	}
		else if(TO=="QUERY")
		{

		if((X1=="")||  (Y1=="")||  (Z1=="")||  (X2=="")||  (Y2=="")||  (Z2==""))
		{ 
		alert ("Ingrese la coordenada X1,Y1,Z1 y X2,Y2,Z2");
		}
		else
		{
		miArray.push("QUERY/"+X1+"/"+Y1+"/"+Z1+"/"+X2+"/"+Y2+"/"+Z2);
		var midiv = document.createElement("div");
		midiv.setAttribute("id","DatosEntrada0"+1);
		midiv.innerHTML = "<p>"+"Query "+X1+" "+Y1+" "+Z1+" "+X2+" "+Y2+" "+Z2 + "</p>";
		document.getElementById('DatosEntrada').appendChild(midiv);
		}
	}
	else
	{
	alert("Seleccione un tipo de Operacion Query/Update");
	} 
}

function limpiar() //Limpiar todo los valores
{ 
//Coordenadas 
X1 = document.getElementById("X1").value="";
Y1 = document.getElementById("Y1").value="";
Z1 = document.getElementById("Z1").value=""; 
X2 = document.getElementById("X2").value="";
Y2=  document.getElementById("Y2").value="";
Z2 = document.getElementById("Z2").value="";
//Variables del Ejercicio
NC = document.getElementById("NC").value=""; //Numero de casos
CO = document.getElementById("CO").value=""; //cantidad de Operacion
TO= document.getElementById("TO").value="";  //Tipo de Operacion
TM= document.getElementById("TM").value="";  //Tamaño de matriz
valorCambiar = document.getElementById("V").value="";   //Valor
 
alert("Ingrese nuevo valores");
}


function GenerarSalida() //Se procesa la data ingresada para generar la salida de los datos
{ 

	for (caso = 0; caso < NC; caso++)//numero de casos
	{ 
		
		if(caso==0)
		{ 
			var str = miArray[1];
	    	var res = str.split("/"); 
			valorA=parseInt(res[0]);
			valorB=parseInt(res[1]);
			posicion=2;
		}
		else
		{ 
			
			var str = miArray[posicion];
	    	var res = str.split("/"); 
			valorA=parseInt(res[0]);
			valorB=parseInt(res[1]);
			posicion++;
		}
		
		
		matriz= new Array();
		for (var operacion = posicion; operacion < valorB+posicion; operacion++)//numero de operacion
		{ 
		var oper= miArray[operacion];
				var oper2= oper.split("/");
				if(oper2[0]=="UPDATE")
				{ 
					x = oper2[1];
					y = oper2[2];
					z = oper2[3];
					valor = oper2[4];
					var ccordenada = [x, y, z];//capturar coordenada a cambiar
					matriz[ccordenada]=valor;
				}
				if(oper2[0]=="QUERY")
				{
					x  = oper2[1];
					y  = oper2[2];
					z  = oper2[3];
					x1 = oper2[4];
					y1 = oper2[5];
					z1 = oper2[6];
					var  suma=suma_cubo(matriz, x, y, z, x1, y1, z1);
					var midiv = document.createElement("div");
					midiv.setAttribute("id","DatosSalida0"+1);
					midiv.innerHTML = "<p>"+ suma + "</p>";
					document.getElementById('DatosSalida').appendChild(midiv);
				}
	  	}
		posicion=posicion+valorB;
   } 


}

function suma_cubo(cubo, x, y, z, x1, y1, z1)
{
total = 0;
for (var key in cubo)
{ 

	valiablecubo = key.split(",");
	valorx=parseInt(valiablecubo[0]);
	valory=parseInt(valiablecubo[1]);
	valorz=parseInt(valiablecubo[2]);
	valorllave=cubo[key];
	if ((valorx >= x && valorx <= x1) && (valory >= y && valory <= y1) && (valorz >= z && valorz <= z1))
			{
				total = total+ parseInt(valorllave);     
			}
	}
return total;
}

function cablear()//valida funcionamiento del sistema
{	
	
	miArray.push(2);
	miArray.push(4+"/"+5);
	miArray.push("UPDATE/"+2+"/"+2+"/"+2+"/"+4);
	miArray.push("QUERY/"+1+"/"+1+"/"+1+"/"+3+"/"+3+"/"+3);
	miArray.push("UPDATE/"+1+"/"+1+"/"+1+"/"+23);
	miArray.push("QUERY/"+2+"/"+2+"/"+2+"/"+4+"/"+4+"/"+4);
	miArray.push("QUERY/"+1+"/"+1+"/"+1+"/"+3+"/"+3+"/"+3);
	miArray.push(2+"/"+4);
	miArray.push("UPDATE/"+2+"/"+2+"/"+2+"/"+1);
	miArray.push("QUERY/"+1+"/"+1+"/"+1+"/"+1+"/"+1+"/"+1);
	miArray.push("QUERY/"+1+"/"+1+"/"+1+"/"+2+"/"+2+"/"+2);
	miArray.push("QUERY/"+2+"/"+2+"/"+2+"/"+2+"/"+2+"/"+2);
}

function valida(e) //Validar que solo se permita numeros en el formulario
{
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla==8){
        return true;
    }
        
    // Patron de entrada, en este caso solo acepta numeros
    patron =/[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}
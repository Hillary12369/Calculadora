var op = parseInt(prompt("OP: "));
var x=0, y=0;
function suma(a,b){
    return (parseInt(a)+parseInt(b));
}
function resta(a,b){
    return (parseInt(a)-parseInt(b));
}
function multiplicacion(a,b){
    return (parseInt(a)*parseInt(b));
}
function division(a,b){
    return (parseInt(a)/parseInt(b));
}
function raizcubica(a){
    return Math.pow(parseFloat(a),1/3);
}
function factorial(a){
    let i, s=1;
    for(i=1;i<a+1;i++){
        s*=i;
    }
    return s;
}
function potencia(a,b){
    return Math.pow(a, b);
}
function datos1(){
    x = Number(prompt("N: "))
}
function datos2(){
    x = prompt("N1: ");
    y = prompt("N2: ");
}
switch(op){
    case 1: datos2();
        document.write("La suma es: ", suma(x,y));
        break;
    case 2: datos2();
        document.write("La resta es: ", resta(x,y));
        break;
    case 3: datos2();
        document.write("La multiplicacion es: ", multiplicacion(x,y));
        break;
    case 4: datos2();
        document.write("La division es: ", division(x,y));
        break;
    case 5: datos1();
        document.write("La raiz cubica es: ", raizcubica(x));
        break;
    case 6: datos1();
        document.write("El factorial es: ", factorial(x));
        break;
    case 7: datos2();
        document.write("La potencia es: ", potencia(x,y));
        break;
    default:
        document.write("Opcion no encontrada")
}
//inicio//
function comprobar(){
    var u=document.getElementById("usuario").value;
    var c=document.getElementById("contra").value;
    if (u=="5to" && c=="perito"){
        window.location.href="inicio.html";
    }
    else{
        alert("datos incorrectos");
    }
}
tot=0
function ventas(){
    var si1=parseInt(document.getElementById('si1').value);
    tot=si1*150;
    document.getElementById('m1').innerHTML= tot;
}
tot2=0
function ventas2(){
    var si2=parseInt(document.getElementById('si2').value);
    tot2=si2*200;
    document.getElementById('m2').innerHTML= tot2;
}
tot3=0
function ventas3
(){
    var si3=parseInt(document.getElementById('si3').value);
    tot3=si3*275;
    document.getElementById('m3').innerHTML= tot3;
}
tot4=0
function ventas4(){
    var si4=parseInt(document.getElementById('si4').value);
    tot4=si4*175;
    document.getElementById('m4').innerHTML= tot4;
}
tot5=0
function ventas5(){
    var si5=parseInt(document.getElementById('si5').value);
    tot5=si5*175;
    document.getElementById('m5').innerHTML= tot5;
}
tot6=0
function ventas6(){
    var si6=parseInt(document.getElementById('si6').value);
    tot6=si6*135;
    document.getElementById('m6').innerHTML= tot6;
}
function ventas7(){
    var resultado=(tot+tot2+tot3+tot4+tot5+tot6);

    document.getElementById('nota').value='El total de esta sección es '+resultado;
}


total2=0
function prueba(){
    var cantidad123=parseInt(document.getElementById('cantidad123').value)
    total2=cantidad123*50;
    document.getElementById('mensajeee').innerHTML=total2;

}
total3=0
function prueba1(){
    var cantidad456=parseInt(document.getElementById('cantidad456').value)
    total3=cantidad456*275;
    document.getElementById('mensajeee1').innerHTML=total3;
}
total4=0
function prueba2(){
    var cantidad0=parseInt(document.getElementById('cantidad0').value)
    total4=cantidad0*20;
    document.getElementById('mensajeramen').innerHTML=total4;
        
}
total5=0
function prueb(){
    var cantida=parseInt(document.getElementById('cantida').value)
    total5= cantida*500;
    document.getElementById('mensajee').innerHTML=total5;
    
}
total6=0
function prue(){
    var cantid=parseInt(document.getElementById('cantid').value)
    total6=cantid*200;
    document.getElementById('mensaje').innerHTML=total6 ;
}
total7=0
function pru(){
    var canti=parseInt(document.getElementById('canti').value)
    total7=canti*1205;
    document.getElementById('mensaj').innerHTML=total7 ;

}
function pr(){
    var resultado2=(total2+total3+total4+total5+total6+total7);

    document.getElementById('total').value='El total de esta sección es '+resultado2;
}
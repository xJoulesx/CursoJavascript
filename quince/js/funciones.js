//alert("HOLA MUNDO...");

function verificar(){
    var limite= forma.edad.length;
    chequeado=false;
    //console.log(limite);
    //console.log(forma.edad[0].checked);
    //console.log(forma.edad[1].checked);
    for(i=0;i < limite; i++){
        valor=forma.edad[i].checked;
        if(valor==true){
            chequeado=true;
        }
    }
    if(chequeado==false){
        console.log("No hay ninguno chequeado..");
    }else{
        console.log("BIen");
    }
}

function verificar2(){
    
    var limite=forma.genero.length;
    var chequeado=false;
    //limpiar();alert();
    for(i=0;i<limite;i++){
        valor=forma.genero[i].checked;
        if(valor){
            chequeado=true;
        }
    }
    if(!chequeado){
        msg=document.getElementById("mensaje");
        msg.style.backgroundColor="red";
        //msg.style.width="200px";
        //msg.style.height="150px";
        msg.innerHTML="<h1>ERROR..!!!!</h1>";
    }else{
        //forma.action="index.php";
        //forma.submit();
        validaPais();
    }
}

function limpiar(){
    msg=document.getElementById("mensaje");
    msg.innerHTML="";
    msg.style.backgroundColor="";
}
function validaPais(){
    //console.log(forma.pais.length);
    //console.log(forma.pais.options[0].value);
    //console.log(forma.pais.options[1].value);
    //console.log(forma.pais.options[2].value);
    //console.log(forma.pais.selectedIndex);
    selecionado=forma.pais.selectedIndex;
    /*
    if(forma.pais.selectedIndex==0){
        alert("ERROR");
    }else{
        alert("Bien");
    }
    */
    //console.log(forma.pais.options[selecionado].value);
    //console.log(forma.pais.options[selecionado].text);
    valor= forma.pais.options[selecionado].value;
    console.log(valor);
    if(valor>0){
        forma.pais.style.border="5px solid blue";
        forma.pais.disabled=true;
    }
}


//console.log("Todo ok");

function ver(){
    ruta= document.laImagen.src;
    console.log(ruta);
    campo=document.laImagen.name;
    console.log(campo);
    cambiar();
}

function cambiar(){
    
    alert("Observe la imagen y presione aceptar");
    document.laImagen.width=100;
    document.laImagen.height=200;
    document.laImagen.style.opacity="0.5";
    document.laImagen.style.border="2px dashed red";        
}

function cambiarOn(campo){
    
    campo.style.color="red";
        
}

function cambiarOff(campo){
    campo.style.color="black";
}
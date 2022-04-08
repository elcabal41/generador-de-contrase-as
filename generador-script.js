const general = document.getElementById("general");


general.addEventListener("click", () =>{


 const generadorContraseña = document.getElementById("generadorContraseña");
 let geContraseña = generadorContraseña.value;
 geContraseña = parseInt(geContraseña);
 let alfa_Beto = " ";
 let alfabeto = `abc8de/$fghijk*@lmn1op!6qrstu3vwx2yz`;
  
 
 if (geContraseña  <= 3) {
     
    for (contador = 1; contador <= geContraseña; contador++) {
  
       for (i = 0; i <= geContraseña ; i++) {
           
          alfa_Beto += alfabeto.charAt(Math.floor(Math.random()*alfabeto.length));
       
       }
           alert("contraseña : " + contador + " " + alfa_Beto);
}

        generadorContraseña.value=" "
 
}

else {

       alert("Solo se pueden general 3 contraseñas diferantes")
}

})
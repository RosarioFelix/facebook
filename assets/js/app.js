var records = document.getElementById('mensaje');
var reco = document.getElementById('mensaje2');

var usuarios =[{ usuario : "lilipu@hotmail.com" , contaseña : "hola2017"},
               {usuario : "kattyfe@hotmail.com" , contraseña : "chau2017"},
               {usuario : "MariaTasayco@gmail.com", contraseña: "lilipu31"},
               {usuario : "shakira@gmail.com" , contraseña : "mamisha"}]


function validacion(){

  var correo = document.getElementById('email').value;
  var contra = document.getElementById('contra').value;


  if((correo.length==0) ||(contra.length==0)){
     records.innerHTML= "No puede dejar datos en Blanco"
     reco.innerHTML= "No puede dejar datos en Blanco"
  }else {
    records.innerHTML= " "
    reco.innerHTML= " "
  }

  
};

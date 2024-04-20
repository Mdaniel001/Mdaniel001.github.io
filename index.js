const listUsers= async()=>{

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const  users=  await response.json();// convierte de jason a Objetos

    let tableBody=``; //crear plantillas de Strings
    users.forEach(( user, index)=> { //llenamos los campos de las tablas 
        tableBody += `<tr> /
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.website}</td>  
        </tr>`  

        console.log(user); //imprimir uno a uno los datos

    });   
    document.getElementById("tableBody_Users").innerHTML =tableBody; 
    //obtenemos un elemnto por identificador y 
    //le coloco un contenido HTML iNTERNO COMO ES EL TABLEBODY
    
};   
    
    
window.addEventListener("load", function(){  //escuchador de eventos  y ver pagina cargada
    listUsers();
    console.log("Documento Cargado")
    });


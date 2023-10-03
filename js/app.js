// obtenemos los datos del local storage o sera una array vacio
let registros = JSON.parse(localStorage.getItem('registros')) || [];


/**
 * Este metodo nos permite agregar datos a la tabla atraves del formulario
 * @returns void
 */
const agregarRegistro = () => {

  // Obtenemos los campos del formulario
  const firstname = document.forms["registrationForm"]["firstname"].value;
  const lastname = document.forms["registrationForm"]["lastname"].value;
  const id = document.forms["registrationForm"]["id"].value;
  const city = document.forms["registrationForm"]["city"].value;
  const country = document.forms["registrationForm"]["country"].value;
  const email = document.forms["registrationForm"]["email"].value;
  const age = document.forms["registrationForm"]["age"].value;
  const cellphone = document.forms["registrationForm"]["cellphone"].value;

  // Validamos los campos
  if (firstname === "" || lastname === "" || id === 0  || city === "" || country === "" || email === "" || age === "" || cellphone === "") {
    // Muestra un mensaje de error o toma la acción adecuada, como alertar al usuario
    const errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block";
    return; // Detiene la función y no agrega el registro
  }

  // Creamos el objeto que tendra la info
  // (se puedo poner solo firstname en vez de firstname:firstname pero priorizo la legibilidad del codigo)
  let registro = {
    firstname: firstname,
    lastname: lastname,
    id: id,
    city: city,
    country: country,
    email: email,
    age: age,
    cellphone: cellphone
  };

  // Agregamos al array
  registros.push(registro);


  // Accedemos al localstorage
  localStorage.setItem('registros',JSON.stringify(registros))

  // renderizamos la tabla
  renderizarTable();

  // Limpia los campos del formulario
  document.forms["registrationForm"].reset();


}

/**
 * Metodo para obtener la tabla, los datos del local storage y renderizarlos
 */
const renderizarTable = () => {
  // Accedemos a la tabla
  const table = document.querySelector(".table tbody");

  // Limpiamos la tabla
  table.innerHTML="";

  // Accedemos al la info del local storage
  let registrosLocal = JSON.parse(localStorage.getItem('registros')) || []; 


  // recorremos la info
  registrosLocal.forEach((registro, index)=>{
    // creamos nuevas filas
    let newRow = table.insertRow();
    const idCell = newRow.insertCell(0);
    const firstnameCell = newRow.insertCell(1);
    const lastnameCell = newRow.insertCell(2);
    const cityCell = newRow.insertCell(3);
    const countryCell = newRow.insertCell(4);
    const emailCell = newRow.insertCell(5);
    const ageCell = newRow.insertCell(6);
    const cellPhoneCell = newRow.insertCell(7);

    // Le asignamos valores a las nuevas filas
    idCell.textContent = registro.id;
    firstnameCell.textContent = registro.firstname;
    lastnameCell.textContent = registro.lastname;
    cityCell.textContent = registro.city;
    countryCell.textContent = registro.country;
    emailCell.textContent = registro.email;
    ageCell.textContent = registro.age;
    cellPhoneCell.textContent = registro.cellphone;
    

  })

}

// LLamamos al metodo
renderizarTable();

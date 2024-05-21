// auth.js

// Función para obtener la lista de usuarios desde localStorage
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

// Función para iniciar sesión
function loginUser(email, password) {

  console.log("Dentro de loginUser");  

  let users = getUsers();

  console.log("Users:");  
  console.log(users);

  // Verificar si el usuario existe y la contraseña es correcta
  let user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    sessionStorage.setItem("isOnline", true);
    sessionStorage.setItem("userEmail", email);
    return { success: true, message: "Inicio de sesión exitoso." };
  }

  return {
    success: false,
    message: "Correo electrónico o contraseña incorrectos.",
  };
}

// Función para verificar si el usuario está en línea
function isUserOnline() {
  return sessionStorage.getItem("isOnline") === "true";
}

// Función para cerrar sesión
function logoutUser() {
  sessionStorage.removeItem("isOnline");
  sessionStorage.removeItem("userEmail");
}


function handleLogin(event) {
  console.log("Dentro de handleLogin");

  event.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("email: " + email);
  console.log("password: " + password);
  
  // se invoca la función para iniciar sesión 
  const result = loginUser(email, password);

  console.log("Result:");
  console.log(result);

  if (result.success) {
    alert(result.message);
    window.location.href = "dashboard.html";
  } else {
    alert(result.message);
  }
}

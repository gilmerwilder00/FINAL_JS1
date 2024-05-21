function validateRegisterForm() {

  console.log("dentro de validateRegisterForm");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("email: " + email);
  console.log("password: " + password);

  if (!email || !password) {
    alert("Por favor, complete todos los campos.");
    return false;
  }

  if (password.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres.");
    return false;
  }
  
  return true;
}



function validateForm() {
  console.log("dentro de validateForm");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("email: " + email);
  console.log("password: " + password);


  if (!email || !password) {
    alert("Por favor, complete todos los campos.");
    return false;
  }

  return true;
}

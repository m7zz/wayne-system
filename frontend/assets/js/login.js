function login() {
  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;

  fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {

    if (data.error) {
      alert("Login inválido");
      return;
    }

    // salva o tipo do usuário
    localStorage.setItem("role", data.role);  

    // redireciona
    window.location.href = "dashboard.html";
  });
}
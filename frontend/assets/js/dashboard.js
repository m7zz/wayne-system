function carregarDashboard() {
  fetch("http://localhost:3000/recursos")
    .then(res => res.json())
    .then(data => {

      document.getElementById("total").innerText = data.length;

      const lista = document.getElementById("listaRecursos");
      lista.innerHTML = "";

      data.forEach(item => {
        lista.innerHTML += `<li>${item.nome} - ${item.tipo}</li>`;
      });

    })
    .catch(err => console.log(err));
}

function irRecursos() {
  window.location.href = "recursos.html";
}

function logout() {
  localStorage.removeItem("role");
  window.location.href = "login.html";
}

carregarDashboard();
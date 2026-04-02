function verificarAcesso(permitidos) {
  const role = localStorage.getItem("role");

  console.log("ROLE ATUAL:", role);

  if (!role || !permitidos.includes(role)) {
    alert("Acesso negado");
    window.location.href = "login.html";
  }
}
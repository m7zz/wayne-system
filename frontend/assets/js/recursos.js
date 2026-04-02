let recursos = [];

function adicionar() {
  const nome = document.getElementById("nome").value;
  const tipo = document.getElementById("tipo").value;

  fetch("http://localhost:3000/recursos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome, tipo }),
  }).then(() => carregar());
}

function render() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  recursos.forEach((item, index) => {
    lista.innerHTML += `
      <li>
        ${item.nome} - ${item.tipo}
        <button onclick="remover(${item.id})">X</button>
        <button onclick="editar(${item.id})">Editar</button>
      </li>
    `;
  });
}

function remover(id) {
  const confirmar = confirm("Tem certeza que deseja deletar?");

  if (!confirmar) return;

  fetch(`http://localhost:3000/recursos/${id}`, {
    method: "DELETE"
  })
  .then(() => carregar())
  .catch(err => console.log(err));
}

function editar(index) {
  const novoNome = prompt("Novo nome: ");
  const novoTipo = prompt("Novo tipo: ");

  if (novoNome && novoTipo) {
    recursos[index].nome = novoNome;
    recursos[index].tipo = novoTipo;

    render();
  }
}

function carregar() {
  fetch("http://localhost:3000/recursos")
    .then((res) => res.json())
    .then((data) => {
      const lista = document.getElementById("lista");
      lista.innerHTML = "";

      data.forEach((item) => {
        lista.innerHTML += `
  <li>
    <span>${item.nome} - ${item.tipo}</span>
    <div class="acoes">
      <button onclick="remover(${item.id})">X</button>
      <button onclick="editar(${item.id})">Editar</button>
    </div>
  </li>
`;
      });
    });
}

function editar(id) {
  const novoNome = prompt("Novo nome:");
  const novoTipo = prompt("Novo tipo:");

  if (!novoNome || !novoTipo) return;

  fetch(`http://localhost:3000/recursos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: novoNome,
      tipo: novoTipo,
    }),
  })
    .then((res) => res.json())
    .then(() => {
      carregar();
    })
    .catch((err) => console.log("Erro:", err));
}

function voltar(){
  window.location.href = "dashboard.html";
}

carregar();

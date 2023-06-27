const mainScreen = document.getElementById('mainScreen');
const addButton = document.getElementById('addButton');
const addScreen = document.getElementById('addScreen');
const closeButton = document.querySelector('.close-button');

addButton.addEventListener('click', () => {
  addScreen.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  addScreen.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === addScreen) {
    addScreen.style.display = 'none';
  }
});

const cep = document.querySelector("#cep");

const showData = (result) => {
  for (const campo in result) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = result[campo];
    }
  }
};

cep.addEventListener("blur", (e) => {
  let search = cep.value.replace("-", "");
  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  };

  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => response.json())
    .then(data => showData(data))
    .catch(e => console.log('Deu Erro: ' + e.message));
});

// consultorio.js
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('conclusaoModal');
  const closeButton = document.querySelector('#conclusaoModal .close-button');
  const fecharModalButton = document.getElementById('fecharModal');

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  fecharModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Verificar se a modal deve ser exibida ao carregar a página
  const shouldShowModal = sessionStorage.getItem('showConclusaoModal');
  if (shouldShowModal) {
    modal.style.display = 'block';
    sessionStorage.removeItem('showConclusaoModal');
  }
});

// Código para mostrar o modal de conclusão
function mostrarModalConclusao() {
  const modal = document.getElementById("conclusaoModal");
  modal.style.display = "block";
}

// Código para fechar o modal de conclusão
function fecharModalConclusao() {
  const modal = document.getElementById("conclusaoModal");
  modal.style.display = "none";
}

// Event listener para o botão de fechar o modal
const fecharModalButton = document.getElementById("fecharModal");
fecharModalButton.addEventListener("click", fecharModalConclusao);

// Captura o evento de clique do botão "Remover"
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-remove')) {
      // Obtém o ID do consultório a ser removido
      const consultorioId = event.target.dataset.id;
      console.log(consultorioId)
      // Verifica se o ID do consultório está definido
      if (consultorioId) {
        // Envia uma solicitação de exclusão para o servidor
        fetch(`/consultorio/${consultorioId}`, {
          method: 'DELETE',
        })
        .then(response => {
          // Verifica se a solicitação foi bem-sucedida
          if (response.ok) {
            // Atualiza a página ou realiza qualquer outra ação necessária
            window.location.reload();
          } else {
            console.error('Erro ao excluir o consultório');
          }
        })
        .catch(error => {
          console.error('Erro ao enviar a solicitação de exclusão', error);
        });
      } else {
        console.error('ID do consultório não está definido');
      }
    }
  });
  
const mainScreen = document.getElementById('mainScreen');
const addButton = document.getElementById('addButton');
const addScreen = document.getElementById('addScreen');
const closeAddScreenButton = document.querySelector('.close-button');

addButton.addEventListener('click', () => {
  addScreen.style.display = 'block';
});

closeAddScreenButton.addEventListener('click', () => {
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
  })
  
// Captura o evento de clique do botão "Remover"
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('btn-remove')) {
    // Obtém o ID do consultório a ser removido
    const consultorioId = event.target.dataset.id;
    const enderecoId = event.target.dataset.endereco;

    // Verifica se o ID do consultório e do endereço estão definidos
    if (consultorioId ) {

      console.log(consultorioId)
      console.log(enderecoId)

      // Cria um objeto com os dados a serem enviados no corpo da requisição
      const 
      dados = {
      consultorioId: consultorioId,
      enderecoId: enderecoId
      };
        // Envia uma solicitação de exclusão para o servidor
  fetch(`/consultorio/${consultorioId}/${enderecoId}`, {
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

const mainScreen = document.getElementById('mainScreen');
const addButton = document.getElementById('addButton');
const addScreen = document.getElementById('addScreen');
const closeAddScreenButton = addScreen.querySelector('.close-button');
const cep = document.querySelector("#cep");

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

document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.getElementById('addButton');
  const saveButton = document.getElementById('saveButton');
  const editButtons = document.querySelectorAll('.btn-edit');
  const removeButtons = document.querySelectorAll('.btn-remove');
  const updateButton = document.getElementById('updateButton');

  if (addButton) {
    addButton.addEventListener('click', function() {
      document.getElementById('addScreen').style.display = 'block';
    });
  }

  if (saveButton) {
    saveButton.addEventListener('click', function(event) {
      const nome = document.getElementById('nome').value;
      const idEndereco = document.getElementById('idEndereco').value;
      const cep = document.getElementById('cep').value;
      const rua = document.getElementById('rua').value;
      const numero = document.getElementById('numero').value;
      const bairro = document.getElementById('bairro').value;
      const cidade = document.getElementById('cidade').value;
      const estado = document.getElementById('estado').value;

      const data = {
        nome: nome,
        idEndereco: idEndereco,
        cep: cep,
        rua: rua,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        estado: estado
      };
      
      fetch('/consultorio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (response.ok) {
            document.getElementById('conclusaoModal').style.display = 'block';
          } else {
            console.error('Erro ao salvar o consultório');
          }
        })
        .catch(error => {
          console.error('Erro ao enviar a solicitação de salvamento', error);
        });
    });
  }

  if (editButtons) {
    editButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        const consultorioId = event.target.dataset.id;
        const nome = event.target.dataset.nome;
        const idEndereco = event.target.dataset.idendereco;
        const cep = event.target.dataset.cep;
        const rua = event.target.dataset.rua;
        const numero = event.target.dataset.numero;
        const bairro = event.target.dataset.bairro;
        const cidade = event.target.dataset.cidade;
        const estado = event.target.dataset.estado;

        document.getElementById('editScreen').style.display = 'block';
        console.log('Chegou aqui')
        document.getElementById('editIdEnderecoInput').value = idEndereco;
        document.getElementById('editConsultorioIdInput').value = consultorioId;
        document.getElementById('editNomeInput').value = nome;
        document.getElementById('editCepInput').value = cep;
        document.getElementById('editRuaInput').value = rua;
        document.getElementById('editNumeroInput').value = numero;
        document.getElementById('editBairroInput').value = bairro;
        document.getElementById('editCidadeInput').value = cidade;
        document.getElementById('editEstadoInput').value = estado;
      });
    });
  }

  

  if (updateButton) {
  
    updateButton.addEventListener('click', function(evento) {

      // evento.preventDefault()


      const consultorioId = document.getElementById('editConsultorioIdInput').value;
      
      const enderecoId = document.getElementById('editIdEnderecoInput').value;
      const nome = document.getElementById('editNomeInput').value;
      const cep = document.getElementById('editCepInput').value;
      const rua = document.getElementById('editRuaInput').value;
      const numero = document.getElementById('editNumeroInput').value;
      const bairro = document.getElementById('editBairroInput').value;
      const cidade = document.getElementById('editCidadeInput').value;
      const estado = document.getElementById('editEstadoInput').value;
      
      const data = {
        nome: nome,
        idEndereco: enderecoId,
        cep: cep,
        rua: rua,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        estado: estado
      };
      console.log("Data: ", data)

    const url = `/consultorio/${consultorioId}/${enderecoId}`;

    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
        .then(response => {
          if (response.ok) {
            document.getElementById('editScreen').style.display = 'none';
            // Aqui você pode adicionar ações adicionais, como exibir uma mensagem de sucesso ou recarregar a página.
          } else {
            console.error('Erro ao atualizar o consultório');
          }
        })
        .catch(error => {
          console.error('Erro ao enviar a solicitação de atualização', error);
        });
    });
  }
  if (removeButtons) {
    removeButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        const consultorioId = event.target.dataset.id;
        const enderecoId = event.target.dataset.endereco;

        if (consultorioId) {
          fetch(`/consultorio/${consultorioId}/${enderecoId}`, {
            method: 'DELETE',
          })
            .then(response => {
              if (response.ok) {
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
      });
    });
  }
});

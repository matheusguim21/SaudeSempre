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
  const saveButton = document.getElementById('saveButton');

  if (saveButton) {
    saveButton.addEventListener('click', function() {
      const id = document.getElementById('id').value;
      const data = document.getElementById('data').value;
      const tipo = document.getElementById('tipo').value;
      const status = document.getElementById('status').value;
      const planoSaudeId = document.getElementById('planoSaudeId').value;
      const pacienteId = document.getElementById('pacienteId').value;
      const pacientePlanoId = document.getElementById('pacientePlanoId').value;
      const atendenteId = document.getElementById('atendenteId').value;
      const atendenteConsultorioId = document.getElementById('atendenteConsultorioId').value;
      const medicoId = document.getElementById('medicoId').value;
      const medicoConsultorioId = document.getElementById('medicoConsultorioId').value;

      const dataValues = {
        id: id,
        data: data,
        tipo: tipo,
        status: status,
        planoSaudeId: planoSaudeId,
        pacienteId: pacienteId,
        pacientePlanoId: pacientePlanoId,
        atendenteId: atendenteId,
        atendenteConsultorioId: atendenteConsultorioId,
        medicoId: medicoId,
        medicoConsultorioId: medicoConsultorioId
      };
      console.log(dataValues)

      fetch('/home', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataValues)
      })
        .then(response => {
          if (response.ok) {
            document.getElementById('conclusaoModal').style.display = 'block';
          } else {
            console.error('Erro ao salvar a consulta');
          }
        })
        .catch(error => {
          console.error('Erro ao enviar a solicitação de salvamento', error);
        });
    });
  }
      const nome = document.getElementById('nome').value;
      const idEndereco = document.getElementById('idEndereco').value;
      const cep = document.getElementById('cep').value;
      const rua = document.getElementById('rua').value;
      const numero = document.getElementById('numero').value;
      const bairro = document.getElementById('bairro').value;
      const cidade = document.getElementById('localidade').value;
      const estado = document.getElementById('uf').value;

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
      console.log({data})
      
      fetch('/home/', {
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

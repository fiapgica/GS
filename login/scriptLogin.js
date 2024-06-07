const formCadastro = document.getElementById('formCadastro');

formCadastro.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmar-senha').value;

  if (nome === '' || email === '' || senha === '' || confirmarSenha === '') {
    alert('Preencha todos os campos!');
    return;
  }

  if (senha !== confirmarSenha) {
    alert('As senhas não coincidem!');
    return;
  }

  formCadastro.submit();
});
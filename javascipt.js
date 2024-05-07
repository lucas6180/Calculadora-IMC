const botaoMobile = document.getElementById('btn-menu-mobile');
const menuMobile = document.getElementById('menu-mobile');

menuMobile.addEventListener('click', animarMenu)
botaoMobile.addEventListener('click', animarMenu)
  function animarMenu(){
  menuMobile.classList.toggle('abrir');
  botaoMobile.classList.toggle('ativar')
}

let tema = document.getElementsByTagName('body')[0];
let btnTema = document.getElementById('btn-tema');
btnTema.addEventListener('click', () =>{
tema.classList.toggle('dark');
btnTema.classList.toggle('img-lua')
btnTema.classList.toggle('img-sol');
tema.classList.toggle('claro')
})



let genero
const testeGeneros = document.querySelectorAll('input[name="sexo"]');

testeGeneros.forEach((sexo) => {
  sexo.addEventListener("change", () => {
    if (sexo.checked) {
      genero = sexo.value;
    }
  });
});

const calcular = document.getElementById("botao");

calcular.addEventListener("click", executar);

function limparCampos() {
  document.getElementById("altura-usuario").value = "";
  document.getElementById("peso-usuario").value = "";
  document.getElementById("idade-usuario").value = "";
  document.getElementById("imc").innerText = "";
  document.getElementById("status-peso").innerText = "";
  document.getElementById("text-resultado").innerText = "";

  testeGeneros.forEach((sexo) => {
    sexo.checked = false;
    genero = "";
  });
}

function executar() {
  let altura = Number(document.getElementById("altura-usuario").value) / 100;
  let peso = Number(document.getElementById("peso-usuario").value);
  let idade = Number(document.getElementById("idade-usuario").value);
  let imc = peso / (altura * altura);
  let recomendacoes = document.getElementById("text-resultado");
  let resultadoImc = document.getElementById("imc");
  let statusPeso = document.getElementById("status-peso");

  if (!genero) {
    alert("Por favor, selecione um gênero!");
    return;
  }

  if (altura > 0 && peso > 0 && idade > 0) {
    let aparecer = document.querySelector('.resultado');
    
    if (calcular.classList.contains("refazer")) {
      limparCampos();
      calcular.innerText = "Calcular";
      calcular.classList.toggle("refazer");
      aparecer.classList.toggle('sumir');
      return;
    } else {
      calcular.classList.toggle("refazer");
      aparecer.classList.toggle('sumir');
    }
    if (imc < 18.5) {
      resultadoImc.innerText = `Seu IMC é de ${imc.toFixed(2)}`;
      statusPeso.innerText = "Abaixo do Peso";
      recomendacoes.innerHTML = `Seu IMC está abaixo de 18.5? Isso pode significar que você está abaixo do peso ideal. Não precisa entrar em pânico, mas é importante prestar atenção nisso. Pode ser que você não esteja recebendo todos os nutrientes de que precisa ou talvez seu metabolismo esteja um pouco acelerado. Uma visita ao médico pode te ajudar a entender o que está acontecendo e a traçar um plano para alcançar um peso saudável. Lembre-se, isso é apenas um resultado ilustrativo e não deve ser tratado como diagnóstico médico.`;
      calcular.innerText = "Calcular novamente";
    } else if (imc >= 18.5 && imc <= 24.9) {
      resultadoImc.innerText = `Seu IMC é de ${imc.toFixed(2)}`;
      statusPeso.innerHTML = "Peso Normal";
      recomendacoes.innerHTML = `Uau, seu IMC está entre 18.5 e 24.9! Isso é ótimo, significa que você está com o peso ideal para sua altura. Continue com os bons hábitos alimentares e a prática regular de exercícios para manter essa saúde em dia! Lembre-se, isso é apenas um resultado ilustrativo e não deve ser tratado como diagnóstico médico.`;
      calcular.innerText = "Calcular novamente";
    } else if (imc >= 25 && imc <= 29.9) {
      resultadoImc.innerText = `Seu IMC é de ${imc.toFixed(2)}`;
      statusPeso.innerHTML = "Acima do Peso";
      recomendacoes.innerHTML = `Parece que você está no sobrepeso. Isso pode ser resultado de hábitos alimentares não muito saudáveis ou talvez falta de exercício. Mas não se preocupe, pequenas mudanças podem fazer uma grande diferença! Tente adicionar mais vegetais ao seu prato e encontrar uma atividade física que você goste. Sua saúde vai agradecer! Lembre-se, isso é apenas um resultado ilustrativo e não deve ser tratado como diagnóstico médico.`;
      calcular.innerText = "Calcular novamente";
    } else if (imc >= 30 && imc <= 34.9) {
      resultadoImc.innerText = `Seu IMC é de ${imc.toFixed(2)}`;
      statusPeso.innerHTML = "Obesidade Grau I";
      recomendacoes.innerHTML = `Cuidado! Seu IMC está indicando obesidade de grau I. Isso significa que seu peso está além do recomendado e isso pode trazer alguns problemas de saúde, como diabetes tipo 2 e pressão alta. Que tal começar a fazer algumas mudanças? Pequenos passos podem levar a grandes resultados! Lembre-se, isso é apenas um resultado ilustrativo e não deve ser tratado como diagnóstico médico.`;
      calcular.innerText = "Calcular novamente";
    } else if (imc >= 35 && imc <= 39.9) {
      resultadoImc.innerText = `Seu IMC é de ${imc.toFixed(2)}`;
      statusPeso.innerHTML = "Obesidade Grau II";
      recomendacoes.innerHTML = `Parece que seu IMC está na faixa de obesidade de grau II. Isso é um sinal de alerta! Está na hora de dar atenção especial à sua saúde. Consulte um médico para obter orientação sobre como começar a perder peso de forma segura e eficaz. Lembre-se, isso é apenas um resultado ilustrativo e não deve ser tratado como diagnóstico médico.`;
      calcular.innerText = "Calcular novamente";
    } else if (imc > 40) {
      resultadoImc.innerText = `Seu IMC é de ${imc.toFixed(2)}`;
      statusPeso.innerHTML = "Obesidade Grau III (Mórbida)";
      recomendacoes.innerHTML = `Seu IMC indica obesidade mórbida. Isso é sério e pode levar a sérias complicações de saúde. Não espere mais, é hora de agir! Procure ajuda médica imediatamente para desenvolver um plano de ação para perder peso e melhorar sua saúde. Estamos aqui para te apoiar! Lembre-se, isso é apenas um resultado ilustrativo e não deve ser tratado como diagnóstico médico.`;
      calcular.innerText = "Calcular novamente";
    }
  } else {
    alert("ERRO! POR FAVOR, PREENCHA TODOS OS CAMPOS!");
  }
}

var altura, peso, idade, imc, recomendacoes, genero, resultadoImc, statusPeso;

const testeGeneros = document.querySelectorAll('input[name="sexo"]');

testeGeneros.forEach((sexo) => {
  sexo.addEventListener('change', () => {
    if (sexo.checked) {
        genero = sexo.value;
    }
  });
});

const calcular = document.getElementById('botao');

calcular.addEventListener('click', executar);

function executar(){
    // Limpar resultados anteriores


    altura = Number(document.getElementById('altura-usuario').value) / 100;
    peso = Number(document.getElementById('peso-usuario').value);
    idade = Number(document.getElementById('idade-usuario').value);

    imc = peso / (altura * altura);
    recomendacoes = document.getElementById('text-resultado');
    resultadoImc = document.getElementById('imc');
    statusPeso = document.getElementById('status-peso');

    if (!genero) {
        alert('Por favor, selecione um gênero!');
        return;
    }

    if (altura > 0 && peso > 0 && idade > 0){
        if(imc < 18.5){
            resultadoImc.innerText = `Seu IMC é de ${imc.toFixed(2)}`;
            statusPeso.innerText = 'Abaixo do Peso';
            recomendacoes.innerHTML = `Você está abaixo do peso ideal para sua altura. <br> Isso pode indicar desnutrição, falta de nutrientes essenciais ou outros problemas de saúde. <br> É importante procurar orientação médica para identificar a causa e receber orientações nutricionais adequadas. <br> Além disso, considere incluir alimentos ricos em nutrientes, como proteínas, gorduras saudáveis e carboidratos complexos, para ajudar a ganhar peso de forma saudável.`;
        } else if(imc >= 18.5 && imc <= 24.9){
            resultadoImc.innerText = `Seu IMC é de ${imc.toFixed(2)}`;
            statusPeso.innerHTML = 'Peso Normal';
            recomendacoes.innerHTML = `Você está dentro da faixa de peso considerada saudável para sua altura. <br> Isso é ótimo! Continue mantendo um estilo de vida saudável com uma dieta equilibrada e atividade física regular.<br> Lembre-se de que manter hábitos saudáveis é fundamental para prevenir doenças e promover o bem-estar geral.<br> Este é um resultado online.<br> O recomendado é procurar um nutricionista ou um profissional qualificado para uma avaliação individualizada e orientações específicas.`;
        }
    } else {
        alert('ERRO! POR FAVOR, PREENCHA TODOS OS CAMPOS!');
    }
}

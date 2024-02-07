// uma interface simples com campos de entrada para altura (em metros) e peso(em quilogramas).

//! botão "Calcular IMC" para iniciar o cálculo.

//* exibição do resultado do IMC após o cálculo.

//TODO Cálculo do IMC:

//O IMC é calculado dividindo o peso (em kg) ple altura ao quadrado(em metros)
function IMC(){
    const valor1 = document.getElementById('valor1')
    const valor2 = document.getElementById('valor2')

    const peso = Number(valor1.value)
    const altura = Number(valor2.value) 

    const IMC = peso / (altura * altura)

    document.getElementById("resultado").innerText += `\n${peso}  / ${altura} * ${altura}. \n Resultado:  ${IMC.toFixed(2)}`
     
    if(IMC < 16.90){
        document.getElementById("resultado").innerText += `\nMenor que 16,90. Muito abaixo do peso`
    }else if(IMC >= 16.90 && IMC <= 18.40){
        document.getElementById("resultado").innerText += `\n17, a 18,40. Abaixo do peso`
    } else if(IMC >= 18.50 && IMC <= 24.90){
        document.getElementById("resultado").innerText += `\n18,50 a 24,90. Peso normal`
    }else if(IMC >= 24.90 && IMC <= 29.90){
        document.getElementById("resultado").innerText += `\n25 a 29,90. Acima do peso`
    }else if(IMC >= 30 && IMC <= 34.90){
        document.getElementById("resultado").innerText += `\n30 a 34,90. Obesidade grau 1`
    }else if(IMC >= 35 && IMC <= 39.90){
        document.getElementById("resultado").innerText += `\n35 a 40. Obesidade grau 2`
    }else {
        document.getElementById("resultado").innerText += `\nMaior que 40. Obesidade grau 3`
    }
}
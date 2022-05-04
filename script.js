// Scripts por Paulo Mariano

function calcular(){
    var operacao = document.getElementById('operacao').value
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value
    var resultado = document.getElementById('resultado')
  
    // consistencias
    if( num1 == '' ){
      alert('Favor digitar um número válido para num1')
      document.getElementById('num1').focus()
      return false
    }
    if( num2 == '' ){
      alert('Favor digitar um número válido para num2')
      document.getElementById('num2').focus()
      return false
    }
  
    // conversão de String para number
    num1 = Number(num1)
    num2 = Number(num2)
    
    if( operacao == '1' ){ // soma
      resultado.value = num1 + num2
    } else if( operacao == '2'){ //subtração
      resultado.value = num1 - num2
    } else if( operacao == '3'){ //Multiplicação
      resultado.value = num1 * num2
    } else if( operacao == '4'){ //Divisão
      resultado.value = num1 / num2
    } else {
      alert('Selecione uma operação')
      return false }

      // resultado.value = result
    }
function capturar() {
  let cantidad = document.getElementById("cantidad").value;
  let porcentaje = document.getElementById("porcentaje").value;
  
  if(porcentaje > 100){
    
    alert('Recuerda que solo es un 100% porciento')
    return null
  }
  sumar(cantidad,porcentaje)
}

const sumar = (a,b) => {
  let total = a * b / 100
  Math.round(total)
  document.getElementById('sl').innerHTML = total
}
sumar(cantidad,porcentaje)

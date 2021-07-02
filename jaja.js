const cantidadIzquierda = { canibales: 0, misioneros: 0 }; // CANTIDAD DE PERSONAS LADO IZQUIERDO
const cantidadDerecha = { canibales: 3, misioneros: 3 }; // CANTIDAD DE PERSONAS LADO DERECHO
let bote = true; // false - IZQUIERDA | true - DERECHA
let accionesRealizadas = 0; // NÚMERO DE ACCIONES TOMADAS
let iteraciones = 0; // NÚMERO DE ITERACIONES
let estado; // ESTADO ACTUAL (ACCIÓN A TOMAR)

while(cantidadDerecha.canibales > 0 || cantidadDerecha.misioneros > 0) { // MIENTRAS AÚN EXISTAN PERSONAS EN LA DERECHA

    // ESTADOS
    // 1 - PASAR 1 CANIBAL 
    // 2 - PASAR 1 MISIONERO
    // 3 - PASAR 2 CANIBALES
    // 4 - PASAR 2 MISIONEROS
    // 5 - PASA 1 CANIBAL Y 1 MISIONERO

    estado = Math.floor(Math.random() * 5) + 1; // OBTENER UN ESTADO ALEATORIO ENTRE 1-5

    console.log("Estado: " + estado); // MOSTRAR ESTADO OPTADO
    logAll(); // MOSTRAR DATOS

    if(esValido(estado)) { // COMPROBAR SI EL ESTADO ES VÁLIDO

      switch(estado){
        // PASAR 1 CANIBAL
        case 1:
          if(bote) { // BOTE EN EL LADO DERECHO
            cantidadDerecha.canibales--;
            cantidadIzquierda.canibales++;
          }
          else { // BOTE EN EL LADO IZQUIERDO
            cantidadIzquierda.canibales--;
            cantidadDerecha.canibales++;
          }
          break;
        // PASAR 1 MISIONERO
        case 2:
          if(bote) { // BOTE EN EL LADO DERECHO
            cantidadDerecha.misioneros--;
            cantidadIzquierda.misioneros++;
          }
          else { // BOTE EN EL LADO IZQUIERDO
            cantidadIzquierda.misioneros--;
            cantidadDerecha.misioneros++;
          }
          break;
        // PASAR 2 CANIBALES
        case 3: 
          if(bote) { // BOTE EN EL LADO DERECHO
            cantidadDerecha.canibales -= 2;
            cantidadIzquierda.canibales += 2;
          }
          else { // BOTE EN EL LADO IZQUIERDO
            cantidadIzquierda.canibales -= 2;
            cantidadDerecha.canibales += 2;
          }
          break;
        // PASAR 2 MISIONEROS
        case 4:
          if(bote) { // BOTE EN EL LADO DERECHO
            cantidadDerecha.misioneros -= 2;
            cantidadIzquierda.misioneros += 2;
          }
          else { // BOTE EN EL LADO IZQUIERDO
            cantidadIzquierda.misioneros -= 2;
            cantidadDerecha.misioneros += 2;
          }
          break;
        // PASAR 1 MISIONERO Y 1 CANIBAL
        case 5:
          if(bote) { // BOTE EN EL LADO DERECHO
            cantidadDerecha.misioneros--;
            cantidadDerecha.canibales--;
            cantidadIzquierda.misioneros++;
            cantidadIzquierda.canibales++;
          }
          else { // BOTE EN EL LADO IZQUIERDO
            cantidadIzquierda.misioneros--;
            cantidadIzquierda.canibales--;
            cantidadDerecha.misioneros++;
            cantidadDerecha.canibales++;
          }
          break;
      }
      
      accionesRealizadas++; // AUMENTAR NÚMERO DE ACCIONES REALIZADAS
      bote = !bote; // CAMBIAR SENTIDO DEL BOTE
    }

    iteraciones++; // AUMENTAR NÚMERO DE ITERACIONES
}


logAll(); // MOSTRAR ÚLTIMO RESULTADO

function esValido(estado) { // VALIDAR DATOS

  switch(estado) {
    // PASAR 1 CANIBAL
    case 1:
      if(bote) { // BOTE EN EL LADO DERECHO
        if((cantidadDerecha.misioneros >= cantidadDerecha.canibales - 1 || cantidadDerecha.misioneros === 0) // LADO DERECHO EQUILIBRIO
          && (cantidadDerecha.canibales - 1 >= 0) // COMPROBAR QUE EXISTE LA CANTIDAD SOLICITADA
          && (cantidadIzquierda.misioneros >= cantidadIzquierda.canibales + 1 || cantidadIzquierda.misioneros === 0)) // LADO IZQUIERDO EQUILIBRIO
            return true;
        return false; 
      }
      else { // BOTE EN EL LADO IZQUIERDO
        if((cantidadIzquierda.misioneros >= cantidadIzquierda.canibales - 1 || cantidadIzquierda.misioneros === 0) // LADO IZQUIERDO EQUILIBRIO
          && (cantidadIzquierda.canibales -1 >= 0) // COMPROBAR QUE EXISTE LA CANTIDAD SOLICITADA
          && (cantidadDerecha.misioneros >= cantidadDerecha.canibales + 1 || cantidadDerecha.misioneros === 0) // LADO DERECHO EQUILIBRIO
        ) 
            return true;
        return false;
      }
    // PASAR 1 MISIONERO
    case 2:
      if(bote) { // BOTE EN EL LADO DERECHO
        if((cantidadDerecha.misioneros - 1 >= cantidadDerecha.canibales || cantidadDerecha.misioneros - 1 === 0) // LADO DERECHO EQUILIBRIO
          && (cantidadDerecha.misioneros - 1 >= 0) // COMPROBAR QUE EXISTE LA CANTIDAD SOLICITADA
          && (cantidadIzquierda.misioneros + 1 >= cantidadIzquierda.canibales)) // LADO IZQUIERDO EQUILIBRIO
            return true;
        return false; 
      }
      else { // BOTE EN EL LADO IZQUIERDO
        if((cantidadIzquierda.misioneros - 1 >= cantidadIzquierda.canibales || cantidadIzquierda.misioneros - 1 === 0) // LADO IZQUIERDO EQUILIBRIO
          && (cantidadIzquierda.misioneros - 1 >= 0) // COMPROBAR QUE EXISTE LA CANTIDAD SOLICITADA
          && (cantidadDerecha.misioneros + 1 >= cantidadDerecha.canibales)) // LADO DERECHO EQUILIBRIO
            return true;
        return false;
      }
    // PASAR 2 CANIBALES
    case 3:
      if(bote) { // BOTE EN EL LADO DERECHO
        if((cantidadDerecha.misioneros >= cantidadDerecha.canibales - 2 || cantidadDerecha.misioneros === 0) // LADO DERECHO EQUILIBRIO
          && (cantidadDerecha.canibales - 2 >= 0) // COMPROBAR QUE EXISTE LA CANTIDAD SOLICITADA
          && (cantidadIzquierda.misioneros >= cantidadIzquierda.canibales + 2 || cantidadIzquierda.misioneros === 0)) // LADO IZQUIERDO EQUILIBRIO
            return true;
          return false;
      }
      else { // BOTE EN EL LADO IZQUIERDO
        if((cantidadIzquierda.misioneros >= cantidadIzquierda.canibales - 2 || cantidadIzquierda.misioneros === 0) // LADO IZQUIERDO EQUILIBRIO
          && (cantidadIzquierda.canibales - 2 >= 0) // COMPROBAR QUE EXISTE LA CANTIDAD SOLICITADA
          && (cantidadDerecha.misioneros >= cantidadDerecha.canibales + 2 || cantidadDerecha.misioneros === 0)) // LADO DERECHO EQUILIBRIO
            return true;
          return false;
      }
    // PASAR 2 MISIONEROS
    case 4:
      if(bote) { // BOTE EN EL LADO DERECHO
        if((cantidadDerecha.misioneros - 2 >= cantidadDerecha.canibales || cantidadDerecha.misioneros - 2 === 0) // LADO DERECHO EQUILIBRIO
          && (cantidadDerecha.misioneros - 2 >= 0) // COMPROBAR QUE EXISTE LA CANTIDAD SOLICITADA
          && (cantidadIzquierda.misioneros + 2 >= cantidadDerecha.canibales)) // LADO IZQUIERDO EQUILIBRIO
            return true;
          return false;
      }
      else { // BOTE EN EL LADO IZQUIERDO
        if((cantidadIzquierda.misioneros - 2 >= cantidadIzquierda.canibales || cantidadIzquierda.misioneros - 2 === 0) // LADO IZQUIERDO EQUILIBRIO
          && (cantidadIzquierda.misioneros - 2 >= 0) // COMPROBAR QUE EXISTE LA CANTIDAD SOLICITADA
          && (cantidadDerecha.misioneros + 2 >= cantidadDerecha.canibales)) // LADO DERECHO EQUILIBRIO
            return true;
          return false;
      }
    // PASAR 1 MISIONERO Y 1 CANIBAL
    case 5:
      if(bote) { // BOTE EN EL LADO DERECHO
        if((cantidadDerecha.misioneros - 1 >= cantidadDerecha.canibales - 1) // LADO DERECHO EQUILIBRIO
          && (cantidadDerecha.misioneros - 1 >= 0 && cantidadDerecha.canibales - 1 >= 0) // COMPROBAR QUE EXISTE LA CANTIDAD SOLICITADA
          && (cantidadIzquierda.misioneros + 1 >= cantidadIzquierda.canibales + 1)) // LADO IZQUIERDO EQUILIBRIO
          return true;
        return false;
      }
      else { // BOTE EN EL LADO IZQUIERDO
        if((cantidadIzquierda.misioneros - 1 >= cantidadIzquierda.canibales - 1) // LADO IZQUIERDO EQUILIBRIO
          && (cantidadIzquierda.misioneros - 1 >= 0 && cantidadIzquierda.canibales - 1 >= 0) // COMPROBAR QUE EXISTE LA CANTIDAD SOLICITADA
          && (cantidadDerecha.misioneros + 1 >= cantidadDerecha.canibales + 1)) // LADO DERECHO EQUILIBRIO
          return true;
        return false;
      }
  }
}

function logAll() { // MOSTRAR DATOS (ITERACIONES)
  console.log("Número de iteraciones totales: " + iteraciones);
  console.log("Número de acciones totales: " + accionesRealizadas);
  console.log("Número de misioneros en la izquierda: " + cantidadIzquierda.misioneros);
  console.log("Número de canibales en la izquierda: " + cantidadIzquierda.canibales);
  console.log("Número de misioneros en la derecha: " + cantidadDerecha.misioneros);
  console.log("Número de canibales en la derecha: " + cantidadDerecha.canibales);
  if(bote)
    console.log("Bote: DERECHA");
  else
    console.log("Bote: IZQUIERDA");
}
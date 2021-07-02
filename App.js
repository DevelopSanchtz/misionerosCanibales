import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Alert
} from 'react-native';
import { Picker } from '@react-native-picker/picker'


  const cantidadIzquierda = {canibales: 0, misioneros: 0}
  const cantidadDerecha = { canibales: 3, misioneros: 3 }
  
  // false es que está en IZQUIERDA | true es que está en DERECHA
  let bote = true
  
  let accionesRealizadas = 0
  let iteraciones = 0

  const analizarMetodo = (estado) => {
    if ( cantidadDerecha.canibales > 0 || cantidadDerecha.misioneros > 0 ) {
        iteraciones++;

      if (esValido(estado)){ //Mando llamar el método es valido que vas a crear, revisa si lo creaste

          switch(estado) {

            case "1" :
              console.log("SI ENTRE MIRAME SOY EL NÚMERO #1 PERRILLO xd")

              if (bote) {
                cantidadDerecha.canibales--;
                cantidadIzquierda.canibales++;
              }
              else {
                cantidadIzquierda.canibales--;
                cantidadDerecha.canibales++;
              }
              break;

              case "2" :
                console.log("SI ENTRE MIRAME SOY EL NÚMERO #2 PERRILLO")

                if (bote) {
                  cantidadDerecha.misioneros--;
                  cantidadIzquierda.misioneros++;
                }
                else {
                  cantidadIzquierda.misioneros--;
                  cantidadDerecha.misioneros++;
                }
                break;

                case "3" :
                  if(bote) {
                    cantidadDerecha.canibales -=2;
                    cantidadIzquierda.canibales +=2;
                  }
                  else {
                    cantidadIzquierda.canibales -= 2;
                    cantidadDerecha.canibales += 2;
                  }
                  break;

                case "4" :
                  if(bote) {
                    cantidadDerecha.misioneros -= 2;
                    cantidadIzquierda.misioneros += 2;
                  }
                  else {
                    cantidadIzquierda.misioneros -= 2;
                    cantidadDerecha.misioneros += 2;
                  }
                  break;

                case "5" :

                  if(bote) { 
                    cantidadDerecha.misioneros--;
                    cantidadDerecha.canibales--;
                    cantidadIzquierda.misioneros++;
                    cantidadIzquierda.canibales++;
                  }
                  else { 
                    cantidadIzquierda.misioneros--;
                    cantidadIzquierda.canibales--;
                    cantidadDerecha.misioneros++;
                    cantidadDerecha.canibales++;
                  }
                  break;
          }

          accionesRealizadas++;
          bote = !bote;
          mostrarTodo()

      }
    }

    function esValido(estado) {
      switch(estado) {
        // PASAR 1 CANIBAL
        case "1":
          console.log("SI ENTRE MIRAME SOY EL NÚMERO #1 PERRILLO")
          if(bote) { 
            if((cantidadDerecha.misioneros >= cantidadDerecha.canibales - 1 || cantidadDerecha.misioneros === 0) 
              && (cantidadDerecha.canibales - 1 >= 0) 
              && (cantidadIzquierda.misioneros >= cantidadIzquierda.canibales + 1 || cantidadIzquierda.misioneros === 0)){ 
                return true;
              }
              else {
                Alert.alert("HAZ PERDIDO", "Nímero de intentos " + iteraciones + " intentos", [
                  {text: 'De acuerdo', onPress: () => perdiste ()}
                ])
                return false;
              } 
          }
          else { // BOTE EN EL LADO IZQUIERDO
            if((cantidadIzquierda.misioneros >= cantidadIzquierda.canibales - 1 || cantidadIzquierda.misioneros === 0) 
              && (cantidadIzquierda.canibales -1 >= 0) 
              && (cantidadDerecha.misioneros >= cantidadDerecha.canibales + 1 || cantidadDerecha.misioneros === 0) 
            ){
                return true;
              }
              else {
                Alert.alert("HAZ PERDIDO", "Nímero de intentos " + iteraciones + " intentos", [
                  {text: 'De acuerdo', onPress: () => perdiste ()}
                ])
                return false;
              } 
          }
        // PASAR 1 MISIONERO
        case "2":
          if(bote) { 
            if((cantidadDerecha.misioneros - 1 >= cantidadDerecha.canibales || cantidadDerecha.misioneros - 1 === 0) 
              && (cantidadDerecha.misioneros - 1 >= 0) 
              && (cantidadIzquierda.misioneros + 1 >= cantidadIzquierda.canibales)){ 
                return true;
              }
              else {
                Alert.alert("HAZ PERDIDO", "Nímero de intentos " + iteraciones + " intentos", [
                  {text: 'De acuerdo', onPress: () => perdiste ()}
                ])
                return false;
              } 
          }
          else { // BOTE EN EL LADO IZQUIERDO
            if((cantidadIzquierda.misioneros - 1 >= cantidadIzquierda.canibales || cantidadIzquierda.misioneros - 1 === 0) 
              && (cantidadIzquierda.misioneros - 1 >= 0) 
              && (cantidadDerecha.misioneros + 1 >= cantidadDerecha.canibales)){ 
                return true;
              
            }
            else {
              Alert.alert("HAZ PERDIDO", "Nímero de intentos " + iteraciones + " intentos", [
                {text: 'De acuerdo', onPress: () => perdiste ()}
              ])
              return false;
            } 
          }
        // PASAR 2 CANIBALES
        case "3":
          if(bote) { 
            if((cantidadDerecha.misioneros >= cantidadDerecha.canibales - 2 || cantidadDerecha.misioneros === 0) 
              && (cantidadDerecha.canibales - 2 >= 0) 
              && (cantidadIzquierda.misioneros >= cantidadIzquierda.canibales + 2 || cantidadIzquierda.misioneros === 0)){ 
                return true;
              }
              else {
                Alert.alert("HAZ PERDIDO", "Nímero de intentos " + iteraciones + " intentos", [
                  {text: 'De acuerdo', onPress: () => perdiste ()}
                ])
                return false;
              } 
          }
          else { // BOTE EN EL LADO IZQUIERDO
            if((cantidadIzquierda.misioneros >= cantidadIzquierda.canibales - 2 || cantidadIzquierda.misioneros === 0) 
              && (cantidadIzquierda.canibales - 2 >= 0) 
              && (cantidadDerecha.misioneros >= cantidadDerecha.canibales + 2 || cantidadDerecha.misioneros === 0)){ 
                return true;
              }
              else {
                Alert.alert("HAZ PERDIDO", "Nímero de intentos " + iteraciones + " intentos", [
                  {text: 'De acuerdo', onPress: () => perdiste ()}
                ])
                return false;
              } 
          }
        // PASAR 2 MISIONEROS
        case "4":
          if(bote) { 
            if((cantidadDerecha.misioneros - 2 >= cantidadDerecha.canibales || cantidadDerecha.misioneros - 2 === 0) 
              && (cantidadDerecha.misioneros - 2 >= 0) 
              && (cantidadIzquierda.misioneros + 2 >= cantidadDerecha.canibales)){ 
                return true;
              }
              else {
                Alert.alert("HAZ PERDIDO", "Nímero de intentos " + iteraciones + " intentos", [
                  {text: 'De acuerdo', onPress: () => perdiste ()}
                ])
                return false;
              } 
          }
          else { 
            if((cantidadIzquierda.misioneros - 2 >= cantidadIzquierda.canibales || cantidadIzquierda.misioneros - 2 === 0)
              && (cantidadIzquierda.misioneros - 2 >= 0) 
              && (cantidadDerecha.misioneros + 2 >= cantidadDerecha.canibales)){
                return true;
              }
              else {
                Alert.alert("HAZ PERDIDO", "Nímero de intentos " + iteraciones + " intentos", [
                  {text: 'De acuerdo', onPress: () => perdiste ()}
                ])
                return false;
              } 
          }
        // PASAR 1 MISIONERO Y 1 CANIBAL
        case "5":
          if(bote) { 
            if((cantidadDerecha.misioneros - 1 >= cantidadDerecha.canibales - 1) 
              && (cantidadDerecha.misioneros - 1 >= 0 && cantidadDerecha.canibales - 1 >= 0) 
              && (cantidadIzquierda.misioneros + 1 >= cantidadIzquierda.canibales + 1)){ 
              return true;
            }
            else {
              Alert.alert("HAZ PERDIDO", "Nímero de intentos " + iteraciones + " intentos", [
                {text: 'De acuerdo', onPress: () => perdiste ()}
              ])
              return false;
            } 
          }
          else { // BOTE EN EL LADO IZQUIERDO
            if((cantidadIzquierda.misioneros - 1 >= cantidadIzquierda.canibales - 1) 
              && (cantidadIzquierda.misioneros - 1 >= 0 && cantidadIzquierda.canibales - 1 >= 0) 
              && (cantidadDerecha.misioneros + 1 >= cantidadDerecha.canibales + 1)){ 
              return true;
            }
            else {
              Alert.alert("HAZ PERDIDO", "Nímero de intentos " + iteraciones + " intentos", [
                {text: 'De acuerdo', onPress: () => perdiste ()}
              ])
              return false;
            } 
          }
      }
    }

    function perdiste (){
      cantidadIzquierda.canibales = 0,
      cantidadIzquierda.misioneros = 0,

      cantidadDerecha.misioneros = 3,
      cantidadDerecha.canibales = 3

      bote = true
  
      accionesRealizadas = 0
      iteraciones = 0

    }

    function mostrarTodo () {
        if (cantidadIzquierda.canibales === 3 & cantidadIzquierda.misioneros === 3){
          Alert.alert("HAZ GANADO", "MUCHO EXITO LO HAZ LOGRADO EN " + iteraciones + " intentos", [
            {text: 'De acuerdo', onPress: () => console.log("Understood")}
          ])
      }
      else {
        if(bote) {
          Alert.alert("ELEGISTE EL DATO " + estado, "Número de Iteraciones totales: " + iteraciones + "\n Número de acciones totales: " + accionesRealizadas + 
            "\n Número de misioneros en la izquierda: " + cantidadIzquierda.misioneros + "\n Numero de canibales en la izquierda: " + cantidadIzquierda.canibales + 
            "\n Número de misioneros en la derecha: " + cantidadDerecha.misioneros + " \n Número de canibales en la derecha: " + cantidadDerecha.canibales +
            "\n El bote está del lado: Derecho" , [
              {text: 'De acuerdo', onPress: () => console.log("Understood")}
            ])
        }
        else {
          Alert.alert("ELEGISTE EL DATO " + estado, "Número de Iteraciones totales: " + iteraciones + "\n Número de acciones totales: " + accionesRealizadas + 
            "\n Número de misioneros en la izquierda: " + cantidadIzquierda.misioneros + "\n Numero de canibales en la izquierda: " + cantidadIzquierda.canibales + 
            "\n Número de misioneros en la derecha: " + cantidadDerecha.misioneros + " \n Número de canibales en la derecha: " + cantidadDerecha.canibales +
            "\n El bote está del lado: Izquierdo" , [
              {text: 'De acuerdo', onPress: () => console.log("Understood")}
            ])
        }
      }
    }
}


const App = () => {
  
  const [estado, setEstado] = useState("")

  //Aqui puede estar en un método y preguntar cada que presiones
  

  return (
    <View style = { styles.container }> 
      <Text style = { styles.texto }>MISIONEROS Y CANIBALES</Text>
      <Text style = { styles.estado }>Eliga la acción a realizar</Text>
      <Text style = { styles.opciones }>1.- Pasar 1 CANIBAL</Text>
      <Text style = { styles.opciones }>2.- Pasar 1 MISIONERO</Text>
      <Text style = { styles.opciones }>3.- Pasar 2 CANIBALES</Text>
      <Text style = { styles.opciones }>4.- Pasar 2 MISIONEROS</Text>
      <Text style = { styles.opciones }>5.- Pasar 1 CANIBAL y 1 MISIONERO</Text>
      

      <Picker style = {{marginTop: 70, color: "#FFF", fontSize: 18}}
              selectedValue = {estado} 
              onValueChange = { respuesta => setEstado( respuesta ) }>

          <Picker.Item color = "red" label = "- SELECCIONE LA ACCIÓN -" value = "" />
          <Picker.Item label = "Opción 1" value = "1" />
          <Picker.Item label = "Opción 2" value = "2" />
          <Picker.Item label = "Opción 3" value = "3" />
          <Picker.Item label = "Opción 4" value = "4" />
          <Picker.Item label = "Opción 5" value = "5" />


      </Picker>
    
    <View style = {{alignItems: "center", marginTop: 60}}>

      <TouchableOpacity style = {{height: 50, width: 180, backgroundColor: "#FFF", justifyContent: "center", alignItems: "center", borderRadius: 10, elevation: 2}}
          onPress = {() => {analizarMetodo(estado)}}
      >
            <Text style = {{ color: "#0D3D6B", fontWeight: "bold", fontSize: 16}}>MOVER LA BARCA</Text>
      </TouchableOpacity>
    </View>
      
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#0D3D6B"
  },
  texto: {
      color: "#FFF",
      textAlign: "center",
      fontSize: 30,
      marginTop: 10,
      fontWeight: "bold"
  },
  estado: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 22,
    marginTop: 20,
    marginBottom: 30
  },
  opciones: {
    color: "#FFF",
    fontSize: 22,
    marginTop: 40,
    marginLeft: 5
  }
});

export default App;

import * as React from 'react';

import { Button, View, Text, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { ScrollView } from 'react-native-gesture-handler';



class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      textInit: "Hello",
      contador : 0,
      dataPieChart: []
    };
  }
  static navigationOptions = {
    title: 'Actividad 4',
    headerStyle: {
      backgroundColor: '#000000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Pantalla de navegación </Text>
        <Button
          title="Navegación"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Text></Text>
        <Text> { this.state.contador } </Text>
        <Button
          title="Aumentar contador"
          onPress = { this.aumentaContador }
          ></Button>
                  <Text></Text>

        <Text>Alerta</Text>
        <Button
          title="Boton de alerta"
          onPress={() => this.props.navigation.navigate('Options')}
        />
        
      </View>
     
    );
  }

  aumentaContador = () => {
    this.setState({
      contador: this.state.contador + 1,
    }); 
  }

}
class OptionsScreen extends React.Component {
  static navigationOptions = {
    title: 'Pestaña de alerta',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text></Text>
        <Button 
          title="Alerta"
          onPress={this.showAlert}
        />
      </View>
    );
  }
  showAlert(){
    Alert.alert(
      'Hola',
      'Esto es una alerta',
      [
        {text: 'Salir', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Pestaña de navegacion',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Ejemplo</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Options: OptionsScreen,

  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'DevRadar',
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil no Github'
      },
    },
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#fff', // Cor do texto no header
      headerBackTitleVisible: false, // Retira o botão de voltar em dispositivos iOS.
      headerStyle: {
        backgroundColor: '#7d40e7' // Cor do container header
      },
    },
  })
);

export default Routes;
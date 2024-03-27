import 'react-native-gesture-handler';
import Rotas from './assets/src/Rotas';
import UserProvider from './assets/src/Context/UserContext';

export default function App() {
  
  return (
    <UserProvider>
      <Rotas/>
    </UserProvider>
  );
};
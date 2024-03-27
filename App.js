import 'react-native-gesture-handler';
import Rotas from './assets/src/rotas';
import UserProvider from './assets/src/Context/UserContext';

  export default function App() {
    
  return (
    <UserProvider>
      <Rotas/>
    </UserProvider>
  );
};
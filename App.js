import 'react-native-gesture-handler';
import Rotas from './Rotas';
import UserProvider from './src/Context/UserContext';

  export default function App() {
    
  return (
    <UserProvider>
      <Rotas/>
    </UserProvider>
  );
};
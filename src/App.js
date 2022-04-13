import HomePage from './components/homepage';
import './App.css';
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseconfig';
const app = initializeApp(firebaseConfig);

function App() {


  return (
 

    <HomePage />
  );
}

export default App;
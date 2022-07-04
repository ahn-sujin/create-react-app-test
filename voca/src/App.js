import logo from './logo.svg';
import './App.css';
import styles from './App.module.css'
import Hello from './component/Hello';
import Welcome from './component/Welcome';

function App() {
  return (
    <div className="App">
      <Hello/>
      <div className = {styles.box}>app.css에 있는 style</div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  const name = "asj";
  const link = {
    name:'github',
    url:'https://github.com/ahn-sujin'
  }
  return (
    <div className="App">
      <p
        style={{
          color:"#fff",
          backgroundColor:"#000"
        }}
      >Hello {name} <span>{2 + 3}</span>
      </p>
      <a href={link.url}>{link.name}</a>
    </div>
  );
}

export default App;

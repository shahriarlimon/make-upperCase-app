
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';

function App() {
  return (
    <div className="App">
      <Header/>
      <Form heading='Enter the text to Analyze below'/>
      
    </div>
  );
}

export default App;

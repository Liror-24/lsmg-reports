import './App.css';
import Form from './Components/Form'
import Output from './Components/Output';
import './data/doctorsDB.json';

function App() {
  fetch("http://localhost:3000/lsmg-reports/data/doctorsDB.json")
        .then(function (response) {
            console.log(response)
            return response;//.json();
        })
        /*.then(function (data) {
            console.log(data);
         })*/
  return (
    <div className="App">
      <header className="App-header">
        <h1 >LMSG Reports</h1>
      </header>
      <body>
        <Form />
        <Output />
      </body>
    </div>
  );
}

export default App;

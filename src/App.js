import { useState } from 'react';
import './App.css';
import Form from './Components/Form'
import Output from './Components/Output';

function getStringDate() {
  const now = new Date().toLocaleString("en-US", { timeZone: 'America/New_York' });
  const current = new Date(now);
  let aux = `${current.getFullYear()}/`;
  if (current.getMonth() < 9) aux += '0';
  aux += `${current.getMonth() + 1}/`;
  if (current.getDate() < 10) aux += '0';
  aux += `${current.getDate()}`;
  return aux;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generatePatient() {
    let n = getRandomInt(250);
    if (n === 99) return {name: "Ricky Minton", id: 953};
    if (n === 98) return {name: "Kail Avile", id: 8855};
    if (n === 97) return {name: "Norman Bones", id: 666};
    if (n === 96) return {name: "Isaac Smith", id: 666};
    if (n%2 === 0) return {name: "John Doe", id: 1000};
    return {name: "Jane Doe", id: 1000};
}

function App() {
  const [date, setDate] = useState(getStringDate());
  const [selectedDoctors, setSelectedDoctors] = useState([]);
  const [patient, setPatient] = useState(generatePatient());
  const [injuries, setInjuries] = useState("");
  const [debrief, setDebrief] = useState("");
  const [aftercare, setAftercare] = useState("");
  const [leadDoctor, setLeadDoctor] = useState("");
  const [contacts, setContacts] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [leadPublic, setLeadPublic] = useState(localStorage.getItem("leadPublic") | "");
  const [selectedPublic, setSelectedPublic] = useState("");
  const [manually, setManually] = useState(localStorage.getItem("manuallyDocs"));

  if(localStorage.getItem("manuallyDocs") !== "0" && localStorage.getItem("manuallyDocs") !== "1") localStorage.setItem("manuallyDocs", "0");

  return (
    <div className="App">
      <header className="App-header">
        <h1 >LMSG Reports</h1>
        <div className='note'>🗒️ Note: I'm aware many things can be improved and there's probably the occasional bug. Also, do NOT use mobile please, I'm too lazy
        to make it look decent atm. I'll make small updates ever now and then but uni has to come first 🙃. Any ideas, bugs, feedback or ID's to add to the
        doctor database is welcome. You can send it through discord (Liror#2654), twitter (Liror24) or twitch (liror24) (that's the order on how quickly I'll see it, so twitch not best option) - Liror, the nerd 🐻💚</div>
      </header>
      <div className='content'>
        <Form date={date} setDate={setDate} setSelectedDoctors={setSelectedDoctors} patient={patient} setPatient={setPatient} injuries={injuries} setInjuries={setInjuries} setDebrief={setDebrief} aftercare={aftercare} setAftercare={setAftercare} setLeadDoctor={setLeadDoctor} setContacts={setContacts} setAdditionalInfo={setAdditionalInfo} setLeadPublic={setLeadPublic} selectedPublic={selectedPublic} setSelectedPublic={setSelectedPublic} state={manually} setState={setManually}/>
        <Output date={date} selectedDoctors={selectedDoctors} patient={patient} injuries={injuries} debrief={debrief} aftercare={aftercare} leadDoctor={leadDoctor} contacts={contacts} additionalInfo={additionalInfo} leadPublic={leadPublic} selectedPublic={selectedPublic} state={manually} setState={setManually}/>
      </div>
    </div>
  );
}

export default App;

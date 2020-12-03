import "./App.css";
import Form from "./components/Form";

function sendDataCb(data) {
  console.log(data);
}

function App() {
  return (
    <div className="App">
      <Form sendData={sendDataCb} />
    </div>
  );
}

export default App;

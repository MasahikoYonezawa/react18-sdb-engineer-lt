import React from 'react';
import './App.css';
import {AutoBatchEventHandler} from "./components/AutoBatchEventHandler";
import {AutoBatchOther} from "./components/AutoBatchOther";

function App() {
  console.log("Appがレンダリング！")
  return (
    <div className="App">
      <AutoBatchEventHandler/>
      <AutoBatchOther/>
    </div>
  );
}

export default App;

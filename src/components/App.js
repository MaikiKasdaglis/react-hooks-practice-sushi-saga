import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis"

function App() {

 const [sushis, setSushis] = useState([])
 const [plates, setPlates] = useState([])
 const [bank, setBank] = useState(400)
  useEffect(()=>{
    fetch(`http://localhost:3000/sushis`)
    .then(r => r.json())
    .then(d => setSushis(d))
  },[])

  function plateCount(price){
    setPlates([...plates, 1])
    // console.log(bank)
    // console.log(price)
    setBank(bank-price)
  }

  return (
    <div className="app">
      <SushiContainer bank={bank} sushis={sushis} plateCount={plateCount}/>
      <Table plates={plates} bank={bank}/>
    </div>
  );
}

export default App;

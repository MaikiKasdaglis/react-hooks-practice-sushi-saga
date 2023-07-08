import React, {useState} from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({sushis, plateCount, bank}) {
  const [count, setCount] = useState(0)
  

  function moreSushi(){
    setCount(count + 4)
  }

  return (
    <div className="belt">
      {/* Render Sushi components here! */}
     {sushis.slice(count, count + 4).map((sushi) => <Sushi bank={bank} key={sushi.id} sushi={sushi} plateCount={plateCount}/>)}
      <MoreButton moreSushi={moreSushi}/>
    </div>
  );
}

export default SushiContainer;

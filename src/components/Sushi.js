import React, {useState} from "react";

function Sushi({sushi, plateCount, bank}) {
  const  [eaten, setEaten] = useState(false)
  const {name, img_url, price} = sushi

  function clickBait(price) {
    if (eaten === false && price <= bank) {setEaten(!eaten)
    } else {return null }
    plateCount(price)
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={e => clickBait(price)}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;

import React, {useState} from "react";

function PlantCard({plant}) {
  const { id, name, image, price } = plant
  const [inStock, setStock] = useState(true)

  function handleStockToggle(){
    setStock((inStock) => !inStock)
  }

  return (
    <li key={id} className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button className="primary" onClick={handleStockToggle}>{inStock ? "In Stock" : "Out of Stock"}</button>
    </li>
  );
}

export default PlantCard;

import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data))
  }, [])

  function handleAddPlant(newPlant){
    setPlants([...plants, newPlant])
  }

  const displayedPlants = plants.filter((plant) => 
     plant.name.toLowerCase().includes(search.toLocaleLowerCase())
     )

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={displayedPlants}/>
    </main>
  );
}

export default PlantPage;

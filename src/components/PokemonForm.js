import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({setPokemon, pokemon}) {
  const [ formData, setFormData ] = useState({
    name: "",
    hp: "",
    frontUrl:"",
    backUrl: ""
  })

  const handleFormChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    const frontURL = formData.frontUrl
    const backURL = formData.backUrl


    formData["sprites"] = {
      front: frontURL,
      back: backURL
    }

    delete formData['frontUrl']
    delete formData['backUrl']

    const newPokemon = formData

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify(newPokemon)
    }).then(res => res.json()).then(data => setPokemon([...pokemon, data]))

    setFormData({
    name: "",
    hp: "",
    frontUrl:"",
    backUrl: ""
    })
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          handleSubmit()
        }}
      >
        <Form.Group widths="equal" onChange={handleFormChange}>
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

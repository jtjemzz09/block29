import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

export default function NewPlayerForm() {
  // State for storing new player data and error message
  const [newPlayer, setNewPlayerData] = useState({
    name: "",
    breed: "",
    status: "bench",
    imageUrl: "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png",
  });
  const [error, setError] = useState(null);

  // Function to handle input changes and update state
  function handleInputChange(event, field) {
    const { value } = event.target;
    setNewPlayerData((prevPlayer) => ({
      ...prevPlayer,
      [field]: value,
    }));
  }

  // Function to handle form submission
  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);

    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-web-pt-d/players",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ player: newPlayer }),
        }
      );

      const result = await response.json();

      if (!response.ok || result.error) {
        console.error("Server error:", result.error);
        setError(result.message || "Failed to add player. Please try again.");
        return;
      }

      const playerData = result.data.players[0];
      setNewPlayerData(playerData);
    } catch (error) {
      console.error("Error adding player:", error);
      setError("An error occurred. Please try again later.");
    }
  }

  return (
    <div>
      <h2>Add a New Player</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={newPlayer.name}
            onChange={(e) => handleInputChange(e, "name")}
            required
          />
        </Form.Group>
        <Form.Group controlId="breed">
          <Form.Label>Breed</Form.Label>
          <Form.Control
            type="text"
            name="breed"
            value={newPlayer.breed}
            onChange={(e) => handleInputChange(e, "breed")}
            required
          />
        </Form.Group>
        <Form.Group controlId="status">
          <Form.Label>Status</Form.Label>
          <Form.Control
            type="text"
            name="status"
            value={newPlayer.status}
            onChange={(e) => handleInputChange(e, "status")}
            required
          />
        </Form.Group>
        <Form.Group controlId="imageUrl">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="imageUrl"
            value={newPlayer.imageUrl}
            onChange={(e) => handleInputChange(e, "imageUrl")}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Player
        </Button>
      </Form>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import other hooks directly
import { useNavigate } from "react-router-dom"; // Import useNavigate

import Card from 'react-bootstrap/Card';

export default function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-web-pt-d/players/${id}`);
        const result = await response.json();
        const playerData = result.data.player;
        setPlayer(playerData);
        console.log("Contact from selected API:", result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPlayer();
  }, [id]);

  console.log(id);

  if (!player) {
    return null;
  }

  const handleGoBack = () => {
    navigate(-1); // Use navigate to go back
  };

  return (
    <div>
      <h3>Player Details</h3>
      <button onClick={handleGoBack}>Go Back</button>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={player.imageUrl} alt={player.name} />
        <Card.Body>
          <Card.Title>{player.name}</Card.Title>
          <Card.Text>{player.breed}</Card.Text>
          <Card.Text>{player.status}</Card.Text>
          <Card.Text>{player.createdAt}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
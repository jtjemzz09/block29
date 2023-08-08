import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { deletePlayer } from '../API/index'; // Import the deletePlayer function

export default function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const navigate = useNavigate();

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

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleDelete = async () => {
    try {
      await deletePlayer(id); // Call the deletePlayer function with the player ID
      navigate(-1); // After successful deletion, navigate back to the previous page
    } catch (error) {
      console.error(error);
    }
  };

  if (!player) {
    return null;
  }

  return (
    <div>
      <h3>Player Details</h3>
      <button onClick={handleGoBack}>Go Back</button>
      <button onClick={handleDelete}>Delete Player</button> {/* Add the delete button */}
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

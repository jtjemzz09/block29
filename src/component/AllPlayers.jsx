import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



export default function AllPlayers({setSelectedPlayerId}) {
  const [players, setPlayers] = useState([]);
  

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-web-pt-d/players");
        const result = await response.json();

        // Log the complete API response and the 'data' property to inspect the data
        console.log("Complete API response:", result);
        console.log("Data property:", result.data);

        // Check if the API response has 'data' and 'players' as an array
        if (result.success && result.data && Array.isArray(result.data.players)) {
          setPlayers(result.data.players);
        } else {
          console.error("API response is not valid:", result);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlayers();
  }, []);

return (
    <div>
      {players.map((player) => {
        return (
          <Card key={player.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={player.imageUrl} alt={player.name} />
            <Card.Body>
              <Card.Title>{player.name}</Card.Title>
              <Card.Text>
                {player.breed}
              </Card.Text>
              <Button variant="primary" >
                 <Link to={`/SinglePlayer/${player.id}`}>See details</Link>
                </Button>
            </Card.Body>
          </Card>
        );
      })}

       
    </div>
  );
}


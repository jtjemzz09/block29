import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import './AllPlayers.css';

export default function AllPlayers({ setSelectedPlayerId }) {
  const [players, setPlayers] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-web-pt-d/players");
        const result = await response.json();

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

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchButtonClick = () => {
    // Perform the search operation here if needed
    // For now, just filtering the displayed players
  };

  return (
    <div className="all-players-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search players"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button variant="primary" onClick={handleSearchButtonClick}>
          Search
        </Button>
      </div>
      <div className="player-cards">
        {filteredPlayers.map((player) => (
          <Card key={player.id} className="player-card">
            <Card.Img variant="top" src={player.imageUrl} alt={player.name} />
            <Card.Body>
              <Card.Title>{player.name}</Card.Title>
              <Card.Text>
                {player.breed}
              </Card.Text>
              <Button variant="primary">
                <Link to={`/SinglePlayer/${player.id}`} className= "btn btn-primary">See details</Link>
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

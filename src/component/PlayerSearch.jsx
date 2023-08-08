import React from 'react';

export default function PlayerSearch({
  searchText,
  onSearchInputChange,
  setSelectedPlayerId,
  players,
}) {
  const matchingPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <input
        type="search"
        placeholder="Search players..."
        value={searchText}
        onChange={onSearchInputChange}
      />
      <ul>
        {matchingPlayers.map(player => (
          <li key={player.id}>
            <button onClick={() => setSelectedPlayerId(player.id)}>
              {player.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
const cohortName = '2302-acc-pt-web-pt-d';
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;
export const fetchPlayers = async () => {
    try {
      const response = await fetch(`${API_URL}players`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching players:', error);
      throw error;
    }
  };
  export const deletePlayer = async (playerId) => {
    try {
      const response = await fetch(`${API_URL}players/${playerId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        console.log('Player removed');
      } else {
        console.error('Error removing player:', response.statusText);
      }
    } catch (error) {
      console.error('Error removing player:', error);
      throw error;
    }
  };
  export const addPlayer = async (playerObj) => {
    try {
      const response = await fetch(`${API_URL}players`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(playerObj),
      });
      const data = await response.json();
      console.log('Player added:', data);
      return data;
    } catch (error) {
      console.error('Error adding player:', error);
      throw error;
    }
  };
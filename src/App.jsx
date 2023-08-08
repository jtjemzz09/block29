
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar'
import MainContainer from "./component/MainContainer"
import AllPlayers from "./component/AllPlayers"
import SinglePlayer from "./component/SinglePlayer"

export default function App() {
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);

  return (
    <div> {/* Move NavBar and MainContainer inside the same div */}
     
      <NavBar />
      <MainContainer />
       {selectedPlayerId ? (
        <SinglePlayer
          selectedPlayerId={selectedPlayerId}
          setSelectedPlayerId={setSelectedPlayerId}
        />
      ) :null}
    </div>
  );
}

import { Routes, Route } from "react-router-dom";
import AllPlayers from "./AllPlayers"
import Footer from "./Footer"
import Home from "./Home"
import NavBar from "./NavBar"
import NewPlayerForm from "./NewPlayerForm"
import SinglePlayer from "./SinglePlayer"


export default function Main (){

    return(
        <div>
            <Routes>
                <Route path ="/" element={< Home/>}/>
                <Route path ="/AllPlayers" element={< AllPlayers/>}/>
                <Route path ="/Footer" element={< Footer/>}/>
                <Route path ="/NavBar" element={< NavBar/>}/>
                <Route path ="/NewPlayerForm" element={< NewPlayerForm/>}/>
                <Route path ="/SinglePlayer/:id" element={< SinglePlayer/>}/>
            </Routes>
        
        </div>


    )
}
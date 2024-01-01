import '../App.css'
import FunPath from '../components/funpath'
import BoringPath from '../components/boringpath'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SpudsSongs from './spudssongs'
import SpudsStuff from './spudsstuff'
import SpudsSnipsTuesday from './spudssnipstuesday'
import SpudsSnipsWednesday from './spudssnipswednesday'

const EntryPage = () => {

    const [pathSelected, setPathSelected]= useState<string>('')

    const pageContent = 
    pathSelected === ''
    ?
    <div id="entry-page">
    <div id="welcome">
     <h1 id="w" className="welcome-letters">W</h1>
     <h1 id="e" className="welcome-letters">E</h1>
     <h1 id="l" className="welcome-letters">L</h1>
     <h1 id="c" className="welcome-letters">C</h1>
     <h1 id="o" className="welcome-letters">O</h1>
     <h1 id="m" className="welcome-letters">M</h1>
     <h1 id="e" className="welcome-letters">E</h1>
    </div>
    <p id="spuds-lair-text">to spud's lair</p>
    <div id="website-options">
     <button className="entry-buttons" id="fun-path-button" onClick={() => setPathSelected("fun-path")}>fun path (kinda puzzley...)</button>
     <button className="entry-buttons"id="boring-path-button" onClick={() => setPathSelected("boring-path")}>boring path (easier to navigate...)</button>
    </div>
   </div>    
    : pathSelected === "fun-path" || pathSelected === "cocktail-clash" ? <FunPath />
    : <BoringPath />

    return(
        <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={
      pageContent}></Route>
      <Route path="/spudssongs" element={<SpudsSongs />}></Route>
      <Route path="/spudsstuff" element={<SpudsStuff />}></Route>
      <Route path="/spudssnipstuesday" element={<SpudsSnipsTuesday />}></Route>
      <Route path="/spudssnipswednesday" element={<SpudsSnipsWednesday />}></Route>
      </Routes>
      </BrowserRouter>
        </>
    )
}

export default EntryPage
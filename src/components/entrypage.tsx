import '../App.css'
import FunPath from '../components/funpath'
import BoringPath from '../components/boringpath'
import { useState } from 'react'

const EntryPage = () => {

    const [pathSelected, setPathSelected]= useState<string>('')

    const pageContent = 
    pathSelected === ''
    ?
    <div id="entry-page">
    <div id="welcome">
     <h1 id="w">W</h1>
     <h1 id="e">E</h1>
     <h1 id="l">L</h1>
     <h1 id="c">C</h1>
     <h1 id="o">O</h1>
     <h1 id="m">M</h1>
     <h1 id="e">E</h1>
    </div>
    <div id="website-options">
     <button id="fun-path-button" onClick={() => setPathSelected("fun-path")}>Fun path(better on bigger screens)</button>
     <button id="boring-path-button" onClick={() => setPathSelected("boring-path")}>Boring path(easier to navigate...)</button>
    </div>
   </div>    
    : pathSelected === "fun-path" ? <FunPath />
    : <BoringPath />

    return(
        <>
      {pageContent}
        </>
    )
}

export default EntryPage
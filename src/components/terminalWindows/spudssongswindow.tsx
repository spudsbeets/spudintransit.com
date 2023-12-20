import { Link } from "react-router-dom"

type PropsType = {
  setShowSpudsSongsTerminal: React.Dispatch<React.SetStateAction<boolean>>
}

const SpudsSongsWindow = ({ setShowSpudsSongsTerminal }: PropsType) => {
  return(
    <>
    <h1 className="terminal-window-header" id="spuds-songs-header">Spud's Songs</h1>
    <p className="terminal-window-explanation" id="spuds-songs-explanation">some music i've made</p>
    <Link to="/spudssongs" target="_blank" rel="noreferrer"><button className="terminal-window-button" id="spuds-songs-button">launch</button></Link>
    <button className="close-button" onClick={() => {
        setShowSpudsSongsTerminal(false);
        (document.getElementById("spuds-ship-window") as HTMLDivElement).style.display = "none"
        }}>close</button>
    </>
  )
}

export default SpudsSongsWindow
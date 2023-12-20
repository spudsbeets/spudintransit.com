import { Link } from "react-router-dom"

type PropsType = {
  setShowWednesdayTerminal: React.Dispatch<React.SetStateAction<boolean>>
}

const SpudsSnipsWednesdayWindow = ({ setShowWednesdayTerminal }: PropsType) => {
  return(
    <>
    <h1 className="terminal-window-header" id="spuds-snips-wednesday-header">Spud's Snips (Wednesday)</h1>
    <p className="terminal-window-explanation" id="spuds-snips-wednesday-explanation">lil sneak peek...</p>
    <Link to="/spudssnipswednesday" target="_blank" rel="noreferrer"><button className="terminal-window-button" id="spuds-snips-wednesday-button">launch</button></Link>
    <button className="close-button" onClick={() => {
        setShowWednesdayTerminal(false);
        (document.getElementById("spuds-snips-wednesday-window") as HTMLDivElement).style.display = "none"
        }}>close</button>
    </>
  )
}

export default SpudsSnipsWednesdayWindow
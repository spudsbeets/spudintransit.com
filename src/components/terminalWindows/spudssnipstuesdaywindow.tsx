import { Link } from "react-router-dom"

type PropsType = {
  setShowTuesdayTerminal: React.Dispatch<React.SetStateAction<boolean>>
}

const SpudsSnipsTuesdayWindow = ({ setShowTuesdayTerminal }: PropsType) => {
  return(
    <>
    <h1 className="terminal-window-header" id="spuds-snips-tuesday-header">Spud's Snips (Tuesday)</h1>
    <p className="terminal-window-explanation" id="spuds-snips-tuesday-explanation">lil sneak peek...</p>
    <Link to="/spudssnipstuesday" target="_blank" rel="noreferrer" className="terminal-links"><button className="terminal-window-button" id="spuds-snips-tuesday-button">launch</button></Link>
    <button className="close-button" onClick={() => {
        setShowTuesdayTerminal(false);
        (document.getElementById("spuds-snips-tuesday-window") as HTMLDivElement).style.display = "none"
        }}>close</button>
    </>
  )
}

export default SpudsSnipsTuesdayWindow
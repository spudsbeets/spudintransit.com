import { Link } from "react-router-dom"

type PropsType = {
  setShowSpudsStuffTerminal: React.Dispatch<React.SetStateAction<boolean>>
}

const SpudsStuffWindow = ({ setShowSpudsStuffTerminal }: PropsType) => {
  return(
    <>
    <h1 className="terminal-window-header" id="spuds-stuff-header">Spud's Stuff</h1>
    <p className="terminal-window-explanation" id="spuds-stuff-explanation">all that "professional" stuff</p>
    <Link to="/spudsstuff" target="_blank" rel="noreferrer" className="terminal-links"><button className="terminal-window-button" id="spuds-stuff-button">launch</button></Link>
    <button className="close-button" onClick={() => {
        setShowSpudsStuffTerminal(false);
        (document.getElementById("spuds-stuff-window") as HTMLDivElement).style.display = "none"
        }}>close</button>
    </>
  )
}

export default SpudsStuffWindow
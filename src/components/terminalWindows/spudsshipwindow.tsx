import { Link } from "react-router-dom"

type PropsType = {
  setShowSpudsShipTerminal: React.Dispatch<React.SetStateAction<boolean>>
}

const SpudsShipWindow = ({ setShowSpudsShipTerminal }: PropsType) => {
  return(
    <>
    <h1 className="terminal-window-header" id="spuds-ship-header">Spud's Ship</h1>
    <p className="terminal-window-explanation" id="spuds-ship-explanation">navigate the cosmos in spud's ship. can you make it to the moon?</p>
    <Link to="/spudsship" target="_blank" rel="noreferrer" id="spuds-ship-link"><button className="terminal-window-button" id="spuds-ship-button">play spuds ship</button></Link>
    <button className="close-button" onClick={() => {
        setShowSpudsShipTerminal(false);
        (document.getElementById("spuds-ship-window") as HTMLDivElement).style.display = "none"
        }}>close</button>
    </>
  )
}

export default SpudsShipWindow
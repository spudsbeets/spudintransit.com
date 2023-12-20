type PropsType = {
    setShowGetGTerminal: React.Dispatch<React.SetStateAction<boolean>>
  }
  
  const RetrieveGuntherWindow = ({ setShowGetGTerminal }: PropsType) => {
    return(
      <>
      <img className="cat-images" id="gunther-image" src="./src/images/two.png" alt="gunther"></img>
      <p className="terminal-window-explanation" id="retrieve-gunther-explanation">meow meeow mow</p>
      <button className="terminal-window-button" id="retrieve-gunther-button">translate?</button>
      <button className="close-button" onClick={() => {
          setShowGetGTerminal(false);
          (document.getElementById("retrieve-gunther-window") as HTMLDivElement).style.display = "none"
          }}>close</button>
      </>
    )
  }
  
  export default RetrieveGuntherWindow
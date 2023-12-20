type PropsType = {
    setShowGetPTerminal: React.Dispatch<React.SetStateAction<boolean>>
  }
  
  const RetrievePharoahWindow = ({ setShowGetPTerminal }: PropsType) => {
    return(
      <>
      <img className="cat-images" id="pharoah-image" src="./src/images/two.png" alt="pharoah"></img>
      <p className="terminal-window-explanation" id="retrieve-pharoah-explanation">meow meow mow meoew</p>
      <button className="terminal-window-button" id="retrieve-pharoah-button">translate?</button>
      <button className="close-button" onClick={() => {
          setShowGetPTerminal(false);
          (document.getElementById("retrieve-pharoah-window") as HTMLDivElement).style.display = "none"
          }}>close</button>
      </>
    )
  }
  
  export default RetrievePharoahWindow
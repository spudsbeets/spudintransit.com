type PropsType = {
    setShowFeedGTerminal: React.Dispatch<React.SetStateAction<boolean>>
  }
  
  const FeedGuntherWindow = ({ setShowFeedGTerminal }: PropsType) => {
    return(
      <>
      <img className="food-images" id="gunther-food-image" src="./src/images/five.png" alt="gunther-food"></img>
      <button className="terminal-window-button" id="feed-gunther-button">satisfy gunther's hunger?</button>
      <button className="close-button" onClick={() => {
          setShowFeedGTerminal(false);
          (document.getElementById("feed-gunther-window") as HTMLDivElement).style.display = "none"
          }}>close</button>
      </>
    )
  }
  
  export default FeedGuntherWindow
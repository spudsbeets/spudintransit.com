type PropsType = {
  setShowFeedPTerminal: React.Dispatch<React.SetStateAction<boolean>>
}

const FeedPharoahWindow = ({ setShowFeedPTerminal }: PropsType) => {
  return(
    <>
    <img className="food-images" id="pharoah-food-image" src="./src/images/five.png" alt="pharoah-food"></img>
    <button className="terminal-window-button" id="feed-pharoah-button">satisfy pharoah's hunger?</button>
    <button className="close-button" onClick={() => {
        setShowFeedPTerminal(false);
        (document.getElementById("feed-pharoah-window") as HTMLDivElement).style.display = "none"
        }}>close</button>
    </>
  )
}

export default FeedPharoahWindow
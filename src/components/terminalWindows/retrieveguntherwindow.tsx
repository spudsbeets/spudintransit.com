type PropsType = {
    setShowGetGTerminal: React.Dispatch<React.SetStateAction<boolean>>
  }
  
  const RetrieveGuntherWindow = ({ setShowGetGTerminal }: PropsType) => {

    return(
      <>
      <img className="cat-images" id="gunther-image" src="./src/images/two.png" alt="gunther"></img>
      <p className="terminal-window-explanation" id="retrieve-gunther-explanation">meow meeow mow</p>
      <button className="terminal-window-button" id="retrieve-gunther-button" onClick={() => {
        (document.getElementById("retrieve-gunther-explanation") as HTMLElement).innerHTML = "i'm huuuuuungry";
        (document.getElementById("retrieve-gunther-button") as HTMLButtonElement).innerHTML = "take her with you?";
        (document.getElementById("gunther-image") as HTMLImageElement).style.animation = "wiggleGunther 4s ease-in .5s infinite";
        (document.getElementById("retrieve-gunther-button") as HTMLButtonElement).addEventListener("click", function(){
          (document.getElementById("gunther-image") as HTMLImageElement).remove();
          (document.getElementById("retrieve-gunther-explanation") as HTMLElement).remove();
          (document.getElementById("retrieve-gunther-button") as HTMLButtonElement).remove();
          (document.getElementById("retrieve-gunther-close-button") as HTMLButtonElement).remove()
          const guntherFollow = document.createElement('img');
          guntherFollow.id = "gunther-image-follow";
          guntherFollow.className = "cat-images";
          (guntherFollow as HTMLImageElement).src = "./src/images/two.png";
          (guntherFollow as HTMLImageElement).alt = "gunther";
          document.getElementById("retrieve-gunther")?.appendChild(guntherFollow)
        })
      }}>translate?</button>
      <button className="close-button" id="retrieve-gunther-close-button" onClick={() => {
          setShowGetGTerminal(false);
          (document.getElementById("retrieve-gunther-window") as HTMLDivElement).style.display = "none"
          }}>close</button>
      </>
    )
  }
  
  export default RetrieveGuntherWindow
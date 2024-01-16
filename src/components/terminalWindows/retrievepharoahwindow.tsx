type PropsType = {
    setShowGetPTerminal: React.Dispatch<React.SetStateAction<boolean>>
  }
  
  const RetrievePharoahWindow = ({ setShowGetPTerminal }: PropsType) => {

    return(
      <>
      <img className="cat-images" id="pharoah-image" src="./src/images/four.png" alt="pharoah"></img>
      <p className="terminal-window-explanation" id="retrieve-pharoah-explanation">meeeow moew meweo mow</p>
      <button className="terminal-window-button" id="retrieve-pharoah-button" onClick={() => {
        (document.getElementById("retrieve-pharoah-explanation") as HTMLElement).innerHTML = "please feed me now ples";
        (document.getElementById("retrieve-pharoah-button") as HTMLButtonElement).innerHTML = "take her with you?";
        (document.getElementById("pharoah-image") as HTMLImageElement).style.animation = "zoomiePharoah 5s ease-in-out .5s infinite";
        (document.getElementById("retrieve-pharoah-button") as HTMLButtonElement).addEventListener("click", function(){
          (document.getElementById("pharoah-image") as HTMLImageElement).remove();
          (document.getElementById("retrieve-pharoah-explanation") as HTMLElement).remove();
          (document.getElementById("retrieve-pharoah-button") as HTMLButtonElement).remove();
          (document.getElementById("retrieve-pharoah-close-button") as HTMLButtonElement).remove()
          const pharoahFollow = document.createElement('img');
          pharoahFollow.id = "pharoah-image-follow";
          pharoahFollow.className = "cat-images";
          (pharoahFollow as HTMLImageElement).src = "./src/images/four.png";
          (pharoahFollow as HTMLImageElement).alt = "pharoah";
          document.getElementById("retrieve-pharoah")?.appendChild(pharoahFollow)
        })
      }}>translate?</button>
      <button className="close-button" id="retrieve-pharoah-close-button" onClick={() => {
          setShowGetPTerminal(false);
          (document.getElementById("retrieve-pharoah-window") as HTMLDivElement).style.display = "none"
          }}>close</button>
      </>
    )
  }
  
  export default RetrievePharoahWindow
type PropsType = {
    setShowGetGTerminal: React.Dispatch<React.SetStateAction<boolean>>,
    regex: RegExp,
    getSpudMargin: number
  }
  
  const RetrieveGuntherWindow = ({ setShowGetGTerminal, regex, getSpudMargin }: PropsType) => {

    return(
      <>
      <img className="cat-images" id="gunther-image" src="/images/gunther1.png" alt="gunther"></img>
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
          (guntherFollow as HTMLImageElement).src = "/images/gunther1.png";
          (guntherFollow as HTMLImageElement).alt = "gunther";
          document.getElementById("retrieve-gunther")?.appendChild(guntherFollow);
          if (document.getElementById("pharoah-image-follow")) {
            const pharoah: HTMLImageElement = document.getElementById("pharoah-image-follow") as HTMLImageElement
            const pharoahCss: CSSStyleDeclaration = getComputedStyle(pharoah)
            const pharoahMarginLeft: string = pharoahCss.marginLeft
            const pharoahRemovePx: number = Number(pharoahMarginLeft.match(regex)?.join(''))
            const pharoahNewMarg: number = pharoahRemovePx + getSpudMargin;
            pharoah.style.marginLeft = pharoahNewMarg.toString() + "px"
          }
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
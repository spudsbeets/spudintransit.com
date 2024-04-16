type PropsType = {
    setShowFeedGTerminal: React.Dispatch<React.SetStateAction<boolean>>,
    getSpudMargin: number,
    regex: RegExp
  }
  
  const FeedGuntherWindow = ({ setShowFeedGTerminal, getSpudMargin, regex }: PropsType) => {
    
    return(
    <>
    <img className="food-images" id="gunther-food-image" src="/images/catfood.png" alt="gunther-food"></img>
    <button className="terminal-window-button" id="feed-gunther-button" onClick={() => {
      if (document.getElementById("gunther-image-follow")) {
        (document.getElementById("gunther-image-follow") as HTMLImageElement).remove();
        document.getElementById("feed-gunther-close-button")?.remove();
        document.getElementById("feed-gunther-button")?.remove();
        const guntFood = document.createElement("img");
        guntFood.id = "gunther-image-feed";
        guntFood.src = "/images/gunther1.png";
        guntFood.alt = "guntFood";
        guntFood.className = "cat-images";
        (document.getElementById("feed-gunther") as HTMLDivElement).appendChild(guntFood);
        (document.getElementById("gunther-food-image") as HTMLImageElement).style.animation = "foodGunther 2s ease-out .1s 1, wiggleGunther 1.5s ease-in-out 2.5s 1, fadeout 1s ease-in 4s 1";
        (document.getElementById("gunther-food-image") as HTMLImageElement).style.animationFillMode = "forwards";         
        guntFood.style.animation = "feedGunther 2s ease-out .1s 1, wiggleGunther 1.5s ease-in-out 2.7s 1, fadeout 1s ease-in 4.2s 1";
        guntFood.style.animationFillMode = "forwards"
        const thankYou = document.createElement('h1')
        thankYou.id = "thank-you-message-gunther"
        thankYou.innerHTML = "thank youuuu"
        thankYou.className = "thank-you-messages";
        (document.getElementById("feed-gunther-window") as HTMLDivElement).appendChild(thankYou);
        (document.getElementById("thank-you-message-gunther") as HTMLHeadingElement).style.animationFillMode = "forwards";
        if (document.getElementById("pharoah-image-follow")) {
          const pharoah = document.getElementById("pharoah-image-follow") as HTMLImageElement
          const pharoahCss = getComputedStyle(pharoah)
          const pharoahMarginLeft = pharoahCss.marginLeft
          const pharoahRemovePx: number = Number(pharoahMarginLeft.match(regex)?.join(''))
          const pharoahNewMarg: number = pharoahRemovePx + getSpudMargin;
          pharoah.style.marginLeft = pharoahNewMarg.toString() + "px"
        }
      } else {
        const taunt = document.createElement('div')
        const tauntMessage = document.createElement('p')
        taunt.id = "taunt-div-gunther"
        tauntMessage.id = "taunt-message-gunther"
        taunt.className = "taunt-divs"
        tauntMessage.className = "taunt-messages"
        if (!document.getElementById("gunther-image-follow") && !document.getElementById("pharoah-image-follow")) {
          tauntMessage.innerHTML = "you want to give spud cat food...? go find a cat!"
        } else {
          tauntMessage.innerHTML = "pharoah hisses at you, 'this is not my food!!'"
        }
        document.getElementById("feed-gunther")?.appendChild(taunt)
        taunt.appendChild(tauntMessage)
      }
    }}>satisfy gunther's hunger?</button>
    <button className="close-button" id="feed-gunther-close-button" onClick={() => {
        setShowFeedGTerminal(false);
        (document.getElementById("feed-gunther-window") as HTMLDivElement).style.display = "none"
        }}>close</button>
    </>
    )
  }
  
  export default FeedGuntherWindow
type PropsType = {
  setShowFeedPTerminal: React.Dispatch<React.SetStateAction<boolean>>,
  regex: RegExp,
  getSpudMargin: number
}

const FeedPharoahWindow = ({ setShowFeedPTerminal, getSpudMargin, regex }: PropsType) => {
  return(
    <>
    <img className="food-images" id="pharoah-food-image" src="/images/catfood.png" alt="pharoah-food"></img>
    <button className="terminal-window-button" id="feed-pharoah-button" onClick={() => {
      if (document.getElementById("pharoah-image-follow")) {
        (document.getElementById("pharoah-image-follow") as HTMLImageElement).remove();
        document.getElementById("feed-pharoah-close-button")?.remove();
        document.getElementById("feed-pharoah-button")?.remove();
        const pharoahFood = document.createElement("img");
        pharoahFood.id = "pharoah-image-feed";
        pharoahFood.src = "/images/pharoah1.png";
        pharoahFood.alt = "pharoahFood";
        pharoahFood.className = "cat-images";
        (document.getElementById("feed-pharoah") as HTMLDivElement).appendChild(pharoahFood);
        if (document.getElementById("gunther-image-follow")) {
          const pharoahCss: CSSStyleDeclaration = getComputedStyle(document.getElementById("pharoah-image-feed") as HTMLImageElement)
          const pharoahMarginLeft: string = pharoahCss.marginLeft
          const pharoahRemovePx: number = Number(pharoahMarginLeft.match(regex)?.join(''))
          const pharoahNewMargLeft: number = pharoahRemovePx - getSpudMargin;
          (document.getElementById("pharoah-image-feed") as HTMLImageElement).style.marginLeft = pharoahNewMargLeft.toString() + "px";
        }
        (document.getElementById("pharoah-food-image") as HTMLImageElement).style.animation = "foodPharoah 4s ease-out .1s 1, wiggleGunther 1.5s ease-in-out 4.5s 1, fadeout 1s ease-in 6s 1";
        pharoahFood.style.animation = "feedPharoah 4s ease-out .1s 1, wiggleGunther 1.5s ease-in-out 4.7s 1, fadeout 1s ease-in 6.2s 1";
        (document.getElementById("pharoah-food-image") as HTMLImageElement).style.animationFillMode = "forwards";         
        pharoahFood.style.animationFillMode = "forwards"
        const thankYou = document.createElement('h1')
        thankYou.id = "thank-you-message-pharoah"
        thankYou.innerHTML = "thanks boss"
        thankYou.className = "thank-you-messages";
        (document.getElementById("feed-pharoah-window") as HTMLDivElement).appendChild(thankYou);
        (document.getElementById("thank-you-message-pharoah") as HTMLHeadingElement).style.animationFillMode = "forwards";
      } else {
          const taunt = document.createElement('div')
          const tauntMessage = document.createElement('p')
          taunt.id = "taunt-div-pharoah"
          tauntMessage.id = "taunt-message-pharoah"
          taunt.className = "taunt-divs"
          tauntMessage.className = "taunt-messages"
          if (!document.getElementById("gunther-image-follow") && !document.getElementById("pharoah-image-follow")) {
            tauntMessage.innerHTML = "you want to give spud cat food...? go find a cat!"
          } else {
            tauntMessage.innerHTML = "gunther hisses at you, 'i want my food!'"
          }
        document.getElementById("feed-pharoah")?.appendChild(taunt)
        taunt.appendChild(tauntMessage)
    }
    }}>satisfy pharoah's hunger?</button>
    <button className="close-button" id="feed-pharoah-close-button" onClick={() => {
        setShowFeedPTerminal(false);
        (document.getElementById("feed-pharoah-window") as HTMLDivElement).style.display = "none"
        }}>close</button>
    </>
  )
}

export default FeedPharoahWindow
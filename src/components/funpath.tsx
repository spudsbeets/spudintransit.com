import '../App.css'
import { useEffect } from 'react'

interface OffshootMargins {
  marginTop: string,
  marginLeft: string
}

interface MarginObject {
  defaultMarginLeft: string,
  leftOffshootMargins: OffshootMargins[]
  rightOffshootMargins: OffshootMargins[]
}

const FunPath = () => {

  const regex: RegExp = /\d|-/g

  let leftCount: number = 0

  function getWindowWidth(): number {
    return window.innerWidth
  }

  function getSpudMargin(): number {
    if (getWindowWidth() > 1000) {
      return 102
    } else {
      throw new Error("whaat")
    }
  }

  function getDefaultMargs(): MarginObject {
    if (getWindowWidth() > 1000) {
      return {
        defaultMarginLeft: "10px",
        // Bottom to Top of screen
        leftOffshootMargins: [
         {
          marginTop: "-702px",
          marginLeft: "-500px"
         },
         {
          marginTop: "-1314px",
          marginLeft: "-296px"
         },
         {
          marginTop: "-2028px",
          marginLeft: "-602px"
         },
         {
          marginTop: "-2334px",
          marginLeft: "-602px"
         },
         {
          marginTop: "-2844px",
          marginLeft: "-398px"
         },
        ],
        rightOffshootMargins: [
         {
           marginTop: "-498px",
           marginLeft: "622px"
         },
         {
           marginTop: "-906px",
           marginLeft: "316px"
         },
         {
           marginTop: "-1620px",
           marginLeft: "418px"
         },
         {
           marginTop: "-2232px",
           marginLeft: "316px"
         },
         {
           marginTop: "-3150px",
           marginLeft: "520px"
         },
        ]
      }
    } else {
      throw new Error("whaat")
    }
  }

  useEffect(() => {
   document.addEventListener('keydown', (event) => {
    const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
    const spudCss: CSSStyleDeclaration = getComputedStyle(spud)
    const spudInitialMargLeft = spudCss.marginLeft  
    if (event.key === "ArrowUp") {
      const mainHallwayDivs: HTMLCollectionOf<Element> = document.getElementsByClassName("tile")
      for (let i = 0; i < mainHallwayDivs.length; i++) {
        const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
        const spudCss: CSSStyleDeclaration = getComputedStyle(spud)
        let count = 0
        if (spud.getBoundingClientRect().top - mainHallwayDivs[i].getBoundingClientRect().bottom < 15 && spud.getBoundingClientRect().top - mainHallwayDivs[i].getBoundingClientRect().bottom > 0 && spudCss.marginLeft === getDefaultMargs().defaultMarginLeft) {
          count += 1
          if (count === 1) {
          const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
          const spudCss: CSSStyleDeclaration = getComputedStyle(spud)
          const marginTop: string = spudCss.marginTop
          const removePx: number = Number(marginTop.match(regex)?.join(''))
          const newMarg: number = removePx - getSpudMargin();
          spud.style.marginTop = newMarg.toString() + "px"  
          count -= 1
          break   
       }
      }
     }
    }
    if (event.key === "ArrowDown") {
      const mainHallwayDivs: HTMLCollectionOf<Element> = document.getElementsByClassName("tile")
      for (let i = 0; i < mainHallwayDivs.length; i++) {
        const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
        const spudCss: CSSStyleDeclaration = getComputedStyle(spud)
        let count = 0
        if (spud.getBoundingClientRect().bottom - mainHallwayDivs[i].getBoundingClientRect().top > -15 && spud.getBoundingClientRect().bottom - mainHallwayDivs[i].getBoundingClientRect().top < 0 && spudCss.marginLeft === getDefaultMargs().defaultMarginLeft) {
          count += 1
          if (count === 1) {
          const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
          const spudCss: CSSStyleDeclaration = getComputedStyle(spud)
          const marginTop: string = spudCss.marginTop
          const removePx: number = Number(marginTop.match(regex)?.join(''))
          const newMarg: number = removePx + getSpudMargin();
          spud.style.marginTop = newMarg.toString() + "px"
          count -= 1
          break
       }
      }
     }
    }
    if (event.key === "ArrowLeft") {
      const offshootLeftDivs: HTMLCollectionOf<Element> = document.getElementsByClassName("offshoot-tile-left")
      for (let i = 0; i < offshootLeftDivs.length; i++) {
          const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
          if (spud.getBoundingClientRect().left - offshootLeftDivs[i].getBoundingClientRect().right < 15 
          && spud.getBoundingClientRect().left - offshootLeftDivs[i].getBoundingClientRect().right > 0 
          && spud.getBoundingClientRect().top - offshootLeftDivs[i].getBoundingClientRect().top < 15 
          && spud.getBoundingClientRect().top - offshootLeftDivs[i].getBoundingClientRect().top > 0
          ) {
          leftCount += 1
              if (leftCount === 1) {
                  const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
                  const spudCss: CSSStyleDeclaration = getComputedStyle(spud)
                  const marginLeft: string = spudCss.marginLeft
                  const removePx: number = Number(marginLeft.match(regex)?.join(''))
                  const newMarg: number = removePx - getSpudMargin();
                  spud.style.marginLeft = newMarg.toString() + "px"
            }   
          } 
          else if (spudCss.marginTop === getDefaultMargs().leftOffshootMargins[0].marginTop 
          && spudCss.marginLeft !== getDefaultMargs().leftOffshootMargins[0].marginLeft ||
          spudCss.marginTop === getDefaultMargs().leftOffshootMargins[1].marginTop 
          && spudCss.marginLeft !== getDefaultMargs().leftOffshootMargins[1].marginLeft ||
          spudCss.marginTop === getDefaultMargs().leftOffshootMargins[2].marginTop 
          && spudCss.marginLeft !== getDefaultMargs().leftOffshootMargins[2].marginLeft ||
          spudCss.marginTop === getDefaultMargs().leftOffshootMargins[3].marginTop 
          && spudCss.marginLeft !== getDefaultMargs().leftOffshootMargins[3].marginLeft ||
          spudCss.marginTop === getDefaultMargs().leftOffshootMargins[4].marginTop 
          && spudCss.marginLeft !== getDefaultMargs().leftOffshootMargins[4].marginLeft)  {
            leftCount += 1
            if (leftCount === 1) {
              const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
              const spudCss: CSSStyleDeclaration = getComputedStyle(spud)
              const marginLeft: string = spudCss.marginLeft
              const removePx: number = Number(marginLeft.match(regex)?.join(''))
              const newMarg: number = removePx - getSpudMargin();
              spud.style.marginLeft = newMarg.toString() + "px"; 
            }
          }
          else if (spudCss.marginTop === getDefaultMargs().rightOffshootMargins[0].marginTop
          && spudCss.marginLeft !== getDefaultMargs().defaultMarginLeft ||
          spudCss.marginTop === getDefaultMargs().rightOffshootMargins[1].marginTop
          && spudCss.marginLeft !== getDefaultMargs().defaultMarginLeft ||
          spudCss.marginTop === getDefaultMargs().rightOffshootMargins[2].marginTop
          && spudCss.marginLeft !== getDefaultMargs().defaultMarginLeft ||
          spudCss.marginTop === getDefaultMargs().rightOffshootMargins[3].marginTop
          && spudCss.marginLeft !== getDefaultMargs().defaultMarginLeft ||
          spudCss.marginTop === getDefaultMargs().rightOffshootMargins[4].marginTop
          && spudCss.marginLeft !== getDefaultMargs().defaultMarginLeft) {
            leftCount += 1
            if (leftCount === 1) {
              const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
              const spudCss: CSSStyleDeclaration = getComputedStyle(spud)
              const marginLeft: string = spudCss.marginLeft
              const removePx: number = Number(marginLeft.match(regex)?.join(''))
              const newMarg: number = removePx - getSpudMargin();
              spud.style.marginLeft = newMarg.toString() + "px"; 
            }            
          }
      }  
    }
    if (event.key === "ArrowRight") {
      const offshootRightDivs: HTMLCollectionOf<Element> = document.getElementsByClassName("offshoot-tile-right")
      for (let i = 0; i < offshootRightDivs.length; i++) {
          const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
          if (spud.getBoundingClientRect().left - offshootRightDivs[i].getBoundingClientRect().right > -15 
          && spud.getBoundingClientRect().left - offshootRightDivs[i].getBoundingClientRect().right < 0 
          && spud.getBoundingClientRect().top - offshootRightDivs[i].getBoundingClientRect().top < 15 
          && spud.getBoundingClientRect().top - offshootRightDivs[i].getBoundingClientRect().top > 0
          ) {
          leftCount += 1
              if (leftCount === 1) {
                  const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
                  const spudCss: CSSStyleDeclaration = getComputedStyle(spud)
                  const marginLeft: string = spudCss.marginLeft
                  const removePx: number = Number(marginLeft.match(regex)?.join(''))
                  const newMarg: number = removePx + getSpudMargin();
                  spud.style.marginLeft = newMarg.toString() + "px"
            }   
          } 
          else if (spudCss.marginTop === getDefaultMargs().rightOffshootMargins[0].marginTop 
          && spudCss.marginLeft !== getDefaultMargs().rightOffshootMargins[0].marginLeft ||
          spudCss.marginTop === getDefaultMargs().rightOffshootMargins[1].marginTop 
          && spudCss.marginLeft !== getDefaultMargs().rightOffshootMargins[1].marginLeft ||
          spudCss.marginTop === getDefaultMargs().rightOffshootMargins[2].marginTop 
          && spudCss.marginLeft !== getDefaultMargs().rightOffshootMargins[2].marginLeft ||
          spudCss.marginTop === getDefaultMargs().rightOffshootMargins[3].marginTop 
          && spudCss.marginLeft !== getDefaultMargs().rightOffshootMargins[3].marginLeft ||
          spudCss.marginTop === getDefaultMargs().rightOffshootMargins[4].marginTop 
          && spudCss.marginLeft !== getDefaultMargs().rightOffshootMargins[4].marginLeft)  {
            leftCount += 1
            if (leftCount === 1) {
              const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
              const spudCss: CSSStyleDeclaration = getComputedStyle(spud)
              const marginLeft: string = spudCss.marginLeft
              const removePx: number = Number(marginLeft.match(regex)?.join(''))
              const newMarg: number = removePx + getSpudMargin();
              spud.style.marginLeft = newMarg.toString() + "px"; 
            }
          }
          else if (spudCss.marginTop === getDefaultMargs().leftOffshootMargins[0].marginTop
          && spudCss.marginLeft !== getDefaultMargs().defaultMarginLeft ||
          spudCss.marginTop === getDefaultMargs().leftOffshootMargins[1].marginTop
          && spudCss.marginLeft !== getDefaultMargs().defaultMarginLeft ||
          spudCss.marginTop === getDefaultMargs().leftOffshootMargins[2].marginTop
          && spudCss.marginLeft !== getDefaultMargs().defaultMarginLeft ||
          spudCss.marginTop === getDefaultMargs().leftOffshootMargins[3].marginTop
          && spudCss.marginLeft !== getDefaultMargs().defaultMarginLeft ||
          spudCss.marginTop === getDefaultMargs().leftOffshootMargins[4].marginTop
          && spudCss.marginLeft !== getDefaultMargs().defaultMarginLeft) {
            leftCount += 1
            if (leftCount === 1) {
              const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
              const spudCss: CSSStyleDeclaration = getComputedStyle(spud)
              const marginLeft: string = spudCss.marginLeft
              const removePx: number = Number(marginLeft.match(regex)?.join(''))
              const newMarg: number = removePx + getSpudMargin();
              spud.style.marginLeft = newMarg.toString() + "px"; 
            }    
          }
      } 
    } 
    const spudNewMargLeft = spudCss.marginLeft
    if (spudNewMargLeft !== spudInitialMargLeft) {
      leftCount = 0
    }
    spud.scrollIntoView({ behavior: "smooth", block: "center", inline: "center"})
   })
  },[]);
  
  return( 
  <div id="lair">
  <div id="left-offshoot-hallways">
    <div id="offshoot-2" className="offshoot-left">
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="terminal" id="terminal-2"></div>
    </div>
    <div id="offshoot-3" className="offshoot-left">
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="terminal" id="terminal-3"></div>
    </div> 
    <div id="offshoot-6" className="offshoot-left">
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="terminal" id="terminal-6"></div>
    </div>
    <div id="offshoot-8" className="offshoot-left">
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="terminal" id="terminal-8"></div>
    </div>
    <div id="offshoot-9" className="offshoot-left">
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="terminal" id="terminal-9"></div>
    </div>               
  </div>
  <div id="main-hallway">
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div className="tile"></div>
     <div id="spud-starter"><img alt="spud" id="spud" src="./src/images/spud.png" onLoad={() => (document.getElementById("spud") as HTMLImageElement).scrollIntoView({ behavior: "smooth", block: "center", inline: "center"})}></img></div>
     <div id="direction-arrows-updown">
      <button className="direction-button" id="up-arrow" onClick={() => {
        var event = new KeyboardEvent("keydown", {
          key: 'ArrowUp'
        });
        document.dispatchEvent(event)
      }}>&#8670;</button>
      <button className="direction-button" id="down-arrow" onClick={() => {
        var event = new KeyboardEvent("keydown", {
          key: 'ArrowDown'
        })
        document.dispatchEvent(event)
      }}>&#5584;</button>
    </div>
    <div id="direction-arrows-leftright">
      <button className="direction-button" id="left-arrow" onClick={() => {
        var event = new KeyboardEvent("keydown", {
          key: "ArrowLeft"
        })
        document.dispatchEvent(event)
      }}>&#8604;</button>
      <button className="direction-button" id="right-arrow" onClick={() => {
        var event = new KeyboardEvent("keydown", {
          key: "ArrowRight"
        })
        document.dispatchEvent(event)
      }}>&#10163;</button>
    </div>
  </div>
  <div id="right-offshoot-hallways">
    <div id="offshoot-1" className="offshoot-right">
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="terminal" id="terminal-1"></div>
    </div> 
    <div id="offshoot-4" className="offshoot-right">
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="terminal" id="terminal-4"></div>
    </div> 
    <div id="offshoot-5" className="offshoot-right">
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="terminal" id="terminal-5"></div>
    </div> 
    <div id="offshoot-7" className="offshoot-right">
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="terminal" id="terminal-7"></div>
    </div>
    <div id="offshoot-10" className="offshoot-right">
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="terminal" id="terminal-10"></div>
    </div>                 
  </div>
  </div>
  )
}

export default FunPath
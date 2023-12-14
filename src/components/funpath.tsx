import '../App.css'
import { useEffect } from 'react'
import MarginObject from '../misc/types'
import CocktailClash from './cocktailclash'
import { terminalWindowContent } from '../misc/terminalWindowContent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const FunPath = () => {

  const regex: RegExp = /\d|-/g

  let leftCount: number = 0

  function getWindowWidth(): number {
    return window.innerWidth
  }

  function getSpudMargin(): number {
    if (getWindowWidth() > 1000) {
      return 204
    } else {
      throw new Error("whaat")
    }
  }

  function getDefaultMargs(): MarginObject {
    if (getWindowWidth() > 1000) {
      return {
        defaultMarginLeft: "20px",
        leftOffshootMargins: [
         {
          marginTop: "-2220px",
          marginLeft: "-1000px",
          correlatedTerminal: "cocktail-clash"
         },
         {
          marginTop: "-3036px",
          marginLeft: "-592px",
          correlatedTerminal: "retrieve-gunther"
         },
         {
          marginTop: "-4056px",
          marginLeft: "-1204px",
          correlatedTerminal: "spuds-snips-wednesday"
         },
         {
          marginTop: "-4872px",
          marginLeft: "-1204px",
          correlatedTerminal: "spuds-songs"
         },
         {
          marginTop: "-6096px",
          marginLeft: "-796px",
          correlatedTerminal: "spuds-ship"
         },
        ],
        rightOffshootMargins: [
         {
           marginTop: "-2832px",
           marginLeft: "1244px",
           correlatedTerminal: "retrieve-pharoah"
         },
         {
           marginTop: "-3444px",
           marginLeft: "632px",
           correlatedTerminal: "spuds-stuff"
         },
         {
           marginTop: "-4464px",
           marginLeft: "836px",
           correlatedTerminal: "spuds-snips-tuesday"
         },
         {
           marginTop: "-5484px",
           marginLeft: "632px",
           correlatedTerminal: "feed-pharoah"
         },
         {
           marginTop: "-6504px",
           marginLeft: "1040px",
           correlatedTerminal: "feed-gunther"
         },
        ]
      }
    } else {
      throw new Error("whaat")
    }
  } 

  function checkForTerminal(arr: any) {
    const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
    const spudCss: CSSStyleDeclaration = getComputedStyle(spud) 
    arr.forEach((el: any) => {
      if (spudCss.marginTop === el.marginTop && spudCss.marginLeft === el.marginLeft) {
        const thisTerminal = document.getElementById(el.correlatedTerminal as string) as HTMLDivElement;
        thisTerminal.style.backgroundColor = "#33cc33"
        let blankTerminalWindow = document.createElement('div')
        blankTerminalWindow.setAttribute("class", "terminal-window")
        thisTerminal.appendChild(blankTerminalWindow)
        if (el.correlatedTerminal === "spuds-ship") {
          blankTerminalWindow.innerHTML = terminalWindowContent[0].content
        } else if (el.correlatedTerminal === "spuds-songs") {
          blankTerminalWindow.innerHTML = terminalWindowContent[1].content
        } else if (el.correlatedTerminal === "spuds-snips-wednesday") {
          blankTerminalWindow.innerHTML = terminalWindowContent[2].content
        } else if (el.correlatedTerminal === "retrieve-gunther") {
          blankTerminalWindow.innerHTML = terminalWindowContent[3].content
        } else if (el.correlatedTerminal === "cocktail-clash") {
          blankTerminalWindow.innerHTML = terminalWindowContent[4].content
        } else if (el.correlatedTerminal === "spuds-stuff") {
          blankTerminalWindow.innerHTML = terminalWindowContent[6].content
        } else if (el.correlatedTerminal === "spuds-snips-tuesday") {
          blankTerminalWindow.innerHTML = terminalWindowContent[7].content
        } else if (el.correlatedTerminal === "retrieve-pharoah") {
          blankTerminalWindow.innerHTML = terminalWindowContent[5].content
        } else if (el.correlatedTerminal === "feed-gunther") {
          blankTerminalWindow.innerHTML = terminalWindowContent[9].content
        } else if (el.correlatedTerminal === "feed-pharoah") {
          blankTerminalWindow.innerHTML = terminalWindowContent[8].content
        }
      }})
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
        if (spud.getBoundingClientRect().top - mainHallwayDivs[i].getBoundingClientRect().bottom < 40 && spud.getBoundingClientRect().top - mainHallwayDivs[i].getBoundingClientRect().bottom > 0 && spudCss.marginLeft === getDefaultMargs().defaultMarginLeft) {
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
        if (spud.getBoundingClientRect().bottom - mainHallwayDivs[i].getBoundingClientRect().top > -40 && spud.getBoundingClientRect().bottom - mainHallwayDivs[i].getBoundingClientRect().top < 0 && spudCss.marginLeft === getDefaultMargs().defaultMarginLeft) {
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
      getDefaultMargs().rightOffshootMargins.forEach((el) => {
        if (spudCss.marginTop === el.marginTop && spudCss.marginLeft === el.marginLeft) {
          const terminalWindows = document.getElementsByClassName("terminal-window");
          for (let i = 0; i < terminalWindows.length; i++) {
            terminalWindows[i].remove()
          }
        }
      })
      const terminalWindows = document.getElementsByClassName("terminal-window")
        if (terminalWindows.length > 0) {
          event.preventDefault()
        } else {
          for (let i = 0; i < offshootLeftDivs.length; i++) {
          const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
          if (spud.getBoundingClientRect().left - offshootLeftDivs[i].getBoundingClientRect().right < 40 
          && spud.getBoundingClientRect().left - offshootLeftDivs[i].getBoundingClientRect().right > 0 
          && spud.getBoundingClientRect().top - offshootLeftDivs[i].getBoundingClientRect().top < 40 
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
                  checkForTerminal(getDefaultMargs().leftOffshootMargins)
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
              checkForTerminal(getDefaultMargs().leftOffshootMargins)
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
              checkForTerminal(getDefaultMargs().leftOffshootMargins)          
          }
        }  
      }
    }
  }
    if (event.key === "ArrowRight") {
      const offshootRightDivs: HTMLCollectionOf<Element> = document.getElementsByClassName("offshoot-tile-right")
      getDefaultMargs().leftOffshootMargins.forEach((el) => {
        if (spudCss.marginTop === el.marginTop && spudCss.marginLeft === el.marginLeft) {
          const terminalWindows = document.getElementsByClassName("terminal-window");
          for (let i = 0; i < terminalWindows.length; i++) {
            terminalWindows[i].remove()
          }
        }
      })
      const terminalWindows = document.getElementsByClassName("terminal-window")
        if (terminalWindows.length > 0) {
          event.preventDefault()
        } else {
      for (let i = 0; i < offshootRightDivs.length; i++) {
          const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
          if (spud.getBoundingClientRect().left - offshootRightDivs[i].getBoundingClientRect().right > -40 
          && spud.getBoundingClientRect().left - offshootRightDivs[i].getBoundingClientRect().right < 0 
          && spud.getBoundingClientRect().top - offshootRightDivs[i].getBoundingClientRect().top < 40 
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
                  checkForTerminal(getDefaultMargs().rightOffshootMargins)
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
              checkForTerminal(getDefaultMargs().rightOffshootMargins)
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
              checkForTerminal(getDefaultMargs().rightOffshootMargins)
            }   
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
  <BrowserRouter>
  <Routes>
  <Route path='/' element={ 
  <div id="lair">
  <div id="left-offshoot-hallways">
    <div id="offshoot-2" className="offshoot-left">
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="terminal" id="spuds-ship"></div>
    </div>
    <div id="offshoot-3" className="offshoot-left">
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="terminal" id="spuds-songs"></div>
    </div> 
    <div id="offshoot-6" className="offshoot-left">
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="terminal" id="spuds-snips-wednesday"></div>
    </div>
    <div id="offshoot-8" className="offshoot-left">
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="terminal" id="retrieve-gunther"></div>
    </div>
    <div id="offshoot-9" className="offshoot-left">
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="terminal" id="cocktail-clash"></div>
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
     <div className="terminal" id="feed-gunther"></div>
    </div> 
    <div id="offshoot-4" className="offshoot-right">
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="terminal" id="feed-pharoah"></div>
    </div> 
    <div id="offshoot-5" className="offshoot-right">
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="terminal" id="spuds-snips-tuesday"></div>
    </div> 
    <div id="offshoot-7" className="offshoot-right">
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="terminal" id="spuds-stuff"></div>
    </div>
    <div id="offshoot-10" className="offshoot-right">
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="terminal" id="retrieve-pharoah"></div>
    </div>                 
  </div>
  </div>}></Route>
  <Route path='/cocktailclash' element={<CocktailClash />}></Route>
  </Routes>
  </BrowserRouter>
  )
}

export default FunPath
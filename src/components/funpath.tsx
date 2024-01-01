import '../App.css'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import MarginObject from '../misc/types'
import CocktailClashWindow from './terminalWindows/cocktailclashwindow'
import SpudsShipWindow from './terminalWindows/spudsshipwindow'
import SpudsSongsWindow from './terminalWindows/spudssongswindow'
import SpudsStuffWindow from './terminalWindows/spudsstuffwindow'
import SpudsSnipsTuesdayWindow from './terminalWindows/spudssnipstuesdaywindow'
import SpudsSnipsWednesdayWindow from './terminalWindows/spudssnipswednesdaywindow'
import FeedPharoahWindow from './terminalWindows/feedpharoahwindow'
import FeedGuntherWindow from './terminalWindows/feedguntherwindow'
import RetrievePharoahWindow from './terminalWindows/retrievepharoahwindow'
import RetrieveGuntherWindow from './terminalWindows/retrieveguntherwindow'

const FunPath = () => {

  const [showCCTerminal, setShowCCTerminal] = useState<boolean>(false)
  const [showSpudsShipTerminal, setShowSpudsShipTerminal] = useState<boolean>(false)
  const [showSpudsSongsTerminal, setShowSpudsSongsTerminal] = useState<boolean>(false)
  const [showSpudsStuffTerminal, setShowSpudsStuffTerminal] = useState<boolean>(false)
  const [showTuesdayTerminal, setShowTuesdayTerminal] = useState<boolean>(false)
  const [showWednesdayTerminal, setShowWednesdayTerminal] = useState<boolean>(false)
  const [showFeedPTerminal, setShowFeedPTerminal] = useState<boolean>(false)
  const [showFeedGTerminal, setShowFeedGTerminal] = useState<boolean>(false)
  const [showGetPTerminal, setShowGetPTerminal] = useState<boolean>(false)
  const [showGetGTerminal, setShowGetGTerminal] = useState<boolean>(false)

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
        if (el.correlatedTerminal === "spuds-ship") {
          (document.getElementById("spuds-ship-window") as HTMLDivElement).style.display = "flex"
          setShowSpudsShipTerminal(true)
        } else if (el.correlatedTerminal === "spuds-songs") {
          (document.getElementById("spuds-songs-window") as HTMLDivElement).style.display = "flex"
          setShowSpudsSongsTerminal(true)
        } else if (el.correlatedTerminal === "spuds-snips-wednesday") {
          (document.getElementById("spuds-snips-wednesday-window") as HTMLDivElement).style.display = "flex"
          setShowWednesdayTerminal(true)
        } else if (el.correlatedTerminal === "retrieve-gunther") {
          (document.getElementById("retrieve-gunther-window") as HTMLDivElement).style.display = "flex"
          setShowGetGTerminal(true)
        } else if (el.correlatedTerminal === "cocktail-clash") {
          (document.getElementById("cocktail-clash-window") as HTMLDivElement).style.display = "flex";
          setShowCCTerminal(true)
        } else if (el.correlatedTerminal === "spuds-stuff") {
          (document.getElementById("spuds-stuff-window") as HTMLDivElement).style.display = "flex"
          setShowSpudsStuffTerminal(true)
        } else if (el.correlatedTerminal === "spuds-snips-tuesday") {
          (document.getElementById("spuds-snips-tuesday-window") as HTMLDivElement).style.display = "flex"
          setShowTuesdayTerminal(true)
        } else if (el.correlatedTerminal === "retrieve-pharoah") {
          (document.getElementById("retrieve-pharoah-window") as HTMLDivElement).style.display = "flex"
          setShowGetPTerminal(true)
        } else if (el.correlatedTerminal === "feed-gunther") {
          (document.getElementById("feed-gunther-window") as HTMLDivElement).style.display = "flex"
          setShowFeedGTerminal(true)
        } else if (el.correlatedTerminal === "feed-pharoah") {
          (document.getElementById("feed-pharoah-window") as HTMLDivElement).style.display = "flex"
          setShowFeedPTerminal(true)
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
      const terminalWindows = document.getElementsByClassName("terminal-window")
      getDefaultMargs().rightOffshootMargins.forEach((el) => {
        if (spudCss.marginTop === el.marginTop && spudCss.marginLeft === el.marginLeft) {
          for (let i = 0; i < terminalWindows.length; i++) {
            (terminalWindows[i] as HTMLDivElement).style.display = "none"
          }
        }
      })
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
    if (event.key === "ArrowRight") {
      const offshootRightDivs: HTMLCollectionOf<Element> = document.getElementsByClassName("offshoot-tile-right")
      const terminalWindows = document.getElementsByClassName("terminal-window")
      getDefaultMargs().leftOffshootMargins.forEach((el) => {
        if (spudCss.marginTop === el.marginTop && spudCss.marginLeft === el.marginLeft) {
          for (let i = 0; i < terminalWindows.length; i++) {
            (terminalWindows[i] as HTMLDivElement).style.display = "none"
          }
        }
      })
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
     <div className="terminal" id="spuds-ship">{showSpudsShipTerminal && createPortal(
      <SpudsShipWindow setShowSpudsShipTerminal={setShowSpudsShipTerminal}/>,
      document.getElementById("spuds-ship-window")!
     )}</div>
     <div className="terminal-window" id="spuds-ship-window"></div>
    </div>
    <div id="offshoot-3" className="offshoot-left">
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="terminal" id="spuds-songs">{showSpudsSongsTerminal && createPortal(
      <SpudsSongsWindow setShowSpudsSongsTerminal={setShowSpudsSongsTerminal}/>,
      document.getElementById("spuds-songs-window")!
     )}</div>
     <div className="terminal-window" id="spuds-songs-window"></div>
    </div> 
    <div id="offshoot-6" className="offshoot-left">
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="terminal" id="spuds-snips-wednesday">{showWednesdayTerminal && createPortal(
      <SpudsSnipsWednesdayWindow setShowWednesdayTerminal={setShowWednesdayTerminal}/>,
      document.getElementById("spuds-snips-wednesday-window")!
     )}</div>
     <div className="terminal-window" id="spuds-snips-wednesday-window"></div>
    </div>
    <div id="offshoot-8" className="offshoot-left">
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="terminal" id="retrieve-gunther">{showGetGTerminal && createPortal(
      <RetrieveGuntherWindow setShowGetGTerminal={setShowGetGTerminal}/>,
      document.getElementById("retrieve-gunther-window")!
     )}</div>
     <div className="terminal-window" id="retrieve-gunther-window"></div>
    </div>
    <div id="offshoot-9" className="offshoot-left">
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="offshoot-tile-left"></div>
     <div className="terminal" id="cocktail-clash">{showCCTerminal && createPortal(
      <CocktailClashWindow setShowCCTerminal={setShowCCTerminal}/>,
      document.getElementById("cocktail-clash-window")!
     )}</div>
     <div className="terminal-window" id="cocktail-clash-window"></div>
    </div>               
  </div>
  <button className="home-button" onClick={() => location.reload()}>home</button>
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
     <div className="terminal" id="feed-gunther">{showFeedGTerminal && createPortal(
      <FeedGuntherWindow setShowFeedGTerminal={setShowFeedGTerminal}/>,
      document.getElementById("feed-gunther-window")!
     )}</div>
     <div className="terminal-window" id="feed-gunther-window"></div>
    </div> 
    <div id="offshoot-4" className="offshoot-right">
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="terminal" id="feed-pharoah">{showFeedPTerminal && createPortal(
      <FeedPharoahWindow setShowFeedPTerminal={setShowFeedPTerminal}/>,
      document.getElementById("feed-pharoah-window")!
     )}</div>
     <div className="terminal-window" id="feed-pharoah-window"></div>
    </div> 
    <div id="offshoot-5" className="offshoot-right">
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="terminal" id="spuds-snips-tuesday">{showTuesdayTerminal && createPortal(
      <SpudsSnipsTuesdayWindow setShowTuesdayTerminal={setShowTuesdayTerminal}/>,
      document.getElementById("spuds-snips-tuesday-window")!
     )}</div>
     <div className="terminal-window" id="spuds-snips-tuesday-window"></div>
    </div> 
    <div id="offshoot-7" className="offshoot-right">
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="terminal" id="spuds-stuff">{showSpudsStuffTerminal && createPortal(
      <SpudsStuffWindow setShowSpudsStuffTerminal={setShowSpudsStuffTerminal}/>,
      document.getElementById("spuds-stuff-window")!
     )}</div>
     <div className="terminal-window" id="spuds-stuff-window"></div>
    </div>
    <div id="offshoot-10" className="offshoot-right">
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="terminal" id="retrieve-pharoah">{showGetPTerminal && createPortal(
      <RetrievePharoahWindow setShowGetPTerminal={setShowGetPTerminal}/>,
      document.getElementById("retrieve-pharoah-window")!
     )}</div>
     <div className="terminal-window" id="retrieve-pharoah-window"></div>
    </div>                 
  </div>
  </div>
  )
}

export default FunPath
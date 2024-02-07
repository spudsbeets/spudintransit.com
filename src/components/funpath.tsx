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

  const blinkRegex: RegExp = /blinky/i

  let leftCount: number = 0

  let catCount: number = 0

  let bothCount: number = 0

  const mainHallwayDivs: HTMLCollectionOf<Element> = document.getElementsByClassName("tile")

  const rightHallwayDivs: HTMLCollectionOf<Element> = document.getElementsByClassName("offshoot-tile-right")

  const leftHallwayDivs: HTMLCollectionOf<Element> = document.getElementsByClassName("offshoot-tile-left")

  function getWindowWidth(): number {
    return window.innerWidth
  }

  function getWindowHeight(): number {
    return window.innerHeight
  }

  function checkLandscape(): void {
    if (getWindowWidth() < 500) {
      let landscapeDiv = document.createElement('div');
      const landscapeMessage = document.createElement('p');
      landscapeDiv.id = "landscape-div";
      landscapeMessage.id = "landscape-message";
      landscapeMessage.innerHTML = "Turn your phone horizontal!";
      (document.getElementById("spuds-ship") as HTMLDivElement).appendChild(landscapeDiv);
      landscapeDiv.appendChild(landscapeMessage);
    } else {
      null
    }
  }

  function getSpudMargin(): number {
    if (getWindowWidth() >= 1000) {
      return 204
    } else if (getWindowWidth() < 1000 && getWindowWidth() >= 500) {
      if (getWindowHeight() > 400) {
        return 164
      } else {
        return 124
      }
    } else {
      throw new Error("whaat")
    }
  }

  function getClosenessMarg(): number {
    if (getWindowWidth() >= 1000) {
      return 65
    } else if (getWindowWidth() < 1000 && getWindowWidth() >= 500) {
      if (getWindowHeight() > 400) {
        return 45
      } else {
        return 33
      }
    } else {
      throw new Error("whaat")
    }
  }

  function getDefaultMargs(): MarginObject {
    if (getWindowWidth() < 1000 && getWindowWidth() >= 500) {
      if (getWindowHeight() > 400) {
        return {
          defaultMarginLeft: "16px",
          leftOffshootMargins: [
           {
            marginTop: "-1790px",
            marginLeft: "-804px",
            correlatedTerminal: "cocktail-clash"
           },
           {
            marginTop: "-2446px",
            marginLeft: "-476px",
            correlatedTerminal: "retrieve-gunther"
           },
           {
            marginTop: "-3266px",
            marginLeft: "-968px",
            correlatedTerminal: "spuds-snips-wednesday"
           },
           {
            marginTop: "-3922px",
            marginLeft: "-968px",
            correlatedTerminal: "spuds-songs"
           },
           {
            marginTop: "-4906px",
            marginLeft: "-640px",
            correlatedTerminal: "spuds-ship"
           },
          ],
          rightOffshootMargins: [
           {
             marginTop: "-2282px",
             marginLeft: "1000px",
             correlatedTerminal: "retrieve-pharoah"
           },
           {
             marginTop: "-2774px",
             marginLeft: "508px",
             correlatedTerminal: "spuds-stuff"
           },
           {
             marginTop: "-3594px",
             marginLeft: "672px",
             correlatedTerminal: "spuds-snips-tuesday"
           },
           {
             marginTop: "-4414px",
             marginLeft: "508px",
             correlatedTerminal: "feed-pharoah"
           },
           {
             marginTop: "-5234px",
             marginLeft: "836px",
             correlatedTerminal: "feed-gunther"
           },
          ]
        }
      } else {
        return {
          defaultMarginLeft: "12px",
          leftOffshootMargins: [
           {
            marginTop: "-1356px",
            marginLeft: "-608px",
            correlatedTerminal: "cocktail-clash"
           },
           {
            marginTop: "-1852px",
            marginLeft: "-360px",
            correlatedTerminal: "retrieve-gunther"
           },
           {
            marginTop: "-2472px",
            marginLeft: "-732px",
            correlatedTerminal: "spuds-snips-wednesday"
           },
           {
            marginTop: "-2968px",
            marginLeft: "-732px",
            correlatedTerminal: "spuds-songs"
           },
           {
            marginTop: "-3712px",
            marginLeft: "-484px",
            correlatedTerminal: "spuds-ship"
           },
          ],
          rightOffshootMargins: [
           {
             marginTop: "-1728px",
             marginLeft: "756px",
             correlatedTerminal: "retrieve-pharoah"
           },
           {
             marginTop: "-2100px",
             marginLeft: "384px",
             correlatedTerminal: "spuds-stuff"
           },
           {
             marginTop: "-2720px",
             marginLeft: "508px",
             correlatedTerminal: "spuds-snips-tuesday"
           },
           {
             marginTop: "-3340px",
             marginLeft: "384px",
             correlatedTerminal: "feed-pharoah"
           },
           {
             marginTop: "-3960px",
             marginLeft: "632px",
             correlatedTerminal: "feed-gunther"
           },
          ]
        }        
      }
    } else if (getWindowWidth() >= 1000) {
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

  function guntherOrPharoah() {
    if (document.getElementById("gunther-image-follow") && document.getElementById("pharoah-image-follow")) {
      const gunther = document.getElementById("gunther-image-follow")
      const pharoah = document.getElementById("pharoah-image-follow")
      return [gunther, pharoah]
    } else if (document.getElementById("gunther-image-follow") && !document.getElementById("pharoah-image-follow")) {
      const cat: HTMLImageElement = document.getElementById("gunther-image-follow") as HTMLImageElement
      return [cat, null]
    } else if (document.getElementById("pharoah-image-follow") && !document.getElementById("gunther-iamge-follow")) {
      const cat: HTMLImageElement = document.getElementById("pharoah-image-follow") as HTMLImageElement
      return [cat, null]
    } else {
      throw new Error("where catttt???")
    }
  }

  function addBlinks(arr: HTMLCollectionOf<Element>, leftArr: HTMLCollectionOf<Element>, rightArr: HTMLCollectionOf<Element>) {

    let blinkCount: number = 0

          function randomInt(): number {
            return Math.floor(Math.random() * 100)
          }

          function randomizeDelayandName(): string {
            let thisInt: number = randomInt()
            let thatInt: number = randomInt()
            if (thatInt < 51) {
             if (thisInt < 26) {
               return "blinkyHallway1 3s 2s 1"
             } else if (thisInt >= 26 && thisInt < 51) {
               return "blinkyHallway1 3s 7.4s 1"
             } else if (thisInt >= 51 && thisInt < 76) {
               return "blinkyHallway1 3s 12.8s 1"
             } else {
               return "blinkyHallway1 3s 16.3s 1"
             }
            } else {
             if (thisInt < 26) {
               return "blinkyHallway2 3s 1.4s 1"
             } else if (thisInt >= 26 && thisInt < 51) {
               return "blinkyHallway2 3s 7.3s 1"
             } else if (thisInt >= 51 && thisInt < 76) {
               return "blinkyHallway2 3s 11.6s 1"
             } else {
               return "blinkyHallway2 3s 15.8s 1"
             }
            }
          }

          do {
              let thisInt = randomInt()
              if (thisInt < 50) {
                (arr[Math.floor(Math.random() * arr.length)] as HTMLDivElement).style.animation = randomizeDelayandName()
                blinkCount += 1
              } else if (thisInt >= 50 && thisInt < 75) {
                (leftArr[Math.floor(Math.random() * leftArr.length)] as HTMLDivElement).style.animation = randomizeDelayandName()
                blinkCount += 1
              } else {
                (rightArr[Math.floor(Math.random() * rightArr.length)] as HTMLDivElement).style.animation = randomizeDelayandName()
                blinkCount += 1
              }
          } while (blinkCount < 4)    
        }

  function removeBlinksMainHallway(arr: HTMLCollectionOf<Element>) {
    let arrCount = 0
    do {
      if (blinkRegex.test((arr[arrCount] as HTMLDivElement).style.animation) === true) {
        (arr[arrCount] as HTMLDivElement).style.animation = "none"
        arrCount += 1
      } else {
        arrCount += 1
      }
    } while (arrCount < (arr.length - 2))
    arrCount = 0
  }

  function removeBlinksLeftHallway(leftArr: HTMLCollectionOf<Element>) {
    let arrCount = 0
    do {
      if (blinkRegex.test((leftArr[arrCount] as HTMLDivElement).style.animation) === true) {
        (leftArr[arrCount] as HTMLDivElement).style.animation = "none"
        arrCount += 1
      } else {
        arrCount += 1
      }
    } while (arrCount < (leftArr.length - 2))
    arrCount = 0
  }

  function removeBlinksRightHallway(rightArr: HTMLCollectionOf<Element>) {
    let arrCount = 0
    do {
      if (blinkRegex.test((rightArr[arrCount] as HTMLDivElement).style.animation) === true) {
        (rightArr[arrCount] as HTMLDivElement).style.animation = "none"
        arrCount += 1
      } else {
        arrCount += 1
      }
    } while (arrCount < (rightArr.length - 2))
    arrCount = 0
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
          if (document.getElementById("thank-you-message-gunther")) {
            (document.getElementById("gunther-food-image") as HTMLImageElement).remove();
            (document.getElementById("thank-you-message-gunther") as HTMLHeadingElement).style.animation = "none";
            (document.getElementById("thank-you-message-gunther") as HTMLHeadingElement).style.opacity = "1";
          }
          setShowFeedGTerminal(true)
        } else if (el.correlatedTerminal === "feed-pharoah") {
          (document.getElementById("feed-pharoah-window") as HTMLDivElement).style.display = "flex"
          if (document.getElementById("thank-you-message-pharoah")) {
            (document.getElementById("pharoah-food-image") as HTMLImageElement).remove();
            (document.getElementById("thank-you-message-pharoah") as HTMLHeadingElement).style.animation = "none";
            (document.getElementById("thank-you-message-pharoah") as HTMLHeadingElement).style.opacity = "1";
          }
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
        const bottomTile: HTMLDivElement = document.getElementById("bottom-tile") as HTMLDivElement
        let count = 0
        if (spud.getBoundingClientRect().top - mainHallwayDivs[i].getBoundingClientRect().bottom < getClosenessMarg() && spud.getBoundingClientRect().top - mainHallwayDivs[i].getBoundingClientRect().bottom > 0 && spudCss.marginLeft === getDefaultMargs().defaultMarginLeft) {
          count += 1
          if ((document.getElementById("gunther-image-follow") && !document.getElementById("pharoah-image-follow")) ||
          document.getElementById("pharoah-image-follow") && !document.getElementById("gunther-image-follow")) {
            catCount += 1
          }
          if (document.getElementById("gunther-image-follow") && document.getElementById("pharoah-image-follow")) {
            catCount += 1
            bothCount += 1
          }
          if (count === 1) {
          const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
          const spudCss: CSSStyleDeclaration = getComputedStyle(spud)
          const marginTop: string = spudCss.marginTop
          const removePx: number = Number(marginTop.match(regex)?.join(''))
          const newMarg: number = removePx - getSpudMargin() 
          if (catCount === 1) {
            const catCss: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[0] as HTMLImageElement)
            if (((getDefaultMargs().leftOffshootMargins[0].marginTop === spudCss.marginTop ||
            getDefaultMargs().leftOffshootMargins[1].marginTop === spudCss.marginTop ||
            getDefaultMargs().leftOffshootMargins[2].marginTop === spudCss.marginTop ||
            getDefaultMargs().leftOffshootMargins[3].marginTop === spudCss.marginTop ||
            getDefaultMargs().leftOffshootMargins[4].marginTop === spudCss.marginTop) &&
            getDefaultMargs().defaultMarginLeft === spudCss.marginLeft) &&
            ((guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().top < getClosenessMarg() &&
            (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().top > -(getClosenessMarg()))) {
              const catMarginLeft: string = catCss.marginLeft 
              const catRemovePx: number = Number(catMarginLeft.match(regex)?.join(''))
              const catNewMarg: number = catRemovePx + getSpudMargin();
              if (bothCount === 1) {
                const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                const cat2MarginLeft: string = cat2Css.marginLeft
                const cat2RemovePx: number = Number(cat2MarginLeft.match(regex)?.join(''))
                const cat2NewMarg: number = cat2RemovePx + getSpudMargin();
                (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                bothCount -= 1
              }
              (guntherOrPharoah()[0] as HTMLImageElement).style.marginLeft = catNewMarg.toString() + "px"
              catCount -= 1            
            } else if (((getDefaultMargs().rightOffshootMargins[0].marginTop === spudCss.marginTop ||
            getDefaultMargs().rightOffshootMargins[1].marginTop === spudCss.marginTop ||
            getDefaultMargs().rightOffshootMargins[2].marginTop === spudCss.marginTop ||
            getDefaultMargs().rightOffshootMargins[3].marginTop === spudCss.marginTop ||
            getDefaultMargs().rightOffshootMargins[4].marginTop === spudCss.marginTop) &&
            getDefaultMargs().defaultMarginLeft === spudCss.marginLeft) &&
            ((guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().top < getClosenessMarg() &&
            (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().top > -(getClosenessMarg()))) {
              const catMarginLeft: string = catCss.marginLeft 
              const catRemovePx: number = Number(catMarginLeft.match(regex)?.join(''))
              const catNewMarg: number = catRemovePx - getSpudMargin();
              if (bothCount === 1) {
                const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                const cat2MarginLeft: string = cat2Css.marginLeft
                const cat2RemovePx: number = Number(cat2MarginLeft.match(regex)?.join(''))
                const cat2NewMarg: number = cat2RemovePx - getSpudMargin();
                (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                bothCount -= 1
              }
              (guntherOrPharoah()[0] as HTMLImageElement).style.marginLeft = catNewMarg.toString() + "px"
              catCount -= 1              
            } else if (spud.getBoundingClientRect().bottom - bottomTile.getBoundingClientRect().bottom < getClosenessMarg() &&
            spud.getBoundingClientRect().bottom - bottomTile.getBoundingClientRect().bottom > -(getClosenessMarg())) {
              const catMarginTop: string = catCss.marginTop
              const catRemovePx: number = Number(catMarginTop.match(regex)?.join(''))
              const catNewMarg: number = catRemovePx + getSpudMargin();
              if (bothCount === 1) {
                const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                const cat2MarginTop: string = cat2Css.marginTop
                const cat2RemovePx: number = Number(cat2MarginTop.match(regex)?.join(''))
                const cat2NewMarg: number = cat2RemovePx + 0;
                (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMarg.toString() + "px"
                bothCount -= 1
              }
              (guntherOrPharoah()[0] as HTMLImageElement).style.marginTop = catNewMarg.toString() + "px"
              catCount -= 1
            } else if ((guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().bottom - spud.getBoundingClientRect().top < getClosenessMarg() &&
            (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().bottom - spud.getBoundingClientRect().top > -(getClosenessMarg())) {
              const catMarginTop: string = catCss.marginTop
              const catRemovePx: number = Number(catMarginTop.match(regex)?.join(''))
              const catNewMarg: number = catRemovePx + getSpudMargin();
              if (bothCount === 1) {
                const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                const cat2MarginTop: string = cat2Css.marginTop
                const cat2MarginLeft: string = cat2Css.marginLeft
                if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top < getClosenessMarg() &&
                (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top > -(getClosenessMarg())) {
                  if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().right - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().left < getClosenessMarg() &&
                  (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().right - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().left > -(getClosenessMarg())) {
                    const cat2RemovePxTop: number = Number(cat2MarginTop.match(regex)?.join(''))
                    const cat2NewMargTop: number = cat2RemovePxTop + (getSpudMargin() * 2)
                    const cat2RemovePxLeft: number = Number(cat2MarginLeft.match(regex)?.join(''))
                    const cat2NewMargLeft: number = cat2RemovePxLeft + getSpudMargin();
                    (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMargTop.toString() + "px";
                    (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMargLeft.toString() + "px"
                    bothCount -= 1
                  } else {
                    const cat2RemovePxTop: number = Number(cat2MarginTop.match(regex)?.join(''))
                    const cat2NewMargTop: number = cat2RemovePxTop + (getSpudMargin() * 2)
                    const cat2RemovePxLeft: number = Number(cat2MarginLeft.match(regex)?.join(''))
                    const cat2NewMargLeft: number = cat2RemovePxLeft - getSpudMargin();
                    (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMargTop.toString() + "px";
                    (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMargLeft.toString() + "px"
                    bothCount -= 1
                  }
                } else {
                  const cat2RemovePx: number = Number(cat2MarginTop.match(regex)?.join(''))
                  const cat2NewMarg: number = cat2RemovePx + (getSpudMargin() * 3);
                  (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMarg.toString() + "px"
                  bothCount -= 1
                }
              }
              (guntherOrPharoah()[0] as HTMLImageElement).style.marginTop = catNewMarg.toString() + "px"
              catCount -= 1
            } else {
              const catMarginTop: string = catCss.marginTop
              const catRemovePx: number = Number(catMarginTop.match(regex)?.join(''))
              const catNewMarg: number = catRemovePx - getSpudMargin();
              if (bothCount === 1) {
                const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                const cat2MarginLeft: string = cat2Css.marginLeft
                const cat2MarginTop: string = cat2Css.marginTop
                if ((spudCss.marginTop !== getDefaultMargs().leftOffshootMargins[0].marginTop &&
                spudCss.marginTop !== getDefaultMargs().leftOffshootMargins[1].marginTop &&
                spudCss.marginTop !== getDefaultMargs().leftOffshootMargins[2].marginTop &&
                spudCss.marginTop !== getDefaultMargs().leftOffshootMargins[3].marginTop &&
                spudCss.marginTop !== getDefaultMargs().leftOffshootMargins[4].marginTop) && 
                ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - spud.getBoundingClientRect().left > getClosenessMarg() ||
                (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - spud.getBoundingClientRect().left < -(getClosenessMarg()))) {
                  if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().right < getClosenessMarg() &&
                  (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().right > -(getClosenessMarg())) {
                    const cat2RemovePx: number = Number(cat2MarginLeft.match(regex)?.join(''))
                    const cat2NewMarg: number = cat2RemovePx - getSpudMargin();
                    (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                    bothCount -= 1
                  } else {
                    const cat2RemovePx: number = Number(cat2MarginLeft.match(regex)?.join(''))
                    const cat2NewMarg: number = cat2RemovePx + getSpudMargin();
                    (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                    bothCount -= 1
                  }
                } else if ((spudCss.marginTop !== getDefaultMargs().rightOffshootMargins[0].marginTop &&
                spudCss.marginTop !== getDefaultMargs().rightOffshootMargins[1].marginTop &&
                spudCss.marginTop !== getDefaultMargs().rightOffshootMargins[2].marginTop &&
                spudCss.marginTop !== getDefaultMargs().rightOffshootMargins[3].marginTop &&
                spudCss.marginTop !== getDefaultMargs().rightOffshootMargins[4].marginTop) && 
                ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - spud.getBoundingClientRect().left > getClosenessMarg() ||
                (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - spud.getBoundingClientRect().left < -(getClosenessMarg()))) {
                  const cat2RemovePx: number = Number(cat2MarginLeft.match(regex)?.join(''))
                  const cat2NewMarg: number = cat2RemovePx - getSpudMargin();
                  (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                  bothCount -= 1
                } else if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().bottom - spud.getBoundingClientRect().top < getClosenessMarg() &&
                (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().bottom - spud.getBoundingClientRect().top > -(getClosenessMarg())) {
                  const cat2RemovePx: number = Number(cat2MarginTop.match(regex)?.join(''))
                  const cat2NewMarg: number = cat2RemovePx + (getSpudMargin() * 2);
                  (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMarg.toString() + "px"
                  bothCount -= 1                  
                } else {
                  const cat2RemovePx: number = Number(cat2MarginTop.match(regex)?.join(''))
                  const cat2NewMarg: number = cat2RemovePx - getSpudMargin();
                  (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMarg.toString() + "px"
                  bothCount -= 1
                }
              } 
              (guntherOrPharoah()[0] as HTMLImageElement).style.marginTop = catNewMarg.toString() + "px"
              catCount -= 1
            }
          }
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
        const topTile: HTMLDivElement = document.getElementById("top-tile") as HTMLDivElement
        let count = 0
        if (spud.getBoundingClientRect().bottom - mainHallwayDivs[i].getBoundingClientRect().top > -(getClosenessMarg()) && spud.getBoundingClientRect().bottom - mainHallwayDivs[i].getBoundingClientRect().top < 0 && spudCss.marginLeft === getDefaultMargs().defaultMarginLeft) {
          count += 1
          if (document.getElementById("gunther-image-follow") && !document.getElementById("pharoah-image-follow") ||
          document.getElementById("pharoah-image-follow") && !document.getElementById("gunther-image-follow")) {
            catCount += 1
          }
          if (document.getElementById("gunther-image-follow") && document.getElementById("pharoah-image-follow")) {
            catCount += 1
            bothCount += 1
          }
          if (count === 1) {
          const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
          const spudCss: CSSStyleDeclaration = getComputedStyle(spud)
          const marginTop: string = spudCss.marginTop
          const removePx: number = Number(marginTop.match(regex)?.join(''))
          const newMarg: number = removePx + getSpudMargin();
          if (catCount === 1) {
            const catCss: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[0] as HTMLImageElement)
            if (((getDefaultMargs().leftOffshootMargins[0].marginTop === spudCss.marginTop ||
            getDefaultMargs().leftOffshootMargins[1].marginTop === spudCss.marginTop ||
            getDefaultMargs().leftOffshootMargins[2].marginTop === spudCss.marginTop ||
            getDefaultMargs().leftOffshootMargins[3].marginTop === spudCss.marginTop ||
            getDefaultMargs().leftOffshootMargins[4].marginTop === spudCss.marginTop) &&
            getDefaultMargs().defaultMarginLeft === spudCss.marginLeft) &&
            ((guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().top < getClosenessMarg() &&
            (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().top > -(getClosenessMarg()))) {
              const catMarginLeft: string = catCss.marginLeft 
              const catRemovePx: number = Number(catMarginLeft.match(regex)?.join(''))
              const catNewMarg: number = catRemovePx + getSpudMargin();
              if (bothCount === 1) {
                const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                const cat2MarginLeft: string = cat2Css.marginLeft
                const cat2RemovePx: number = Number(cat2MarginLeft.match(regex)?.join(''))
                const cat2NewMarg: number = cat2RemovePx + getSpudMargin();
                (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                bothCount -= 1
              }
              (guntherOrPharoah()[0] as HTMLImageElement).style.marginLeft = catNewMarg.toString() + "px"
              catCount -= 1            
            } else if (((getDefaultMargs().rightOffshootMargins[0].marginTop === spudCss.marginTop ||
            getDefaultMargs().rightOffshootMargins[1].marginTop === spudCss.marginTop ||
            getDefaultMargs().rightOffshootMargins[2].marginTop === spudCss.marginTop ||
            getDefaultMargs().rightOffshootMargins[3].marginTop === spudCss.marginTop ||
            getDefaultMargs().rightOffshootMargins[4].marginTop === spudCss.marginTop) &&
            getDefaultMargs().defaultMarginLeft === spudCss.marginLeft) &&
            ((guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().top < getClosenessMarg() &&
            (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().top > -(getClosenessMarg()))) {
              const catMarginLeft: string = catCss.marginLeft 
              const catRemovePx: number = Number(catMarginLeft.match(regex)?.join(''))
              const catNewMarg: number = catRemovePx - getSpudMargin();
              if (bothCount === 1) {
                const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                const cat2MarginLeft: string = cat2Css.marginLeft
                const cat2RemovePx: number = Number(cat2MarginLeft.match(regex)?.join(''))
                const cat2NewMarg: number = cat2RemovePx - getSpudMargin();
                (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                bothCount -= 1
              }
              (guntherOrPharoah()[0] as HTMLImageElement).style.marginLeft = catNewMarg.toString() + "px"
              catCount -= 1              
            } else if (spud.getBoundingClientRect().top - topTile.getBoundingClientRect().top < getClosenessMarg() &&
            spud.getBoundingClientRect().bottom - topTile.getBoundingClientRect().top > -(getClosenessMarg())) {
              const catMarginTop: string = catCss.marginTop
              const catRemovePx: number = Number(catMarginTop.match(regex)?.join(''))
              const catNewMarg: number = catRemovePx - getSpudMargin();
              if (bothCount === 1) {
                const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                const cat2MarginTop: string = cat2Css.marginTop
                const cat2RemovePx: number = Number(cat2MarginTop.match(regex)?.join(''))
                const cat2NewMarg: number = cat2RemovePx + 0;
                (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMarg.toString() + "px"
                bothCount -= 1
              }
              (guntherOrPharoah()[0] as HTMLImageElement).style.marginTop = catNewMarg.toString() + "px"
              catCount -= 1
            } else if ((guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().bottom < getClosenessMarg() &&
            (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().bottom > -(getClosenessMarg())) {
              const catMarginTop: string = catCss.marginTop
              const catRemovePx: number = Number(catMarginTop.match(regex)?.join(''))
              const catNewMarg: number = catRemovePx - getSpudMargin();
              if (bothCount === 1) {
                const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                const cat2MarginTop: string = cat2Css.marginTop
                const cat2MarginLeft: string = cat2Css.marginLeft
                if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top < getClosenessMarg() &&
                (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top > -(getClosenessMarg())) {
                  if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().right - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().left < getClosenessMarg() &&
                  (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().right - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().left > -(getClosenessMarg())) {
                      const cat2RemovePxTop: number = Number(cat2MarginTop.match(regex)?.join(''))
                      const cat2NewMargTop: number = cat2RemovePxTop - (getSpudMargin() * 2)
                      const cat2RemovePxLeft: number = Number(cat2MarginLeft.match(regex)?.join(''))
                      const cat2NewMargLeft: number = cat2RemovePxLeft + getSpudMargin();
                      (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMargTop.toString() + "px";
                      (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMargLeft.toString() + "px"
                      bothCount -= 1                      
                  } else {
                    const cat2RemovePxTop: number = Number(cat2MarginTop.match(regex)?.join(''))
                    const cat2NewMargTop: number = cat2RemovePxTop - (getSpudMargin() * 2)
                    const cat2RemovePxLeft: number = Number(cat2MarginLeft.match(regex)?.join(''))
                    const cat2NewMargLeft: number = cat2RemovePxLeft - getSpudMargin();
                    (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMargTop.toString() + "px";
                    (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMargLeft.toString() + "px"
                    bothCount -= 1
                  }
                } else {
                    const cat2RemovePx: number = Number(cat2MarginTop.match(regex)?.join(''))
                    const cat2NewMarg: number = cat2RemovePx - (getSpudMargin() * 3);
                    (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMarg.toString() + "px"
                    bothCount -= 1
                }
              }
              (guntherOrPharoah()[0] as HTMLImageElement).style.marginTop = catNewMarg.toString() + "px"
              catCount -= 1
            } else {
              const catMarginTop: string = catCss.marginTop
              const catRemovePx: number = Number(catMarginTop.match(regex)?.join(''))
              const catNewMarg: number = catRemovePx + getSpudMargin();
              if (bothCount === 1) {
                const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                const cat2MarginLeft: string = cat2Css.marginLeft
                const cat2MarginTop: string = cat2Css.marginTop
                if ((spudCss.marginTop !== getDefaultMargs().leftOffshootMargins[0].marginTop &&
                spudCss.marginTop !== getDefaultMargs().leftOffshootMargins[1].marginTop &&
                spudCss.marginTop !== getDefaultMargs().leftOffshootMargins[2].marginTop &&
                spudCss.marginTop !== getDefaultMargs().leftOffshootMargins[3].marginTop &&
                spudCss.marginTop !== getDefaultMargs().leftOffshootMargins[4].marginTop) && 
                ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - spud.getBoundingClientRect().left > getClosenessMarg() ||
                (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - spud.getBoundingClientRect().left < -(getClosenessMarg()))) {
                  if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().right < getClosenessMarg() &&
                  (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().right > -(getClosenessMarg())) {
                    if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().top < getClosenessMarg() &&
                    (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().top > -(getClosenessMarg())) {
                      const cat2RemovePxTop: number = Number(cat2MarginTop.match(regex)?.join(''))
                      const cat2RemovePxLeft: number = Number(cat2MarginLeft.match(regex)?.join(''))
                      const cat2NewMargTop: number = cat2RemovePxTop - getSpudMargin()
                      const cat2NewMargLeft: number = cat2RemovePxLeft - getSpudMargin();
                      (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMargTop.toString() + "px";
                      (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMargLeft.toString() + "px"
                      bothCount -= 1
                    } else {
                      const cat2RemovePx: number = Number(cat2MarginLeft.match(regex)?.join(''))
                      const cat2NewMarg: number = cat2RemovePx - getSpudMargin();
                      (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                      bothCount -= 1
                    }
                  } else {
                    const cat2RemovePx: number = Number(cat2MarginLeft.match(regex)?.join(''))
                    const cat2NewMarg: number = cat2RemovePx + getSpudMargin();
                    (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                    bothCount -= 1
                  }
                } else if ((spudCss.marginTop !== getDefaultMargs().rightOffshootMargins[0].marginTop &&
                spudCss.marginTop !== getDefaultMargs().rightOffshootMargins[1].marginTop &&
                spudCss.marginTop !== getDefaultMargs().rightOffshootMargins[2].marginTop &&
                spudCss.marginTop !== getDefaultMargs().rightOffshootMargins[3].marginTop &&
                spudCss.marginTop !== getDefaultMargs().rightOffshootMargins[4].marginTop) && 
                ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - spud.getBoundingClientRect().left > getClosenessMarg() ||
                (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - spud.getBoundingClientRect().left < -(getClosenessMarg()))) {
                  const cat2RemovePx: number = Number(cat2MarginLeft.match(regex)?.join(''))
                  const cat2NewMarg: number = cat2RemovePx - getSpudMargin();
                  (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                  bothCount -= 1
                } else if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().bottom < getClosenessMarg() &&
                (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().bottom > -(getClosenessMarg())) {
                  const cat2RemovePx: number = Number(cat2MarginTop.match(regex)?.join(''))
                  const cat2NewMarg: number = cat2RemovePx - (getSpudMargin() * 2);
                  (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMarg.toString() + "px"
                  bothCount -= 1                  
                } else {
                  const cat2RemovePx: number = Number(cat2MarginTop.match(regex)?.join(''))
                  const cat2NewMarg: number = cat2RemovePx + getSpudMargin();
                  (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMarg.toString() + "px"
                  bothCount -= 1
                }
              } 
              (guntherOrPharoah()[0] as HTMLImageElement).style.marginTop = catNewMarg.toString() + "px"
              catCount -= 1
            }            
          }
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
          const spudCss: CSSStyleDeclaration = getComputedStyle(spud)        
          if (spud.getBoundingClientRect().left - offshootLeftDivs[i].getBoundingClientRect().right < getClosenessMarg() 
          && spud.getBoundingClientRect().left - offshootLeftDivs[i].getBoundingClientRect().right > 0 
          && spud.getBoundingClientRect().top - offshootLeftDivs[i].getBoundingClientRect().top < getClosenessMarg() 
          && spud.getBoundingClientRect().top - offshootLeftDivs[i].getBoundingClientRect().top > 0
          ) {
          leftCount += 1
          if (document.getElementById("gunther-image-follow") && !document.getElementById("pharoah-image-follow") ||
          document.getElementById("pharoah-image-follow") && !document.getElementById("gunther-image-follow")) {
            catCount += 1
          }
          if (document.getElementById("gunther-image-follow") && document.getElementById("pharoah-image-follow")) {
            catCount += 1
            bothCount += 1
          }
              if (leftCount === 1) {
                  const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
                  const spudCss: CSSStyleDeclaration = getComputedStyle(spud)
                  const marginLeft: string = spudCss.marginLeft
                  const removePx: number = Number(marginLeft.match(regex)?.join(''))
                  const newMarg: number = removePx - getSpudMargin();
                  if (catCount === 1) {
                    const catCss: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[0] as HTMLImageElement)
                    const catMarginTop: string = catCss.marginTop 
                    const catMarginLeft: string = catCss.marginLeft
                    if ((guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().bottom - spud.getBoundingClientRect().top < getClosenessMarg() &&
                    (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().bottom - spud.getBoundingClientRect().top > -(getClosenessMarg())) {
                      const catRemovePx: number = Number(catMarginTop.match(regex)?.join(''))
                      const catNewMarg: number = catRemovePx + getSpudMargin();
                      if (bothCount === 1) {
                        const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                        const cat2MarginTop: string = cat2Css.marginTop
                        const cat2RemovePx: number = Number(cat2MarginTop.match(regex)?.join(''))
                        const cat2NewMarg: number = cat2RemovePx + getSpudMargin();
                        (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMarg.toString() + "px"
                      }
                      (guntherOrPharoah()[0] as HTMLImageElement).style.marginTop = catNewMarg.toString() + "px"          
                    } else if ((guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().bottom < getClosenessMarg() &&
                    (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().bottom > -(getClosenessMarg())) {
                      const catRemovePx: number = Number(catMarginTop.match(regex)?.join(''))
                      const catNewMarg: number = catRemovePx - getSpudMargin();
                      if (bothCount === 1) {
                        const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                        const cat2MarginTop: string = cat2Css.marginTop
                        const cat2RemovePx: number = Number(cat2MarginTop.match(regex)?.join(''))
                        const cat2NewMarg: number = cat2RemovePx - getSpudMargin();
                        (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMarg.toString() + "px"
                      }
                      (guntherOrPharoah()[0] as HTMLImageElement).style.marginTop = catNewMarg.toString() + "px" 
                    } else if ((guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().top < getClosenessMarg() &&
                    (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().top > -(getClosenessMarg())) {
                      const catRemovePx: number = Number(catMarginLeft.match(regex)?.join(''))
                      const catNewMarg: number = catRemovePx + getSpudMargin();
                      if (bothCount === 1) {
                        const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                        const cat2MarginTop: string = cat2Css.marginTop
                        const cat2MarginLeft: string = cat2Css.marginLeft
                        const cat2RemovePxTop: number = Number(cat2MarginTop.match(regex)?.join(''))
                        const cat2RemovePxLeft: number = Number(cat2MarginLeft.match(regex)?.join(''))
                        const cat2NewMargLeft: number = cat2RemovePxLeft + (getSpudMargin() * 2);
                        const cat2NewMargTop: number = cat2RemovePxTop - getSpudMargin();
                        (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMargTop.toString() + "px";
                        (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMargLeft.toString() + "px";
                      }
                      (guntherOrPharoah()[0] as HTMLImageElement).style.marginLeft = catNewMarg.toString() + "px" 
                    }
                  }
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
            if (document.getElementById("gunther-image-follow") && !document.getElementById("pharoah-image-follow") ||
            document.getElementById("pharoah-image-follow") && !document.getElementById("gunther-image-follow")) {
              catCount += 1
            }
            if (document.getElementById("gunther-image-follow") && document.getElementById("pharoah-image-follow")) {
              catCount += 1
              bothCount += 1
            } 
            if (leftCount === 1) {
              const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
              const spudCss: CSSStyleDeclaration = getComputedStyle(spud)
              const marginLeft: string = spudCss.marginLeft
              const removePx: number = Number(marginLeft.match(regex)?.join(''))
              const newMarg: number = removePx - getSpudMargin();
              if (catCount === 1) {
                const catCss: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[0] as HTMLImageElement)
                const catMarginTop: string = catCss.marginTop   
                const catMarginLeft: string = catCss.marginLeft
                if (spudCss.marginLeft === getDefaultMargs().defaultMarginLeft &&
                ((guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().bottom < getClosenessMarg() &&
                (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().bottom > -(getClosenessMarg()))) {
                  const catRemovePx: number = Number(catMarginTop.match(regex)?.join(''))
                  const catNewMarg: number = catRemovePx - getSpudMargin();
                  if (bothCount === 1) {
                    const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                    const cat2MarginTop: string = cat2Css.marginTop
                    const cat2MarginLeft: string = cat2Css.marginLeft
                    if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - spud.getBoundingClientRect().left > getClosenessMarg() ||
                    (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - spud.getBoundingClientRect().left < -(getClosenessMarg())) {
                      const cat2RemovePx: number = Number(cat2MarginLeft.match(regex)?.join(''))
                      const cat2NewMarg: number = cat2RemovePx - getSpudMargin();
                      (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                    } else {
                      const cat2RemovePx: number = Number(cat2MarginTop.match(regex)?.join(''))
                      const cat2NewMarg: number = cat2RemovePx - getSpudMargin();
                      (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMarg.toString() + "px"
                    }
                  }
                  (guntherOrPharoah()[0] as HTMLImageElement).style.marginTop = catNewMarg.toString() + "px" 
                } else if (spudCss.marginLeft === getDefaultMargs().defaultMarginLeft &&
                ((guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().bottom - spud.getBoundingClientRect().top < getClosenessMarg() &&
                (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().bottom - spud.getBoundingClientRect().top > -(getClosenessMarg()))) {
                  const catRemovePx: number = Number(catMarginTop.match(regex)?.join(''))
                  const catNewMarg: number = catRemovePx + getSpudMargin();
                  if (bothCount === 1) {
                    const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                    const cat2MarginTop: string = cat2Css.marginTop
                    const cat2MarginLeft: string = cat2Css.marginLeft
                    if (!((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().left < getClosenessMarg() &&
                    (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().left > -(getClosenessMarg()))) {
                      const cat2RemovePx: number = Number(cat2MarginLeft.match(regex)?.join(''))
                      const cat2NewMarg: number = cat2RemovePx - getSpudMargin();
                      (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                    } else {
                      const cat2RemovePx: number = Number(cat2MarginTop.match(regex)?.join(''))
                      const cat2NewMarg: number = cat2RemovePx + getSpudMargin();
                      (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMarg.toString() + "px"
                    }
                  }
                  (guntherOrPharoah()[0] as HTMLImageElement).style.marginTop = catNewMarg.toString() + "px" 
                } else if ((guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().right - spud.getBoundingClientRect().left < getClosenessMarg() &&
                (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().right - spud.getBoundingClientRect().left > -(getClosenessMarg())) {
                  const catRemovePx: number = Number(catMarginLeft.match(regex)?.join(''))
                  const catNewMarg: number = catRemovePx + getSpudMargin();
                  if (bothCount === 1) {
                    if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().right - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().left < getClosenessMarg() &&
                    (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().right - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().left > -(getClosenessMarg())) {
                      const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                      const cat2MarginLeft: string = cat2Css.marginLeft
                      const cat2MarginTop: string = cat2Css.marginTop
                      if (spudCss.marginLeft === getDefaultMargs().defaultMarginLeft) {
                        const cat2RemovePxLeft: number = Number(cat2MarginLeft.match(regex)?.join(''))
                        const cat2RemovePxTop: number = Number(cat2MarginTop.match(regex)?.join(''))
                        const cat2NewMargLeft: number = cat2RemovePxLeft + (getSpudMargin() * 2);
                        const cat2NewMargTop: number = cat2RemovePxTop - getSpudMargin();
                        (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMargLeft.toString() + "px";
                        (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMargTop.toString() + "px"
                      } else {
                        const cat2RemovePx: number = Number(cat2MarginLeft.match(regex)?.join(''))
                        const cat2NewMarg: number = cat2RemovePx + (getSpudMargin() * 3);
                        (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                      }
                    }
                  }
                  (guntherOrPharoah()[0] as HTMLImageElement).style.marginLeft = catNewMarg.toString() + "px" 
                } else {
                  const catRemovePx: number = Number(catMarginLeft.match(regex)?.join(''))
                  const catNewMarg: number = catRemovePx - getSpudMargin();
                  if (bothCount === 1) {
                    const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                    const cat2MarginTop: string = cat2Css.marginTop
                    const cat2MarginLeft: string = cat2Css.marginLeft
                    if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().bottom < getClosenessMarg() &&
                    (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().bottom > -(getClosenessMarg())) {
                      const cat2RemovePx: number = Number(cat2MarginTop.match(regex)?.join(''))
                      const cat2NewMarg: number = cat2RemovePx - getSpudMargin();
                      (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMarg.toString() + "px"
                    } else if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().bottom - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top < getClosenessMarg() &&
                    (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().bottom - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top > -(getClosenessMarg())) {
                      const cat2RemovePx: number = Number(cat2MarginTop.match(regex)?.join(''))
                      const cat2NewMarg: number = cat2RemovePx + getSpudMargin();
                      (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMarg.toString() + "px"
                    } else if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().right < getClosenessMarg() &&
                    (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().right > -(getClosenessMarg())) {
                      const cat2RemovePx: number = Number(cat2MarginLeft.match(regex)?.join(''))
                      const cat2NewMarg: number = cat2RemovePx - getSpudMargin();
                      (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                    }
                  }
                  (guntherOrPharoah()[0] as HTMLImageElement).style.marginLeft = catNewMarg.toString() + "px" 
                }             
              }
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
            if (document.getElementById("gunther-image-follow") && !document.getElementById("pharoah-image-follow") ||
            document.getElementById("pharoah-image-follow") && !document.getElementById("gunther-image-follow")) {
              catCount += 1
            }
            if (document.getElementById("gunther-image-follow") && document.getElementById("pharoah-image-follow")) {
              catCount += 1
              bothCount += 1
            }
            if (leftCount === 1) {
              const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
              const spudCss: CSSStyleDeclaration = getComputedStyle(spud)
              const marginLeft: string = spudCss.marginLeft
              const removePx: number = Number(marginLeft.match(regex)?.join(''))
              const newMarg: number = removePx - getSpudMargin();
              if (catCount === 1) {
                const catCss: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[0] as HTMLImageElement)
                const catMarginLeft: string = catCss.marginLeft    
                const catRemovePx: number = Number(catMarginLeft.match(regex)?.join(''))
                if (spudCss.marginTop === getDefaultMargs().rightOffshootMargins[0].marginTop &&
                spudCss.marginLeft === getDefaultMargs().rightOffshootMargins[0].marginLeft ||
                spudCss.marginTop === getDefaultMargs().rightOffshootMargins[1].marginTop &&
                spudCss.marginLeft === getDefaultMargs().rightOffshootMargins[1].marginLeft ||
                spudCss.marginTop === getDefaultMargs().rightOffshootMargins[2].marginTop &&
                spudCss.marginLeft === getDefaultMargs().rightOffshootMargins[2].marginLeft ||
                spudCss.marginTop === getDefaultMargs().rightOffshootMargins[3].marginTop &&
                spudCss.marginLeft === getDefaultMargs().rightOffshootMargins[3].marginLeft ||
                spudCss.marginTop === getDefaultMargs().rightOffshootMargins[4].marginTop &&
                spudCss.marginLeft === getDefaultMargs().rightOffshootMargins[4].marginLeft) {
                  const catNewMarg: number = catRemovePx + getSpudMargin();
                  (guntherOrPharoah()[0] as HTMLImageElement).style.marginLeft = catNewMarg.toString() + "px" 
                } else if ((guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().right - spud.getBoundingClientRect().left < getClosenessMarg() &&
                (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().right - spud.getBoundingClientRect().left > -(getClosenessMarg())) {
                  const catNewMarg: number = catRemovePx + getSpudMargin();
                  if (bothCount === 1) {
                    const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                    const cat2MarginLeft: string = cat2Css.marginLeft
                    const cat2MarginTop: string = cat2Css.marginTop
                    if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().top > getClosenessMarg() ||
                    (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().top < -(getClosenessMarg())) {
                      if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().bottom < getClosenessMarg() &&
                      (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().bottom > -(getClosenessMarg())) {
                        const cat2RemovePxLeft: number = Number(cat2MarginLeft.match(regex)?.join(''))
                        const cat2RemovePxTop: number = Number(cat2MarginTop.match(regex)?.join(''))
                        const cat2NewMargLeft: number = cat2RemovePxLeft + (getSpudMargin() * 3)
                        const cat2NewMargTop: number = cat2RemovePxTop - getSpudMargin();
                        (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMargLeft.toString() + "px";
                        (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMargTop.toString() + "px"
                      } else {
                        const cat2RemovePxLeft: number = Number(cat2MarginLeft.match(regex)?.join(''))
                        const cat2RemovePxTop: number = Number(cat2MarginTop.match(regex)?.join(''))
                        const cat2NewMargLeft: number = cat2RemovePxLeft + (getSpudMargin() * 3)
                        const cat2NewMargTop: number = cat2RemovePxTop + getSpudMargin();
                        (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMargLeft.toString() + "px";
                        (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMargTop.toString() + "px"
                      }
                    } else {
                      const cat2RemovePx: number = Number(cat2MarginLeft.match(regex)?.join(''))
                      const cat2NewMarg: number = cat2RemovePx + (getSpudMargin() * 4);
                      (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                    }
                  }
                  (guntherOrPharoah()[0] as HTMLImageElement).style.marginLeft = catNewMarg.toString() + "px" 
                } else {
                  const catNewMarg: number = catRemovePx - getSpudMargin();
                  (guntherOrPharoah()[0] as HTMLImageElement).style.marginLeft = catNewMarg.toString() + "px" 
                }      
              }
              if (bothCount === 1) {
                const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                const cat2MarginLeft: string = cat2Css.marginLeft
                const cat2RemovePx: number = Number(cat2MarginLeft.match(regex)?.join(''))
                if (spudCss.marginTop === getDefaultMargs().rightOffshootMargins[0].marginTop &&
                spudCss.marginLeft === getDefaultMargs().rightOffshootMargins[0].marginLeft ||
                spudCss.marginTop === getDefaultMargs().rightOffshootMargins[1].marginTop &&
                spudCss.marginLeft === getDefaultMargs().rightOffshootMargins[1].marginLeft ||
                spudCss.marginTop === getDefaultMargs().rightOffshootMargins[2].marginTop &&
                spudCss.marginLeft === getDefaultMargs().rightOffshootMargins[2].marginLeft ||
                spudCss.marginTop === getDefaultMargs().rightOffshootMargins[3].marginTop &&
                spudCss.marginLeft === getDefaultMargs().rightOffshootMargins[3].marginLeft ||
                spudCss.marginTop === getDefaultMargs().rightOffshootMargins[4].marginTop &&
                spudCss.marginLeft === getDefaultMargs().rightOffshootMargins[4].marginLeft) {
                  const cat2NewMarg = cat2RemovePx + 0;
                  (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                } else if (((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().right - spud.getBoundingClientRect().left < getClosenessMarg() &&
                (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().right - spud.getBoundingClientRect().left > -(getClosenessMarg())) &&
                ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().top < getClosenessMarg() &&
                (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().top > -(getClosenessMarg()))) {
                  const cat2NewMarg = cat2RemovePx + (getSpudMargin() * 2);
                  (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                } else {
                  const cat2NewMarg = cat2RemovePx - getSpudMargin();
                  (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                }
              }
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
          if (spud.getBoundingClientRect().left - offshootRightDivs[i].getBoundingClientRect().right > -(getClosenessMarg()) 
          && spud.getBoundingClientRect().left - offshootRightDivs[i].getBoundingClientRect().right < 0 
          && spud.getBoundingClientRect().top - offshootRightDivs[i].getBoundingClientRect().top < getClosenessMarg() 
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
            if (document.getElementById("gunther-image-follow") && !document.getElementById("pharoah-image-follow") ||
            document.getElementById("pharoah-image-follow") && !document.getElementById("gunther-image-follow")) {
              catCount += 1
            } 
            if (document.getElementById("gunther-image-follow") && document.getElementById("pharoah-image-follow")) {
              catCount += 1
              bothCount += 1
            }           
            if (leftCount === 1) {
              const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
              const spudCss: CSSStyleDeclaration = getComputedStyle(spud)
              const marginLeft: string = spudCss.marginLeft
              const removePx: number = Number(marginLeft.match(regex)?.join(''))
              const newMarg: number = removePx + getSpudMargin();
              if (catCount === 1) {
                const catCss: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[0] as HTMLImageElement)
                const catMarginTop: string = catCss.marginTop   
                const catMarginLeft: string = catCss.marginLeft
                if (spudCss.marginLeft === getDefaultMargs().defaultMarginLeft &&
                ((guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().bottom < getClosenessMarg() &&
                (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().bottom > -(getClosenessMarg()))) {
                  const catRemovePx: number = Number(catMarginTop.match(regex)?.join(''))
                  const catNewMarg: number = catRemovePx - getSpudMargin();
                  if (bothCount === 1) {
                    const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                    const cat2MarginTop: string = cat2Css.marginTop
                    const cat2RemovePx: number = Number(cat2MarginTop.match(regex)?.join(''))
                    const cat2NewMarg: number = cat2RemovePx - getSpudMargin();
                    (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMarg.toString() + "px"
                  }
                  (guntherOrPharoah()[0] as HTMLImageElement).style.marginTop = catNewMarg.toString() + "px" 
                } else if (spudCss.marginLeft === getDefaultMargs().defaultMarginLeft &&
                ((guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().bottom - spud.getBoundingClientRect().top < getClosenessMarg() &&
                (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().bottom - spud.getBoundingClientRect().top > -(getClosenessMarg()))) {
                  const catRemovePx: number = Number(catMarginTop.match(regex)?.join(''))
                  const catNewMarg: number = catRemovePx + getSpudMargin();
                  if (bothCount === 1) {
                    const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                    const cat2MarginTop: string = cat2Css.marginTop
                    const cat2MarginLeft: string = cat2Css.marginLeft
                    if (!((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().left < getClosenessMarg() &&
                    (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().left > -(getClosenessMarg()))) {
                      if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().top < getClosenessMarg() &&
                      (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().top < getClosenessMarg()) {
                        const cat2RemovePxTop: number = Number(cat2MarginTop.match(regex)?.join(''))
                        const cat2RemovePxLeft: number = Number(cat2MarginLeft.match(regex)?.join(''))
                        const cat2NewMargTop: number = cat2RemovePxTop + getSpudMargin();
                        const cat2NewMargLeft: number = cat2RemovePxLeft - getSpudMargin();
                        (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMargTop.toString() + "px";
                        (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMargLeft.toString() + "px"
                      } else {
                        const cat2RemovePx: number = Number(cat2MarginLeft.match(regex)?.join(''))
                        const cat2NewMarg: number = cat2RemovePx + getSpudMargin();
                        (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                      }
                    } else if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().bottom < getClosenessMarg() &&
                    (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().bottom > -(getClosenessMarg())) {
                      const cat2RemovePx: number = Number(cat2MarginTop.match(regex)?.join(''))
                      const cat2NewMarg: number = cat2RemovePx - (getSpudMargin() * 2);
                      (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMarg.toString() + "px"
                    } else {
                        const cat2RemovePx: number = Number(cat2MarginTop.match(regex)?.join(''))
                        const cat2NewMarg: number = cat2RemovePx + getSpudMargin();
                        (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMarg.toString() + "px"
                    }
                  }
                  (guntherOrPharoah()[0] as HTMLImageElement).style.marginTop = catNewMarg.toString() + "px" 
                } else if ((guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().left - spud.getBoundingClientRect().right < getClosenessMarg() &&
                (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().left - spud.getBoundingClientRect().right > -(getClosenessMarg())) {
                  const catRemovePx: number = Number(catMarginLeft.match(regex)?.join(''))
                  const catNewMarg: number = catRemovePx - getSpudMargin();
                  if (bothCount === 1) {
                    if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().right < getClosenessMarg() &&
                    (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().right > -(getClosenessMarg())) {
                      const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                      const cat2MarginLeft: string = cat2Css.marginLeft
                      const cat2MarginTop: string = cat2Css.marginTop
                      if (spudCss.marginLeft === getDefaultMargs().defaultMarginLeft) {
                        const cat2RemovePxLeft: number = Number(cat2MarginLeft.match(regex)?.join(''))
                        const cat2RemovePxTop: number = Number(cat2MarginTop.match(regex)?.join(''))
                        const cat2NewMargLeft: number = cat2RemovePxLeft - (getSpudMargin() * 2);
                        const cat2NewMargTop: number = cat2RemovePxTop - getSpudMargin();
                        (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMargLeft.toString() + "px";
                        (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMargTop.toString() + "px"
                      } else {
                        const cat2RemovePx: number = Number(cat2MarginLeft.match(regex)?.join(''))
                        const cat2NewMarg: number = cat2RemovePx - (getSpudMargin() * 3);
                        (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                      }
                    }
                  }
                  (guntherOrPharoah()[0] as HTMLImageElement).style.marginLeft = catNewMarg.toString() + "px" 
                } else {
                  const catRemovePx: number = Number(catMarginLeft.match(regex)?.join(''))
                  const catNewMarg: number = catRemovePx + getSpudMargin();
                  if (bothCount === 1) {
                    const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                    const cat2MarginTop: string = cat2Css.marginTop
                    const cat2MarginLeft: string = cat2Css.marginLeft
                    if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().bottom < getClosenessMarg() &&
                    (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().bottom > -(getClosenessMarg())) {
                      const cat2RemovePx: number = Number(cat2MarginTop.match(regex)?.join(''))
                      const cat2NewMarg: number = cat2RemovePx - getSpudMargin();
                      (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMarg.toString() + "px"
                    } else if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().bottom - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top < getClosenessMarg() &&
                    (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().bottom - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().top > -(getClosenessMarg())) {
                      const cat2RemovePx: number = Number(cat2MarginTop.match(regex)?.join(''))
                      const cat2NewMarg: number = cat2RemovePx + getSpudMargin();
                      (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMarg.toString() + "px"
                    } else if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().right - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().left < getClosenessMarg() &&
                    (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().right - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().left > -(getClosenessMarg())) {
                      const cat2RemovePx: number = Number(cat2MarginLeft.match(regex)?.join(''))
                      const cat2NewMarg: number = cat2RemovePx + getSpudMargin();
                      (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                    }
                  }
                  (guntherOrPharoah()[0] as HTMLImageElement).style.marginLeft = catNewMarg.toString() + "px" 
                }             
              }
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
            if (document.getElementById("gunther-image-follow") && !document.getElementById("pharoah-image-follow") ||
            document.getElementById("pharoah-image-follow") && !document.getElementById("gunther-image-follow")) {
              catCount += 1
            }
            if (document.getElementById("gunther-image-follow") && document.getElementById("pharoah-image-follow")) {
              catCount += 1
              bothCount += 1
            }
            if (leftCount === 1) {
              const spud: HTMLImageElement = document.getElementById("spud") as HTMLImageElement
              const spudCss: CSSStyleDeclaration = getComputedStyle(spud)
              const marginLeft: string = spudCss.marginLeft
              const removePx: number = Number(marginLeft.match(regex)?.join(''))
              const newMarg: number = removePx + getSpudMargin()
              if (catCount === 1) {
                const catCss: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[0] as HTMLImageElement)
                const catMarginLeft: string = catCss.marginLeft    
                const catRemovePx: number = Number(catMarginLeft.match(regex)?.join(''))
                if (spudCss.marginTop === getDefaultMargs().leftOffshootMargins[0].marginTop &&
                spudCss.marginLeft === getDefaultMargs().leftOffshootMargins[0].marginLeft ||
                spudCss.marginTop === getDefaultMargs().leftOffshootMargins[1].marginTop &&
                spudCss.marginLeft === getDefaultMargs().leftOffshootMargins[1].marginLeft ||
                spudCss.marginTop === getDefaultMargs().leftOffshootMargins[2].marginTop &&
                spudCss.marginLeft === getDefaultMargs().leftOffshootMargins[2].marginLeft ||
                spudCss.marginTop === getDefaultMargs().leftOffshootMargins[3].marginTop &&
                spudCss.marginLeft === getDefaultMargs().leftOffshootMargins[3].marginLeft ||
                spudCss.marginTop === getDefaultMargs().leftOffshootMargins[4].marginTop &&
                spudCss.marginLeft === getDefaultMargs().leftOffshootMargins[4].marginLeft) {
                  const catNewMarg: number = catRemovePx - getSpudMargin();
                  (guntherOrPharoah()[0] as HTMLImageElement).style.marginLeft = catNewMarg.toString() + "px" 
                } else if ((guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().left - spud.getBoundingClientRect().right < getClosenessMarg() &&
                (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().left - spud.getBoundingClientRect().right > -(getClosenessMarg())) {
                  const catNewMarg: number = catRemovePx - getSpudMargin();
                  if (bothCount === 1) {
                    const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                    const cat2MarginLeft: string = cat2Css.marginLeft
                    const cat2MarginTop: string = cat2Css.marginTop
                    if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().top > getClosenessMarg() ||
                    (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().top < -(getClosenessMarg())) {
                      if ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().bottom < getClosenessMarg() &&
                      (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - (guntherOrPharoah()[0] as HTMLImageElement).getBoundingClientRect().bottom > -(getClosenessMarg())) {
                        const cat2RemovePxLeft: number = Number(cat2MarginLeft.match(regex)?.join(''))
                        const cat2RemovePxTop: number = Number(cat2MarginTop.match(regex)?.join(''))
                        const cat2NewMargLeft: number = cat2RemovePxLeft - (getSpudMargin() * 3)
                        const cat2NewMargTop: number = cat2RemovePxTop - getSpudMargin();
                        (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMargLeft.toString() + "px";
                        (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMargTop.toString() + "px"
                      } else {
                        const cat2RemovePxLeft: number = Number(cat2MarginLeft.match(regex)?.join(''))
                        const cat2RemovePxTop: number = Number(cat2MarginTop.match(regex)?.join(''))
                        const cat2NewMargLeft: number = cat2RemovePxLeft - (getSpudMargin() * 3)
                        const cat2NewMargTop: number = cat2RemovePxTop + getSpudMargin();
                        (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMargLeft.toString() + "px";
                        (guntherOrPharoah()[1] as HTMLImageElement).style.marginTop = cat2NewMargTop.toString() + "px"
                      }
                    } else {
                      const cat2RemovePx: number = Number(cat2MarginLeft.match(regex)?.join(''))
                      const cat2NewMarg: number = cat2RemovePx - (getSpudMargin() * 4);
                      (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                    }
                  }
                  (guntherOrPharoah()[0] as HTMLImageElement).style.marginLeft = catNewMarg.toString() + "px" 
                } else {
                  const catNewMarg: number = catRemovePx + getSpudMargin();
                  (guntherOrPharoah()[0] as HTMLImageElement).style.marginLeft = catNewMarg.toString() + "px" 
                }      
              }
              if (bothCount === 1) {
                const cat2Css: CSSStyleDeclaration = getComputedStyle(guntherOrPharoah()[1] as HTMLImageElement)
                const cat2MarginLeft: string = cat2Css.marginLeft
                const cat2RemovePx: number = Number(cat2MarginLeft.match(regex)?.join(''))
                if (spudCss.marginTop === getDefaultMargs().leftOffshootMargins[0].marginTop &&
                spudCss.marginLeft === getDefaultMargs().leftOffshootMargins[0].marginLeft ||
                spudCss.marginTop === getDefaultMargs().leftOffshootMargins[1].marginTop &&
                spudCss.marginLeft === getDefaultMargs().leftOffshootMargins[1].marginLeft ||
                spudCss.marginTop === getDefaultMargs().leftOffshootMargins[2].marginTop &&
                spudCss.marginLeft === getDefaultMargs().leftOffshootMargins[2].marginLeft ||
                spudCss.marginTop === getDefaultMargs().leftOffshootMargins[3].marginTop &&
                spudCss.marginLeft === getDefaultMargs().leftOffshootMargins[3].marginLeft ||
                spudCss.marginTop === getDefaultMargs().leftOffshootMargins[4].marginTop &&
                spudCss.marginLeft === getDefaultMargs().leftOffshootMargins[4].marginLeft) {
                  const cat2NewMarg = cat2RemovePx + 0;
                  (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                } else if (((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - spud.getBoundingClientRect().right < getClosenessMarg() &&
                (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().left - spud.getBoundingClientRect().right > -(getClosenessMarg())) &&
                ((guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().top < getClosenessMarg() &&
                (guntherOrPharoah()[1] as HTMLImageElement).getBoundingClientRect().top - spud.getBoundingClientRect().top > -(getClosenessMarg()))) {
                  const cat2NewMarg = cat2RemovePx - (getSpudMargin() * 2);
                  (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                } else {
                  const cat2NewMarg = cat2RemovePx + getSpudMargin();
                  (guntherOrPharoah()[1] as HTMLImageElement).style.marginLeft = cat2NewMarg.toString() + "px"
                }
              }
              spud.style.marginLeft = newMarg.toString() + "px";
              checkForTerminal(getDefaultMargs().rightOffshootMargins)
            }  
          }
      } 
    } 
    const spudNewMargLeft = spudCss.marginLeft
    if (spudNewMargLeft !== spudInitialMargLeft) {
      leftCount = 0
      if (document.getElementById("gunther-image-follow") || document.getElementById("pharoah-image-follow")) {
        if (catCount !== 0) {
          catCount = 0
        } else {
          null
        }
        if (bothCount !== 0) {
          bothCount = 0
        } else {
          null
        }
      }
    }
    spud.scrollIntoView({ behavior: "smooth", block: "center", inline: "center"})
   })
  },[]);

  setInterval(() => addBlinks(mainHallwayDivs, leftHallwayDivs, rightHallwayDivs), 20000)
  setInterval(() => removeBlinksMainHallway(mainHallwayDivs), 39999)
  setInterval(() => removeBlinksLeftHallway(leftHallwayDivs), 39999)
  setInterval(() => removeBlinksRightHallway(rightHallwayDivs), 39999)
  const landscapeInterval = setInterval(() => checkLandscape())
  setInterval(() => landscapeInterval)
  setTimeout(() => { clearInterval(landscapeInterval) }, 5)

  
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
      <RetrieveGuntherWindow setShowGetGTerminal={setShowGetGTerminal} regex={regex} getSpudMargin={getSpudMargin()} />,
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
     <div className="tile" id="top-tile"></div>
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
     <div className="tile" id="bottom-tile">
     <div id="arrow-instructions">
       <p id="arrow-explanation">use your keyboard arrows or these guys! &#10163;</p>
     </div>
     </div>
     <div id="spud-starter">
      <img alt="spud" id="spud" src="./src/images/spud.png" onLoad={() => (document.getElementById("spud") as HTMLImageElement).scrollIntoView({ behavior: "smooth", block: "center", inline: "center"})}></img>
      </div>
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
      <FeedGuntherWindow setShowFeedGTerminal={setShowFeedGTerminal} getSpudMargin={getSpudMargin()} regex={regex}/>,
      document.getElementById("feed-gunther-window")!
     )}</div>
     <div className="terminal-window" id="feed-gunther-window"></div>
    </div> 
    <div id="offshoot-4" className="offshoot-right">
     <div className="offshoot-tile-right"></div>
     <div className="offshoot-tile-right"></div>
     <div className="terminal" id="feed-pharoah">{showFeedPTerminal && createPortal(
      <FeedPharoahWindow setShowFeedPTerminal={setShowFeedPTerminal} regex={regex} getSpudMargin={getSpudMargin()}/>,
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
      <RetrievePharoahWindow setShowGetPTerminal={setShowGetPTerminal} regex={regex} getSpudMargin={getSpudMargin()} />,
      document.getElementById("retrieve-pharoah-window")!
     )}</div>
     <div className="terminal-window" id="retrieve-pharoah-window"></div>
    </div>                 
  </div>
  </div>
  )
}

export default FunPath
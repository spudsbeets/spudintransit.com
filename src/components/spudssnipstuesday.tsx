import spudsSnipsContent from '../misc/spudssnipscontent'
import { SnipType } from '../misc/spudssnipscontent'
import { useEffect, useState } from 'react'

const SpudsSnipsTuesday = () => {

  const [title, switchTitle] = useState<string>('')

  function playAudio(url: string, song: string) {
    new Audio(url).play()
    switchTitle(song)
  }

  function correlatedKey(letter: string, arr: SnipType[]): string[] {
    let capLet = letter.toUpperCase()
    let foundIndex = arr.findIndex((el) => el.key === capLet)
    let rightObj = arr[foundIndex]
    return [rightObj.audio, rightObj.name]
  }

  const tueButtons: HTMLCollectionOf<Element> = document.getElementsByClassName("tuesday-buttons")

  // margintop 0-350px
  // opacity 0-1

  function getWindowWidth(): number {
    return window.innerWidth
  }

  function getWindowHeight(): number {
    return window.innerHeight
  }

  function randomIndex(max: number): number {
    return Math.floor(Math.random() * max)
  }

  function randomTenths(min: number, max: number): string {
    return ((Math.random() * (max - min) + min) / 10).toString()
  }

  function returnTopMargs(): {margin: string, animation: string}[] {
    if (getWindowWidth() > 1350) {
      return [
        {
        margin: "0px",
        animation: "tuemove1"
        }, 
        {
        margin: "36px",
        animation: "tuemove2"
        },
        {
        margin: "70px",
        animation: "tuemove3"
        },
        {
        margin: "83px",
        animation: "tuemove4"  
        },
        {
        margin: "127px",
        animation: "tuemove5"
        },
        {
        margin: "168px",
        animation: "tuemove6"
        },
        {
        margin: "221px",
        animation: "tuemove7"
        },
        {
        margin: "253px",
        animation: "tuemove8"
        },
        {
        margin: "291px",
        animation: "tuemove9"
        },
        {
        margin: "320px",
        animation: "tuemove10"
        } 
      ]
    } else if (getWindowWidth() <= 1350 && getWindowWidth() > 850) {
      return [
        {
        margin: "0px",
        animation: "tuemove1"
        }, 
        {
        margin: "36px",
        animation: "tuemove2"
        },
        {
        margin: "70px",
        animation: "tuemove3"
        },
        {
        margin: "83px",
        animation: "tuemove4"  
        },
        {
        margin: "127px",
        animation: "tuemove5"
        },
        {
        margin: "168px",
        animation: "tuemove6"
        },
        {
        margin: "195px",
        animation: "tuemove7"
        },
        {
        margin: "223px",
        animation: "tuemove8"
        },
        {
        margin: "201px",
        animation: "tuemove9"
        },
        {
        margin: "230px",
        animation: "tuemove10"
        } 
      ]
    } else if (getWindowWidth() <= 850) {
      if (getWindowHeight() > 400) {
        return [
          {
          margin: "0px",
          animation: "tuemove1"
          }, 
          {
          margin: "36px",
          animation: "tuemove2"
          },
          {
          margin: "70px",
          animation: "tuemove3"
          },
          {
          margin: "83px",
          animation: "tuemove4"  
          },
          {
          margin: "127px",
          animation: "tuemove5"
          },
          {
          margin: "138px",
          animation: "tuemove6"
          },
          {
          margin: "145px",
          animation: "tuemove7"
          },
          {
          margin: "183px",
          animation: "tuemove8"
          },
          {
          margin: "161px",
          animation: "tuemove9"
          },
          {
          margin: "170px",
          animation: "tuemove10"
          } 
        ]
      } else if (getWindowHeight() <= 400 && getWindowHeight() > 330) {
        return [
          {
          margin: "0px",
          animation: "tuemove1"
          }, 
          {
          margin: "36px",
          animation: "tuemove2"
          },
          {
          margin: "40px",
          animation: "tuemove3"
          },
          {
          margin: "53px",
          animation: "tuemove4"  
          },
          {
          margin: "67px",
          animation: "tuemove5"
          },
          {
          margin: "78px",
          animation: "tuemove6"
          },
          {
          margin: "85px",
          animation: "tuemove7"
          },
          {
          margin: "93px",
          animation: "tuemove8"
          },
          {
          margin: "101px",
          animation: "tuemove9"
          },
          {
          margin: "110px",
          animation: "tuemove10"
          } 
        ] 
      }
      else {
        return [
          {
          margin: "0px",
          animation: "tuemove1"
          }, 
          {
          margin: "36px",
          animation: "tuemove2"
          },
          {
          margin: "40px",
          animation: "tuemove3"
          },
          {
          margin: "53px",
          animation: "tuemove4"  
          },
          {
          margin: "67px",
          animation: "tuemove5"
          },
          {
          margin: "78px",
          animation: "tuemove6"
          },
          {
          margin: "85px",
          animation: "tuemove7"
          },
          {
          margin: "84px",
          animation: "tuemove8"
          },
          {
          margin: "81px",
          animation: "tuemove9"
          },
          {
          margin: "90px",
          animation: "tuemove10"
          } 
        ]       
      }      
    } else {
      throw new Error("whaaat")
    }
  }

  const opacities: string[] = ["0", ".5", "1"]

  function createRandomStyle(arr: HTMLCollectionOf<Element>, opacityArr: string[]) {
    for (let i = 0; i < arr.length; i++) {
      (arr[i] as HTMLButtonElement).style.marginTop = returnTopMargs()[randomIndex(10)].margin;
      (arr[i] as HTMLButtonElement).style.opacity = opacityArr[randomIndex(3)];
      (arr[i] as HTMLButtonElement).style.animationDuration = randomTenths(50, 120) + "s"
      returnTopMargs().forEach((el) => {
        if (el.margin === (arr[i] as HTMLButtonElement).style.marginTop) {
          console.log((arr[i] as HTMLButtonElement).style.animationDuration);
          (arr[i] as HTMLButtonElement).style.animationName = el.animation;
        }
      })
    }
  }

  useEffect(() => {
   createRandomStyle(tueButtons, opacities)
   document.addEventListener('keydown', (event) => {
     playAudio(correlatedKey(event.key, spudsSnipsContent.tuesday)[0], correlatedKey(event.key, spudsSnipsContent.tuesday)[1]);
     (tueButtons[randomIndex(10)] as HTMLButtonElement).style.opacity = opacities[randomIndex(3)];
     (tueButtons[randomIndex(10)] as HTMLButtonElement).style.opacity = opacities[randomIndex(3)];
     (tueButtons[randomIndex(10)] as HTMLButtonElement).style.opacity = opacities[randomIndex(3)]
   })
  },[])

    return(
      <div id="spuds-snips-tuesday-component">
      <button className="home-button" id="snips-home-button" onClick={() => window.close()}>back</button>
      <h1 id="tuesday-snips-header">tuesday</h1>
      <div id="spuds-snips-tuesday-button-area">
        {spudsSnipsContent.tuesday.map((el) => {
          return(
            <button id={el.id} key={el.id} className="tuesday-buttons" onClick={() => {
               playAudio(el.audio, el.name);
               (tueButtons[randomIndex(10)] as HTMLButtonElement).style.opacity = opacities[randomIndex(3)];
               (tueButtons[randomIndex(10)] as HTMLButtonElement).style.opacity = opacities[randomIndex(3)];
               (tueButtons[randomIndex(10)] as HTMLButtonElement).style.opacity = opacities[randomIndex(3)]
            }}>
              {el.key}
            </button>
          )
        })
        }
      </div>
      <div id="spuds-snips-tuesday-name-area">{title}</div>
      </div>
    )
}

export default SpudsSnipsTuesday
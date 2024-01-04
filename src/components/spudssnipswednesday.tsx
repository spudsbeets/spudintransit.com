import { useEffect, useState } from "react"
import { SnipType } from "../misc/spudssnipscontent"
import spudsSnipsContent from "../misc/spudssnipscontent"

const SpudsSnipsWednesday = () => {

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

    useEffect(() => {
      document.addEventListener('keydown', (event) => {
        playAudio(correlatedKey(event.key, spudsSnipsContent.wednesday)[0], correlatedKey(event.key, spudsSnipsContent.wednesday)[1])
      })
    },[])

    return(
       <div id="spuds-snips-wednesday-component">
       <button className="home-button" id="snips-home-button-wednesday" onClick={() => window.close()}>back</button>
       <h1 id="wednesday-snips-header">wednesday</h1>
       <div id="spuds-snips-wednesday-button-area">
       {spudsSnipsContent.wednesday.map((el) => {
          return(
            <button id={el.id} key={el.id} className="wednesday-buttons" onClick={() => {
               playAudio(el.audio, el.name);
            }}>
              {el.key}
            </button>
          )
        })
        }
       </div>
       <div id="spuds-snips-wednesday-name-area">{title}</div>
       </div>
    )
}

export default SpudsSnipsWednesday
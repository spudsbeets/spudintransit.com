import SongPageOne from "./songpages/pageone"
import SongPageTwo from "./songpages/pagetwo"
import SongPageThree from "./songpages/pagethree"
import { useReducer } from "react"

const SpudsSongs = () => {

    type SongPageState = { pageNum: number }

    const initialPage = { pageNum: 1 }

    const REDUCER_TYPE = {
        ONE: 'ONE',
        TWO: 'TWO',
        THREE: 'THREE'
    }

    type ReducerAction = {
        type: string
    }

    const reducer = (state: SongPageState, action: ReducerAction): SongPageState => {
        switch(action.type) {
          case REDUCER_TYPE.ONE: {
            return {pageNum: 1}
          }
          case REDUCER_TYPE.TWO: {
            return {pageNum: 2}
          }
          case REDUCER_TYPE.THREE: {
            return {pageNum: 3}
          }
          default: {
            throw new Error("whaaat")
          }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialPage)

    const pageContent = () => {
        if (state.pageNum === 1) {
            return <SongPageOne />
        } else if (state.pageNum === 2) {
            return <SongPageTwo />
        } else if (state.pageNum === 3) {
            return <SongPageThree />
        } else {
            throw new Error("whaat")
        }
    }

    function checkDate(): void {
        const inputDate = new Date('2024-02-07');
        const currentDate = new Date();
        if (inputDate < currentDate) {
          const tuesWithGp = document.getElementById("tuesday-with-gp");
          const wedWithGp = document.getElementById("wednesday-with-gp");
          const tuesWithGpTitle = document.getElementById("tuesday-with-gp-title");
          const wedWithGpTitle = document.getElementById("wednesday-with-gp-title");
          const tuesWithGpExpl = document.getElementById("tuesday-with-gp-explanation");
          const wedWithGpExpl = document.getElementById("wednesday-with-gp-explanation");
          const tuesWithGpDiv = document.getElementById("tuesday-with-gp-explanation-div");
          const wedWithGpDiv = document.getElementById("wednesday-with-gp-explanation-div");
          (tuesWithGp as HTMLDivElement).style.filter = "none";
          (wedWithGp as HTMLDivElement).style.filter = "none";
          (tuesWithGpTitle as HTMLElement).style.filter = "none";
          (wedWithGpTitle as HTMLElement).style.filter = "none";
          (tuesWithGpExpl as HTMLDivElement).style.filter = "none";
          (wedWithGpExpl as HTMLDivElement).style.filter = "none";
          (tuesWithGpDiv as HTMLDivElement).style.backgroundColor = "#33cc33";
          (wedWithGpDiv as HTMLDivElement).style.backgroundColor = "#33cc33";
          console.log((tuesWithGp as HTMLDivElement).style.filter)
        } else {
          console.log('not yet!')
        }
      }

      const dateInterval = setInterval(() => checkDate())
      setInterval(() => dateInterval);
      setTimeout(() => { clearInterval(dateInterval)}, 5)
    

    return(
        <div id="spuds-songs-component">
         <button className="home-button" id="songs-home-button" onClick={() => window.close()}>back</button>
         <div id="songs-content">
         {pageContent()}
         </div>
         <div id="song-arrows-div">
         <button className="song-arrows" id="song-arrow-left" disabled={state.pageNum === 1} onClick={() => {
            if (state.pageNum === 2) {
                dispatch({ type: REDUCER_TYPE.ONE })
            } else if (state.pageNum === 3) {
                dispatch({ type: REDUCER_TYPE.TWO })
            }
         }}>&#8604;</button>
         <button className="song-arrows" id="song-arrow-right" disabled={state.pageNum === 3} onClick={() => {
            if (state.pageNum === 1) {
                dispatch({ type: REDUCER_TYPE.TWO })
            } else if (state.pageNum === 2) {
                dispatch({ type: REDUCER_TYPE.THREE })
            }
            }}>&#10163;</button>
        </div>
        </div>
    )
}

export default SpudsSongs
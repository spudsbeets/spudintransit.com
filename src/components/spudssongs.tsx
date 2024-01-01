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
        type: string,
        payload?: number
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
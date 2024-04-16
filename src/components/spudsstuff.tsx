import { useReducer } from "react"
import StuffPageOne from "./stuffpages/pageone"
import StuffPageTwo from "./stuffpages/pagetwo"
import StuffPageThree from "./stuffpages/pagethree"


const SpudsStuff = () => {

    type StuffPageState = { pageNum: number }

    const initialPage = { pageNum: 1 }

    const REDUCER_TYPE = {
        ONE: 'ONE',
        TWO: 'TWO',
        THREE: 'THREE'
    }

    type ReducerAction = {
        type: string
    }

    const reducer = (state: StuffPageState, action: ReducerAction): StuffPageState => {
        switch(action.type) {
          case REDUCER_TYPE.ONE: {
            return {pageNum: 1}
          }
          case REDUCER_TYPE.TWO: {
            console.log(state)
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
            return <StuffPageOne />
        } else if (state.pageNum === 2) {
            return <StuffPageTwo />
        } else if (state.pageNum === 3) {
            return <StuffPageThree />
        } else {
            throw new Error("whaat")
        }
    }
    

    return(
      <div id="spuds-stuff-component">
        <button className="home-button" id="stuff-home-button" onClick={() => window.close()}>back</button>
        <div id="stuff-content">
         {pageContent()}
        </div>
        <div id="stuff-arrows-div">
        <button className="song-arrows" id="stuff-arrow-left" disabled={state.pageNum === 1} onClick={() => {
            if (state.pageNum === 2) {
                dispatch({ type: REDUCER_TYPE.ONE })
            } else if (state.pageNum === 3) {
                dispatch({ type: REDUCER_TYPE.TWO })
            }
         }}>&#8604;</button>
         <button className="song-arrows" id="stuff-arrow-right" disabled={state.pageNum === 3} onClick={() => {
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

export default SpudsStuff
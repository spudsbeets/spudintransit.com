import '../App.css'

const FunPath = () => {

  const offShoots: string[] = ["spuds ship", "cocktail clash", "spuds snips tue", "spuds snips wed", "spud", "spuds stuff", "find gunther", "find pharoah", "feed gunther", "feed pharoah"]

  function move() {
    console.log("move")
  }

  function terminal() {
    console.log("terminal")
  }

  return(  
  <div id="main-hallway">
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
    <div id="offshoot-1" className="offshoot-right">
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="terminal" id="terminal-1" onClick={() => {terminal}}></button>
    </div>
     <button className="tile" onClick={() => {move}}></button>
    <div id="offshoot-2" className="offshoot-left">
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="terminal" id="terminal-2" onClick={() => {terminal}}></button>
    </div>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
    <div id="offshoot-3" className="offshoot-left">
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="terminal" id="terminal-3" onClick={() => {terminal}}></button>
    </div>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
    <div id="offshoot-4" className="offshoot-right">
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="terminal" id="terminal-4" onClick={() => {terminal}}></button>
    </div>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
    <div id="offshoot-5" className="offshoot-right">
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="terminal" id="terminal-5" onClick={() => {terminal}}></button>
    </div>
     <button className="tile" onClick={() => {move}}></button>
    <div id="offshoot-6" className="offshoot-left">
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="terminal" id="terminal-6" onClick={() => {terminal}}></button>
    </div>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
    <div id="offshoot-7" className="offshoot-right">
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="terminal" id="terminal-7" onClick={() => {terminal}}></button>
    </div>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
    <div id="offshoot-8" className="offshoot-left">
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="terminal" id="terminal-8" onClick={() => {terminal}}></button>
    </div>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
    <div id="offshoot-9" className="offshoot-left">
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="terminal" id="terminal-9" onClick={() => {terminal}}></button>
    </div>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
    <div id="offshoot-10" className="offshoot-right">
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
     <button className="terminal" id="terminal-10" onClick={() => {terminal}}></button>
    </div>
     <button className="tile" onClick={() => {move}}></button>
     <button className="tile" onClick={() => {move}}></button>
  </div>
  )
}

export default FunPath
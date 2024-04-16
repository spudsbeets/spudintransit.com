const StuffPageOne = () => {
    return(
        <div className="stuff-page" id="stuff-page-1">
            <h1 className="stuff-page-header" id="stuff-page-header-1">skills</h1>
            <div id="various-stuff">
            <div className="stuff-div" id="programming-stuff-div">
            <h2 className="stuff-header" id="programming-stuff-header">programming</h2>
            <ul className="stuff-list" id="programming-stuff-list">
              <li className="stuff-list-item">html/css<img className="stuff-list-logo" id="html-logo" src="/images/htmlcss.png" alt="html/css"></img></li>
              <li className="stuff-list-item">javascript<img className="stuff-list-logo" id="js-logo" src="/images/js.png" alt="js"></img></li>
              <li className="stuff-list-item">typescript<img className="stuff-list-logo" id="ts-logo" src="/images/ts.png" alt="ts"></img></li>
              <li className="stuff-list-item">react<img className="stuff-list-logo" id="react-logo" src="/images/react.png" alt="react"></img></li>
              <li className="stuff-list-item">git<img className="stuff-list-logo" id="git-logo" src="/images/git.png" alt="git"></img></li>
              <li className="stuff-list-item">tailwind<img className="stuff-list-logo" id="tailwind-logo" src="/images/tailwind.png" alt="tailwind"></img></li>
            </ul>
            </div>
            <div className="stuff-div" id="music-stuff-div">
            <h2 className="stuff-header" id="music-stuff-header">music production</h2>
            <ul className="stuff-list" id="music-stuff-list">
              <li className="stuff-list-item" id="ableton-list-item">daw: ableton<img className="stuff-list-logo" id="ableton-logo" src="/images/ableton.png" alt="ableton"></img></li>
              <li className="stuff-list-item" id="instrument-list-item">instruments: keys, trumpet, kalimba, etc<img className="stuff-list-logo" id="instruments-logo" src="/images/musicnote.png" alt="instruments"></img></li>
            </ul>
            </div>
            <div className="stuff-div" id="misc-stuff-div">
            <h2 className="stuff-header" id="misc-stuff-header">misc</h2>
            <ul className="stuff-list" id="misc-stuff-list">
              <li className="stuff-list-item" id="public-speaking-list-item">public speaking<img className="stuff-list-logo" id="public-speaking-logo" src="/images/microphone.png" alt="public-speaking"></img></li>
              <li className="stuff-list-item" id="language-list-item">ancient greek and hebrew<img className="stuff-list-logo" id="language-logo" src="/images/alpha.png" alt="language"></img></li>
              <li className="stuff-list-item" id="writing-list-item">writing<img className="stuff-list-logo" id="writing-logo" src="/images/fountainpen.png" alt="writing"></img></li>
              <li className="stuff-list-item" id="gamer-list-item">game development<img className="stuff-list-logo" id="game-logo" src="/images/gamer.png" alt="game"></img></li>
            </ul>
            </div>
            </div>
        </div>
    )
}

export default StuffPageOne
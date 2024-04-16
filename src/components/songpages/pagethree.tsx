const SongPageThree = () => {
    return(
        <div className="song-page" id="song-page-3">
            <h1 className="song-page-header" id="song-page-3-header">props</h1>
            <div id="props-links">
              <div id="craig-props-div">
                <a href="https://www.craigmillerstudio.com/" target="_blank" className="props-anchors"><img id="craig-image" className="props-image" src="/images/craig.png" alt="craig"></img></a>
                <p id="craig-explanation" className="props-explanation">my brother craig did all the artwork for these albums and he makes all kinds of other stuff too! Go check him out and grab a sticker, print, or maybe even a rug....</p>
              </div>
              <div id="spencer-props-div">
                <a href="https://spencermartinmusic.com/" target="_blank" className="props-anchors"><img id="spencer-image" className="props-image" src="/images/spencer.png" alt="spencer"></img></a>
                <p id="spencer-explanation" className="props-explanation">spencer mastered all three of my records thus far and has seriously enhanced their quality. he does great work, check out his stuff!</p>
              </div>
            </div>
        </div>
    )
}

export default SongPageThree
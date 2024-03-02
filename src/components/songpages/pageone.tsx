const SongPageOne = () => {
    return(
        <div className="song-page" id="song-page-1">
            <h1 className="song-page-header" id="song-page-1-header">releases</h1>
            <div id="release-images-div">
                <a href="https://open.spotify.com/album/3Xz415P2mkyiigcQFj1C3V" target="_blank" className="links-anchors"><div id="c-flower-mountain-div" className="release-divs">
                <img className="release-image" id="c-flower-mountain" alt="c-flower-mountain" src="./src/images/cflowermtn.png"></img>
                <div className="release-explanation-div" id="c-flower-mountaint-explanation-div">
                <p className="release-explanation" id="c-flower-mountain-explanation">My first full release, these songs carry the listener on a journey from an underwater concert to a free-fall through space</p>
                </div>
                <h3 className="release-title" id="c-flower-mountain-title">C Flower Mountain</h3>
                </div></a>
                <div id="tuesday-with-gp-div" className="release-divs">
                <img className="release-image" id="tuesday-with-gp" alt="tuesday-with-gp" src="./src/images/tue-cover.png"></img>
                <div className="release-explanation-div" id="tuesday-with-gp-explanation-div">
                <p className="release-explanation" id="tuesday-with-gp-explanation">half of a larger story, tuesday with gunther and pharoah demonstrates an 'ordinary' day in the lives of my two cats in their comfy home</p>
                </div>
                <h3 className="release-title" id="tuesday-with-gp-title">Tuesday with Gunther and Pharoah</h3>
                </div>                
                <div id="wednesday-with-gp-div" className="release-divs">
                <img className="release-image" id="wednesday-with-gp" alt="wednesday-with-gp" src="./src/images/wed-cover.png"></img>
                <div className="release-explanation-div" id="wednesday-with-gp-explanation-div">
                <p className="release-explanation" id="wednesday-with-gp-explanation">half of a larger story, wednesday with gunther and pharoah is the tale of a day that starts with catnip that launches a wild expedition of self-discovery for my girls</p>
                </div>
                <h3 className="release-title" id="wednesday-with-gp-title">Wednesday with Gunther and Pharoah</h3>
                </div>
            </div>
        </div>
    )
}

export default SongPageOne
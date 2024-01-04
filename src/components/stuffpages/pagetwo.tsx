const StuffPageTwo = () => {
    return(
        <div className="stuff-page" id="stuff-page-2">
            <h1 className="stuff-page-header" id="stuff-page-header-2">links</h1>
            <div id="stuff-page-links">
            <a href="https://github.com/spudsbeets" target="_blank" className="stuff-link-anchors"><div className="stuff-page-link-div" id="github-link-div">
              <img className="stuff-page-link-img" id="github-img-link" src="./src/images/github.png" alt="github"></img>
              <h3 className="stuff-page-link-title" id="github-link-title">github</h3>
             </div></a>
             <a href="resumelink" target="_blank" className="stuff-link-anchors"><div className="stuff-page-link-div" id="resume-link-div">
              <h1 className="stuff-page-link-img" id="resume-img-link">resume</h1>
             </div></a>
             <a href="linkedinlink" target="_blank" className="stuff-link-anchors"><div className="stuff-page-link-div" id="linkedin-link-div">
              <img className="stuff-page-link-img" id="linkedin-link-img" src="./src/images/linkedin.png" alt="linkedin"></img>
              <h3 className="stuff-page-link-title" id="linkedin-link-title">linkedin</h3>
             </div></a>
            </div>
        </div>
    )
}

export default StuffPageTwo
const StuffPageTwo = () => {
    return(
        <div className="stuff-page" id="stuff-page-2">
            <h1 className="stuff-page-header" id="stuff-page-header-2">links</h1>
            <div id="stuff-page-links">
            <a href="https://github.com/spudsbeets" target="_blank" className="stuff-link-anchors"><div className="stuff-page-link-div" id="github-link-div">
              <img className="stuff-page-link-img" id="github-img-link" src="/images/github.png" alt="github"></img>
              <h3 className="stuff-page-link-title" id="github-link-title">github</h3>
             </div></a>
             <a href="https://drive.google.com/file/d/1OruxACZ2M_8nMPQ38PGbEfDLG8ATeIeN/view?usp=sharing" target="_blank" className="stuff-link-anchors"><div className="stuff-page-link-div" id="resume-link-div">
              <h1 className="stuff-page-link-img" id="resume-img-link">resume</h1>
             </div></a>
             <a href="https://www.linkedin.com/in/sean-miller-6a5b51290" target="_blank" className="stuff-link-anchors"><div className="stuff-page-link-div" id="linkedin-link-div">
              <img className="stuff-page-link-img" id="linkedin-link-img" src="/images/linkedin.png" alt="linkedin"></img>
              <h3 className="stuff-page-link-title" id="linkedin-link-title">linkedin</h3>
             </div></a>
            </div>
        </div>
    )
}

export default StuffPageTwo
type PropsType = {
  setShowCCTerminal: React.Dispatch<React.SetStateAction<boolean>>
}

const CocktailClashWindow = ({ setShowCCTerminal }: PropsType) => {
  return(
    <>
    <h1 className="terminal-window-header" id="cocktail-clash-header">Cocktail Clash</h1>
    <p className="terminal-window-explanation" id="cocktail-clash-explanation">build the optimal cocktail menu to delight your picky customers (only available on desktop/tablet)</p>
    <a href="cocktail-clash-link" target="_blank" className="terminal-links"><button className="terminal-window-button" id="cocktail-clash-button">play cocktail clash</button></a>
    <button className="close-button" onClick={() => {
        setShowCCTerminal(false);
        (document.getElementById("cocktail-clash-window") as HTMLDivElement).style.display = "none"
        }}>close</button>
    </>
  )
}

export default CocktailClashWindow
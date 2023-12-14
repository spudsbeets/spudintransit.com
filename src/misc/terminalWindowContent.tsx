interface TerminalWindowType {
   name: string,
   content: any
}

export const terminalWindowContent: TerminalWindowType[] = [
    {
        name: "spuds-ship",
        content: `<h1 class="terminal-window-header" id="spuds-ship-header">Spud's Ship</h1>
        <p class="terminal-window-explanation" id="spuds-ship-explanation">navigate the cosmos in spud's ship. can you make it to the moon?</p>
        <button class="terminal-window-button" id="spuds-ship-button">play spud's ship</button>`
    },
    {
        name: "spuds-songs",
        content: `<h1 class="terminal-window-header" id="spuds-songs-header">Spud's Songs</h1>
        <p class="terminal-window-explanation" id="spuds-songs-explanation">some music i've made</p>
        <button class="terminal-window-button" id="spuds-songs-button">launch</button>`
    },
    {
        name: "spuds-snips-wednesday",
        content: `<h1 class="terminal-window-header" id="spuds-snips-wednesday-header">Spud's Snips (Wednesday)</h1>
        <p class="terminal-window-explanation" id="spuds-snips-wednesday-explanation">lil sneak peek</p>
        <button class="terminal-window-button" id="spuds-snips-wednesday-button">launch</button>`
    },
    {
        name: "retrieve-gunther",
        content: `<img class="cat-images" id="gunther-image" src="./src/images/zero.png" alt="gunther"></img>
        <p class="terminal-window-explanation" id="retrieve-gunther-explanation">meow meeow mow</p>
        <button class="terminal-window-button" id="retrieve-gunther-button">translate?</button>`
    },
    {
        name: "cocktail-clash",
        content: `<h1 class="terminal-window-header" id="cocktail-clash-header">Cocktail Clash</h1>
        <p class="terminal-window-explanation" id="cocktail-clash-explanation">build the optimal cocktail menu to delight your picky customers (only available on desktop/tablet)</p>
        <button class="terminal-window-button" id="cocktail-clash-button">play cocktail clash</button>`
    },
    {
        name: "retrieve-pharoah",
        content: `<img class="cat-images" id="pharoah-image" src="./src/images/two.png" alt="pharoah"></img>
        <p class="terminal-window-explanation" id="retrieve-pharoah-explanation">meow meow mow meoew</p>
        <button class="terminal-window-button" id="retrieve-pharoah-button">translate?</button>`
    },
    {
        name: "spuds-stuff",
        content: `<h1 class="terminal-window-header" id="spuds-stuff-header">Spud's Stuff</h1>
        <p class="terminal-window-explanation" id="spuds-stuff-explanation">all that 'professional' stuff</p>
        <button class="terminal-window-button" id="spuds-stuff-button">launch</button>`
    },
    {
        name: "spuds-snips-tuesday",
        content: `<h1 class="terminal-window-header" id="spuds-snips-tuesday-header">Spud's Snips (Tuesday)</h1>
        <p class="terminal-window-explanation" id="spuds-snips-tuesday-explanation">lil sneak peak</p>
        <button class="terminal-window-button" id="spuds-ship-button">launch</button>`
    },
    {
        name: "feed-pharoah",
        content: `<img class="food-images" id="pharoah-food-image" src="./src/images/four.png" alt="pharoah-food"></img>
        <button class="terminal-window-button" id="feed-pharoah-button">satisfy pharoah's hunger?</button>`
    },
    {
        name: "feed-gunther",
        content: `<img class="food-images" id="gunther-food-image" src="./src/images/five.png" alt="gunther-food"></img>
        <button class="terminal-window-button" id="feed-gunther-button">satisfy gunther's hunger?</button>`
    }
]
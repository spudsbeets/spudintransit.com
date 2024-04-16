export type SnipType = {
    key: string,
    audio: string,
    name: string,
    id: string
}

type Snips = {
    tuesday: SnipType[],
    wednesday: SnipType[]
}

const spudsSnipsContent: Snips = {
tuesday: [
    {
     key: "I",
     audio: "./src/misc/snipaudio/intro-snip.wav",
     name: "Intro",
     id: "intro-button"
    },
    {
     key: "S",
     audio: "./src/misc/snipaudio/sunrise-snip.wav",
     name: "Sunrise",
     id: "sunrise-button"
    },
    {
     key: "B",
     audio: "./src/misc/snipaudio/breakfast-snip.wav",
     name: "Breakfast",
     id: "breakfast-button"
    },
    {
     key: "C",
     audio: "./src/misc/snipaudio/chatting-with-birds-snip.wav",
     name: "Chatting with Birds",
     id: "birds-button"
    },
    {
     key: "E",
     audio: "./src/misc/snipaudio/emerging-hunger-snip.wav",
     name: "Emerging Hunger",
     id: "hunger-button"
    },
    {
     key: "D",
     audio: "./src/misc/snipaudio/dinner-snip.wav",
     name: "Dinner",
     id: "dinner-button"
    },
    {
     key: "Z",
     audio: "./src/misc/snipaudio/zoom-snip.wav",
     name: "Zoom",
     id: "zoom-button"
    },
    {
     key: "P",
     audio: "./src/misc/snipaudio/the-perfect-blanket-snip.wav",
     name: "The Perfect Blanket",
     id: "blanket-button"
    },
    {
     key: "A",
     audio: "./src/misc/snipaudio/watching-cars-snip.wav",
     name: "Watching Cars",
     id: "cars-button"
    },
    {
     key: "W",
     audio: "./src/misc/snipaudio/we-like-it-here-snip.wav",
     name: "We Like It Here",
     id: "we-like-it-button"
    }
],
wednesday: [
    {
     key: "A",
     audio: "./src/misc/snipaudio/another-sunrise-snip.wav",
     name: "Another Sunrise",
     id: "another-sunrise-button"
    },
    {
     key: "C",
     audio: "./src/misc/snipaudio/catnip-snip.wav",
     name: "Catnip",
     id: "catnip-button"
    },
    {
     key: "M",
     audio: "./src/misc/snipaudio/machine-elves-snip.wav",
     name: "Machine Elves",
     id: "machine-elves-button"
    },
    {
     key: "L",
     audio: "./src/misc/snipaudio/leviathan-snip.wav",
     name: "Leviathan",
     id: "leviathan-button"
    },
    {
     key: "B",
     audio: "./src/misc/snipaudio/behemoth-snip.wav",
     name: "Behemoth",
     id: "behemoth-button"
    },
    {
     key: "S",
     audio: "./src/misc/snipaudio/space-dragon-snip.wav",
     name: "Space Dragon",
     id: "space-dragon-button"
    },
    {
     key: "D",
     audio: "./src/misc/snipaudio/another-dinner-snip.wav",
     name: "Another Dinner",
     id: "another-dinner-button"
    },
    {
     key: "W",
     audio: "./src/misc/snipaudio/watching-more-cars-snip.wav",
     name: "Watching More Cars",
     id: "watching-more-cars-button"
    },
    {
     key: "P",
     audio: "./src/misc/snipaudio/another-perfect-blanket-snip.wav",
     name: "Another Perfect Blanket",
     id: "another-perfect-blanket-button"
    },
    {
     key: "O",
     audio: "./src/misc/snipaudio/outro-snip.wav",
     name: "Outro",
     id: "outro-button"
    }
]
}

export default spudsSnipsContent
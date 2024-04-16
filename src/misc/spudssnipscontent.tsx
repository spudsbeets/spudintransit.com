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
     audio: "/snipaudio/intro-snip.wav",
     name: "Intro",
     id: "intro-button"
    },
    {
     key: "S",
     audio: "/snipaudio/sunrise-snip.wav",
     name: "Sunrise",
     id: "sunrise-button"
    },
    {
     key: "B",
     audio: "/snipaudio/breakfast-snip.wav",
     name: "Breakfast",
     id: "breakfast-button"
    },
    {
     key: "C",
     audio: "/snipaudio/chatting-with-birds-snip.wav",
     name: "Chatting with Birds",
     id: "birds-button"
    },
    {
     key: "E",
     audio: "/snipaudio/emerging-hunger-snip.wav",
     name: "Emerging Hunger",
     id: "hunger-button"
    },
    {
     key: "D",
     audio: "/snipaudio/dinner-snip.wav",
     name: "Dinner",
     id: "dinner-button"
    },
    {
     key: "Z",
     audio: "/snipaudio/zoom-snip.wav",
     name: "Zoom",
     id: "zoom-button"
    },
    {
     key: "P",
     audio: "/snipaudio/the-perfect-blanket-snip.wav",
     name: "The Perfect Blanket",
     id: "blanket-button"
    },
    {
     key: "A",
     audio: "/snipaudio/watching-cars-snip.wav",
     name: "Watching Cars",
     id: "cars-button"
    },
    {
     key: "W",
     audio: "/snipaudio/we-like-it-here-snip.wav",
     name: "We Like It Here",
     id: "we-like-it-button"
    }
],
wednesday: [
    {
     key: "A",
     audio: "/snipaudio/another-sunrise-snip.wav",
     name: "Another Sunrise",
     id: "another-sunrise-button"
    },
    {
     key: "C",
     audio: "/snipaudio/catnip-snip.wav",
     name: "Catnip",
     id: "catnip-button"
    },
    {
     key: "M",
     audio: "/snipaudio/machine-elves-snip.wav",
     name: "Machine Elves",
     id: "machine-elves-button"
    },
    {
     key: "L",
     audio: "/snipaudio/leviathan-snip.wav",
     name: "Leviathan",
     id: "leviathan-button"
    },
    {
     key: "B",
     audio: "/snipaudio/behemoth-snip.wav",
     name: "Behemoth",
     id: "behemoth-button"
    },
    {
     key: "S",
     audio: "/snipaudio/space-dragon-snip.wav",
     name: "Space Dragon",
     id: "space-dragon-button"
    },
    {
     key: "D",
     audio: "/snipaudio/another-dinner-snip.wav",
     name: "Another Dinner",
     id: "another-dinner-button"
    },
    {
     key: "W",
     audio: "/snipaudio/watching-more-cars-snip.wav",
     name: "Watching More Cars",
     id: "watching-more-cars-button"
    },
    {
     key: "P",
     audio: "/snipaudio/another-perfect-blanket-snip.wav",
     name: "Another Perfect Blanket",
     id: "another-perfect-blanket-button"
    },
    {
     key: "O",
     audio: "/snipaudio/outro-snip.wav",
     name: "Outro",
     id: "outro-button"
    }
]
}

export default spudsSnipsContent
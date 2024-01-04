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
     audio: "./src/misc/snipaudio/dino.wav",
     name: "Intro",
     id: "intro-button"
    },
    {
     key: "S",
     audio: "./src/misc/snipaudio/growl.wav",
     name: "Sunrise",
     id: "sunrise-button"
    },
    {
     key: "B",
     audio: "./src/misc/snipaudio/growl.wav",
     name: "Breakfast",
     id: "breakfast-button"
    },
    {
     key: "C",
     audio: "./src/misc/snipaudio/dino.wav",
     name: "Chatting with Birds",
     id: "birds-button"
    },
    {
     key: "E",
     audio: "./src/misc/snipaudio/growl.wav",
     name: "Emerging Hunger",
     id: "hunger-button"
    },
    {
     key: "D",
     audio: "./src/misc/snipaudio/dino.wav",
     name: "Dinner",
     id: "dinner-button"
    },
    {
     key: "Z",
     audio: "./src/misc/snipaudio/growl.wav",
     name: "Zoom",
     id: "zoom-button"
    },
    {
     key: "P",
     audio: "./src/misc/snipaudio/dino.wav",
     name: "The Perfect Blanket",
     id: "blanket-button"
    },
    {
     key: "A",
     audio: "./src/misc/snipaudio/growl.wav",
     name: "Watching Cars",
     id: "cars-button"
    },
    {
     key: "W",
     audio: "./src/misc/snipaudio/dino.wav",
     name: "We Like It Here",
     id: "we-like-it-button"
    }
],
wednesday: [
    {
     key: "A",
     audio: "./src/misc/snipaudio/dino.wav",
     name: "Another Sunrise",
     id: "another-sunrise-button"
    },
    {
     key: "C",
     audio: "./src/misc/snipaudio/growl.wav",
     name: "Catnip",
     id: "catnip-button"
    },
    {
     key: "M",
     audio: "./src/misc/snipaudio/growl.wav",
     name: "Machine Elves",
     id: "machine-elves-button"
    },
    {
     key: "L",
     audio: "./src/misc/snipaudio/dino.wav",
     name: "Leviathan",
     id: "leviathan-button"
    },
    {
     key: "B",
     audio: "./src/misc/snipaudio/growl.wav",
     name: "Behemoth",
     id: "behemoth-button"
    },
    {
     key: "S",
     audio: "./src/misc/snipaudio/dino.wav",
     name: "Space Dragon",
     id: "space-dragon-button"
    },
    {
     key: "D",
     audio: "./src/misc/snipaudio/growl.wav",
     name: "Another Dinner",
     id: "another-dinner-button"
    },
    {
     key: "W",
     audio: "./src/misc/snipaudio/dino.wav",
     name: "Watching More Cars",
     id: "watching-more-cars-button"
    },
    {
     key: "P",
     audio: "./src/misc/snipaudio/growl.wav",
     name: "Another Perfect Blanket",
     id: "another-perfect-blanket-button"
    },
    {
     key: "O",
     audio: "./src/misc/snipaudio/dino.wav",
     name: "Outro",
     id: "outro-button"
    }
]
}

export default spudsSnipsContent
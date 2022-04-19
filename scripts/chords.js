let chordObj = [];
function takeChord(chrd) {
c = chrd;

if(c != ""){
    if(!c.includes("m")) {
        if(!c.includes("7") && !c.includes("9")) {
            chordObj = [
                {
                    acronym: "C",
                    positions: [0,1,0,2,3,0],
                    fingers: [0,1,0,2,3,0],
                    nut: null,
                    disabled: [6],
                    variants: []
                },
                {
                    acronym: "C#",
                    positions: [0,2,0,3,4,0],
                    fingers: [0,2,0,3,4,0],
                    nut: [1,3],
                    disabled: [6],
                    variants: []
                },
                {
                    acronym: "D",
                    positions: [2,3,2,0,0,0],
                    fingers: [2,3,1,0,0,0],
                    nut: null,
                    disabled: [6,5],
                    variants: []
                },
                {
                    acronym: "D#",
                    positions: [3,4,3,1,0,0],
                    fingers: [3,4,2,1,0,0],
                    nut: null,
                    disabled: [6,5],
                    variants: []
                },
                {
                    acronym: "E",
                    positions: [0,0,1,2,2,0],
                    fingers: [0,0,1,3,2,0],
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "F",
                    positions: [0,0,2,3,3,0],
                    fingers: [0,0,2,4,3,0],
                    nut: [1,6],
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "F#",
                    positions: [0,0,3,4,4,0],
                    fingers: [0,0,2,4,3,0,],
                    nut: [2,6],
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "G",
                    positions: [3,0,0,0,2,3],
                    fingers: [3,0,0,0,1,2],
                    nut: null,
                    disabled: [],
                    variants: [4,6]
                },
                {
                    acronym: "G#",
                    positions: [0,0,5,6,6,0],
                    fingers: [0,0,2,4,3,0],
                    nut: [4,6],
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "A",
                    positions: [0,2,2,2,0,0],
                    fingers: [0,3,2,1,0,0],
                    nut: null,
                    disabled: [6],
                    variants: []
                },
                {
                    acronym: "A#",
                    positions: [0,3,3,3,0,0],
                    fingers: [0,4,3,2,0,0],
                    nut: [1,5],
                    disabled: [6],
                    variants: []
                },
                {
                    acronym: "B",
                    positions: [0,4,4,4,0,0],
                    fingers: [0,4,3,2,0,0],
                    nut: [2,5],
                    disabled: [6],
                    variants: []
                },
    
            ];
        }
        if(c.includes("7")) {
            chordObj = [
                {
                    acronym: "C7",
                    positions: [0,1,3,2,3,0],
                    fingers: [0,1,0,2,3,0],
                    nut: null,
                    disabled: [6,1],
                    variants: []
                },
                {
                    acronym: "C#7",
                    positions: [0,2,4,3,4,0],
                    fingers: [0,1,0,2,3,0],
                    nut: null,
                    disabled: [6,1],
                    variants: []
                },
                {
                    acronym: "D7",
                    positions: [2,1,2,0,0,0],
                    fingers: [3,2,1,0,0,0],
                    nut: null,
                    disabled: [6,5],
                    variants: []
                },
                {
                    acronym: "D#7",
                    positions: [3,2,3,1,0,0],
                    fingers: [4,2,3,1,0,0],
                    nut: null,
                    disabled: [6,5],
                    variants: []
                },
                {
                    acronym: "E7",
                    positions: [0,0,1,0,2,0],
                    fingers: [0,0,1,3,2,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "F7",
                    positions: [0,0,2,0,3,0],
                    fingers: [0,0,2,0,3,0],
                    nut: [1,6],
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "F#7",
                    positions: [0,0,3,0,4,0],
                    fingers: [0,0,2,0,3,0,],
                    nut: [2,6],
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "G7",
                    positions: [0,0,4,0,5,0],
                    fingers: [0,0,2,0,3,0],
                    nut: [3,6],
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "G#7",
                    positions: [0,0,5,0,6,0],
                    fingers: [0,0,2,0,3,0],
                    nut: [4,6],
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "A7",
                    positions: [0,2,0,2,0,0],
                    fingers: [0,2,0,1,0,0],
                    nut: null,
                    disabled: [6],
                    variants: []
                },
                {
                    acronym: "A#7",
                    positions: [0,3,0,3,0],
                    fingers: [0,4,0,3,0,0],
                    nut: [1,5],
                    disabled: [6],
                    variants: []
                },
                {
                    acronym: "B7",
                    positions: [0,0,2,1,2,0],
                    fingers: [0,0,3,1,2,0],
                    nut: null,
                    disabled: [6,1],
                    variants: []
                },
    
            ];
        }
        if(c.includes("9")) {
            chordObj = [
                {
                    acronym: "C9",
                    positions: [0,3,3,2,3,0],
                    fingers: [0,4,3,1,2,0],
                    nut: null,
                    disabled: [6,1],
                    variants: []
                },
                {
                    acronym: "C#9",
                    positions: [0,4,4,3,4,0],
                    fingers: [0,4,3,1,2,0],
                    nut: null,
                    disabled: [6,1],
                    variants: []
                },
                {
                    acronym: "D9",
                    positions: [0,5,5,4,5,0],
                    fingers: [0,4,3,1,2,0],
                    nut: null,
                    disabled: [6,1],
                    variants: []
                },
                {
                    acronym: "D#9",
                    positions: [1,2,0,1,0,0],
                    fingers: [3,4,0,1,0,0],
                    nut: null,
                    disabled: [6,5],
                    variants: []
    
                },
                {
                    acronym: "E9",
                    positions: [2,3,1,2,0,0],
                    fingers: [3,4,1,2,0,0],
                    nut: null,
                    disabled: [6,5],
                    variants: []
                },
                {
                    acronym: "F9",
                    positions: [3,4,2,3,0,0],
                    fingers: [3,4,1,2,0,0],
                    nut: null,
                    disabled: [6,5],
                    variants: []
                },
                {
                    acronym: "F#9",
                    positions: [4,5,3,4,0,0],
                    fingers: [3,4,1,2,0,0,],
                    nut: null,
                    disabled: [6,5],
                    variants: []
                },
                {
                    acronym: "G9",
                    positions: [5,6,4,5,0,0],
                    fingers: [3,4,1,2,0,0],
                    nut: null,
                    disabled: [6,5],
                    variants: []
                },
                {
                    acronym: "G#9",
                    positions: [6,7,5,6,0,0],
                    fingers: [3,4,1,2,0,0],
                    nut: null,
                    disabled: [6,5],
                    variants: []
                },
                {
                    acronym: "A9",
                    positions: [7,8,6,7,0,0],
                    fingers: [3,4,1,2,0,0],
                    nut: null,
                    disabled: [6,5],
                    variants: []
                },
                {
                    acronym: "A#9",
                    positions: [0,1,1,0,1,0],
                    fingers: [0,3,2,0,1,0],
                    nut: null,
                    disabled: [6,1],
                    variants: []
                },
                {
                    acronym: "B9",
                    positions: [0,2,2,1,2,0],
                    fingers: [0,4,3,1,2,0],
                    nut: null,
                    disabled: [6,1],
                    variants: []
                },
    
            ];
        }
        if(c.includes("7") && c.includes("9")) {
            chordObj = [
                {
                    acronym: "C7(9)",
                    positions: [0,3,3,2,3,0],
                    fingers: [0,4,3,1,2,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "C#7(9)",
                    positions: [0,4,4,3,4,0],
                    fingers: [0,4,3,1,2,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "D7(9)",
                    positions: [0,5,5,4,5,0],
                    fingers: [0,4,3,1,2,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "D#7(9)",
                    positions: [3,4,3,1,0,0],
                    fingers: [2,4,2,1,0,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "E7(9)",
                    positions: [2,3,1,0,0,0],
                    fingers: [2,3,1,0,0,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "F7(9)",
                    positions: [3,4,2,3,0,0],
                    fingers: [3,4,1,2,0,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "F#7(9)",
                    positions: [0,0,4,5,5,0],
                    fingers: [0,0,2,4,3,0,],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "G7(9)",
                    positions: [0,0,2,3,0,3],
                    fingers: [0,0,1,3,0,2],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "G#7(9)",
                    positions: [0,1,0,2,3,0],
                    fingers: [0,1,0,2,3,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "A7(9)",
                    positions: [0,2,4,5,0,0],
                    fingers: [0,1,3,4,0,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "A#7(9)",
                    positions: [0,3,3,3,0],
                    fingers: [0,4,3,2,0,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "B7(9)",
                    positions: [0,2,2,1,2,0],
                    fingers: [0,4,3,1,2,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
    
            ];
        }
            
        } else if(c.includes("m")){
           if(!c.includes("7") && !c.includes("9")) {
                chordObj = [
                    {
                        acronym: "Cm",
                        positions: [0,4,5,5,0,0],
                        fingers: [0,2,4,3,0,0],
                        nut: [3,5],
                        disabled: [6],
                        variants: []
                    },
                    {
                        acronym: "C#m",
                        positions: [0,5,6,6,0,0],
                        fingers: [0,2,4,3,0,0],
                        nut: [4,5],
                        disabled: [6],
                        variants: []
                    },
                    {
                        acronym: "Dm",
                        positions: [1,3,2,0,0,0],
                        fingers: [1,3,,0,0,0],
                        nut: null,
                        disabled: [6,5],
                        variants: []
                    },
                    {
                        acronym: "D#m",
                        positions: [2,4,3,1,0,0],
                        fingers: [2,4,3,1,0,0],
                        nut: null,
                        disabled: [6,5],
                        variants: []
                    },
                    {
                        acronym: "Em",
                        positions: [0,0,0,2,2,0],
                        fingers: [0,0,0,2,1,0],
                        nut: null,
                        disabled: [],
                        variants: []
                    },
                    {
                        acronym: "Fm",
                        positions: [0,0,0,3,3,0],
                        fingers: [0,0,0,4,3,0],
                        nut: [1,6],
                        disabled: [],
                        variants: []
                    },
                    {
                        acronym: "F#m",
                        positions: [0,0,0,4,4,0],
                        fingers: [0,0,0,4,3,0,],
                        nut: [2,6],
                        disabled: [],
                        variants: []
                    },
                    {
                        acronym: "Gm",
                        positions: [0,0,0,5,5,0],
                        fingers: [0,0,0,4,3,0],
                        nut:[3,6],
                        disabled: [],
                        variants: []
                    },
                    {
                        acronym: "G#m",
                        positions: [0,0,0,6,6,0],
                        fingers: [0,0,0,4,3,0],
                        nut: [4,6],
                        disabled: [],
                        variants: []
                    },
                    {
                        acronym: "Am",
                        positions: [0,1,2,2,0,0],
                        fingers: [0,1,3,2,0,0],
                        nut: null,
                        disabled: [6],
                        variants: []
                    },
                    {
                        acronym: "A#m",
                        positions: [0,2,3,3,0],
                        fingers: [0,2,4,3,0,0],
                        nut: [1,5],
                        disabled: [6],
                        variants: []
                    },
                    {
                        acronym: "Bm",
                        positions: [0,3,4,4,0],
                        fingers: [0,2,4,3,0,0],
                        nut: [2,5],
                        disabled: [6],
                        variants: []
                    },
    
                ];
           }
           if(c.includes("7")) {
                chordObj = [
                    {
                        acronym: "Cm7",
                        positions: [0,4,0,5,0,0],
                        fingers: [0,2,0,3,0,0],
                        nut: [3,5],
                        disabled: [6],
                        variants: []
                    },
                    {
                        acronym: "C#m7",
                        positions: [0,5,0,6,0,0],
                        fingers: [0,2,0,3,0,0],
                        nut: [4,5],
                        disabled: [6],
                        variants: []
                    },
                    {
                        acronym: "Dm7",
                        positions: [0,0,2,0,0,0],
                        fingers: [0,0,2,0,0,0],
                        nut: [1,2],
                        disabled: [6,5],
                        variants: []
                    },
                    {
                        acronym: "D#m7",
                        positions: [2,2,3,1,0,0],
                        fingers: [3,2,4,1,0,0],
                        nut: null,
                        disabled: [6,5],
                        variants: []
                    },
                    {
                        acronym: "Em7",
                        positions: [0,0,0,0,2,0],
                        fingers: [0,0,0,0,1,0],
                        nut: null,
                        disabled: [],
                        variants: []
                    },
                    {
                        acronym: "Fm7",
                        positions: [0,0,0,0,3,0],
                        fingers: [0,0,0,0,3,0],
                        nut: [1,6],
                        disabled: [],
                        variants: []
                    },
                    {
                        acronym: "F#m7",
                        positions: [0,0,0,0,4,0],
                        fingers: [0,0,0,0,3,0,],
                        nut: [2,6],
                        disabled: [],
                        variants: []
                    },
                    {
                        acronym: "Gm7",
                        positions: [0,0,0,0,5,0],
                        fingers: [0,0,0,0,3,0],
                        nut: [3,6],
                        disabled: [],
                        variants: []
                    },
                    {
                        acronym: "G#m7",
                        positions: [0,0,0,0,6,0],
                        fingers: [0,0,0,0,3,0],
                        nut: [4,6],
                        disabled: [],
                        variants: []
                    },
                    {
                        acronym: "Am7",
                        positions: [0,1,0,2,0,0],
                        fingers: [0,1,0,2,0,0],
                        nut: null,
                        disabled: [6],
                        variants: []
                    },
                    {
                        acronym: "A#m7",
                        positions: [0,2,0,3,0],
                        fingers: [0,2,0,3,0,0],
                        nut: [1,5],
                        disabled: [6],
                        variants: []
                    },
                    {
                        acronym: "Bm7",
                        positions: [0,3,0,4,0],
                        fingers: [0,2,0,3,0,0],
                        nut: [2,5],
                        disabled: [6],
                        variants: []
                    },
    
                ];
           }
           if(c.includes("9")) {
            chordObj = [
                {
                    acronym: "Cm9",
                    positions: [0,4,7,5,0,0],
                    fingers: [0,2,4,3,0,0],
                    nut: [3,6],
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "C#m9",
                    positions: [0,5,8,6,0,0],
                    fingers: [0,2,4,3,0,0],
                    nut: [4,6],
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "Dm9",
                    positions: [0,6,9,7,0,0],
                    fingers: [0,2,4,3,0,0],
                    nut: [5,6],
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "D#m9",
                    positions: [0,7,10,8,0,0],
                    fingers: [0,2,4,3,0,0],
                    nut: [6,6],
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "Em9",
                    positions: [0,0,0,4,2,0],
                    fingers: [0,0,0,3,1,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "Fm9",
                    positions: [0,0,0,5,3,0],
                    fingers: [0,0,0,3,2,0],
                    nut: [1,6],
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "F#m9",
                    positions: [0,0,0,6,4,0],
                    fingers: [0,0,0,3,2,0],
                    nut: [2,6],
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "Gm9",
                    positions: [0,0,0,7,5,0],
                    fingers: [0,0,0,3,2,0],
                    nut: [3,6],
                    disabled: [],
                    variants: [3,6]
                },
                {
                    acronym: "G#m9",
                    positions: [0,0,0,8,6,0],
                    fingers: [0,0,0,3,2,0],
                    nut: [4,6],
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "Am9",
                    positions: [0,1,4,2,0,0],
                    fingers: [0,1,3,2,0,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "A#m9",
                    positions: [0,2,5,3,0],
                    fingers: [0,4,3,2,0,0],
                    nut: [1,6],
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "Bm9",
                    positions: [0,3,6,4,0],
                    fingers: [0,2,4,3,0,0],
                    nut: [2,6],
                    disabled: [],
                    variants: []
                },
    
            ];
           }
           if(c.includes("7") && c.includes("9")) {
            chordObj = [
                {
                    acronym: "Cm7(9)",
                    positions: [0,1,0,2,3,0],
                    fingers: [0,1,0,2,3,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "C#m7(9)",
                    positions: [0,2,0,3,4,0],
                    fingers: [0,1,0,2,3,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "Dm7(9)",
                    positions: [2,3,2,0,0,0],
                    fingers: [2,3,1,0,0,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "D#m7(9)",
                    positions: [3,4,3,1,0,0],
                    fingers: [2,4,2,1,0,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "Em7(9)",
                    positions: [0,0,1,2,2,0],
                    fingers: [0,0,1,3,2,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "Fm7(9)",
                    positions: [0,0,2,3,3,0],
                    fingers: [0,1,0,2,3,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "F#m7(9)",
                    positions: [0,0,4,5,5,0],
                    fingers: [0,0,2,4,3,0,],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "Gm7(9)",
                    positions: [3,0,0,0,2,3],
                    fingers: [0,3,0,0,1,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "G#m7(9)",
                    positions: [0,1,0,2,3,0],
                    fingers: [0,1,0,2,3,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "Am7(9)",
                    positions: [0,2,2,2,0,0],
                    fingers: [0,3,2,1,0,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "A#m7(9)",
                    positions: [0,3,3,3,0],
                    fingers: [0,4,3,2,0,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
                {
                    acronym: "Bm7(9)",
                    positions: [0,3,3,3,0],
                    fingers: [0,4,3,2,0,0],
                    nut: null,
                    disabled: [],
                    variants: []
                },
    
            ];
           }
        }
}
}
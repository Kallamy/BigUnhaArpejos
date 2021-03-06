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
                    current: 1,
                    variants: [["B♭", 2], ["F", 7], ["x1", 7], ["x2", 7], ["x3", 7], ["E♭", 9]]
                },
                {
                    acronym: "C#",
                    positions: [0,2,0,3,4,0],
                    fingers: [0,2,0,3,4,0],
                    nut: [1,3],
                    disabled: [6],
                    current: 1,
                    variants: [["B♭", 3], ["F", 8], ["x1", 8], ["x2", 8], ["x3", 8], ["E♭", 10]]
                },
                {
                    acronym: "D",
                    positions: [2,3,2,0,0,0],
                    fingers: [2,3,1,0,0,0],
                    nut: null,
                    disabled: [6,5],
                    current: 1,
                    variants: [["C#", 1], ["B♭", 4], ["F", 9], ["x1", 9], ["x2", 9], ["x3", 9]]
                },
                {
                    acronym: "E♭",
                    positions: [3,4,3,1,0,0],
                    fingers: [3,4,2,1,0,0],
                    nut: null,
                    disabled: [6,5],
                    current: 1,
                    variants: [["C#", 2], ["B♭", 5], ["F", 10], ["x1", 10], ["x2", 10], ["x3", 10]]
                },
                {
                    acronym: "E",
                    positions: [0,0,1,2,2,0],
                    fingers: [0,0,1,3,2,0],
                    nut: null,
                    disabled: [],
                    current: 1,
                    variants: [["E♭", 1], ["C#", 3], ["B♭", 6]]
                },
                {
                    acronym: "F",
                    positions: [0,0,2,3,3,0],
                    fingers: [0,0,2,4,3,0],
                    nut: [1,6],
                    disabled: [],
                    current: 1,
                    variants: [["x1", 0], ["x2", 0], ["x3", 0], ["x5", 1], ["E♭", 2], ["C#", 4]]
                },
                {
                    acronym: "F#",
                    positions: [0,0,3,4,4,0],
                    fingers: [0,0,2,4,3,0,],
                    nut: [2,6],
                    disabled: [],
                    current: 1,
                    variants: [["x1", 1], ["x2", 1], ["x3", 1], ["E♭", 3], ["C#", 5], ["B♭", 8]]
                },
                {
                    acronym: "G",
                    positions: [3,0,0,0,2,3],
                    fingers: [3,0,0,0,1,2],
                    nut: null,
                    disabled: [],
                    current: 1,
                    variants: [["F", 2], ["x1", 2], ["x2", 2], ["x3", 2], ["E♭", 4], ["C#", 6]]
                },
                {
                    acronym: "A♭",
                    positions: [0,0,5,6,6,0],
                    fingers: [0,0,2,4,3,0],
                    nut: [4,6],
                    disabled: [],
                    current: 1,
                    variants: [["x1", 3], ["x2", 3], ["x3", 3], ["E♭", 5], ["C#", 7], ["B♭", 10]]
                },
                {
                    acronym: "A",
                    positions: [0,2,2,2,0,0],
                    fingers: [0,3,2,1,0,0],
                    nut: null,
                    disabled: [6],
                    current: 1,
                    variants: [["F", 4], ["x1", 4], ["x2", 4], ["x3", 4], ["E♭", 6], ["C#", 8]]
                },
                {
                    acronym: "B♭",
                    positions: [0,3,3,3,0,0],
                    fingers: [0,4,3,2,0,0],
                    nut: [1,5],
                    disabled: [6],
                    current: 1,
                    variants: [["F", 5], ["x1", 5], ["x2", 5], ["x3", 5], ["E♭", 7], ["C#", 9]]
                },
                {
                    acronym: "B",
                    positions: [0,4,4,4,0,0],
                    fingers: [0,4,3,2,0,0],
                    nut: [2,5],
                    disabled: [6],
                    current: 1,
                    variants: [["F", 6], ["x1", 6], ["x2", 6], ["x3", 6], ["E♭", 8], ["C#", 10]]
                },
                {
                    acronym: "x1",
                    positions: [0,1,2,3,3,0],
                    fingers: [0,1,2,4,3,0],
                    nut: null,
                    disabled: [6, 1],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "x2",
                    positions: [0,0,2,3,0,0],
                    fingers: [0,0,2,3,0,0],
                    nut: [1, 2],
                    disabled: [6, 5],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "x3",
                    positions: [0,0,2,3,3,1],
                    fingers: [0,0,2,4,3,1],
                    nut: null,
                    disabled: [2, 1],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "x4",
                    positions: [0,2,0,3,4,0],
                    fingers: [0,2,0,3,4,0],
                    nut: [1, 3],
                    disabled: [6],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "x5",
                    positions: [0,0,1,2,0,0],
                    fingers: [0,0,1,2,0,0],
                    nut: null,
                    disabled: [6, 5],
                    current: 1,
                    variants: []
                },
            ];
        }
        if(c.includes("7")) {
            chordObj = [
                {
                    acronym: "C7",
                    positions: [0,1,3,2,3,0],
                    fingers: [0,1,4,2,3,0],
                    nut: null,
                    disabled: [6,1],
                    current: 1,
                    variants: [["B♭7", 2], ["F7", 7], ["E♭7", 9]]
                },
                {
                    acronym: "C#7",
                    positions: [0,2,4,3,4,0],
                    fingers: [0,1,0,2,3,0],
                    nut: null,
                    disabled: [6,1],
                    current: 1,
                    variants: [["B♭7", 3], ["F7", 8], ["E♭7", 10]]
                },
                {
                    acronym: "D7",
                    positions: [2,1,2,0,0,0],
                    fingers: [3,2,1,0,0,0],
                    nut: null,
                    disabled: [6,5],
                    current: 1,
                    variants: [["C#7", 1], ["B♭7", 4], ["F7", 9]]
                },
                {
                    acronym: "E♭7",
                    positions: [3,2,3,1,0,0],
                    fingers: [4,2,3,1,0,0],
                    nut: null,
                    disabled: [6,5],
                    current: 1,
                    variants: [["C#7", 2], ["B♭7", 5], ["F7", 10]]
                },
                {
                    acronym: "E7",
                    positions: [0,0,1,0,2,0],
                    fingers: [0,0,1,3,2,0],
                    nut: null,
                    disabled: [],
                    current: 1,
                    variants: [["E♭7", 1], ["C7", 4], ["B♭7", 6]]
                },
                {
                    acronym: "F7",
                    positions: [0,0,2,0,3,0],
                    fingers: [0,0,2,0,3,0],
                    nut: [1,6],
                    disabled: [],
                    current: 1,
                    variants: [["E♭7", 2], ["C7", 5], ["B♭7", 7]]
                },
                {
                    acronym: "F#7",
                    positions: [0,0,3,0,4,0],
                    fingers: [0,0,2,0,3,0,],
                    nut: [2,6],
                    disabled: [],
                    current: 1,
                    variants: [["E♭7", 3], ["C7", 6], ["B♭7", 8]]
                },
                {
                    acronym: "G7",
                    positions: [0,0,4,0,5,0],
                    fingers: [0,0,2,0,3,0],
                    nut: [3,6],
                    disabled: [],
                    current: 1,
                    variants: [["E♭7", 4], ["C7", 7], ["B♭7", 9]]
                },
                {
                    acronym: "A♭7",
                    positions: [0,0,5,0,6,0],
                    fingers: [0,0,2,0,3,0],
                    nut: [4,6],
                    disabled: [],
                    current: 1,
                    variants: [["E♭7", 5], ["C7", 8], ["B♭7", 10]]
                },
                {
                    acronym: "A7",
                    positions: [0,2,0,2,0,0],
                    fingers: [0,2,0,1,0,0],
                    nut: null,
                    disabled: [6],
                    current: 1,
                    variants: [["F7", 4], ["E♭7", 6], ["C7", 9]]
                },
                {
                    acronym: "B♭7",
                    positions: [0,3,0,3,0],
                    fingers: [0,4,0,3,0,0],
                    nut: [1,5],
                    disabled: [6],
                    current: 1,
                    variants: [["F7", 5], ["E♭7", 7], ["C7", 10]]
                },
                {
                    acronym: "B7",
                    positions: [2,0,2,1,2,0],
                    fingers: [4,0,3,1,2,0],
                    nut: null,
                    disabled: [6,1],
                    current: 1,
                    variants: [["B♭7", 1], ["F7", 6], ["E♭7", 8]]
                },
    
            ];
        }
        if(c.includes("9")) {
            chordObj = [
                {
                    acronym: "C9",
                    positions: [0,3,0,2,3,0],
                    fingers: [0,3,0,1,2,0],
                    nut: null,
                    disabled: [6],
                    current: 1,
                    variants: [["x1", 0], ["B♭9", 2]]
                },
                {
                    acronym: "C#9",
                    positions: [0,0,6,6,0,0],
                    fingers: [0,3,4,2,0,0],
                    nut: [4,5],
                    disabled: [6],
                    current: 1,
                    variants: [["x2", 3], ["B♭9", 2], ["F#9", 7]]
                },
                {
                    acronym: "D9",
                    positions: [0,3,2,0,0,0],
                    fingers: [0,2,1,0,0,0],
                    nut: null,
                    disabled: [6,5],
                    current: 1,
                    variants: [["B♭9", 4]]
                },
                {
                    acronym: "E♭9",
                    positions: [0,0,8,8,0,0],
                    fingers: [0,0,3,2,0,0],
                    nut: [6,5],
                    disabled: [6,5],
                    current: 1,
                    variants: [["B♭9", 5], ["x2", 5]]
    
                },
                {
                    acronym: "E9",
                    positions: [0,0,1,4,2,0],
                    fingers: [0,0,1,4,2,0],
                    nut: null,
                    disabled: [],
                    current: 1,
                    variants: [["B♭9", 6]]
                },
                {
                    acronym: "F9",
                    positions: [3,1,2,3,0,0],
                    fingers: [4,1,2,3,0,0],
                    nut: null,
                    disabled: [6,5],
                    current: 1,
                    variants: [["x2", 0], ["x3", 0], ["B♭9", 7], ["x1", 5]]
                },
                {
                    acronym: "F#9",
                    positions: [0,3,6,4,0,0],
                    fingers: [0,2,4,3,0,0],
                    nut: [2,6],
                    disabled: [],
                    current: 1,
                    variants: [["B♭9", 8]]
                },
                {
                    acronym: "G9",
                    positions: [0,0,2,0,0,3],
                    fingers: [0,0,1,0,0,2],
                    nut: null,
                    disabled: [5,1],
                    current: 1,
                    variants: [["x4", 0], ["x5", 0], ["F#9", 1], ["B♭9", 9]]
                },
                {
                    acronym: "A♭9",
                    positions: [0,0,5,8,6,0],
                    fingers: [0,0,2,4,3,0],
                    nut: [4,6],
                    disabled: [6,5],
                    current: 1,
                    variants: [["B♭9", 10]]
                },
                {
                    acronym: "A9",
                    positions: [0,2,4,2,0,0],
                    fingers: [0,2,3,1,0,0],
                    nut: null,
                    disabled: [6],
                    current: 1,
                    variants: [["x6", 0], ["x7", 5]]
                },
                {
                    acronym: "B♭9",
                    positions: [0,0,3,3,0,0],
                    fingers: [0,0,3,2,0,0],
                    nut: [1,5],
                    disabled: [6],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "B9",
                    positions: [0,0,4,4,0,0],
                    fingers: [0,0,3,2,0,0],
                    nut: [2,5],
                    disabled: [6],
                    current: 1,
                    variants: [["F#9", 5]]
                },
                {
                    acronym: "x1",
                    positions: [3,3,0,2,3,0],
                    fingers: [4,3,0,1,2,0],
                    nut: null,
                    disabled: [6],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "x2",
                    positions: [0,1,0,3,0,1],
                    fingers: [0,2,0,3,0,1],
                    nut: null,
                    disabled: [5, 1],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "x3",
                    positions: [3,1,0,2,0,0],
                    fingers: [3,1,0,2,0,0],
                    nut: null,
                    disabled: [6,5],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "x4",
                    positions: [0,3,2,0,0,3],
                    fingers: [0,3,1,0,0,2],
                    nut: null,
                    disabled: [5, 1],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "x5",
                    positions: [3,3,2,0,0,3],
                    fingers: [4,3,1,0,0,2],
                    nut: null,
                    disabled: [6,5],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "x6",
                    positions: [0,0,2,2,0,0],
                    fingers: [0,0,2,1,0,0],
                    nut: null,
                    disabled: [6],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "x7",
                    positions: [0,0,1,2,0,0],
                    fingers: [0,0,2,3,1,0],
                    nut: null,
                    disabled: [6,5],
                    current: 1,
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
                    disabled: [6,1],
                    current: 1,
                    variants: [["A♭7(9)", 4], ["x1", 6], ["x2", 6]]
                },
                {
                    acronym: "C#7(9)",
                    positions: [0,4,4,3,4,0],
                    fingers: [0,4,3,1,2,0],
                    nut: null,
                    disabled: [6,1],
                    current: 1,
                    variants: [["A♭7(9)", 5], ["x1", 7], ["x2", 7]]
                },
                {
                    acronym: "D7(9)",
                    positions: [0,5,5,4,5,0],
                    fingers: [0,4,3,1,2,0],
                    nut: null,
                    disabled: [6,1],
                    current: 1,
                    variants: [["A♭7(9)", 6], ["x2", 8]]
                },
                {
                    acronym: "E♭7(9)",
                    positions: [1,2,0,1,0,0],
                    fingers: [2,3,0,1,0,0],
                    nut: null,
                    disabled: [6,5],
                    current: 1,
                    variants: [["B7(9)#", 4]]
                },
                {
                    acronym: "E7(9)",
                    positions: [2,3,1,2,0,0],
                    fingers: [3,4,1,2,0,0],
                    nut: null,
                    disabled: [6,5],
                    current: 1,
                    variants: [["B7(9)", 5]]
                },
                {
                    acronym: "F7(9)",
                    positions: [3,4,2,3,0,0],
                    fingers: [3,4,1,2,0,0],
                    nut: null,
                    disabled: [6,5],
                    current: 1,
                    variants: [["x5", 0], ["B7(9)", 6]]
                },
                {
                    acronym: "F#7(9)",
                    positions: [4,5,3,4,0,0],
                    fingers: [3,4,1,2,0,0],
                    nut: null,
                    disabled: [6,5],
                    current: 1,
                    variants: [["x6", 0], ["x7", 0], ["B7(9)", 7]]
                },
                {
                    acronym: "G7(9)",
                    positions: [0,0,2,3,0,3],
                    fingers: [0,0,1,3,0,2],
                    nut: null,
                    disabled: [5,1],
                    current: 1,
                    variants: [["x6", 1], ["x7", 1], ["E7(9)", 3], ["B7(9)", 8]]
                },
                {
                    acronym: "A♭7(9)",
                    positions: [0,1,3,4,0,4],
                    fingers: [0,1,2,4,3,0],
                    nut: null,
                    disabled: [5,1],
                    current: 1,
                    variants: [["x6", 2], ["x7", 2]]
                },
                {
                    acronym: "A7(9)",
                    positions: [0,2,4,5,0,0],
                    fingers: [0,1,2,3,0,0],
                    nut: null,
                    disabled: [6],
                    current: 1,
                    variants: [["x6", 3], ["x7", 3]]
                },
                {
                    acronym: "B♭7(9)",
                    positions: [0,1,1,0,1,0],
                    fingers: [0,3,2,0,1,0],
                    nut: null,
                    disabled: [6,1],
                    current: 1,
                    variants: [["x6", 4], ["x7", 4]]
                },
                {
                    acronym: "B7(9)",
                    positions: [0,2,2,1,2,0],
                    fingers: [0,4,3,1,2,0],
                    nut: null,
                    disabled: [6,1],
                    current: 1,
                    variants: [["A♭7(9)", 3], ["x6", 5], ["x7", 5], ["E7(9)", 7]]
                },
                {
                    acronym: "x1",
                    positions: [0,2,1,2,0,2],
                    fingers: [0,4,1,3,0,2],
                    nut: null,
                    disabled: [5,1],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "x2",
                    positions: [0,0,1,2,1,2],
                    fingers: [0,0,2,4,1,3],
                    nut: null,
                    disabled: [2,1],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "x3",
                    positions: [0,2,2,1,0,0],
                    fingers: [0,3,2,1,0,0],
                    nut: null,
                    disabled: [5,1],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "x4",
                    positions: [0,0,0,1,0,1],
                    fingers: [0,0,0,2,0,1],
                    nut: null,
                    disabled: [5,2,1],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "x5",
                    positions: [0,1,0,1,0,1],
                    fingers: [0,0,0,2,0,1],
                    nut: null,
                    disabled: [5,1],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "x6",
                    positions: [0,0,1,2,1,2],
                    fingers: [0,0,2,4,1,3],
                    nut: null,
                    disabled: [2,1],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "x7",
                    positions: [0,2,1,2,0,2],
                    fingers: [0,4,1,3,0,2],
                    nut: null,
                    disabled: [5],
                    current: 1,
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
                        current: 1,
                        variants: [["Fm", 7], ["E♭m", 9]]
                    },
                    {
                        acronym: "C#m",
                        positions: [0,5,6,6,0,0],
                        fingers: [0,2,4,3,0,0],
                        nut: [4,5],
                        disabled: [6],
                        current: 1,
                        variants: [["Fm", 8], ["E♭m", 10]]
                    },
                    {
                        acronym: "Dm",
                        positions: [1,3,2,0,0,0],
                        fingers: [1,3,0,0,0,0],
                        nut: null,
                        disabled: [6,5],
                        current: 1,
                        variants: [["B♭m", 4], ["Fm", 9]]
                    },
                    {
                        acronym: "E♭m",
                        positions: [2,4,3,1,0,0],
                        fingers: [2,4,3,1,0,0],
                        nut: null,
                        disabled: [6,5],
                        current: 1,
                        variants: [["B♭m", 5], ["Fm", 10]]
                    },
                    {
                        acronym: "Em",
                        positions: [0,0,0,2,2,0],
                        fingers: [0,0,0,2,1,0],
                        nut: null,
                        disabled: [],
                        current: 1,
                        variants: [["E♭m", 1], ["B♭m", 6]]
                    },
                    {
                        acronym: "Fm",
                        positions: [0,0,0,3,3,0],
                        fingers: [0,0,0,4,3,0],
                        nut: [1,6],
                        disabled: [],
                        current: 1,
                        variants: [["E♭m", 2], ["B♭m", 7]]
                    },
                    {
                        acronym: "F#m",
                        positions: [0,0,0,4,4,0],
                        fingers: [0,0,0,4,3,0,],
                        nut: [2,6],
                        disabled: [],
                        current: 1,
                        variants: [["E♭m", 3], ["B♭m", 8]]
                    },
                    {
                        acronym: "Gm",
                        positions: [0,0,0,5,5,0],
                        fingers: [0,0,0,4,3,0],
                        nut:[3,6],
                        disabled: [],
                        current: 1,
                        variants: [["E♭m", 4], ["B♭m", 9]]
                    },
                    {
                        acronym: "A♭m",
                        positions: [0,0,0,6,6,0],
                        fingers: [0,0,0,4,3,0],
                        nut: [4,6],
                        disabled: [],
                        current: 1,
                        variants: [["E♭m", 5], ["B♭m", 10]]
                    },
                    {
                        acronym: "Am",
                        positions: [0,1,2,2,0,0],
                        fingers: [0,1,3,2,0,0],
                        nut: null,
                        disabled: [6],
                        current: 1,
                        variants: [["Fm", 4], ["E♭m", 6]]
                    },
                    {
                        acronym: "B♭m",
                        positions: [0,2,3,3,0],
                        fingers: [0,2,4,3,0,0],
                        nut: [1,5],
                        disabled: [6],
                        current: 1,
                        variants: [["Fm", 5], ["E♭m", 7]]
                    },
                    {
                        acronym: "Bm",
                        positions: [0,3,4,4,0],
                        fingers: [0,2,4,3,0,0],
                        nut: [2,5],
                        disabled: [6],
                        current: 1,
                        variants: [["Fm", 6], ["E♭m", 8]]
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
                        current: 1,
                        variants: [["Fm7", 7], ["E♭m7", 8]]
                    },
                    {
                        acronym: "C#m7",
                        positions: [0,5,0,6,0,0],
                        fingers: [0,2,0,3,0,0],
                        nut: [4,5],
                        disabled: [6],
                        current: 1,
                        variants: [["Fm7", 8], ["E♭m7", ]]
                    },
                    {
                        acronym: "Dm7",
                        positions: [0,0,2,0,0,0],
                        fingers: [0,0,2,0,0,0],
                        nut: [1,2],
                        disabled: [6,5],
                        current: 1,
                        variants: [["B♭m7", 4], ["Fm7", 9]]
                    },
                    {
                        acronym: "E♭m7",
                        positions: [3,3,4,2,0,0],
                        fingers: [3,2,4,1,0,0],
                        nut: null,
                        disabled: [6,5],
                        current: 1,
                        variants: [["B♭m7", 5], ["Fm7", 10]]
                    },
                    {
                        acronym: "Em7",
                        positions: [0,0,0,0,2,0],
                        fingers: [0,0,0,0,1,0],
                        nut: null,
                        disabled: [],
                        current: 1,
                        variants: [["E♭m7", 1], ["B♭m7", 6]]
                    },
                    {
                        acronym: "Fm7",
                        positions: [0,0,0,0,3,0],
                        fingers: [0,0,0,0,3,0],
                        nut: [1,6],
                        disabled: [],
                        current: 1,
                        variants: [["E♭m7", 2], ["B♭m7", 7]]
                    },
                    {
                        acronym: "F#m7",
                        positions: [0,0,0,0,4,0],
                        fingers: [0,0,0,0,3,0,],
                        nut: [2,6],
                        disabled: [],
                        current: 1,
                        variants: [["E♭m7", 3], ["B♭m7", 8]]
                    },
                    {
                        acronym: "Gm7",
                        positions: [0,0,0,0,5,0],
                        fingers: [0,0,0,0,3,0],
                        nut: [3,6],
                        disabled: [],
                        current: 1,
                        variants: [["E♭m7", 4], ["B♭m7", 9]]
                    },
                    {
                        acronym: "A♭m7",
                        positions: [0,0,0,0,6,0],
                        fingers: [0,0,0,0,3,0],
                        nut: [4,6],
                        disabled: [],
                        current: 1,
                        variants: [["E♭m7", 5], ["B♭m7", 10]]
                    },
                    {
                        acronym: "Am7",
                        positions: [0,1,0,2,0,0],
                        fingers: [0,1,0,2,0,0],
                        nut: null,
                        disabled: [6],
                        current: 1,
                        variants: [["Fm7", 4], ["E♭m7", 6]]
                    },
                    {
                        acronym: "B♭m7",
                        positions: [0,2,0,3,0,0],
                        fingers: [0,2,0,3,0,0],
                        nut: [1,5],
                        disabled: [6],
                        current: 1,
                        variants: [["Fm7", 5], ["E♭m7", 7]]
                    },
                    {
                        acronym: "Bm7",
                        positions: [0,3,0,4,0],
                        fingers: [0,2,0,3,0,0],
                        nut: [2,5],
                        disabled: [6],
                        current: 1,
                        variants: [["Fm7", 6], ["E♭m7", 8]]
                    },
    
                ];
           }
           if(c.includes("9")) {
            chordObj = [
                {
                    acronym: "Cm9",
                    positions: [0,3,0,1,3,0],
                    fingers: [0,3,0,1,2,0],
                    disabled: [6,1],
                    current: 1,
                    variants: [["B♭m9", 2]]
                },
                {
                    acronym: "C#m9",
                    positions: [0,5,8,6,0,0],
                    fingers: [0,2,4,3,0,0],
                    nut: [4,5],
                    disabled: [6],
                    current: 1,
                    variants: [["Fm9", 8], ["x1", 8]]
                },
                {
                    acronym: "Dm9",
                    positions: [0,6,9,7,0,0],
                    fingers: [0,2,4,3,0,0],
                    nut: [5,5],
                    disabled: [6],
                    current: 1,
                    variants: [["Fm9", 9], ["x1", 9]]
                },
                {
                    acronym: "E♭m9",
                    positions: [0,7,10,8,0,0],
                    fingers: [0,2,4,3,0,0],
                    nut: [6,5],
                    disabled: [6],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "Em9",
                    positions: [0,0,0,4,2,0],
                    fingers: [0,0,0,3,1,0],
                    nut: null,
                    disabled: [],
                    current: 1,
                    variants: [["x2", 3], ["B♭m9", 6]]
                },
                {
                    acronym: "Fm9",
                    positions: [0,0,0,5,3,0],
                    fingers: [0,0,0,3,2,0],
                    nut: [1,6],
                    disabled: [],
                    current: 1,
                    variants: [["B♭m9", 7]]
                },
                {
                    acronym: "F#m9",
                    positions: [0,0,0,6,4,0],
                    fingers: [0,0,0,3,2,0],
                    nut: [2,6],
                    disabled: [],
                    current: 1,
                    variants: [["x1", 1]]
                },
                {
                    acronym: "Gm9",
                    positions: [0,0,0,7,5,0],
                    fingers: [0,0,0,3,2,0],
                    nut: [3,6],
                    disabled: [],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "A♭m9",
                    positions: [0,0,0,8,6,0],
                    fingers: [0,0,0,3,2,0],
                    nut: [4,6],
                    disabled: [],
                    current: 1,
                    variants: ["x1", 3]
                },
                {
                    acronym: "Am9",
                    positions: [0,1,4,2,0,0],
                    fingers: [0,1,3,2,0,0],
                    nut: null,
                    disabled: [6],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "B♭m9",
                    positions: [0,2,5,3,0,0],
                    fingers: [0,4,3,2,0,0],
                    nut: [1,5],
                    disabled: [6],
                    current: 1,
                    variants: [["Fm9", 5]]
                },
                {
                    acronym: "Bm9",
                    positions: [0,3,6,4,0,0],
                    fingers: [0,2,4,3,0,0],
                    nut: [2,5],
                    disabled: [6],
                    current: 1,
                    variants: [["Fm9", 6], ["x1", ]]
                },
                {
                    acronym: "x1",
                    positions: [3,1,1,3,0,0],
                    fingers: [4,2,1,3,0,0],
                    nut: null,
                    disabled: [6,5],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "x2",
                    positions: [2,0,0,2,0,0],
                    fingers: [2,0,0,1,0,0],
                    nut: null,
                    disabled: [6,5],
                    current: 1,
                    variants: []
                },
    
            ];
           }
           if(c.includes("7") && c.includes("9")) {
            chordObj = [
                {
                    acronym: "Cm7(9)",
                    positions: [0,3,3,1,3,0],
                    fingers: [0,4,3,1,2,0],
                    nut: null,
                    disabled: [6,1],
                    current: 1,
                    variants: [["Gm7(9)", 5], ["F#m7(9)", 7], ["x1", 7]]
                },
                {
                    acronym: "C#m7(9)",
                    positions: [0,4,4,2,4,0],
                    fingers: [0,4,3,1,2,0],
                    nut: null,
                    disabled: [6,1],
                    current: 1,
                    variants: [["Gm7(9)", 6]]
                },
                {
                    acronym: "Dm7(9)",
                    positions: [0,5,5,3,5,0],
                    fingers: [0,4,3,1,2,0],
                    nut: null,
                    disabled: [6,1],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "E♭m7(9)",
                    positions: [0,6,6,4,6,0],
                    fingers: [0,4,3,1,2,0],
                    nut: null,
                    disabled: [6,1],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "Em7(9)",
                    positions: [2,3,0,0,2,0],
                    fingers: [2,3,0,0,1,0],
                    nut: null,
                    disabled: [],
                    current: 1,
                    variants: [["x2", 1], ["x3", 1], ["x4", 1], ["Cm7(9)", 4]]
                },
                {
                    acronym: "Fm7(9)",
                    positions: [3,4,0,0,3,0],
                    fingers: [3,4,0,0,2,0],
                    nut: [1,6],
                    disabled: [],
                    current: 1,
                    variants: [["x5", 0], ["Cm7(9)", 5]]
                },
                {
                    acronym: "F#m7(9)",
                    positions: [0,0,1,2,0,2],
                    fingers: [0,0,1,3,0,2],
                    nut: null,
                    disabled: [],
                    current: 1,
                    variants: [["x1", 1], ["Fm7(9)", 1], ["Cm7(9)", 6]]
                },
                {
                    acronym: "Gm7(9)",
                    positions: [0,0,2,3,1,3],
                    fingers: [0,0,2,4,1,3],
                    nut: null,
                    disabled: [2,1],
                    current: 1,
                    variants: [["x1", 2], ["Cm7(9)", 7]]
                },
                {
                    acronym: "A♭m7(9)",
                    positions: [0,0,3,4,2,4],
                    fingers: [0,0,2,4,1,3],
                    nut: null,
                    disabled: [2,1],
                    current: 1,
                    variants: [["x1", 3], ["Cm7(9)", 7]]
                },
                {
                    acronym: "Am7(9)",
                    positions: [0,0,4,5,3,5],
                    fingers: [0,0,2,4,1,3],
                    nut: null,
                    disabled: [2,1],
                    current: 1,
                    variants: [["x1", 4]]
                },
                {
                    acronym: "B♭m7(9)",
                    positions: [0,0,5,6,4,6],
                    fingers: [0,0,2,4,1,3],
                    nut: null,
                    disabled: [2,1],
                    current: 1,
                    variants: [["x1", 5]]
                },
                {
                    acronym: "Bm7(9)",
                    positions: [0,2,2,0,2,0],
                    fingers: [0,3,2,0,1,0],
                    nut: null,
                    disabled: [6,1],
                    current: 1,
                    variants: [["Gm7(9)", 4], ["x1", 6]]
                },
                {
                    acronym: "x1",
                    positions: [3,4,1,3,0,0],
                    fingers: [3,4,1,2,0,0],
                    nut: null,
                    disabled: [6,5],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "x2",
                    positions: [1,2,0,1,0,0],
                    fingers: [2,3,0,1,0,0],
                    nut: null,
                    disabled: [6,5],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "x3",
                    positions: [1,2,0,0,0,0],
                    fingers: [2,3,0,0,0,0],
                    nut: null,
                    disabled: [5,4],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "x4",
                    positions: [1,2,3,4,0,0],
                    fingers: [1,2,3,4,0,0],
                    nut: null,
                    disabled: [5],
                    current: 1,
                    variants: []
                },
                {
                    acronym: "x5",
                    positions: [3,4,1,3,0,0],
                    fingers: [3,4,1,2,0,0],
                    nut: null,
                    disabled: [6,5],
                    current: 1,
                    variants: []
                },
    
            ];
           }
        }
    }
}
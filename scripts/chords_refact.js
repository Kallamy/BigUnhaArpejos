let chordObj = [];
function takeChord(chrd) {
c = chrd;
console.log("Olá")
if(c != ""){
    chordObj = [
        {
            acronym: "C",
            positions: [],
            fingers: [],
            nut: null,
            disabled: [],
            current: 1,
            variants: []
        },
        {
            acronym: "C#",
            positions: [],
            fingers: [],
            nut: null,
            disabled: [],
            current: 1,
            variants: []
        },
        {
            acronym: "D",
            positions: [],
            fingers: [],
            nut: null,
            disabled: [],
            current: 1,
            variants: []
        },
        {
            acronym: "D#",
            positions: [],
            fingers: [],
            nut: null,
            disabled: [],
            current: 1,
            variants: []
        },
        {
            acronym: "E",
            positions: [],
            fingers: [],
            nut: null,
            disabled: [],
            current: 1,
            variants: []
        },
        {
            acronym: "F",
            positions: [],
            fingers: [],
            nut: null,
            disabled: [],
            current: 1,
            variants: []
        },
        {
            acronym: "F#",
            positions: [],
            fingers: [],
            nut: null,
            disabled: [],
            current: 1,
            variants: []
        },
        {
            acronym: "G",
            positions: [],
            fingers: [],
            nut: null,
            disabled: [],
            current: 1,
            variants: []
        },
        {
            acronym: "G#",
            positions: [],
            fingers: [],
            nut: null,
            disabled: [],
            current: 1,
            variants: []
        },
        {
            acronym: "A",
            positions: [],
            fingers: [],
            nut: null,
            disabled: [],
            current: 1,
            variants: []
        },
        {
            acronym: "A#",
            positions: [],
            fingers: [],
            nut: null,
            disabled: [],
            current: 1,
            variants: []
        },
        {
            acronym: "B",
            positions: [],
            fingers: [],
            nut: null,
            disabled: [],
            current: 1,
            variants: []
        },
        {
            acronym: "x1",
            positions: [],
            fingers: [],
            nut: null,
            disabled: [],
            current: 1,
            variants: []
        },
        {
            acronym: "x2",
            positions: [],
            fingers: [],
            nut: null,
            disabled: [],
            current: 1,
            variants: []
        },
        {
            acronym: "x3",
            positions: [],
            fingers: [],
            nut: null,
            disabled: [],
            current: 1,
            variants: []
        },
        {
            acronym: "x4",
            positions: [],
            fingers: [],
            nut: null,
            disabled: [],
            current: 1,
            variants: []
        },
        {
            acronym: "x5",
            positions: [],
            fingers: [],
            nut: null,
            disabled: [],
            current: 1,
            variants: []
        },
    ];

    if(!c.includes("m")) {
        if(!c.includes("7") && !c.includes("9")) {
            // C
            chordObj[0].positions = [0,1,0,2,3,0];
            chordObj[0].fingers = [0,1,0,2,3,0];
            chordObj[0].nut = null;
            chordObj[0].disabled = [6];
            chordObj[0].variants = [["A#", 2], ["F", 7], ["x1", 7], ["x2", 7], ["x3", 7], ["D#", 9]];
            // C# 
            chordObj[1].positions = [0,2,0,3,4,0];
            chordObj[1].fingers = [0,2,0,3,4,0];
            chordObj[1].nut = [1,3];
            chordObj[1].disabled = [6];
            chordObj[1].variants = [["A#", 3], ["F", 8], ["x1", 8], ["x2", 8], ["x3", 8], ["D#", 10]];
            // D
            chordObj[2].positions = [2,3,2,0,0,0];
            chordObj[2].fingers = [2,3,1,0,0,0];
            chordObj[2].nut = null;
            chordObj[2].disabled = [6,5];
            chordObj[2].variants = [["C#", 1], ["A#", 4], ["F", 9], ["x1", 9], ["x2", 9], ["x3", 9]]
            // D#
            chordObj[3].positions = [3,4,3,1,0,0];
            chordObj[3].fingers = [3,4,2,1,0,0];
            chordObj[3].nut = null;
            chordObj[3].disabled = [6,5];
            chordObj[3].variants = [["C#", 2], ["A#", 5], ["F", 10], ["x1", 10], ["x2", 10], ["x3", 10]]
            // E
            chordObj[4].positions = [0,0,1,2,2,0];
            chordObj[4].fingers = [0,0,1,3,2,0];
            chordObj[4].nut = null;
            chordObj[4].disabled = [];
            chordObj[4].variants = [["D#", 1], ["C#", 3], ["A#", 6]]
            //F
            chordObj[5].positions = [0,0,2,3,3,0];
            chordObj[5].fingers = [0,0,2,4,3,0];
            chordObj[5].nut = [1,6];
            chordObj[5].disabled = [];
            chordObj[5].variants = [["x2", 0], ["x3", 0], ["x4", 0], ["x5", 1], ["D#", 2], ["C#", 4]];
            // F#
            chordObj[6].positions = [0,0,3,4,4,0];
            chordObj[6].fingers = [0,0,2,4,3,0,];
            chordObj[6].nut = null;
            chordObj[6].disabled = [2,6];
            chordObj[6].variants = [["x1", 1], ["x2", 1], ["x3", 1], ["D#", 3], ["C#", 5], ["A#", 8]];
            // G
            chordObj[7].positions = [3,0,0,0,2,3];
            chordObj[7].fingers = [3,0,0,0,1,2];
            chordObj[7].nut = null;
            chordObj[7].disabled = [];
            chordObj[7].variants = [["F", 2], ["x1", 2], ["x2", 2], ["x3", 2], ["D#", 4], ["C#", 6]];
            // G#
            chordObj[8].positions = [0,0,5,6,6,0];
            chordObj[8].fingers = [0,0,2,4,3,0];
            chordObj[8].nut = [4,6];
            chordObj[8].disabled = [];
            chordObj[8].variants = [["x1", 3], ["x2", 3], ["x3", 3], ["D#", 5], ["C#", 7], ["A#", 10]];
            // A
            chordObj[9].positions = [0,2,2,2,0,0];
            chordObj[9].fingers = [0,3,2,1,0,0];
            chordObj[9].nut = null;
            chordObj[9].disabled = [6];
            chordObj[9].variants = [["F", 4], ["x1", 4], ["x2", 4], ["x3", 4], ["D#", 6], ["C#", 8]];
            // A#
            chordObj[10].positions = [0,3,3,3,0,0];
            chordObj[10].fingers = [0,4,3,2,0,0];
            chordObj[10].nut = [1,5];
            chordObj[10].disabled = [6];
            chordObj[10].variants = [["F", 5], ["x1", 5], ["x2", 5], ["x3", 5], ["D#", 7], ["C#", 9]];
            // B
            chordObj[11].positions = [0,4,4,4,0,0];
            chordObj[11].fingers = [0,4,3,2,0,0];
            chordObj[11].nut = [2,5];
            chordObj[11].disabled = [6];
            chordObj[11].variants = [["F", 6], ["x1", 6], ["x2", 6], ["x3", 6], ["D#", 8], ["C#", 10]];
            // x1
            chordObj[12].positions = [0,1,2,3,3,0];
            chordObj[12].fingers = [0,1,2,4,3,0];
            chordObj[12].nut = null;
            chordObj[12].disabled = [6,1];
            // x2
            chordObj[13].positions = [0,0,2,3,0,0];
            chordObj[13].fingers = [0,0,2,3,0,0];
            chordObj[13].nut = [1,2];
            chordObj[13].disabled = [6,5];
            // x3
            chordObj[14].positions = [0,0,2,3,3,1];
            chordObj[14].fingers = [0,0,2,4,3,1];
            chordObj[14].nut = null;
            chordObj[14].disabled = [2,1];
            // x4
            chordObj[15].positions = [0,0,2,3,0,0];
            chordObj[15].fingers = [0,0,2,3,0,0];
            chordObj[15].nut = [1,2];
            chordObj[15].disabled = [6,1];
            // x5
            chordObj[16].positions = [0,0,1,2,0,0];
            chordObj[16].fingers = [0,0,1,2,0,0];
            chordObj[16].nut = null;
            chordObj[16].disabled = [6,5];
        }
        if(c.includes("7")) {
            // C
            chordObj[0].positions = [0,1,0,2,3,0];
            chordObj[0].fingers = [0,1,0,2,3,0];
            chordObj[0].nut = null;
            chordObj[0].disabled = [6];
            chordObj[0].variants = [["A#", 2], ["F", 7], ["x1", 7], ["x2", 7], ["x3", 7], ["D#", 9]];
            // C# 
            chordObj[1].positions = [0,2,0,3,4,0];
            chordObj[1].fingers = [0,2,0,3,4,0];
            chordObj[1].nut = [1,3];
            chordObj[1].disabled = [6];
            chordObj[1].variants = [["A#", 3], ["F", 8], ["x1", 8], ["x2", 8], ["x3", 8], ["D#", 10]];
            // D
            chordObj[2].positions = [2,3,2,0,0,0];
            chordObj[2].fingers = [2,3,1,0,0,0];
            chordObj[2].nut = null;
            chordObj[2].disabled = [6,5];
            chordObj[2].variants = [["C#", 1], ["A#", 4], ["F", 9], ["x1", 9], ["x2", 9], ["x3", 9]]
            // D#
            chordObj[3].positions = [3,4,3,1,0,0];
            chordObj[3].fingers = [3,4,2,1,0,0];
            chordObj[3].nut = null;
            chordObj[3].disabled = [6,5];
            chordObj[3].variants = [["C#", 2], ["A#", 5], ["F", 10], ["x1", 10], ["x2", 10], ["x3", 10]]
            // E
            chordObj[4].positions = [0,1,0,2,3,0];
            chordObj[4].fingers = [0,1,0,2,3,0];
            chordObj[4].nut = null;
            chordObj[4].disabled = [];
            chordObj[4].variants = [["D#", 1], ["C#", 3], ["A#", 6]]
            //F
            chordObj[5].positions = [0,0,2,3,3,0];
            chordObj[5].fingers = [0,0,2,4,3,0];
            chordObj[5].nut = [1,6];
            chordObj[5].disabled = [];
            chordObj[5].variants = [["x2", 0], ["x3", 0], ["x4", 0], ["x5", 1], ["D#", 2], ["C#", 4]];
            // F#
            chordObj[6].positions = [0,0,3,4,4,0];
            chordObj[6].fingers = [0,0,2,4,3,0,];
            chordObj[6].nut = null;
            chordObj[6].disabled = [2,6];
            chordObj[6].variants = [["x1", 1], ["x2", 1], ["x3", 1], ["D#", 3], ["C#", 5], ["A#", 8]];
            // G
            chordObj[7].positions = [3,0,0,0,2,3];
            chordObj[7].fingers = [3,0,0,0,1,2];
            chordObj[7].nut = null;
            chordObj[7].disabled = [];
            chordObj[7].variants = [["F", 2], ["x1", 2], ["x2", 2], ["x3", 2], ["D#", 4], ["C#", 6]];
            // G#
            chordObj[8].positions = [0,0,5,6,6,0];
            chordObj[8].fingers = [0,0,2,4,3,0];
            chordObj[8].nut = [4,6];
            chordObj[8].disabled = [];
            chordObj[8].variants = [["x1", 3], ["x2", 3], ["x3", 3], ["D#", 5], ["C#", 7], ["A#", 10]];
            // A
            chordObj[9].positions = [0,2,2,2,0,0];
            chordObj[9].fingers = [0,3,2,1,0,0];
            chordObj[9].nut = null;
            chordObj[9].disabled = [6];
            chordObj[9].variants = [["F", 4], ["x1", 4], ["x2", 4], ["x3", 4], ["D#", 6], ["C#", 8]];
            // A#
            chordObj[10].positions = [0,3,3,3,0,0];
            chordObj[10].fingers = [0,4,3,2,0,0];
            chordObj[10].nut = [1,5];
            chordObj[10].disabled = [6];
            chordObj[10].variants = [["F", 5], ["x1", 5], ["x2", 5], ["x3", 5], ["D#", 7], ["C#", 9]];
            // B
            chordObj[11].positions = [0,4,4,4,0,0];
            chordObj[11].fingers = [0,4,3,2,0,0];
            chordObj[11].nut = [2,5];
            chordObj[11].disabled = [6];
            chordObj[11].variants = [["F", 6], ["x1", 6], ["x2", 6], ["x3", 6], ["D#", 8], ["C#", 10]];
            // x1
            chordObj[12].positions = [0,1,2,3,3,0];
            chordObj[12].fingers = [0,1,2,4,3,0];
            chordObj[12].nut = null;
            chordObj[12].disabled = [6,1];
            // x2
            chordObj[13].positions = [0,0,2,3,0,0];
            chordObj[13].fingers = [0,0,2,3,0,0];
            chordObj[13].nut = [1,2];
            chordObj[13].disabled = [6,5];
            // x3
            chordObj[14].positions = [0,0,2,3,3,1];
            chordObj[14].fingers = [0,0,2,4,3,1];
            chordObj[14].nut = null;
            chordObj[14].disabled = [2,1];
            // x4
            chordObj[15].positions = [0,0,2,3,0,0];
            chordObj[15].fingers = [0,0,2,3,0,0];
            chordObj[15].nut = [1,2];
            chordObj[15].disabled = [6,1];
            // x5
            chordObj[16].positions = [0,0,1,2,0,0];
            chordObj[16].fingers = [0,0,1,2,0,0];
            chordObj[16].nut = null;
            chordObj[16].disabled = [6,5];
        }
        if(c.includes("9")) {
           // C
           chordObj[0].positions = [0,1,0,2,3,0];
           chordObj[0].fingers = [0,1,0,2,3,0];
           chordObj[0].nut = null;
           chordObj[0].disabled = [6];
           chordObj[0].variants = [["A#", 2], ["F", 7], ["x1", 7], ["x2", 7], ["x3", 7], ["D#", 9]];
           // C# 
           chordObj[1].positions = [0,2,0,3,4,0];
           chordObj[1].fingers = [0,2,0,3,4,0];
           chordObj[1].nut = [1,3];
           chordObj[1].disabled = [6];
           chordObj[1].variants = [["A#", 3], ["F", 8], ["x1", 8], ["x2", 8], ["x3", 8], ["D#", 10]];
           // D
           chordObj[2].positions = [2,3,2,0,0,0];
           chordObj[2].fingers = [2,3,1,0,0,0];
           chordObj[2].nut = null;
           chordObj[2].disabled = [6,5];
           chordObj[2].variants = [["C#", 1], ["A#", 4], ["F", 9], ["x1", 9], ["x2", 9], ["x3", 9]]
           // D#
           chordObj[3].positions = [3,4,3,1,0,0];
           chordObj[3].fingers = [3,4,2,1,0,0];
           chordObj[3].nut = null;
           chordObj[3].disabled = [6,5];
           chordObj[3].variants = [["C#", 2], ["A#", 5], ["F", 10], ["x1", 10], ["x2", 10], ["x3", 10]]
           // E
           chordObj[4].positions = [0,1,0,2,3,0];
           chordObj[4].fingers = [0,1,0,2,3,0];
           chordObj[4].nut = null;
           chordObj[4].disabled = [];
           chordObj[4].variants = [["D#", 1], ["C#", 3], ["A#", 6]]
           //F
           chordObj[5].positions = [0,0,2,3,3,0];
           chordObj[5].fingers = [0,0,2,4,3,0];
           chordObj[5].nut = [1,6];
           chordObj[5].disabled = [];
           chordObj[5].variants = [["x2", 0], ["x3", 0], ["x4", 0], ["x5", 1], ["D#", 2], ["C#", 4]];
           // F#
           chordObj[6].positions = [0,0,3,4,4,0];
           chordObj[6].fingers = [0,0,2,4,3,0,];
           chordObj[6].nut = null;
           chordObj[6].disabled = [2,6];
           chordObj[6].variants = [["x1", 1], ["x2", 1], ["x3", 1], ["D#", 3], ["C#", 5], ["A#", 8]];
           // G
           chordObj[7].positions = [3,0,0,0,2,3];
           chordObj[7].fingers = [3,0,0,0,1,2];
           chordObj[7].nut = null;
           chordObj[7].disabled = [];
           chordObj[7].variants = [["F", 2], ["x1", 2], ["x2", 2], ["x3", 2], ["D#", 4], ["C#", 6]];
           // G#
           chordObj[8].positions = [0,0,5,6,6,0];
           chordObj[8].fingers = [0,0,2,4,3,0];
           chordObj[8].nut = [4,6];
           chordObj[8].disabled = [];
           chordObj[8].variants = [["x1", 3], ["x2", 3], ["x3", 3], ["D#", 5], ["C#", 7], ["A#", 10]];
           // A
           chordObj[9].positions = [0,2,2,2,0,0];
           chordObj[9].fingers = [0,3,2,1,0,0];
           chordObj[9].nut = null;
           chordObj[9].disabled = [6];
           chordObj[9].variants = [["F", 4], ["x1", 4], ["x2", 4], ["x3", 4], ["D#", 6], ["C#", 8]];
           // A#
           chordObj[10].positions = [0,3,3,3,0,0];
           chordObj[10].fingers = [0,4,3,2,0,0];
           chordObj[10].nut = [1,5];
           chordObj[10].disabled = [6];
           chordObj[10].variants = [["F", 5], ["x1", 5], ["x2", 5], ["x3", 5], ["D#", 7], ["C#", 9]];
           // B
           chordObj[11].positions = [0,4,4,4,0,0];
           chordObj[11].fingers = [0,4,3,2,0,0];
           chordObj[11].nut = [2,5];
           chordObj[11].disabled = [6];
           chordObj[11].variants = [["F", 6], ["x1", 6], ["x2", 6], ["x3", 6], ["D#", 8], ["C#", 10]];
           // x1
           chordObj[12].positions = [0,1,2,3,3,0];
           chordObj[12].fingers = [0,1,2,4,3,0];
           chordObj[12].nut = null;
           chordObj[12].disabled = [6,1];
           // x2
           chordObj[13].positions = [0,0,2,3,0,0];
           chordObj[13].fingers = [0,0,2,3,0,0];
           chordObj[13].nut = [1,2];
           chordObj[13].disabled = [6,5];
           // x3
           chordObj[14].positions = [0,0,2,3,3,1];
           chordObj[14].fingers = [0,0,2,4,3,1];
           chordObj[14].nut = null;
           chordObj[14].disabled = [2,1];
           // x4
           chordObj[15].positions = [0,0,2,3,0,0];
           chordObj[15].fingers = [0,0,2,3,0,0];
           chordObj[15].nut = [1,2];
           chordObj[15].disabled = [6,1];
           // x5
           chordObj[16].positions = [0,0,1,2,0,0];
           chordObj[16].fingers = [0,0,1,2,0,0];
           chordObj[16].nut = null;
           chordObj[16].disabled = [6,5];
        }
        if(c.includes("7") && c.includes("9")) {
            // C
            chordObj[0].positions = [0,1,0,2,3,0];
            chordObj[0].fingers = [0,1,0,2,3,0];
            chordObj[0].nut = null;
            chordObj[0].disabled = [6];
            chordObj[0].variants = [["A#", 2], ["F", 7], ["x1", 7], ["x2", 7], ["x3", 7], ["D#", 9]];
            // C# 
            chordObj[1].positions = [0,2,0,3,4,0];
            chordObj[1].fingers = [0,2,0,3,4,0];
            chordObj[1].nut = [1,3];
            chordObj[1].disabled = [6];
            chordObj[1].variants = [["A#", 3], ["F", 8], ["x1", 8], ["x2", 8], ["x3", 8], ["D#", 10]];
            // D
            chordObj[2].positions = [2,3,2,0,0,0];
            chordObj[2].fingers = [2,3,1,0,0,0];
            chordObj[2].nut = null;
            chordObj[2].disabled = [6,5];
            chordObj[2].variants = [["C#", 1], ["A#", 4], ["F", 9], ["x1", 9], ["x2", 9], ["x3", 9]]
            // D#
            chordObj[3].positions = [3,4,3,1,0,0];
            chordObj[3].fingers = [3,4,2,1,0,0];
            chordObj[3].nut = null;
            chordObj[3].disabled = [6,5];
            chordObj[3].variants = [["C#", 2], ["A#", 5], ["F", 10], ["x1", 10], ["x2", 10], ["x3", 10]]
            // E
            chordObj[4].positions = [0,1,0,2,3,0];
            chordObj[4].fingers = [0,1,0,2,3,0];
            chordObj[4].nut = null;
            chordObj[4].disabled = [];
            chordObj[4].variants = [["D#", 1], ["C#", 3], ["A#", 6]]
            //F
            chordObj[5].positions = [0,0,2,3,3,0];
            chordObj[5].fingers = [0,0,2,4,3,0];
            chordObj[5].nut = [1,6];
            chordObj[5].disabled = [];
            chordObj[5].variants = [["x2", 0], ["x3", 0], ["x4", 0], ["x5", 1], ["D#", 2], ["C#", 4]];
            // F#
            chordObj[6].positions = [0,0,3,4,4,0];
            chordObj[6].fingers = [0,0,2,4,3,0,];
            chordObj[6].nut = null;
            chordObj[6].disabled = [2,6];
            chordObj[6].variants = [["x1", 1], ["x2", 1], ["x3", 1], ["D#", 3], ["C#", 5], ["A#", 8]];
            // G
            chordObj[7].positions = [3,0,0,0,2,3];
            chordObj[7].fingers = [3,0,0,0,1,2];
            chordObj[7].nut = null;
            chordObj[7].disabled = [];
            chordObj[7].variants = [["F", 2], ["x1", 2], ["x2", 2], ["x3", 2], ["D#", 4], ["C#", 6]];
            // G#
            chordObj[8].positions = [0,0,5,6,6,0];
            chordObj[8].fingers = [0,0,2,4,3,0];
            chordObj[8].nut = [4,6];
            chordObj[8].disabled = [];
            chordObj[8].variants = [["x1", 3], ["x2", 3], ["x3", 3], ["D#", 5], ["C#", 7], ["A#", 10]];
            // A
            chordObj[9].positions = [0,2,2,2,0,0];
            chordObj[9].fingers = [0,3,2,1,0,0];
            chordObj[9].nut = null;
            chordObj[9].disabled = [6];
            chordObj[9].variants = [["F", 4], ["x1", 4], ["x2", 4], ["x3", 4], ["D#", 6], ["C#", 8]];
            // A#
            chordObj[10].positions = [0,3,3,3,0,0];
            chordObj[10].fingers = [0,4,3,2,0,0];
            chordObj[10].nut = [1,5];
            chordObj[10].disabled = [6];
            chordObj[10].variants = [["F", 5], ["x1", 5], ["x2", 5], ["x3", 5], ["D#", 7], ["C#", 9]];
            // B
            chordObj[11].positions = [0,4,4,4,0,0];
            chordObj[11].fingers = [0,4,3,2,0,0];
            chordObj[11].nut = [2,5];
            chordObj[11].disabled = [6];
            chordObj[11].variants = [["F", 6], ["x1", 6], ["x2", 6], ["x3", 6], ["D#", 8], ["C#", 10]];
            // x1
            chordObj[12].positions = [0,1,2,3,3,0];
            chordObj[12].fingers = [0,1,2,4,3,0];
            chordObj[12].nut = null;
            chordObj[12].disabled = [6,1];
            // x2
            chordObj[13].positions = [0,0,2,3,0,0];
            chordObj[13].fingers = [0,0,2,3,0,0];
            chordObj[13].nut = [1,2];
            chordObj[13].disabled = [6,5];
            // x3
            chordObj[14].positions = [0,0,2,3,3,1];
            chordObj[14].fingers = [0,0,2,4,3,1];
            chordObj[14].nut = null;
            chordObj[14].disabled = [2,1];
            // x4
            chordObj[15].positions = [0,0,2,3,0,0];
            chordObj[15].fingers = [0,0,2,3,0,0];
            chordObj[15].nut = [1,2];
            chordObj[15].disabled = [6,1];
            // x5
            chordObj[16].positions = [0,0,1,2,0,0];
            chordObj[16].fingers = [0,0,1,2,0,0];
            chordObj[16].nut = null;
            chordObj[16].disabled = [6,5];
        } else if(c.includes("m")){
           if(!c.includes("7") && !c.includes("9")) {
               console.log("Acordes menores!")
                // C
            chordObj[0].positions = [0,3,3,3,3,0];
            chordObj[0].fingers = [0,1,0,2,3,0];
            chordObj[0].nut = null;
            chordObj[0].disabled = [6];
            chordObj[0].variants = [["A#", 2], ["F", 7], ["x1", 7], ["x2", 7], ["x3", 7], ["D#", 9]];
            // C# 
            chordObj[1].positions = [0,2,0,3,4,0];
            chordObj[1].fingers = [0,2,0,3,4,0];
            chordObj[1].nut = [1,3];
            chordObj[1].disabled = [6];
            chordObj[1].variants = [["A#", 3], ["F", 8], ["x1", 8], ["x2", 8], ["x3", 8], ["D#", 10]];
            // D
            chordObj[2].positions = [2,3,2,0,0,0];
            chordObj[2].fingers = [2,3,1,0,0,0];
            chordObj[2].nut = null;
            chordObj[2].disabled = [6,5];
            chordObj[2].variants = [["C#", 1], ["A#", 4], ["F", 9], ["x1", 9], ["x2", 9], ["x3", 9]]
            // D#
            chordObj[3].positions = [3,4,3,1,0,0];
            chordObj[3].fingers = [3,4,2,1,0,0];
            chordObj[3].nut = null;
            chordObj[3].disabled = [6,5];
            chordObj[3].variants = [["C#", 2], ["A#", 5], ["F", 10], ["x1", 10], ["x2", 10], ["x3", 10]]
            // E
            chordObj[4].positions = [0,1,0,2,3,0];
            chordObj[4].fingers = [0,1,0,2,3,0];
            chordObj[4].nut = null;
            chordObj[4].disabled = [];
            chordObj[4].variants = [["D#", 1], ["C#", 3], ["A#", 6]]
            //F
            chordObj[5].positions = [0,0,2,3,3,0];
            chordObj[5].fingers = [0,0,2,4,3,0];
            chordObj[5].nut = [1,6];
            chordObj[5].disabled = [];
            chordObj[5].variants = [["x2", 0], ["x3", 0], ["x4", 0], ["x5", 1], ["D#", 2], ["C#", 4]];
            // F#
            chordObj[6].positions = [0,0,3,4,4,0];
            chordObj[6].fingers = [0,0,2,4,3,0,];
            chordObj[6].nut = null;
            chordObj[6].disabled = [2,6];
            chordObj[6].variants = [["x1", 1], ["x2", 1], ["x3", 1], ["D#", 3], ["C#", 5], ["A#", 8]];
            // G
            chordObj[7].positions = [3,0,0,0,2,3];
            chordObj[7].fingers = [3,0,0,0,1,2];
            chordObj[7].nut = null;
            chordObj[7].disabled = [];
            chordObj[7].variants = [["F", 2], ["x1", 2], ["x2", 2], ["x3", 2], ["D#", 4], ["C#", 6]];
            // G#
            chordObj[8].positions = [0,0,5,6,6,0];
            chordObj[8].fingers = [0,0,2,4,3,0];
            chordObj[8].nut = [4,6];
            chordObj[8].disabled = [];
            chordObj[8].variants = [["x1", 3], ["x2", 3], ["x3", 3], ["D#", 5], ["C#", 7], ["A#", 10]];
            // A
            chordObj[9].positions = [0,2,2,2,0,0];
            chordObj[9].fingers = [0,3,2,1,0,0];
            chordObj[9].nut = null;
            chordObj[9].disabled = [6];
            chordObj[9].variants = [["F", 4], ["x1", 4], ["x2", 4], ["x3", 4], ["D#", 6], ["C#", 8]];
            // A#
            chordObj[10].positions = [0,3,3,3,0,0];
            chordObj[10].fingers = [0,4,3,2,0,0];
            chordObj[10].nut = [1,5];
            chordObj[10].disabled = [6];
            chordObj[10].variants = [["F", 5], ["x1", 5], ["x2", 5], ["x3", 5], ["D#", 7], ["C#", 9]];
            // B
            chordObj[11].positions = [0,4,4,4,0,0];
            chordObj[11].fingers = [0,4,3,2,0,0];
            chordObj[11].nut = [2,5];
            chordObj[11].disabled = [6];
            chordObj[11].variants = [["F", 6], ["x1", 6], ["x2", 6], ["x3", 6], ["D#", 8], ["C#", 10]];
            // x1
            chordObj[12].positions = [0,1,2,3,3,0];
            chordObj[12].fingers = [0,1,2,4,3,0];
            chordObj[12].nut = null;
            chordObj[12].disabled = [6,1];
            // x2
            chordObj[13].positions = [0,0,2,3,0,0];
            chordObj[13].fingers = [0,0,2,3,0,0];
            chordObj[13].nut = [1,2];
            chordObj[13].disabled = [6,5];
            // x3
            chordObj[14].positions = [0,0,2,3,3,1];
            chordObj[14].fingers = [0,0,2,4,3,1];
            chordObj[14].nut = null;
            chordObj[14].disabled = [2,1];
            // x4
            chordObj[15].positions = [0,0,2,3,0,0];
            chordObj[15].fingers = [0,0,2,3,0,0];
            chordObj[15].nut = [1,2];
            chordObj[15].disabled = [6,1];
            // x5
            chordObj[16].positions = [0,0,1,2,0,0];
            chordObj[16].fingers = [0,0,1,2,0,0];
            chordObj[16].nut = null;
            chordObj[16].disabled = [6,5];
           }
        }
           if(c.includes("7")) {
            // C
            chordObj[0].positions = [0,1,0,2,3,0];
            chordObj[0].fingers = [0,1,0,2,3,0];
            chordObj[0].nut = null;
            chordObj[0].disabled = [6];
            chordObj[0].variants = [["A#", 2], ["F", 7], ["x1", 7], ["x2", 7], ["x3", 7], ["D#", 9]];
            // C# 
            chordObj[1].positions = [0,2,0,3,4,0];
            chordObj[1].fingers = [0,2,0,3,4,0];
            chordObj[1].nut = [1,3];
            chordObj[1].disabled = [6];
            chordObj[1].variants = [["A#", 3], ["F", 8], ["x1", 8], ["x2", 8], ["x3", 8], ["D#", 10]];
            // D
            chordObj[2].positions = [2,3,2,0,0,0];
            chordObj[2].fingers = [2,3,1,0,0,0];
            chordObj[2].nut = null;
            chordObj[2].disabled = [6,5];
            chordObj[2].variants = [["C#", 1], ["A#", 4], ["F", 9], ["x1", 9], ["x2", 9], ["x3", 9]]
            // D#
            chordObj[3].positions = [3,4,3,1,0,0];
            chordObj[3].fingers = [3,4,2,1,0,0];
            chordObj[3].nut = null;
            chordObj[3].disabled = [6,5];
            chordObj[3].variants = [["C#", 2], ["A#", 5], ["F", 10], ["x1", 10], ["x2", 10], ["x3", 10]]
            // E
            chordObj[4].positions = [0,1,0,2,3,0];
            chordObj[4].fingers = [0,1,0,2,3,0];
            chordObj[4].nut = null;
            chordObj[4].disabled = [];
            chordObj[4].variants = [["D#", 1], ["C#", 3], ["A#", 6]]
            //F
            chordObj[5].positions = [0,0,2,3,3,0];
            chordObj[5].fingers = [0,0,2,4,3,0];
            chordObj[5].nut = [1,6];
            chordObj[5].disabled = [];
            chordObj[5].variants = [["x2", 0], ["x3", 0], ["x4", 0], ["x5", 1], ["D#", 2], ["C#", 4]];
            // F#
            chordObj[6].positions = [0,0,3,4,4,0];
            chordObj[6].fingers = [0,0,2,4,3,0,];
            chordObj[6].nut = null;
            chordObj[6].disabled = [2,6];
            chordObj[6].variants = [["x1", 1], ["x2", 1], ["x3", 1], ["D#", 3], ["C#", 5], ["A#", 8]];
            // G
            chordObj[7].positions = [3,0,0,0,2,3];
            chordObj[7].fingers = [3,0,0,0,1,2];
            chordObj[7].nut = null;
            chordObj[7].disabled = [];
            chordObj[7].variants = [["F", 2], ["x1", 2], ["x2", 2], ["x3", 2], ["D#", 4], ["C#", 6]];
            // G#
            chordObj[8].positions = [0,0,5,6,6,0];
            chordObj[8].fingers = [0,0,2,4,3,0];
            chordObj[8].nut = [4,6];
            chordObj[8].disabled = [];
            chordObj[8].variants = [["x1", 3], ["x2", 3], ["x3", 3], ["D#", 5], ["C#", 7], ["A#", 10]];
            // A
            chordObj[9].positions = [0,2,2,2,0,0];
            chordObj[9].fingers = [0,3,2,1,0,0];
            chordObj[9].nut = null;
            chordObj[9].disabled = [6];
            chordObj[9].variants = [["F", 4], ["x1", 4], ["x2", 4], ["x3", 4], ["D#", 6], ["C#", 8]];
            // A#
            chordObj[10].positions = [0,3,3,3,0,0];
            chordObj[10].fingers = [0,4,3,2,0,0];
            chordObj[10].nut = [1,5];
            chordObj[10].disabled = [6];
            chordObj[10].variants = [["F", 5], ["x1", 5], ["x2", 5], ["x3", 5], ["D#", 7], ["C#", 9]];
            // B
            chordObj[11].positions = [0,4,4,4,0,0];
            chordObj[11].fingers = [0,4,3,2,0,0];
            chordObj[11].nut = [2,5];
            chordObj[11].disabled = [6];
            chordObj[11].variants = [["F", 6], ["x1", 6], ["x2", 6], ["x3", 6], ["D#", 8], ["C#", 10]];
            // x1
            chordObj[12].positions = [0,1,2,3,3,0];
            chordObj[12].fingers = [0,1,2,4,3,0];
            chordObj[12].nut = null;
            chordObj[12].disabled = [6,1];
            // x2
            chordObj[13].positions = [0,0,2,3,0,0];
            chordObj[13].fingers = [0,0,2,3,0,0];
            chordObj[13].nut = [1,2];
            chordObj[13].disabled = [6,5];
            // x3
            chordObj[14].positions = [0,0,2,3,3,1];
            chordObj[14].fingers = [0,0,2,4,3,1];
            chordObj[14].nut = null;
            chordObj[14].disabled = [2,1];
            // x4
            chordObj[15].positions = [0,0,2,3,0,0];
            chordObj[15].fingers = [0,0,2,3,0,0];
            chordObj[15].nut = [1,2];
            chordObj[15].disabled = [6,1];
            // x5
            chordObj[16].positions = [0,0,1,2,0,0];
            chordObj[16].fingers = [0,0,1,2,0,0];
            chordObj[16].nut = null;
            chordObj[16].disabled = [6,5];
           }
           if(c.includes("9")) {
                // C
            chordObj[0].positions = [0,1,0,2,3,0];
            chordObj[0].fingers = [0,1,0,2,3,0];
            chordObj[0].nut = null;
            chordObj[0].disabled = [6];
            chordObj[0].variants = [["A#", 2], ["F", 7], ["x1", 7], ["x2", 7], ["x3", 7], ["D#", 9]];
            // C# 
            chordObj[1].positions = [0,2,0,3,4,0];
            chordObj[1].fingers = [0,2,0,3,4,0];
            chordObj[1].nut = [1,3];
            chordObj[1].disabled = [6];
            chordObj[1].variants = [["A#", 3], ["F", 8], ["x1", 8], ["x2", 8], ["x3", 8], ["D#", 10]];
            // D
            chordObj[2].positions = [2,3,2,0,0,0];
            chordObj[2].fingers = [2,3,1,0,0,0];
            chordObj[2].nut = null;
            chordObj[2].disabled = [6,5];
            chordObj[2].variants = [["C#", 1], ["A#", 4], ["F", 9], ["x1", 9], ["x2", 9], ["x3", 9]]
            // D#
            chordObj[3].positions = [3,4,3,1,0,0];
            chordObj[3].fingers = [3,4,2,1,0,0];
            chordObj[3].nut = null;
            chordObj[3].disabled = [6,5];
            chordObj[3].variants = [["C#", 2], ["A#", 5], ["F", 10], ["x1", 10], ["x2", 10], ["x3", 10]]
            // E
            chordObj[4].positions = [0,1,0,2,3,0];
            chordObj[4].fingers = [0,1,0,2,3,0];
            chordObj[4].nut = null;
            chordObj[4].disabled = [];
            chordObj[4].variants = [["D#", 1], ["C#", 3], ["A#", 6]]
            //F
            chordObj[5].positions = [0,0,2,3,3,0];
            chordObj[5].fingers = [0,0,2,4,3,0];
            chordObj[5].nut = [1,6];
            chordObj[5].disabled = [];
            chordObj[5].variants = [["x2", 0], ["x3", 0], ["x4", 0], ["x5", 1], ["D#", 2], ["C#", 4]];
            // F#
            chordObj[6].positions = [0,0,3,4,4,0];
            chordObj[6].fingers = [0,0,2,4,3,0,];
            chordObj[6].nut = null;
            chordObj[6].disabled = [2,6];
            chordObj[6].variants = [["x1", 1], ["x2", 1], ["x3", 1], ["D#", 3], ["C#", 5], ["A#", 8]];
            // G
            chordObj[7].positions = [3,0,0,0,2,3];
            chordObj[7].fingers = [3,0,0,0,1,2];
            chordObj[7].nut = null;
            chordObj[7].disabled = [];
            chordObj[7].variants = [["F", 2], ["x1", 2], ["x2", 2], ["x3", 2], ["D#", 4], ["C#", 6]];
            // G#
            chordObj[8].positions = [0,0,5,6,6,0];
            chordObj[8].fingers = [0,0,2,4,3,0];
            chordObj[8].nut = [4,6];
            chordObj[8].disabled = [];
            chordObj[8].variants = [["x1", 3], ["x2", 3], ["x3", 3], ["D#", 5], ["C#", 7], ["A#", 10]];
            // A
            chordObj[9].positions = [0,2,2,2,0,0];
            chordObj[9].fingers = [0,3,2,1,0,0];
            chordObj[9].nut = null;
            chordObj[9].disabled = [6];
            chordObj[9].variants = [["F", 4], ["x1", 4], ["x2", 4], ["x3", 4], ["D#", 6], ["C#", 8]];
            // A#
            chordObj[10].positions = [0,3,3,3,0,0];
            chordObj[10].fingers = [0,4,3,2,0,0];
            chordObj[10].nut = [1,5];
            chordObj[10].disabled = [6];
            chordObj[10].variants = [["F", 5], ["x1", 5], ["x2", 5], ["x3", 5], ["D#", 7], ["C#", 9]];
            // B
            chordObj[11].positions = [0,4,4,4,0,0];
            chordObj[11].fingers = [0,4,3,2,0,0];
            chordObj[11].nut = [2,5];
            chordObj[11].disabled = [6];
            chordObj[11].variants = [["F", 6], ["x1", 6], ["x2", 6], ["x3", 6], ["D#", 8], ["C#", 10]];
            // x1
            chordObj[12].positions = [0,1,2,3,3,0];
            chordObj[12].fingers = [0,1,2,4,3,0];
            chordObj[12].nut = null;
            chordObj[12].disabled = [6,1];
            // x2
            chordObj[13].positions = [0,0,2,3,0,0];
            chordObj[13].fingers = [0,0,2,3,0,0];
            chordObj[13].nut = [1,2];
            chordObj[13].disabled = [6,5];
            // x3
            chordObj[14].positions = [0,0,2,3,3,1];
            chordObj[14].fingers = [0,0,2,4,3,1];
            chordObj[14].nut = null;
            chordObj[14].disabled = [2,1];
            // x4
            chordObj[15].positions = [0,0,2,3,0,0];
            chordObj[15].fingers = [0,0,2,3,0,0];
            chordObj[15].nut = [1,2];
            chordObj[15].disabled = [6,1];
            // x5
            chordObj[16].positions = [0,0,1,2,0,0];
            chordObj[16].fingers = [0,0,1,2,0,0];
            chordObj[16].nut = null;
            chordObj[16].disabled = [6,5];
           }
           if(c.includes("7") && c.includes("9")) {
            // C
            chordObj[0].positions = [0,1,0,2,3,0];
            chordObj[0].fingers = [0,1,0,2,3,0];
            chordObj[0].nut = null;
            chordObj[0].disabled = [6];
            chordObj[0].variants = [["A#", 2], ["F", 7], ["x1", 7], ["x2", 7], ["x3", 7], ["D#", 9]];
            // C# 
            chordObj[1].positions = [0,2,0,3,4,0];
            chordObj[1].fingers = [0,2,0,3,4,0];
            chordObj[1].nut = [1,3];
            chordObj[1].disabled = [6];
            chordObj[1].variants = [["A#", 3], ["F", 8], ["x1", 8], ["x2", 8], ["x3", 8], ["D#", 10]];
            // D
            chordObj[2].positions = [2,3,2,0,0,0];
            chordObj[2].fingers = [2,3,1,0,0,0];
            chordObj[2].nut = null;
            chordObj[2].disabled = [6,5];
            chordObj[2].variants = [["C#", 1], ["A#", 4], ["F", 9], ["x1", 9], ["x2", 9], ["x3", 9]]
            // D#
            chordObj[3].positions = [3,4,3,1,0,0];
            chordObj[3].fingers = [3,4,2,1,0,0];
            chordObj[3].nut = null;
            chordObj[3].disabled = [6,5];
            chordObj[3].variants = [["C#", 2], ["A#", 5], ["F", 10], ["x1", 10], ["x2", 10], ["x3", 10]]
            // E
            chordObj[4].positions = [0,1,0,2,3,0];
            chordObj[4].fingers = [0,1,0,2,3,0];
            chordObj[4].nut = null;
            chordObj[4].disabled = [];
            chordObj[4].variants = [["D#", 1], ["C#", 3], ["A#", 6]]
            //F
            chordObj[5].positions = [0,0,2,3,3,0];
            chordObj[5].fingers = [0,0,2,4,3,0];
            chordObj[5].nut = [1,6];
            chordObj[5].disabled = [];
            chordObj[5].variants = [["x2", 0], ["x3", 0], ["x4", 0], ["x5", 1], ["D#", 2], ["C#", 4]];
            // F#
            chordObj[6].positions = [0,0,3,4,4,0];
            chordObj[6].fingers = [0,0,2,4,3,0,];
            chordObj[6].nut = null;
            chordObj[6].disabled = [2,6];
            chordObj[6].variants = [["x1", 1], ["x2", 1], ["x3", 1], ["D#", 3], ["C#", 5], ["A#", 8]];
            // G
            chordObj[7].positions = [3,0,0,0,2,3];
            chordObj[7].fingers = [3,0,0,0,1,2];
            chordObj[7].nut = null;
            chordObj[7].disabled = [];
            chordObj[7].variants = [["F", 2], ["x1", 2], ["x2", 2], ["x3", 2], ["D#", 4], ["C#", 6]];
            // G#
            chordObj[8].positions = [0,0,5,6,6,0];
            chordObj[8].fingers = [0,0,2,4,3,0];
            chordObj[8].nut = [4,6];
            chordObj[8].disabled = [];
            chordObj[8].variants = [["x1", 3], ["x2", 3], ["x3", 3], ["D#", 5], ["C#", 7], ["A#", 10]];
            // A
            chordObj[9].positions = [0,2,2,2,0,0];
            chordObj[9].fingers = [0,3,2,1,0,0];
            chordObj[9].nut = null;
            chordObj[9].disabled = [6];
            chordObj[9].variants = [["F", 4], ["x1", 4], ["x2", 4], ["x3", 4], ["D#", 6], ["C#", 8]];
            // A#
            chordObj[10].positions = [0,3,3,3,0,0];
            chordObj[10].fingers = [0,4,3,2,0,0];
            chordObj[10].nut = [1,5];
            chordObj[10].disabled = [6];
            chordObj[10].variants = [["F", 5], ["x1", 5], ["x2", 5], ["x3", 5], ["D#", 7], ["C#", 9]];
            // B
            chordObj[11].positions = [0,4,4,4,0,0];
            chordObj[11].fingers = [0,4,3,2,0,0];
            chordObj[11].nut = [2,5];
            chordObj[11].disabled = [6];
            chordObj[11].variants = [["F", 6], ["x1", 6], ["x2", 6], ["x3", 6], ["D#", 8], ["C#", 10]];
            // x1
            chordObj[12].positions = [0,1,2,3,3,0];
            chordObj[12].fingers = [0,1,2,4,3,0];
            chordObj[12].nut = null;
            chordObj[12].disabled = [6,1];
            // x2
            chordObj[13].positions = [0,0,2,3,0,0];
            chordObj[13].fingers = [0,0,2,3,0,0];
            chordObj[13].nut = [1,2];
            chordObj[13].disabled = [6,5];
            // x3
            chordObj[14].positions = [0,0,2,3,3,1];
            chordObj[14].fingers = [0,0,2,4,3,1];
            chordObj[14].nut = null;
            chordObj[14].disabled = [2,1];
            // x4
            chordObj[15].positions = [0,0,2,3,0,0];
            chordObj[15].fingers = [0,0,2,3,0,0];
            chordObj[15].nut = [1,2];
            chordObj[15].disabled = [6,1];
            // x5
            chordObj[16].positions = [0,0,1,2,0,0];
            chordObj[16].fingers = [0,0,1,2,0,0];
            chordObj[16].nut = null;
            chordObj[16].disabled = [6,5];
           }
        }
    }
}
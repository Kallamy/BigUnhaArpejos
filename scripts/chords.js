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
        acronym: "E♭",
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
        acronym: "A♭",
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
        acronym: "B♭",
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
    {
        acronym: "x6",
        positions: [],
        fingers: [],
        nut: null,
        disabled: [],
        current: 1,
        variants: []
    },
    {
        acronym: "x7",
        positions: [],
        fingers: [],
        nut: null,
        disabled: [],
        current: 1,
        variants: []
    },
];
function takeChord(chrd) {
c = chrd;
    
if(c != ""){
    if(!c.includes("m")) {
        if(!c.includes("7") && !c.includes("9")) {
            chordObj[0].acronym = "C";
            chordObj[0].positions = [0,1,0,2,3,0];
            chordObj[0].fingers = [0,1,0,2,3,0];
            chordObj[0].nut = null;
            chordObj[0].disabled = [6];
            chordObj[0].variants = [["B♭", 2], ["F", 7], ["x1", 7], ["x2", 7], ["x3", 7], ["E♭", 9]];
            
            chordObj[1].acronym = "C#";
            chordObj[1].positions = [0,2,0,3,4,0];
            chordObj[1].fingers = [0,2,0,3,4,0];
            chordObj[1].nut = [1,3];
            chordObj[1].disabled = [6];
            chordObj[1].variants = [["B♭", 3], ["F", 8], ["x1", 8], ["x2", 8], ["x3", 8], ["E♭", 10]];
            
            chordObj[2].acronym = "D";
            chordObj[2].positions = [2,3,2,0,0,0];
            chordObj[2].fingers = [2,3,1,0,0,0];
            chordObj[2].nut = null;
            chordObj[2].disabled = [6,5];
            chordObj[2].variants = [["C#", 1], ["B♭", 4], ["F", 9], ["x1", 9], ["x2", 9], ["x3", 9]]
            
            chordObj[3].acronym = "E♭";
            chordObj[3].positions = [3,4,3,1,0,0];
            chordObj[3].fingers = [3,4,2,1,0,0];
            chordObj[3].nut = null;
            chordObj[3].disabled = [6,5];
            chordObj[3].variants = [["C#", 2], ["B♭", 5], ["F", 10], ["x1", 10], ["x2", 10], ["x3", 10]]
            
            chordObj[4].acronym = "E";
            chordObj[4].positions = [0,0,1,2,2,0];
            chordObj[4].fingers = [0,0,1,3,2,0];
            chordObj[4].nut = null;
            chordObj[4].disabled = [];
            chordObj[4].variants = [["E♭", 1], ["C#", 3], ["B♭", 6]]
        
            chordObj[5].acronym = "F";
            chordObj[5].positions = [0,0,2,3,3,0];
            chordObj[5].fingers = [0,0,2,4,3,0];
            chordObj[5].nut = [1,6];
            chordObj[5].disabled = [];
            chordObj[5].variants = [["x2", 0], ["x3", 0], ["x4", 0], ["x5", 1], ["E♭", 2], ["C#", 4]];
            
            chordObj[6].acronym = "F#";
            chordObj[6].positions = [0,0,3,4,4,0];
            chordObj[6].fingers = [0,0,2,4,3,0,];
            chordObj[6].nut = [2,6];
            chordObj[6].disabled = [];
            chordObj[6].variants = [["x1", 1], ["x2", 1], ["x3", 1], ["E♭", 3], ["C#", 5], ["B♭", 8]];
            
            chordObj[7].acronym = "G";
            chordObj[7].positions = [3,0,0,0,2,3];
            chordObj[7].fingers = [3,0,0,0,1,2];
            chordObj[7].nut = null;
            chordObj[7].disabled = [];
            chordObj[7].variants = [["F", 2], ["x1", 2], ["x2", 2], ["x3", 2], ["E♭", 4], ["C#", 6]];
            
            chordObj[8].acronym = "A♭";
            chordObj[8].positions = [0,0,5,6,6,0];
            chordObj[8].fingers = [0,0,2,4,3,0];
            chordObj[8].nut = [4,6];
            chordObj[8].disabled = [];
            chordObj[8].variants = [["x1", 3], ["x2", 3], ["x3", 3], ["E♭", 5], ["C#", 7], ["B♭", 10]];
            
            chordObj[9].acronym = "A";
            chordObj[9].positions = [0,2,2,2,0,0];
            chordObj[9].fingers = [0,3,2,1,0,0];
            chordObj[9].nut = null;
            chordObj[9].disabled = [6];
            chordObj[9].variants = [["F", 4], ["x1", 4], ["x2", 4], ["x3", 4], ["E♭", 6], ["C#", 8]];
            
            chordObj[10].acronym = "B♭";
            chordObj[10].positions = [0,3,3,3,0,0];
            chordObj[10].fingers = [0,4,3,2,0,0];
            chordObj[10].nut = [1,5];
            chordObj[10].disabled = [6];
            chordObj[10].variants = [["F", 5], ["x1", 5], ["x2", 5], ["x3", 5], ["E♭", 7], ["C#", 9]];
            
            chordObj[11].acronym = "B";
            chordObj[11].positions = [0,4,4,4,0,0];
            chordObj[11].fingers = [0,4,3,2,0,0];
            chordObj[11].nut = [2,5];
            chordObj[11].disabled = [6];
            chordObj[11].variants = [["F", 6], ["x1", 6], ["x2", 6], ["x3", 6], ["E♭", 8], ["C#", 10]];
            
            chordObj[12].acronym = "x1";
            chordObj[12].positions = [0,1,2,3,3,0];
            chordObj[12].fingers = [0,1,2,4,3,0];
            chordObj[12].nut = null;
            chordObj[12].disabled = [6,1];
            
            chordObj[13].acronym = "x2";
            chordObj[13].positions = [0,0,2,3,0,0];
            chordObj[13].fingers = [0,0,2,3,0,0];
            chordObj[13].nut = [1,2];
            chordObj[13].disabled = [6,5];
            
            chordObj[14].acronym = "x3";
            chordObj[14].positions = [0,0,2,3,3,1];
            chordObj[14].fingers = [0,0,2,4,3,1];
            chordObj[14].nut = null;
            chordObj[14].disabled = [2,1];

            chordObj[15].acronym = "x4"
            chordObj[15].positions = [0,0,2,3,0,0];
            chordObj[15].fingers = [0,0,2,3,0,0];
            chordObj[15].nut = [1,2];
            chordObj[15].disabled = [6,1];
            
            chordObj[16].acronym = "x5";
            chordObj[16].positions = [0,0,1,2,0,0];
            chordObj[16].fingers = [0,0,1,2,0,0];
            chordObj[16].nut = null;
            chordObj[16].disabled = [6,5];
        } else if(c.includes("7")) {
            chordObj[0].acronym = "C7";
            chordObj[0].positions = [0,1,3,2,3,0];
            chordObj[0].fingers = [0,1,4,2,3,0];
            chordObj[0].nut = null;
            chordObj[0].disabled = [6,1];
            chordObj[0].variants = [["B♭7", 2], ["F7", 7], ["E♭7", 9]];
            
            chordObj[1].acronym = "C#7";
            chordObj[1].positions = [0,2,4,3,4,0];
            chordObj[1].fingers = [0,2,4,3,4,0];
            chordObj[1].nut = [1,3];
            chordObj[1].disabled = [6];
            chordObj[1].variants = [["B♭7", 3], ["F7", 8], ["x1", 8], ["x2", 8], ["x3", 8], ["E♭7", 10]];
            
            chordObj[2].acronym = "D7";
            chordObj[2].positions = [2,1,2,0,0,0];
            chordObj[2].fingers = [3,2,1,0,0,0];
            chordObj[2].nut = null;
            chordObj[2].disabled = [6,5];
            chordObj[2].variants = [["C#7", 1], ["B♭7", 4], ["F7", 9]]
           
            chordObj[3].acronym = "E♭7";
            chordObj[3].positions =  [3,2,3,1,0,0];
            chordObj[3].fingers = [4,2,3,1,0,0];
            chordObj[3].nut = null;
            chordObj[3].disabled = [6,5];
            chordObj[3].variants = [["C#7", 2], ["B♭7", 5], ["F7", 10]]
            
            chordObj[4].acronym = "E7";
            chordObj[4].positions = [0,0,1,0,2,0];
            chordObj[4].fingers = [0,0,1,3,2,0];
            chordObj[4].nut = null;
            chordObj[4].disabled = [];
            chordObj[4].variants =  [["E♭7", 1], ["C7", 4], ["B♭7", 6]]
            
            chordObj[5].acronym = "F7";
            chordObj[5].positions = [0,0,2,0,3,0];
            chordObj[5].fingers = [0,0,2,0,3,0];
            chordObj[5].nut = [1,6];
            chordObj[5].disabled = [];
            chordObj[5].variants =  [["E♭7", 2], ["C7", 5], ["B♭7", 7]];
            
            chordObj[6].acronym = "F#7";
            chordObj[6].positions = [0,0,3,0,4,0];
            chordObj[6].fingers = [0,0,2,0,3,0,];
            chordObj[6].nut = [2,6];
            chordObj[6].disabled = [];
            chordObj[6].variants = [["E♭7", 3], ["C7", 6], ["B♭7", 8]];
            
            chordObj[7].acronym = "G7";
            chordObj[7].positions = [0,0,4,0,5,0];
            chordObj[7].fingers = [0,0,2,0,3,0];
            chordObj[7].nut = [3,6];
            chordObj[7].disabled = [];
            chordObj[7].variants = [["E♭7", 4], ["C7", 7], ["B♭7", 9]];
            
            chordObj[8].acronym = "A♭7";
            chordObj[8].positions = [0,0,5,0,6,0];
            chordObj[8].fingers = [0,0,2,0,3,0];
            chordObj[8].nut = [4,6];
            chordObj[8].disabled = [];
            chordObj[8].variants = [["E♭7", 5], ["C7", 8], ["B♭7", 10]];
            
            chordObj[9].acronym = "A7";
            chordObj[9].positions = [0,2,0,2,0,0];
            chordObj[9].fingers = [0,2,0,1,0,0];
            chordObj[9].nut = null;
            chordObj[9].disabled = [6];
            chordObj[9].variants =  [["F7", 4], ["E♭7", 6], ["C7", 9]];
            
            chordObj[10].acronym = "B♭7";
            chordObj[10].positions = [0,3,0,3,0,0];
            chordObj[10].fingers = [0,4,0,3,0,0];
            chordObj[10].nut = [1,5];
            chordObj[10].disabled = [6];
            chordObj[10].variants = [["F7", 5], ["E♭7", 7], ["C7", 10]];
            
            chordObj[11].acronym = "B7";
            chordObj[11].positions = [0,4,0,4,0,0];
            chordObj[11].fingers = [0,4,0,3,0,0];
            chordObj[11].nut = [2,5];
            chordObj[11].disabled = [6,1];
            chordObj[11].variants = [["F7", 6], ["E♭7", 8]];
            
            chordObj[12].acronym = "x1";
            chordObj[12].positions = [0,1,2,3,3,0];
            chordObj[12].fingers = [0,1,2,4,3,0];
            chordObj[12].nut = null;
            chordObj[12].disabled = [6,1];
            
            chordObj[13].acronym = "x2";
            chordObj[13].positions = [0,0,2,3,0,0];
            chordObj[13].fingers = [0,0,2,3,0,0];
            chordObj[13].nut = [1,2];
            chordObj[13].disabled = [6,5];
            
            chordObj[14].acronym = "x3";
            chordObj[14].positions = [0,0,2,3,3,1];
            chordObj[14].fingers = [0,0,2,4,3,1];
            chordObj[14].nut = null;
            chordObj[14].disabled = [2,1];
            
            chordObj[15].acronym = "x4";
            chordObj[15].positions = [0,0,2,3,0,0];
            chordObj[15].fingers = [0,0,2,3,0,0];
            chordObj[15].nut = [1,2];
            chordObj[15].disabled = [6,1];
            
            chordObj[16].acronym = "x5";
            chordObj[16].positions = [0,0,1,2,0,0];
            chordObj[16].fingers = [0,0,1,2,0,0];
            chordObj[16].nut = null;
            chordObj[16].disabled = [6,5];
        } else if(c.includes("9")) {
            chordObj[0].acronym = "C9";
            chordObj[0].positions = [0,3,0,2,3,0];
            chordObj[0].fingers = [0,3,0,1,2,0];
            chordObj[0].nut = null;
            chordObj[0].disabled = [6];
            chordObj[0].variants = [["x1", 0], ["B♭9", 2]];
            
            chordObj[1].acronym = "C#9";
            chordObj[1].positions = [0,0,6,6,0,0];
            chordObj[1].fingers = [0,0,3,2,0,0];
            chordObj[1].nut = [4,5];
            chordObj[1].disabled = [6];
            chordObj[1].variants = [["F#9", 7]];
            
            chordObj[2].acronym = "D9";
            chordObj[2].positions = [0,3,2,0,0,0];
            chordObj[2].fingers = [0,2,1,0,0,0];
            chordObj[2].nut = null;
            chordObj[2].disabled = [6,5];
            chordObj[2].variants = [["B♭9", 4]];
            
            chordObj[3].acronym = "E♭9";
            chordObj[3].positions = [0,0,8,8,0,0];
            chordObj[3].fingers = [0,0,3,2,0,0];
            chordObj[3].nut = [6,5];
            chordObj[3].disabled = [6,5];
            chordObj[3].variants = [["D9", 8]];
            
            chordObj[4].acronym = "E9";
            chordObj[4].positions = [0,0,1,4,2,0];
            chordObj[4].fingers = [0,0,1,4,2,0];
            chordObj[4].nut = null;
            chordObj[4].disabled = [];
            chordObj[4].variants = [["B♭9", 6]];
            
            chordObj[5].acronym = "F9";
            chordObj[5].positions =  [3,1,2,3,0,0];
            chordObj[5].fingers = [4,1,2,3,0,0];
            chordObj[5].nut = null;
            chordObj[5].disabled = [6,5];
            chordObj[5].variants = [["x2", 0], ["x3",0]];
            
            chordObj[6].acronym = "F#9";
            chordObj[6].positions = [0,0,3,6,4,0];
            chordObj[6].fingers = [0,0,2,4,3,0];
            chordObj[6].nut = [2,6];
            chordObj[6].disabled = [];
            chordObj[6].variants = [["B♭9", 8]];
            
            chordObj[7].acronym = "G9";
            chordObj[7].positions = [0,0,2,0,0,3];
            chordObj[7].fingers = [0,0,1,0,0,2];
            chordObj[7].nut = null;
            chordObj[7].disabled = [5,1];
            chordObj[7].variants = [["x5", 0], ["B♭9", 9]];
            
            chordObj[8].acronym = "A♭9";
            chordObj[8].positions = [0,0,5,8,6,0];
            chordObj[8].fingers = [0,0,2,4,3,0];
            chordObj[8].nut = [4,6];
            chordObj[8].disabled = [];
            chordObj[8].variants = [["B♭9", 10]];
            
            chordObj[9].acronym = "A9";
            chordObj[9].positions = [0,2,4,2,0,0];
            chordObj[9].fingers = [0,2,3,1,0,0];
            chordObj[9].nut = null;
            chordObj[9].disabled = [6];
            chordObj[9].variants =  [["x6", 0], ["x7", 5]];
            
            chordObj[10].acronym = "B♭9";
            chordObj[10].positions = [0,0,3,3,0,0];
            chordObj[10].fingers = [0,0,3,2,0,0];
            chordObj[10].nut = [1,5];
            chordObj[10].disabled = [6];
            chordObj[10].variants = [];
            
            chordObj[11].acronym = "B9";
            chordObj[11].positions = [0,0,4,4,0,0];
            chordObj[11].fingers =  [0,0,3,2,0,0];
            chordObj[11].nut = [2,5];
            chordObj[11].disabled = [6];
            chordObj[11].variants = [["F#9", 5]];
            
            chordObj[12].acronym = "x1";
            chordObj[12].positions = [3,3,0,2,3,0];
            chordObj[12].fingers = [4,3,0,1,2,0];
            chordObj[12].nut = null;
            chordObj[12].disabled = [6];
            chordObj[11].variants = [];
            
            chordObj[13].acronym = "x2";
            chordObj[13].positions = [0,1,0,3,0,1];
            chordObj[13].fingers = [0,2,0,3,0,1];
            chordObj[13].nut = null;
            chordObj[13].disabled = [5,1];
            chordObj[11].variants = [];
            
            chordObj[14].acronym = "x3";
            chordObj[14].positions = [3,1,0,3,0,0];
            chordObj[14].fingers = [3,1,0,2,0,0];
            chordObj[14].nut = null;
            chordObj[14].disabled = [6,5];
            chordObj[14].variants = [];
            
            chordObj[15].acronym = "x4";
            chordObj[15].positions = [0,3,9,0,0,3];
            chordObj[15].fingers = [0,3,1,0,0,2];
            chordObj[15].nut = null;
            chordObj[15].disabled = [5,1];
            chordObj[15].variants = [];
            
            chordObj[16].acronym = "x5";
            chordObj[16].positions = [3,3,2,0,0,3];
            chordObj[16].fingers = [4,3,1,0,0,2];
            chordObj[16].nut = null;
            chordObj[16].disabled = [5,5];
            chordObj[16].variants = [];

            chordObj[17].acronym = "x6";
            chordObj[17].positions = [0,0,2,2,0,0];
            chordObj[17].fingers = [0,0,2,1,0,0];
            chordObj[17].nut = null;
            chordObj[17].disabled = [6];
            chordObj[17].variants = [];

            chordObj[18].acronym = "x7";
            chordObj[18].positions = [0,0,1,2,0,0];
            chordObj[18].fingers = [0,0,1,2,0,0];
            chordObj[18].nut = null;
            chordObj[18].disabled = [6];
            chordObj[18].variants = [];
        } 
        if(c.includes("7") && c.includes("9")) {
            chordObj[0].acronym = "C7(9)",
            chordObj[0].positions = [0,3,3,2,3,0];
            chordObj[0].fingers = [0,4,3,1,2,0];
            chordObj[0].nut = null;
            chordObj[0].disabled = [6,1];
            chordObj[0].variants = [["A♭7(9)", 4], ["x1", 6], ["x2", 6]];
            
            chordObj[1].acronym = "C#7(9)"
            chordObj[1].positions = [0,4,4,3,4,0];
            chordObj[1].fingers = [0,4,3,1,2,0];
            chordObj[1].nut = null;
            chordObj[1].disabled = [6,1];
            chordObj[1].variants = [["A♭7(9)", 5], ["x1", 7], ["x2", 7]];
            
            chordObj[2].acronym = "D7(9)"
            chordObj[2].positions = [0,5,5,4,5,0];
            chordObj[2].fingers = [0,4,3,1,2,0];
            chordObj[2].nut = null;
            chordObj[2].disabled = [6,1];
            chordObj[2].variants = [["A♭7(9)", 6], ["x2", 8]]
            
            chordObj[3].acronym = "E♭7(9)";
            chordObj[3].positions = [1,2,0,1,0,0];
            chordObj[3].fingers = [2,3,0,1,0,0];
            chordObj[3].nut = null;
            chordObj[3].disabled = [6,5];
            chordObj[3].variants = [["B7(9)", 2]];
            
            chordObj[4].acronym =  "E7(9)";
            chordObj[4].positions = [2,3,1,2,0,0];
            chordObj[4].fingers = [3,4,1,2,0,0];
            chordObj[4].nut = null;
            chordObj[4].disabled = [6,5];
            chordObj[4].variants = [["B7(9)", 5]]
            
            chordObj[5].acronym = "F7(9)";
            chordObj[5].positions = [3,4,2,3,0,0];
            chordObj[5].fingers = [3,4,1,2,0,0];
            chordObj[5].nut = null;
            chordObj[5].disabled = [6,5];
            chordObj[5].variants = [["B7(9)", 4]];

            chordObj[6].acronym = "F#7(9)";
            chordObj[6].positions = [4,5,3,4,0,0];
            chordObj[6].fingers = [3,4,1,2,0,0];
            chordObj[6].nut = null;
            chordObj[6].disabled = [6,5];
            chordObj[6].variants = [["x6", 0], ["x7", 0], ["B7(9)", 7]]
        
            chordObj[7].acronym = "G7(9)";
            chordObj[7].positions = [0,0,2,3,0,3];
            chordObj[7].fingers = [0,0,1,3,0,2];
            chordObj[7].nut = null;
            chordObj[7].disabled = [5,1];
            chordObj[7].variants = [["x6", 1], ["x7", 1], ["E7(9)", 3], ["B7(9)", 8]];
            
            chordObj[8].acronym = "A♭7(9)";
            chordObj[8].positions = [0,1,3,4,0,4];
            chordObj[8].fingers = [0,1,2,4,3,0];
            chordObj[8].nut = null;
            chordObj[8].disabled = [5,1];
            chordObj[8].variants = [["x6", 2], ["x7", 2]];
            
            chordObj[9].acronym = "A7(9)";
            chordObj[9].positions = [0,2,4,5,0,0];
            chordObj[9].fingers = [0,1,2,3,0,0];
            chordObj[9].nut = null;
            chordObj[9].disabled = [6];
            chordObj[9].variants = [["x6", 3], ["x7", 3]];
            
            chordObj[10].acronym = "B♭7(9)";
            chordObj[10].positions = [0,1,1,0,1,0];
            chordObj[10].fingers = [0,3,2,0,1,0];
            chordObj[10].nut = null;
            chordObj[10].disabled = [6,1];
            chordObj[10].variants = [["x6", 4], ["x7", 4]];
            
            chordObj[11].acronym = "B7(9)";
            chordObj[11].positions = [0,2,2,1,2,0];
            chordObj[11].fingers = [0,4,3,1,2,0];
            chordObj[11].nut = null;
            chordObj[11].disabled = [6,1];
            chordObj[11].variants = [["A♭7(9)", 3], ["x6", 5], ["x7", 5], ["E7(9)", 7]];
            
            chordObj[12].acronym = "x1";
            chordObj[12].positions = [0,2,1,2,0,2];
            chordObj[12].fingers = [0,4,1,3,0,2];
            chordObj[12].nut = null;
            chordObj[12].disabled = [5,1];
            chordObj[12].variants = [];

            chordObj[13].acronym = "x2";
            chordObj[13].positions = [0,0,1,2,1,2];
            chordObj[13].fingers = [0,0,2,4,1,3];
            chordObj[13].nut = null;
            chordObj[13].disabled = [2,1];
            chordObj[13].variants = [];
            
            chordObj[14].acronym = "x3";
            chordObj[14].positions = [0,2,2,1,0,0];
            chordObj[14].fingers = [0,3,2,1,0,0];
            chordObj[14].nut = null;
            chordObj[14].disabled = [5,1];
            chordObj[14].variants = [];
            
            chordObj[15].acronym = "x4";
            chordObj[15].positions = [0,0,0,1,0,1];
            chordObj[15].fingers = [0,0,0,2,0,1];
            chordObj[15].nut = null;
            chordObj[15].disabled = [5,2,1];
            chordObj[15].variants = [];
            
            chordObj[16].acronym = "x5";
            chordObj[16].positions = [0,1,0,1,0,1];
            chordObj[16].fingers = [0,0,0,2,0,1];
            chordObj[16].nut = null;
            chordObj[16].disabled = [5,1];
            chordObj[16].variants = [];

            chordObj[17].acronym = "x6";
            chordObj[17].positions = [0,0,1,2,1,2];
            chordObj[17].fingers = [0,0,2,4,1,3];
            chordObj[17].nut = null;
            chordObj[17].disabled = [2,1];
            chordObj[17].variants = [];

            chordObj[18].acronym = "x7";
            chordObj[18].positions = [0,2,1,2,0,2];
            chordObj[18].fingers = [0,4,1,3,0,2];
            chordObj[18].nut = null;
            chordObj[18].disabled = [5,1];
            chordObj[18].variants = [];
        }
        } else if(c.includes("m")){
           if(!c.includes("7") && !c.includes("9")) {
            chordObj[0].acronym = "Cm";
            chordObj[0].positions = [0,4,5,5,0,0];
            chordObj[0].fingers = [0,2,4,3,0,0];
            chordObj[0].nut = [3,5];
            chordObj[0].disabled = [6];
            chordObj[0].variants = [["Fm", 7], ["E♭m", 9]];
            
            chordObj[1].acronym = "C#m";
            chordObj[1].positions = [0,5,6,6,0,0];
            chordObj[1].fingers = [0,2,4,3,0,0];
            chordObj[1].nut = [4,5];
            chordObj[1].disabled = [6];
            chordObj[1].variants = [["Fm", 8], ["E♭m", 10]];
            
            chordObj[2].acronym = "Dm";
            chordObj[2].positions = [1,3,2,0,0,0];
            chordObj[2].fingers = [1,3,2,0,0,0];
            chordObj[2].nut = null;
            chordObj[2].disabled = [6,5];
            chordObj[2].variants = [["B♭m", 4], ["Fm", 9]]
            
            chordObj[3].acronym = "E♭m";
            chordObj[3].positions = [2,4,3,1,0,0];
            chordObj[3].fingers = [2,4,3,1,0,0];
            chordObj[3].nut = null;
            chordObj[3].disabled = [6,5];
            chordObj[3].variants = [["B♭m", 5], ["Fm", 10]]
            
            chordObj[4].acronym = "Em";
            chordObj[4].positions = [0,0,0,2,2,0];
            chordObj[4].fingers = [0,0,0,2,1,0];
            chordObj[4].nut = null;
            chordObj[4].disabled = [];
            chordObj[4].variants = [["E♭m", 1], ["B♭m", 6]]
            
            chordObj[5].acronym = "Fm";
            chordObj[5].positions = [0,0,0,3,3,0];
            chordObj[5].fingers = [0,0,0,4,3,0];
            chordObj[5].nut = [1,6];
            chordObj[5].disabled = [];
            chordObj[5].variants = [["E♭m", 2], ["B♭m", 7]];
            
            chordObj[6].acronym = "F#m";
            chordObj[6].positions = [0,0,0,4,4,0];
            chordObj[6].fingers = [0,0,0,4,3,0,];
            chordObj[6].nut = [2,6];
            chordObj[6].disabled = [];
            chordObj[6].variants = [["E♭m", 3], ["B♭m", 8]];
            
            chordObj[7].acronym = "Gm";
            chordObj[7].positions = [0,0,0,5,5,0];
            chordObj[7].fingers = [0,0,0,4,3,0];
            chordObj[7].nut = [3,6];
            chordObj[7].disabled = [];
            chordObj[7].variants = [["E♭m", 4], ["B♭m", 9]];
            
            chordObj[8].acronym = "A♭m";
            chordObj[8].positions = [0,0,0,6,6,0];
            chordObj[8].fingers = [0,0,0,4,3,0];
            chordObj[8].nut = [4,6];
            chordObj[8].disabled = [];
            chordObj[8].variants = [["E♭m", 5], ["B♭m", 10]];
            
            chordObj[9].acronym = "Am";
            chordObj[9].positions = [0,1,2,2,0,0];
            chordObj[9].fingers = [0,1,3,2,0,0];
            chordObj[9].nut = null;
            chordObj[9].disabled = [6];
            chordObj[9].variants = [["Fm", 4], ["E♭m", 6]];
            
            chordObj[10].acronym = "B♭m";
            chordObj[10].positions = [0,2,3,3,0];
            chordObj[10].fingers = [0,2,4,3,0,0];
            chordObj[10].nut = [1,5];
            chordObj[10].disabled = [6];
            chordObj[10].variants = [["Fm", 5], ["E♭m", 7]]
            
            chordObj[11].acronym = "Bm";
            chordObj[11].positions = [0,4,4,4,0,0];
            chordObj[11].fingers = [0,2,4,3,0,0];
            chordObj[11].nut = [2,5];
            chordObj[11].disabled = [6];
            chordObj[11].variants = [["Fm", 6], ["E♭m", 8]];
            
            chordObj[12].acronym = "x1";
            chordObj[12].positions = [2,4,3,1,0,0];
            chordObj[12].fingers = [2,4,3,1,0,0];
            chordObj[12].nut = null;
            chordObj[12].disabled = [6,5];
            chordObj[12].variants = [];
            
            
           } else if(c.includes("7")) {
            chordObj[0].acronym = "Cm7";
            chordObj[0].positions = [0,4,0,5,0,0];
            chordObj[0].fingers = [0,2,0,3,0,0];
            chordObj[0].nut = [3,5];
            chordObj[0].disabled = [6];
            chordObj[0].variants = [["Fm7", 7], ["E♭m7", 9]];
            
            chordObj[1].acronym = "C#m7";
            chordObj[1].positions = [0,5,0,6,0,0];
            chordObj[1].fingers = [0,2,0,3,0,0];
            chordObj[1].nut = [4,5];
            chordObj[1].disabled = [6];
            chordObj[1].variants = [["Fm7", 8], ["E♭m7", 10]]
            
            chordObj[2].acronym = "Dm7";
            chordObj[2].positions = [0,0,2,0,0,0];
            chordObj[2].fingers =  [0,0,2,0,0,0];
            chordObj[2].nut = [1,2];
            chordObj[2].disabled = [6,5];
            chordObj[2].variants = [["B♭m7", 4], ["Fm7", 9]]
        
            chordObj[3].acronym = "E♭m7";
            chordObj[3].positions = [2,2,3,1,0,0];
            chordObj[3].fingers = [3,2,4,1,0,0];
            chordObj[3].nut = null;
            chordObj[3].disabled = [6,5];
            chordObj[3].variants = [["B♭m7", 5], ["Fm7", 10]]
            
            chordObj[4].acronym = "Em7";
            chordObj[4].positions = [0,0,0,0,2,0];
            chordObj[4].fingers = [0,0,0,0,1,0];
            chordObj[4].nut = null;
            chordObj[4].disabled = [];
            chordObj[4].variants = [["E♭m7", 1], ["B♭m7", 6]]
            
            chordObj[5].acronym = "Fm7";
            chordObj[5].positions = [0,0,0,0,3,0];
            chordObj[5].fingers = [0,0,0,0,3,0];
            chordObj[5].nut = [1,6];
            chordObj[5].disabled = [];
            chordObj[5].variants = [["E♭m7", 2], ["B♭m7", 7]];
            
            chordObj[6].acronym = "F#m7";
            chordObj[6].positions = [0,0,0,0,4,0];
            chordObj[6].fingers = [0,0,0,0,3,0,];
            chordObj[6].nut = [2,6];
            chordObj[6].disabled = [2,6];
            chordObj[6].variants = [["E♭m7", 3], ["B♭m7", 8]];
            
            chordObj[7].acronym = "Gm7";
            chordObj[7].positions = [0,0,0,0,5,0];
            chordObj[7].fingers = [0,0,0,0,3,0];
            chordObj[7].nut = [3,6];
            chordObj[7].disabled = [];
            chordObj[7].variants = [["E♭m7", 4], ["B♭m7", 9]];
            
            chordObj[8].acronym = "A♭m7";
            chordObj[8].positions = [0,0,0,0,6,0];
            chordObj[8].fingers = [0,0,0,0,3,0];
            chordObj[8].nut = [4,6];
            chordObj[8].disabled = [];
            chordObj[8].variants = [["E♭m7", 5], ["B♭m7", 10]];
            
            chordObj[9].acronym = "Am7";
            chordObj[9].positions = [0,1,0,2,0,0];
            chordObj[9].fingers = [0,1,0,2,0,0];
            chordObj[9].nut = null;
            chordObj[9].disabled = [6];
            chordObj[9].variants = [["Fm7", 4], ["E♭m7", 6]];
            
            chordObj[10].acronym = "B♭m7";
            chordObj[10].positions = [0,2,0,3,0,0];
            chordObj[10].fingers = [0,2,0,3,0,0];
            chordObj[10].nut = [1,5];
            chordObj[10].disabled = [6];
            chordObj[10].variants = [["Fm7", 5], ["E♭m7", 7]];
            
            chordObj[11].acronym = "Bm7";
            chordObj[11].positions = [0,3,0,4,0,0];
            chordObj[11].fingers = [0,2,0,3,0,0];
            chordObj[11].nut = [2,5];
            chordObj[11].disabled = [6];
            chordObj[11].variants = [["Fm7", 6], ["E♭m7", 8]];
           } else if(c.includes("9")) {
            chordObj[0].acronym = "Cm9";
            chordObj[0].positions = [0,3,0,1,3,0];
            chordObj[0].fingers = [0,3,0,1,2,0];
            chordObj[0].nut = null;
            chordObj[0].disabled = [6,1];
            chordObj[0].variants =  [["B♭m9", 2]];
        
            chordObj[1].acronym = "C#m9";
            chordObj[1].positions = [0,5,8,6,0,0];
            chordObj[1].fingers = [0,2,4,3,0,0];
            chordObj[1].nut = [4,5];
            chordObj[1].disabled = [6];
            chordObj[1].variants =[["Fm9", 8], ["x1", 9]];
            
            chordObj[2].acronym = "Dm9";
            chordObj[2].positions = [0,6,9,7,0,0];
            chordObj[2].fingers = [0,2,4,3,0,0];
            chordObj[2].nut = [5,5];
            chordObj[2].disabled = [6];
            chordObj[2].variants = [["Fm9", 9], ["x1", 10]]
            
            chordObj[3].acronym = "E♭m9";
            chordObj[3].positions = [0,7,10,8,0,0];
            chordObj[3].fingers = [0,2,4,3,0,0];
            chordObj[3].nut = [6,5];
            chordObj[3].disabled = [6];
            chordObj[3].variants = []
            
            chordObj[4].acronym = "Em9";
            chordObj[4].positions = [0,0,0,4,2,0];
            chordObj[4].fingers = [0,0,0,3,1,0];
            chordObj[4].nut = null;
            chordObj[4].disabled = [];
            chordObj[4].variants = [["x2", 1], ["B♭m9", 6]]
            
            chordObj[5].acronym = "Fm9";
            chordObj[5].positions = [0,0,0,5,3,0];
            chordObj[5].fingers = [0,0,0,3,2,0];
            chordObj[5].nut = [1,6];
            chordObj[5].disabled = [];
            chordObj[5].variants = [["B♭m9", 7]];
            
            chordObj[6].acronym = "F#m9";
            chordObj[6].positions = [0,0,0,6,4,0];
            chordObj[6].fingers = [0,0,0,3,2,0];
            chordObj[6].nut = [2,6];
            chordObj[6].disabled = [2,6];
            chordObj[6].variants = [];
            
            chordObj[7].acronym = "Gm9";
            chordObj[7].positions = [0,0,0,7,5,0];
            chordObj[7].fingers = [0,0,0,3,2,0];
            chordObj[7].nut = [3,6];
            chordObj[7].disabled = [];
            chordObj[7].variants = [];
            
            chordObj[8].acronym = "A♭m9";
            chordObj[8].positions = [0,0,0,8,6,0];
            chordObj[8].fingers = [0,0,0,3,2,0];
            chordObj[8].nut = [4,6];
            chordObj[8].disabled = [];
            chordObj[8].variants = [["x1", 4]];
            
            chordObj[9].acronym = "Am9";
            chordObj[9].positions = [0,1,4,2,0,0];
            chordObj[9].fingers = [0,1,3,2,0,0];
            chordObj[9].nut = null;
            chordObj[9].disabled = [6];
            chordObj[9].variants = [];
            
            chordObj[10].acronym = "B♭m9";
            chordObj[10].positions = [0,2,5,3,0,0];
            chordObj[10].fingers = [0,4,3,2,0,0];
            chordObj[10].nut = [1,5];
            chordObj[10].disabled = [6];
            chordObj[10].variants = [["Fm9", 5]];
            
            chordObj[11].acronym = "Bm9";
            chordObj[11].positions =  [0,3,6,4,0,0];
            chordObj[11].fingers = [0,2,4,3,0,0];
            chordObj[11].nut = [2,5];
            chordObj[11].disabled = [6];
            chordObj[11].variants = [["Fm9", 6], ["x1", 6]];
            
            chordObj[12].acronym = "x1";
            chordObj[12].positions = [2,0,0,2,0,0];
            chordObj[12].fingers = [2,0,0,1,0,0];
            chordObj[12].nut = null;
            chordObj[12].disabled = [6,5];
            chordObj[12].variants = [];
            
            chordObj[13].acronym = "x2";
            chordObj[13].positions = [2,0,0,2,0,0];
            chordObj[13].fingers = [2,0,0,1,0,0];
            chordObj[13].nut = null;
            chordObj[13].disabled = [6,5];
            chordObj[13].variants = [];
          
           } 
           if(c.includes("7") && c.includes("9")) {
            chordObj[0].acronym = "Cm7(9)";
            chordObj[0].positions = [0,3,3,1,3,0];
            chordObj[0].fingers = [0,4,3,1,2,0];
            chordObj[0].nut = null;
            chordObj[0].disabled = [6,1];
            chordObj[0].variants = [["Gm7(9)", 5], ["F#m7(9)", 6], ["x1", 7]];
            
            chordObj[1].acronym = "C#m7(9)";
            chordObj[1].positions = [0,4,4,2,4,0];
            chordObj[1].fingers = [0,4,3,1,2,0];
            chordObj[1].nut = null;
            chordObj[1].disabled = [6,1];
            chordObj[1].variants = [["Gm7(9)", 6]];
            
            chordObj[2].acronym = "Dm7(9)";
            chordObj[2].positions = [0,5,5,3,5,0];
            chordObj[2].fingers = [0,4,3,1,2,0];
            chordObj[2].nut = null;
            chordObj[2].disabled = [6,1];
            chordObj[2].variants = []
            
            chordObj[3].acronym = "E♭m7(9)";
            chordObj[3].positions = [0,6,6,4,6,0];
            chordObj[3].fingers = [0,4,3,1,2,0];
            chordObj[3].nut = null;
            chordObj[3].disabled = [6,1];
            chordObj[3].variants = []
            
            chordObj[4].acronym = "Em7(9)";
            chordObj[4].positions = [2,3,0,0,2,0];
            chordObj[4].fingers = [2,3,0,0,1,0];
            chordObj[4].nut = null;
            chordObj[4].disabled = [];
            chordObj[4].variants = [["x2", 1], ["x3", 1], ["Cm7(9)", 4]]
        
            chordObj[5].acronym = "Fm7(9)";
            chordObj[5].positions = [3,4,0,0,3,0];
            chordObj[5].fingers = [3,4,0,0,2,0];
            chordObj[5].nut = [1,6];
            chordObj[5].disabled = [];
            chordObj[5].variants = [["x5", 0], ["Cm7(9)", 5]];
            
            chordObj[6].acronym = "F#m7(9)";
            chordObj[6].positions = [0,0,1,2,0,2];
            chordObj[6].fingers = [0,0,1,3,0,2];
            chordObj[6].nut = null;
            chordObj[6].disabled = [];
            chordObj[6].variants = [["x1", 1], ["Fm7(9)", 0], ["Cm7(9)", 6]];
            
            chordObj[7].acronym = "Gm7(9)";
            chordObj[7].positions = [0,0,2,3,1,3];
            chordObj[7].fingers = [0,0,2,4,1,3];
            chordObj[7].nut = null;
            chordObj[7].disabled = [2,1];
            chordObj[7].variants = [["x1", 2], ["Cm7(9)", 7]];
            
            chordObj[8].acronym = "A♭m7(9)";
            chordObj[8].positions = [0,0,3,4,2,4];
            chordObj[8].fingers = [0,0,2,4,1,3];
            chordObj[8].nut = null;
            chordObj[8].disabled = [2,1];
            chordObj[8].variants = [["x1", 3], ["Cm7(9)", 7]];
            
            chordObj[9].acronym = "Am7(9)";
            chordObj[9].positions = [0,0,4,5,3,5];
            chordObj[9].fingers = [0,0,2,4,1,3];
            chordObj[9].nut = null;
            chordObj[9].disabled = [2,1];
            chordObj[9].variants = [["x1", 4]];
            
            chordObj[10].acronym = "B♭m7(9)";
            chordObj[10].positions = [0,0,5,6,4,6];
            chordObj[10].fingers = [0,0,2,4,1,3];
            chordObj[10].nut = null;
            chordObj[10].disabled = [2,1];
            chordObj[10].variants = [["x1", 5]];
            
            chordObj[11].acronym = "Bm7(9)";
            chordObj[11].positions = [0,2,2,0,2,0];
            chordObj[11].fingers = [0,3,2,0,1,0];
            chordObj[11].nut = null;
            chordObj[11].disabled = [6,1];
            chordObj[11].variants = [["Gm7(9)", 4], ["x1", 6]];
            
            chordObj[12].acronym = "x1";
            chordObj[12].positions = [3,4,1,3,0,0];
            chordObj[12].fingers = [3,4,1,2,0,0];
            chordObj[12].nut = null;
            chordObj[12].disabled = [6,5];
            chordObj[12].variants = [];

            chordObj[13].acronym = "x2";
            chordObj[13].positions = [1,2,0,1,0,0];
            chordObj[13].fingers = [2,3,0,1,0,0];
            chordObj[13].nut = null;
            chordObj[13].disabled = [6,5];
            chordObj[13].variants = [];

            chordObj[14].acronym = "x3";
            chordObj[14].positions = [1,2,0,0,0,0];
            chordObj[14].fingers = [2,3,0,0,0,0];
            chordObj[14].nut = null;
            chordObj[14].disabled = [5,4];
            chordObj[14].variants = [];

            chordObj[15].acronym = "x4";
            chordObj[15].positions = [1,2,3,4,0,0];
            chordObj[15].fingers = [1,2,3,4,0,0];
            chordObj[15].nut = null;
            chordObj[15].disabled = [5];
            chordObj[15].variants = [];

            chordObj[16].acronym = "x5";
            chordObj[16].positions = [3,4,1,3,0,0];
            chordObj[16].fingers = [3,4,1,2,0,0];
            chordObj[16].nut = null;
            chordObj[16].disabled = [6,5];
            chordObj[16].variants = [];
           }
        }
    }
}
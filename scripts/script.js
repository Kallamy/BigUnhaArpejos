var el = new Audio("./audio/el.wav");
var el1 = new Audio("./audio/el1.wav");
var el2 = new Audio("./audio/el2.wav");
var el3 = new Audio("./audio/el3.wav");
var el4 = new Audio("./audio/el4.wav");
var el5 = new Audio("./audio/el5.wav");
var el6 = new Audio("./audio/el6.wav");
var el7 = new Audio("./audio/el7.wav");
var el8 = new Audio("./audio/el8.wav");
var el9 = new Audio("./audio/el9.wav");
var el10 = new Audio("./audio/el10.wav");
var el11 = new Audio("./audio/el11.wav");
var el12 = new Audio("./audio/el12.wav");
var el13 = new Audio("./audio/el13.wav");
var el14 = new Audio("./audio/el14.wav");

var a = new Audio("./audio/a.wav");
var a1 = new Audio("./audio/a1.wav");
var a2 = new Audio("./audio/a2.wav");
var a3 = new Audio("./audio/a3.wav");
var a4 = new Audio("./audio/a4.wav");
var a5 = new Audio("./audio/a5.wav");
var a6 = new Audio("./audio/a6.wav");
var a7 = new Audio("./audio/a7.wav");
var a8 = new Audio("./audio/a8.wav");
var a9 = new Audio("./audio/a9.wav");
var a10 = new Audio("./audio/a10.wav");
var a11 = new Audio("./audio/a11.wav");
var a12 = new Audio("./audio/a12.wav");
var a13 = new Audio("./audio/a13.wav");
var a14 = new Audio("./audio/a14.wav");

var d = new Audio("./audio/d.wav");
var d1 = new Audio("./audio/d1.wav");
var d2 = new Audio("./audio/d2.wav");
var d3 = new Audio("./audio/d3.wav");
var d4 = new Audio("./audio/d4.wav");
var d5 = new Audio("./audio/d5.wav");
var d6 = new Audio("./audio/d6.wav");
var d7 = new Audio("./audio/d7.wav");
var d8 = new Audio("./audio/d8.wav");
var d9 = new Audio("./audio/d9.wav");
var d10 = new Audio("./audio/d10.wav");
var d11 = new Audio("./audio/d11.wav");
var d12 = new Audio("./audio/d12.wav");
var d13 = new Audio("./audio/d13.wav");
var d14 = new Audio("./audio/d14.wav");

var g = new Audio("./audio/g.wav");
var g1 = new Audio("./audio/g1.wav");
var g2 = new Audio("./audio/g2.wav");
var g3 = new Audio("./audio/g3.wav");
var g4 = new Audio("./audio/g4.wav");
var g5 = new Audio("./audio/g5.wav");
var g6 = new Audio("./audio/g6.wav");
var g7 = new Audio("./audio/g7.wav");
var g8 = new Audio("./audio/g8.wav");
var g9 = new Audio("./audio/g9.wav");
var g10 = new Audio("./audio/g10.wav");
var g11 = new Audio("./audio/g11.wav");
var g12 = new Audio("./audio/g12.wav");
var g13 = new Audio("./audio/g13.wav");
var g14 = new Audio("./audio/g14.wav");

var b = new Audio("./audio/b.wav");
var b1 = new Audio("./audio/b1.wav");
var b2 = new Audio("./audio/b2.wav");
var b3 = new Audio("./audio/b3.wav");
var b4 = new Audio("./audio/b4.wav");
var b5 = new Audio("./audio/b5.wav");
var b6 = new Audio("./audio/b6.wav");
var b7 = new Audio("./audio/b7.wav");
var b8 = new Audio("./audio/b8.wav");
var b9 = new Audio("./audio/b9.wav");
var b10 = new Audio("./audio/b10.wav");
var b11 = new Audio("./audio/b11.wav");
var b12 = new Audio("./audio/b12.wav");
var b13 = new Audio("./audio/b13.wav");
var b14 = new Audio("./audio/b14.wav");

var eh = new Audio("./audio/eh.wav");
var eh1 = new Audio("./audio/eh1.wav");
var eh2 = new Audio("./audio/eh2.wav");
var eh3 = new Audio("./audio/eh3.wav");
var eh4 = new Audio("./audio/eh4.wav");
var eh5 = new Audio("./audio/eh5.wav");
var eh6 = new Audio("./audio/eh6.wav");
var eh7 = new Audio("./audio/eh7.wav");
var eh8 = new Audio("./audio/eh8.wav");
var eh9 = new Audio("./audio/eh9.wav");
var eh10 = new Audio("./audio/eh10.wav");
var eh11 = new Audio("./audio/eh11.wav");
var eh12 = new Audio("./audio/eh12.wav");
var eh13 = new Audio("./audio/eh13.wav");
var eh14 = new Audio("./audio/eh14.wav");

// Mode change
let mode = "chords";
disabledStrings = [];
strings = document.querySelectorAll(".string");
strings = [...strings];
strings = strings.reverse();
modeSelectors = document.querySelectorAll(".modeSelector");
selectedChordIndex = 0
noteSpans = document.querySelectorAll('.noteSpan');
modeSelectors.forEach((selector) => {
    selector.addEventListener("click", (e) => {
        modeSelectors[0].classList.remove("selected");
        modeSelectors[1].classList.remove("selected");
        modeSelectors[2].classList.remove("selected");
        if(selector.innerText == "Escalas") {
            mode = "scale";
        } else if(selector.innerText == "Arpejos") {
            mode = "arpeggio";
            
        } else if(selector.innerText == "Acordes") {
            mode = "chords"
        }
        selector.classList.add("selected");
        clearNotes();
        setNotes();
        setMode();
})

setMode();
function setMode() {
    document.querySelector(".tabArea").style.display = "none";
    if(mode == "arpeggio"){
        modeSelectors[1].classList.add("selected");
        document.querySelector(".controllers").style.display = "block";
        document.querySelector(".chordControllers").style.display = "none";
        document.querySelector(".numberSpan").innerText = "número de casas";
        document.querySelector("#playLegend").innerText = "Tocar arpejo";
        document.querySelector(".controllersArea").style.visibility = "visible";
        document.querySelector(".playArea").style.display = "block";
        document.querySelector(".playChord").style.display = "none";

        document.querySelector(".tabArea").style.visibility = "visible";
        document.querySelector(".numberSpan").style.visibility = "visible";
        document.querySelector("#checkArea").style.visibility = "visible";
        document.querySelector(".triggerArea").style.visibility = "hidden";

        isBemol = false;
        updateAllNotes();

        removeChord()
    } else if(mode == "scale") {
        modeSelectors[2].classList.add("selected");
        document.querySelector(".controllers").style.display = "block";
        document.querySelector(".chordControllers").style.display = "none";
        document.querySelector(".numberSpan").innerText = "número de casas";
        document.querySelector("#playLegend").innerText = "Tocar escala";
        document.querySelector(".controllersArea").style.visibility = "visible";
        document.querySelector(".playArea").style.display = "block";
        document.querySelector(".playChord").style.display = "none";
        document.querySelector(".tabArea").style.visibility = "visible";
        document.querySelector(".numberSpan").style.visibility = "visible";
        document.querySelector("#checkArea").style.visibility = "hidden";
        document.querySelector(".triggerArea").style.visibility = "hidden";
        document.querySelectorAll(".noteSpan").forEach((note) => {
            note.classList.add('scale')
        })
        isBemol = false;
        updateAllNotes();
        
        for(var i = 0; i < chordItens.length; i++) {
            if(chordType.value == "major") {
                chordItens[i].innerText = allChords[i];
            } else if (chordType.value == "minor") {
                chordItens[i].innerText = allChords[i+12];
            }
            if(!hasLoad) {
                if(!chord.includes('m')) {
                    chordItens[i].innerText = allChords[i];
                } else if (chord.includes('m')) {
                    chordItens[i].innerText = allChords[i+12];
                }
            }
    
        }
        sevenCheck.checked = false;
        removeChord()
    }
    if(mode == "chords") {
        modeSelectors[0].classList.add("selected");
        document.querySelector(".controllers").style.display = "none";
        document.querySelector(".chordControllers").style.display = "block";
        document.querySelector(".numberSpan").innerText = "formato";
        document.querySelector("#playLegend").innerText = "Tocar acorde";
        document.querySelector(".playArea").style.display = "none";
        document.querySelector(".playChord").style.display = "block";
        document.querySelector(".tabArea").style.visibility = "hidden";
        document.querySelector("#checkArea").style.visibility = "visible";
        document.querySelector(".triggerArea").style.visibility = "visible";
    }
    colorTriggers();
}
 

//Initial settings
chord = "";
takeChord(chord)
hasLoad = false;
isBemol = false;
triggerBtns = document.querySelectorAll(".triggerButton");
defaultNotes = ["mi", "si", "sol", "ré", "lá", "mi"];
chordPositions = [0,0,0,0,0,0];
chordPositions = [0,0,0,0,0,0];
nutPosition = 0;
initialChordPositions = [0,0,0,0,0,0];
chordFingers = [0,0,0,0,0,0];
pressedPositions = [0,0,0,0,0,0];
playPositions = [0,0,0,0,0,0];

allNotes = ['dó',((isBemol) ? 'ré♭' : 'dó#'),'ré', ((isBemol) ? 'mi♭' : 'ré#' ), 'mi', 'fá', ((isBemol) ? 'sol♭' : 'fá#'), 'sol', ((isBemol) ? 'lá♭' : 'sol#'), 'lá', ((isBemol) ? 'si♭' : 'lá#'), 'si',
            'dó',((isBemol) ? 'ré♭' : 'dó#'),'ré', ((isBemol) ? 'mi♭' : 'ré#'), 'mi', 'fá', ((isBemol) ? 'sol♭' : 'fá#'), 'sol', ((isBemol) ? 'lá♭' : 'sol#'), 'lá', ((isBemol) ? 'si♭' : 'lá#'), 'si'];
limitStart = 2;
limitValue = 6;
seven = false;
showNumber = document.querySelector("#showNumber");
btnRight = document.querySelector("#goRight");
btnLeft = document.querySelector("#goLeft");
completeScale = false;
limitValue = showNumber.value;

rangeCount = 1;


// Buttons click events
btnRight.addEventListener("click", () => {
    if(limits[0] >= 2) {
        limitStart --
        setRange();
        rangeCount = 1;
    }
});
btnLeft.addEventListener("click", () => {
    if(limits[1] <= 14) {
        limitStart ++
        setRange();
        rangeCount = 1;
    }
});

 sevenCheck = document.querySelector("#sevenCheck");
 nineCheck = document.querySelector("#nineCheck");
 sevenCheck.addEventListener("change", (e) => {
     chordIndex = chordItensList.indexOf(chord);
     chord = chordItensList[chordIndex];
     chordIndex = chordItensList.indexOf(chord);
     chord = chordItensList[chordIndex];
})
 nineCheck.addEventListener("change", (e) => {
     chordIndex = chordItensList.indexOf(chord);
     chord = chordItensList[chordIndex];
     chordIndex = chordItensList.indexOf(chord);
     chord = chordItensList[chordIndex];
     setChord();
})

// Number input change event
showNumber.addEventListener("change", () => {
    limitValue = showNumber.value;
    setRange();
});

// Main Settings
setRange();

chordItens = document.querySelectorAll(".chordItem");
selectedNotes = document.querySelectorAll(".fret.red");
chordIndex = 0;
chordItensList = [7];

setChord();
if(chordIndex == 0) {
    chord = "";
}

if(chordIndex == 0) {
    for(var i = 0; i < triggerBtns.length; i++) {
        triggerBtns[i].innerText = defaultNotes[i]
    }
}

// Chords menu click event
chordItens.forEach((chordItem) => {
    if(chordIndex == 0) {
        chordItem.classList.remove("selected");
    }
    chordItem.addEventListener("click", () => {
        document.querySelector("#sevenCheck").removeAttribute("disabled");
        document.querySelector("#nineCheck").removeAttribute("disabled");
        clearNotes();
        setNotes();
        setChord();
        setMode();
        targetChord = chordItem.innerText;
        
    
        chord = targetChord;
        
        chordIndex = chordItensList.indexOf(targetChord)
        for(let i = 0; i < chordItens.length; i++) {
            chordItens[i].classList.remove("selected");
            selectedChordIndex = chordIndex;
        }
        chordItem.classList.add("selected")
        removeChord();
        if(mode == "chords") {
            drawChord();
        }
    });

    if(chordItem.innerText == chord) {
      //  chordItem.classList.add("selected");
    }
}) 
 
tabSequence = document.querySelector(".tabSequence");

// Notes setting function

function setNotes() {
    pressNote();
    if(chord != "") {
        console.log(isPlaying)
        if(isPlaying) {
            //clearTimeout(playTimeout);
            console.log("Stop timeout")
        }
        // define the fundamental note according to the abbreviation of the chord
        if(chord.includes("C")) {
            fund = "dó";
            if(chord.includes("#")) {
                fund = "dó#";
            }
        } else if (chord.includes("D")) {
            fund = "ré";
            if(chord.includes("#")) {
                fund = "ré#";
            }
        } else if (chord.includes("E")) {
            fund = "mi";
        } else if (chord.includes("F")) {
            fund = "fá";
            if(chord.includes("#")) {
                fund = "fá#";
            }
        } else if (chord.includes("G")) {
            fund = "sol";
            if(chord.includes("#")) {
                fund = "sol#";
            }
        } else if (chord.includes("A")) {
            fund = "lá";
            if(chord.includes("#")) {
                fund = "lá#";
            }
        } else if (chord.includes("B")) {
            fund = "si";
        } else {
            fund = "dó"
        }
        // get the notes of the chord or scale
        if(mode == "arpeggio") {
            notes = getChordNotes(fund);
            frets.forEach(fret => {
                fret.style.cursor = "normal";
                fret.classList.remove("pressed"); 
            })
            isBemol = true;
        } else if (mode == "scale") {
            notes = getScaleNotes(fund);
            frets.forEach(fret => {
                fret.style.cursor = "normal";
                fret.classList.remove("pressed"); 
            })
        } else if (mode == "chords") {
            notes = getChordNotes(fund);
            pressNote();
            drawChord();
        }
        // displaying the notes on the neck of the guitar
        frets.forEach(fret => {
           
         //   fret.removeEventListener("click", playNoteClick);  

            changeSignals(notes);
            
            let note = fret.getAttribute("data-note");
            let pos = fret.getAttribute("data-pos");
            if(mode != "chords") {
                 
            
                if (notes.includes(note) && (pos >= limits[0] && pos < limits[1])) {
                    fret.classList.add("show");
                    if(note == "sol") {
                        fret.classList.add("purple");
                    }
                    if(note == "sol#" || note == "lá♭") {
                        fret.classList.add("purple2");
                    }
                    if(note == "lá") {
                        fret.classList.add("indigo");
                    }
                    if(note == "lá#" ||  note == "si♭") {
                        fret.classList.add("indigo2");
                    }
                    if(note == "si") {
                        fret.classList.add("blue");
                    }
                    if(note == "dó") {
                        fret.classList.add("green");
                    }
                    if(note == "dó#" || note == "ré♭") {
                        fret.classList.add("green2");
                    }
                    if(note == "ré") {
                        fret.classList.add("yellow");
                    }
                    if(note == "ré#" || note == "mi♭") {
                        fret.classList.add("yellow2");
                    }
                    if(note == "mi") {
                        fret.classList.add("orange");
                    }
                    if(note == "fá") {
                        fret.classList.add("red");
                    }
                    if(note == "fá#" || note == "sol♭") {
                        fret.classList.add("red2");
                    }
                    fret.style.fontWeight = "500";
                    fret.innerText = note;
            
                
                    fret.addEventListener("click", playNoteClick); 

                    if(note.includes("♭")) {
                        notesList = document.querySelectorAll(".noteSpan");
                        fund = notesList[0].innerText;
                    }
                    if(note == fund) {
                        fret.style.fontWeight = "1000";
                    }

                   
                
                        
                        
                
                } 
                     
            }
        });
    
        // get all the notes that are displayed
        selectedNotes = document.querySelectorAll(".fret.show");
        
        // update tablature
        clearTab();
        drawTab(selectedNotes)
        // update notes on display with the current notes
        if(notes != "") {
            document.querySelector(".notesArea").innerHTML = "";
            notes.forEach((note) => {
                document.querySelector(".notesArea").innerHTML += `<span class="noteSpan">${note}</span>`;
            })
        }
    }
    
}


// Function to remove the notes and events
function clearNotes() {
    frets = document.querySelectorAll(".fret");
    frets.forEach(fret => {
        fret.removeEventListener("click", playNoteClick); 
        fret.classList.remove("show");
        fret.classList.remove("purple");
        fret.classList.remove("purple2");
        fret.classList.remove("indigo");
        fret.classList.remove("indigo2");
        fret.classList.remove("blue");
        fret.classList.remove("green");
        fret.classList.remove("green2");
        fret.classList.remove("yellow");
        fret.classList.remove("yellow2");
        fret.classList.remove("orange");
        fret.classList.remove("red");
        fret.classList.remove("red2");
        fret.innerText = "";
    });
}

setNotes();

function updateAllNotes() {
    allNotes = ['dó',((isBemol) ? 'ré♭' : 'dó#'),'ré', ((isBemol) ? 'mi♭' : 'ré#' ), 'mi', 'fá', ((isBemol) ? 'sol♭' : 'fá#'), 'sol', ((isBemol) ? 'lá♭' : 'sol#'), 'lá', ((isBemol) ? 'si♭' : 'lá#'), 'si',
                'dó',((isBemol) ? 'ré♭' : 'dó#'),'ré', ((isBemol) ? 'mi♭' : 'ré#'), 'mi', 'fá', ((isBemol) ? 'sol♭' : 'fá#'), 'sol', ((isBemol) ? 'lá♭' : 'sol#'), 'lá', ((isBemol) ? 'si♭' : 'lá#'), 'si'];
}
// Get the notes from the scale
function getScaleNotes(fund) {
    if(isBemol) {
        if(fund == "dó#") {
            fund = "ré♭"
        }
        if(fund == "ré#") {
            fund = "mi♭"
        }
        if(fund == "fá#") {
            fund = "sol♭"
        }
        if(fund == "sol#") {
            fund = "lá♭"
        }
        if(fund == "lá#") {
            fund = "si♭"
        }
    }
    fundIndex = allNotes.indexOf(fund);
    selection = [];
    if(!chord.includes('m')) {
        isBemol = true;
        updateAllNotes();
        if( chord == "D" ||
         chord == "E" || chord == "F#" ||  
         chord == "G" || chord == "A" || 
         chord == "B" ) {
            isBemol = false;
            updateAllNotes();
        }
        selection.push(allNotes[fundIndex]);
        selection.push(allNotes[fundIndex + 2]);
        selection.push(allNotes[fundIndex + 4]);
       
        selection.push(allNotes[fundIndex + 5]);
        selection.push(allNotes[fundIndex + 7]);
        selection.push(allNotes[fundIndex + 9]);
        selection.push(allNotes[fundIndex + 11]);
    } else {
        isBemol = true;
        updateAllNotes();
        if(chord == "C#m" || chord == "F#m" || 
        chord == "G#m" || chord == "Bm") {
            isBemol = false;
            updateAllNotes();
        }
        selection.push(allNotes[fundIndex]);
        if(chord == "Em") {
            isBemol = false;
            updateAllNotes();
        }
        selection.push(allNotes[fundIndex + 2]);
        selection.push(allNotes[fundIndex + 3]);
        if(chord == "D#m") {
            isBemol = false;
            updateAllNotes();
        }
        selection.push(allNotes[fundIndex + 5]);
        selection.push(allNotes[fundIndex + 7]);
        if(chord == "C#m") {
            isBemol = true;
            updateAllNotes();
        }
        selection.push(allNotes[fundIndex + 8]);
        selection.push(allNotes[fundIndex + 10]);
    }
    if(completeScale) {
        selection = allNotes
    } 
    return selection;
}

// Get the notes of the chord
function getChordNotes(fund) {

    fundIndex = allNotes.indexOf(fund);

    selection = [];
    isBemol = false;
    updateAllNotes();
    if(chord.includes("m")) {
        selection.push(allNotes[fundIndex]);
        selection.push(allNotes[fundIndex + 3]);
        selection.push(allNotes[fundIndex + 7]);
    } else {
        selection.push(allNotes[fundIndex]);
        selection.push(allNotes[fundIndex + 4]);
        selection.push(allNotes[fundIndex + 7]);
    }

    if(chord.includes("7")) {
        selection.push(allNotes[fundIndex + 10]);
    }
    if(chord.includes("9")) {
        selection.push(allNotes[fundIndex + 2]);
    }
    
    return selection;
}


function pressNote() {
    triggerBtns = document.querySelectorAll(".triggerButton");
    frets = document.querySelectorAll(".fret");
    stringId = 0;
    
    let isPressed = false;
    let clicks = 1;
    let canPress = true;
        frets.forEach(fret => {
            fret.style.cursor = "pointer";
            if(mode != "chords") {
                fret.style.cursor = "normal";
            }
            fret.addEventListener("click", (e) => {
                if(mode == "chords") {
                    stringId = fret.parentElement.getAttribute("data-id")
                    noteTxt = fret.getAttribute("data-note");
                    pressedFret = e.currentTarget;
                    frets.forEach((fret) => {
                
                        if(pressedFret.getAttribute("data-pos") == chordPositions[stringId-1]) {
                            
                                chordPositions[stringId-1] = nutPosition;
                         
                          
                        }
                        if(fret.parentElement.getAttribute("data-id") == stringId ){
                            if(isPressed == false) {
                                if(canPress) {
                                    fret.classList.remove("pressed");
                                    fret.classList.remove("firstFinger");
                                    fret.classList.remove("secondFinger");
                                    fret.classList.remove("thirdFinger");
                                    fret.classList.remove("fourthFinger");
                                }
                                /*
                                frets[stringId-1].foreach((fr, index) => {
                                    console.log(index)
                                    if(index == chordPositons[stringId]) {
                                        if(chordFingers[stringId] == 1) {
                                            fret.classList.add("firstFinger");
                                        } else if(chordFingers[stringId] == 2) {
                                            fret.classList.add("secondFinger");
                                        } else if(chordFingers[stringId] == 3) {
                                            fret.classList.add("thirdFinger");
                                        } else {
                                            fret.classList.add("fourthFinger");
                                        }
                                    }
                                }) 
                                */
                            }
                        }
                        
                    })
                    if(!disabledStrings.includes(parseInt(stringId)) && pressedPositions[stringId-1] > nutPosition) {
                        canPress = true
                    } else {
                        canPress = false
                        fret.style.cursor = "normal"
                    }

                    if(clicks > 1) {
                        isPressed = true
                    }
                    if(isPressed){
                        fret.classList.remove("pressed");
                        isPressed = true;
                        clicks = 1;
                        if(canPress) {
                            triggerBtns[stringId-1].innerText = defaultNotes[stringId-1];
                        }
                        // chordPositions[stringId -1] = 0;
                        stringFrets = strings[stringId-1].querySelectorAll(".fret")
                        stringFrets.forEach(frt => {
                            if(frt.getAttribute("data-pos") == chordPositions[stringId-1]) {
                                chordPositions[stringId-1] = 0;
                                if(chordFingers[stringId-1] == 1) {
                                    frt.classList.add("firstFinger");
                                } else if(chordFingers[stringId-1] == 2) {
                                    frt.classList.add("secondFinger");
                                } else if(chordFingers[stringId-1] == 3) {
                                    frt.classList.add("thirdFinger");
                                } else {
                                    frt.classList.add("fourthFinger");
                                }
                                if(canPress) {
                                    chordPositions[stringId-1] = parseInt(frt.getAttribute("data-pos"))
                                    playPositions[stringId-1] = frt.getAttribute("data-pos")
                                    
                                    triggerBtns[stringId-1].innerText = frt.getAttribute("data-note")
                                }
                                
                            }
                        })
                        colorTriggers();

                    } else {
                        if(clicks == 1) {

                            
                        }
                        if(chordPositions[stringId-1] != fret.getAttribute("data-pos")) {
                            
                            clicks++
                            if(canPress) {
                                triggerBtns[stringId-1].innerText = noteTxt;
                            }
                            pressedPositions[stringId-1] = parseInt(fret.getAttribute("data-pos"));
                            playPositions = pressedPositions;
                            if(canPress) {
                                fret.classList.add("pressed"); 
                            }
                            
                        } else if(clicks > 1) {
                            //chordPositions[stringId-1] = 0;
                            if(canPress) {
                                fret.classList.remove("pressed");
                            }
                             clicks = 1;
                            
                            if(chordPositions[stringId-1] == fret.getAttribute("data-pos")) {
                                chordPositions[stringId-1] = parseInt(fret.getAttribute("data-pos"));
                                if(initialChordPositions[stringId-1] == pressedFret.getAttribute("data-pos")) {
                                    if(chordFingers[stringId-1] == 1) {
                                        fret.classList.add("firstFinger");
                                    } else if(chordFingers[stringId-1] == 2) {
                                        fret.classList.add("secondFinger");
                                    } else if(chordFingers[stringId-1] == 3) {
                                        fret.classList.add("thirdFinger");
                                    } else {
                                        fret.classList.add("fourthFinger");
                                    }
                                }
                            }
                            
                        }
                        colorTriggers();
                    }
                    isPressed = false;
                }
                
            }) 
           
        })
}

if(chordIndex != 0) {
    drawChord();
    
}
function drawChord() {
    disabled = [],
    removeChord()
    takeChord(chord)
    disableStrings();

    frets = document.querySelectorAll(".fret");
    triggerBtns = document.querySelectorAll(".triggerButton");
    chrd = [];
    for(var i = 0; i < chordObj.length; i++) {

        if(chordObj[i].acronym == chord) {
            chrd = chordObj[i];
        }
    }
    

    frets.forEach(fret => {
        string = fret.parentElement.getAttribute("data-id");
        pos = fret.getAttribute("data-pos");
        noteTxt = fret.getAttribute("data-note")

        fret.classList.remove("pressed");
        for(let i = 0; i < chrd.positions.length; i++) {
            
            disabledStrings = chrd.disabled;
            if(chordIndex != 0) {
            }
           
            if(chrd.nut != null) {
                nutPosition = chrd.nut[0];
                if(chrd.positions[string] == 0 && string < chrd.nut[1]) {
                    chordPositions[string] = chrd.nut[0];
                    playPositions[string] = chrd.nut[0];
                    playPositions[0] = chrd.nut[0];
                   // chordPositions[5] = chrd.nut[0];
                }
                
              //  triggerBtns[string-1].innerText = fret.getAttribute("data-note")
            
            } else {
                nutPosition = 0;
            }
            if(string == i+1 && pos == chrd.positions[i]) {
                chordPositions = chrd.positions;
                initialChordPositions = chordPositions
                playPositions = chordPositions;
                chordFingers = chrd.fingers;
                if(chrd.nut != null) {
                    drawNut(chrd.nut[0], chrd.nut[1]);
                }
                if(chrd.fingers[i] == 1) {
                    fret.classList.add("firstFinger");
                } else if(chrd.fingers[i] == 2) {
                    fret.classList.add("secondFinger");
                } else if(chrd.fingers[i] == 3) {
                    fret.classList.add("thirdFinger");
                } else {
                    fret.classList.add("fourthFinger");
                }
            }
        }

        for(let s = 0; s < strings.length; s++) {
            frts = strings[s].querySelectorAll(".fret");
            for(let t = 0; t <frts.length; t++) {
                if(t+1 == chordPositions[s]) {
                    triggerBtns[s].innerText = frts[t].getAttribute('data-note')
                    
                }
            }
            //strings[3].setAttribute("disabled", true)
            if(strings[s].getAttribute('disabled') == 'true') {
                triggerBtns[s].innerText = "x"
            }
       }
        /*chordPositions[string-1] = parseInt(fret.getAttribute("data-pos"))
        playPositions[string-1] =  parseInt(fret.getAttribute("data-pos"))
        triggerBtns[string-1].innerText = fret.getAttribute("data-note")
        colorTriggers()*/
       // playPositions = chordPositions;
        //playPositions = pressedPositions;
        
    })
   
   
}
function disableStrings() {
    triggers = document.querySelectorAll(".triggerButton");
    for(let i = 0; i < 7; i++) {
        if(disabledStrings.includes(i+1)) {
            triggers[i].innerText = "x";
        }
    }
}
function colorTriggers() {
    triggers = document.querySelectorAll(".triggerButton");
    triggers.forEach(trigger => {
        trigger.classList.remove("purple");
        trigger.classList.remove("purple2");
        trigger.classList.remove("indigo");
        trigger.classList.remove("indigo2");
        trigger.classList.remove("blue");
        trigger.classList.remove("green");
        trigger.classList.remove("green2");
        trigger.classList.remove("yellow");
        trigger.classList.remove("yellow2");
        trigger.classList.remove("orange");
        trigger.classList.remove("red");
        trigger.classList.remove("red2");
        if(trigger.innerText == "sol") {
            trigger.classList.add("purple");
        }
        if(trigger.innerText == "sol#" || trigger.innerText == "lá♭") {
            trigger.classList.add("purple2");
        }
        if(trigger.innerText == "lá") {
            trigger.classList.add("indigo");
        }
        if(trigger.innerText == "lá#" ||  trigger.innerText == "si♭") {
            trigger.classList.add("indigo2");
        }
        if(trigger.innerText == "si") {
            trigger.classList.add("blue");
        }
        if(trigger.innerText == "dó") {
            trigger.classList.add("green");
        }
        if(trigger.innerText == "dó#" || trigger.innerText == "ré♭") {
            trigger.classList.add("green2");
        }
        if(trigger.innerText == "ré") {
            trigger.classList.add("yellow");
        }
        if(trigger.innerText == "ré#" || trigger.innerText == "mi♭") {
            trigger.classList.add("yellow2");
        }
        if(trigger.innerText == "mi") {
            trigger.classList.add("orange");
        }
        if(trigger.innerText == "fá") {
            trigger.classList.add("red");
        }
        if(trigger.innerText == "fá#" || trigger.innerText == "sol♭") {
            trigger.classList.add("red2");
        }
    })
    
}
function drawNut(pos, strings) {
    nut = document.querySelector(".nut");
    nut.style.display = "block";
    nut.style.height = `${5 + 24 * strings}px`;
    nut.style.left = `${705 - 49 *pos}px`;
}

function removeChord() {
    document.querySelector(".nut").style.display = "none";
    frets.forEach(fret => {
        string = fret.parentElement.getAttribute("data-id");
        fret.classList.remove("firstFinger");
        fret.classList.remove("secondFinger");
        fret.classList.remove("thirdFinger");
        fret.classList.remove("fourthFinger");
        triggerBtns[string-1].innerText = defaultNotes[string-1];
    })
}
// Play note function
function playNote(string, pos) {
    setSound(string, pos);
}

// Play the clicked note function
function playNoteClick(e) {
    if(mode != "chords") {
        
        string = e.currentTarget.parentElement.getAttribute("data-id");
        pos = e.currentTarget.getAttribute('data-pos');
        note = e.currentTarget.getAttribute('data-note');
        
        if(notes.includes(note)) {
            e.currentTarget.classList.remove('playing');
            void e.currentTarget.offsetWidth;
            e.currentTarget.classList.add('playing');
            setSound(string, pos);
        }
    }
   
}

// Change events to set chord
typeSelctor = document.querySelector("#typeSelector").addEventListener("change", () => {
    document.querySelector("#sevenCheck").removeAttribute("disabled");
    document.querySelector("#nineCheck").removeAttribute("disabled");
    setChord()
});
sevenCheck = document.querySelector("#sevenCheck")
sevenCheck.addEventListener("change", setChord);


function setChord() {
    isPlaying = false;
    clearNotes();
    if(mode == "scale") {
        document.querySelectorAll(".noteSpan").forEach((note) => {
            note.classList.add('scale')
        })
    }

    chordItens = document.querySelectorAll(".chordItem");
    chordType = document.querySelector("#typeSelector");
    sevenCheck = document.querySelector("#sevenCheck");
    allChords = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B",
                "Cm", "C#m", "Dm", "D#m", "Em", "Fm", "F#m", "Gm", "G#m", "Am", "A#m", "Bm",
                "C7", "C#7", "D7", "D#7", "E7", "F7", "F#7", "G7", "G#7", "A7", "A#7", "B7",
                "Cm7", "C#m7", "Dm7", "D#m7", "Em7", "Fm7", "F#m7", "Gm7", "G#m7", "Am7", "A#m7", "Bm7",
                "C9", "C#9", "D9", "D#9", "E9", "F9", "F#9", "G9", "G#9", "A9", "A#9", "B9",
                "Cm9", "C#m9", "Dm9", "D#m9", "Em9", "Fm9", "F#m9", "Gm9", "G#m9", "Am9", "A#m9", "Bm9",
                "C7(9)", "C#7(9)", "D7(9)", "D#7(9)", "E7(9)", "F7(9)", "F#7(9)", "G7(9)", "G#7(9)", "A7(9)", "A#7(9)", "B7(9)",
                "Cm7(9)", "C#m7(9)", "Dm7(9)", "D#m7(9)", "Em7(9)", "Fm7(9)", "F#m7(9)", "Gm7(9)", "G#m7(9)", "Am7(9)", "A#m7(9)", "Bm7(9)",]
    

    chordItensList = [];

    for(var i = 0; i < chordItens.length; i++) {
        chordItens[i].classList.remove("selected")
        let offset = 0;
        if(sevenCheck.checked == true && nineCheck.checked == true) {
            if(chordType.value == "major") {
                offset = 72;
            } else if (chordType.value == "minor") {
                offset = 84;
            }
            if(!hasLoad) {
                if(!chord.includes('m')) {
                    offset = 72;
                } else if (chord.includes('m')) {
                    offset = 84;
                }
            }
        }
        if(sevenCheck.checked == false && nineCheck.checked == false) {
            if(chordType.value == "major") {
                offset = 0;
            } else if (chordType.value == "minor") {
                offset = 12;
            }
            if(!hasLoad) {
                if(!chord.includes('m')) {
                    offset = 0;
                    chordType.value = "major";
                } else if (chord.includes('m')) {
                    offset = 12;
                    chordType.value = "minor";
                }
            }
            
        } 
        if(sevenCheck.checked == false && nineCheck.checked == true) {
            if(chordType.value == "major") {
                offset = 48;
            } else if (chordType.value == "minor") {
                offset = 60;
            }
            if(!hasLoad) {
                if(!chord.includes('m')) {
                    offset = 48;
                } else if (chord.includes('m')) {
                    offset = 60;
                }
            }
        } 
        if(sevenCheck.checked == true && nineCheck.checked == false) {
            if(chordType.value == "major") {
                offset = 24;
            } else if (chordType.value == "minor") {
                offset = 36;
            }
            if(!hasLoad) {
                if(!chord.includes('m')) {
                    offset = 24;
                } else if (chord.includes('m')) {
                    offset = 36;
                }
            }
        }

       chordItens[i].innerText = allChords[i+offset];
       chordItensList.push(chordItens[i].innerText);
       
    }
    hasLoad = true;
    setNotes();
    chordItens.forEach((chordItem) => {
        if(chordItem.innerText == chord) {
            
            //chordItem.classList.add('selected');
        }
    })
    
    //chordIndex = chordItensList.indexOf(chord)
    if(chord != chordItensList[0]) {
    }
    chordItens[0].classList.remove('selected')
    chord = chordItensList[chordIndex];
    chordItens[selectedChordIndex].classList.add("selected");

    if(mode == "chords") {
        if(chordIndex != 0) {
            removeChord();
            drawChord();
        }
    }
    setMode();
    colorTriggers();
}
 
function changeSignals(notes) {
   frets.forEach(fret => {
        if(notes.includes("ré♭")) {
            if(fret.getAttribute("data-note") == "dó#") {
                fret.setAttribute("data-note", "ré♭")
            
            }
        }
        if(notes.includes("dó#")) {
            if(fret.getAttribute("data-note") == "ré♭") {
                fret.setAttribute("data-note", "dó#")
            
            }
        }

        if(notes.includes("mi♭")) {
            if(fret.getAttribute("data-note") == "ré#") {
                fret.setAttribute("data-note", "mi♭")
            
            }
        }
        if(notes.includes("ré#")) {
            if(fret.getAttribute("data-note") == "mi♭") {
                fret.setAttribute("data-note", "ré#")
            
            }
        }

        if(notes.includes("sol♭")) {
            if(fret.getAttribute("data-note") == "fá#") {
                fret.setAttribute("data-note", "sol♭")
            
            }
        }
        if(notes.includes("fá#")) {
            if(fret.getAttribute("data-note") == "sol♭") {
                fret.setAttribute("data-note", "fá#")
            
            }
        }

        if(notes.includes("lá♭")) {
            if(fret.getAttribute("data-note") == "sol#") {
                fret.setAttribute("data-note", "lá♭")
            
            }
        }
        if(notes.includes("sol#")) {
            if(fret.getAttribute("data-note") == "lá♭") {
                fret.setAttribute("data-note", "sol#")
            
            }
        }

        if(notes.includes("si♭")) {
            if(fret.getAttribute("data-note") == "lá#") {
                fret.setAttribute("data-note", "si♭")
            
            }
        }
        if(notes.includes("lá#")) {
            if(fret.getAttribute("data-note") == "si♭") {
                fret.setAttribute("data-note", "lá#")
            
            }
        }
   })
}

function setRange() {
    limits = [parseInt(limitStart),  (parseInt(limitStart) + parseInt(limitValue))];
    clearNotes();
    setNotes();
    if(limits[1] < 14) {
    }
}

document.querySelector(".btnPlay").addEventListener("click", playSequence)

playSequence()
// Sequence Play function
function playSequence() {
  
    count = 0; 
    if(count == 0) {
        document.querySelector(".tabArea").style.display = "block"; 
    }
    selectedNotes = document.querySelectorAll(".fret.show");
    isPlaying = true;
    for(let i=0; i<selectedNotes.length; i++){ 
        let string = selectedNotes[i].parentElement.getAttribute("data-id");
        let pos = selectedNotes[i].getAttribute("data-pos");
        let timeValue = document.querySelector("#playTime");
        let time = 1000 / (parseInt(timeValue.value) / 60)
        tabNums = document.querySelectorAll(".tabNum");
        pageNum = 0;

        tabNums[i].classList.remove('playing');

        setTimeout(() => {
            playNote(string, pos)
            selectedNotes[i].classList.remove('playing');
            selectedNotes[i].offsetWidth;
            selectedNotes[i].classList.add('playing');
            
            tabNums[i].classList.remove('playing');
            tabNums[i].offsetWidth;
            tabNums[i].classList.add('playing');
            
            
                
                if(i >= (18 * pageNum)) {
                    document.querySelector(".tabSequence").style.left = `${-550*pageNum}px`;
                    if(i < 21) {
                        pageNum++;
                    }
                }
                console.log(pageNum)
                if(i == selectedNotes.length -1) {
                    setTimeout(() => {
                            document.querySelector(".tabArea").style.display = "none";
                            document.querySelector(".tabSequence").style.left = "3px";
                            count--;
                            
                    }, 2000)
                }
        }, time * count)
        count++;
       
    }
   // console.log(playTimeout)
}

canPlay = false;
triggers = document.querySelectorAll(".triggerButton");
triggers.forEach(tggr => {
    tggr.addEventListener('mouseover', () => {
        canPlay = true;
    })
    tggr.addEventListener('mouseout', () => {
        canPlay = false
    })
    tggr.addEventListener("mouseenter", playTrigger);
    tggr.addEventListener("click", playTrigger);
});
clickPressed = false;
document.querySelector(".playDown").addEventListener("click", () => {
    chordBeat("down")
})
document.querySelector(".playUp").addEventListener("click", () => {
    chordBeat("up")
})
function chordBeat(direction) {
    triggerBtns = document.querySelectorAll(".triggerButton");
    if(direction === "up") {
        for(let i=0; i<= triggerBtns.length; i++){ 
            setTimeout(() => {
                stringId = triggerBtns[i].getAttribute("data-id");
                if(!disabledStrings.includes(parseInt(stringId))) {
                    playNote(stringId, playPositions[i]);
                    triggerBtns[i].classList.remove('playing');
                    triggerBtns[i].offsetWidth;
                    triggerBtns[i].classList.add('playing');
                    }
            }, 10 + i*30)
            
        }
    } else if(direction === "down") {
        triggerBtns = document.querySelectorAll(".triggerButton");
        triggerBtns = [...triggerBtns];
        triggerBtns = triggerBtns.reverse();
        for(let i=triggerBtns.length - 1; i>=0; i--) { 
            
            setTimeout(() => {
                stringId = triggerBtns[i].getAttribute("data-id");
                if(!disabledStrings.includes(parseInt(stringId))) {
                    playNote(stringId, playPositions[i]);
                    triggerBtns[i].classList.remove('playing');
                    triggerBtns[i].offsetWidth;
                    triggerBtns[i].classList.add('playing');
                }
            }, 10 + i*30)
            
        }
    }
}

function playTrigger(e) {
    stringId = e.currentTarget.getAttribute("data-id")
    thisTrigger = e.currentTarget;
    if(clickPressed) {

        if(!disabledStrings.includes(parseInt(stringId))) {
            playNote(stringId, playPositions[stringId-1]);
            thisTrigger.classList.remove('playing');
            thisTrigger.offsetWidth;
            thisTrigger.classList.add('playing');
        }
       
       
    }
    document.addEventListener('mousedown', () => {
        if(canPlay) {
            clickPressed = true
            if(!disabledStrings.includes(parseInt(stringId))) {
                playNote(stringId, playPositions[stringId-1]);
                thisTrigger.classList.remove('playing');
                thisTrigger.offsetWidth;
                thisTrigger.classList.add('playing');
            }
            
        }
    })
    document.addEventListener('mouseup', () => {
       clickPressed = false;
    })


}

function drawTab(selectedNotes) {
    tabSequence = document.querySelector(".tabSequence");
    selectedNotes.forEach((note) => {
        let string = note.parentElement.getAttribute("data-id")
        let pos = note.getAttribute("data-pos")
        tabSequence.innerHTML += `<div class="tabNum" style="margin-top: ${string*17}px">${pos}</div>`;
    })
    
}

function clearTab() {
    tabSequence = document.querySelector(".tabSequence");
    tabSequence.innerHTML = "";
}

function setSound(string, pos){ 
    if(string == 6) {
        if(pos == 0) {
            el.currentTime = 0;
            el.play();
        } if(pos == 1) {
            el1.currentTime = 0;
            el1.play();
        } else if(pos == 2) {
            el2.currentTime = 0;
            el2.play();
        } else if(pos == 3) {
            el3.currentTime = 0;
            el3.play();
        } else if(pos == 4) {
            el4.currentTime = 0;
            el4.play();
        } else if(pos == 5) {
            el5.currentTime = 0;
            el5.play();
        } else if(pos == 6) {
            el6.currentTime = 0;
            el6.play();
        } else if(pos == 7) {
            el7.currentTime = 0;
            el7.play();
        } else if(pos == 8) {
            el8.currentTime = 0;
            el8.play();
        } else if(pos == 9) {
            el9.currentTime = 0;
            el9.play();
        } else if(pos == 10) {
            el10.currentTime = 0;
            el10.play();
        } else if(pos == 11) {
            el11.currentTime = 0;
            el11.play();
        } else if(pos == 12) {
            el12.currentTime = 0;
            el12.play();
        } else if(pos == 13) {
            el13.currentTime = 0;
            el13.play();
        } else if(pos == 14) {
            el14.currentTime = 0;
            el14.play();
        }
    } else if(string == 5) {
        if(pos == 0) {
            a.currentTime = 0;
            a.play();
        } if(pos == 1) {
            a1.currentTime = 0;
            a1.play();
        } else if(pos == 2) {
            a2.currentTime = 0;
            a2.play();
        } else if(pos == 3) {
            a3.currentTime = 0;
            a3.play();
        } else if(pos == 4) {
            a4.currentTime = 0;
            a4.play();
        } else if(pos == 5) {
            a5.currentTime = 0;
            a5.play();
        } else if(pos == 6) {
            a6.currentTime = 0;
            a6.play();
        } else if(pos == 7) {
            a7.currentTime = 0;
            a7.play();
        } else if(pos == 8) {
            a8.currentTime = 0;
            a8.play();
        } else if(pos == 9) {
            a9.currentTime = 0;
            a9.play();
        } else if(pos == 10) {
            a10.currentTime = 0;
            a10.play();
        } else if(pos == 11) {
            a11.currentTime = 0;
            a11.play();
        } else if(pos == 12) {
            a12.currentTime = 0;
            a12.play();
        } else if(pos == 13) {
            a13.currentTime = 0;
            a13.play();
        } else if(pos == 14) {
            a14.currentTime = 0;
            a14.play();
        }
    } else if(string == 4) {
        if(pos == 0) {
            d.currentTime = 0;
            d.play();
        } if(pos == 1) {
            d1.currentTime = 0;
            d1.play();
        } else if(pos == 2) {
            d2.currentTime = 0;
            d2.play();
        } else if(pos == 3) {
            d3.currentTime = 0;
            d3.play();
        } else if(pos == 4) {
            d4.currentTime = 0;
            d4.play();
        } else if(pos == 5) {
            d5.currentTime = 0; 
            d5.play();
        } else if(pos == 6) {
            d6.currentTime = 0;
            d6.play();
        } else if(pos == 7) {
            d7.currentTime = 0;
            d7.play();
        } else if(pos == 8) {
            d8.currentTime = 0;
            d8.play();
        } else if(pos == 9) {
            d9.currentTime = 0;
            d9.play();
        } else if(pos == 10) {
            d10.currentTime = 0;
            d10.play();
        } else if(pos == 11) {
            d11.currentTime = 0;
            d11.play();
        } else if(pos == 12) {
            d12.currentTime = 0;
            d12.play();
        } else if(pos == 13) {
            d13.currentTime = 0;
            d13.play();
        } else if(pos == 14) {
            d14.currentTime = 0;
            d14.play();
        }
    } else if(string == 3) {
        if(pos == 0) {
            g.currentTime = 0;
            g.play();
        } if(pos == 1) {
            g1.currentTime = 0;
            g1.play();
        } else if(pos == 2) {
            g2.currentTime = 0;
            g2.play();
        } else if(pos == 3) {
            g3.currentTime = 0;
            g3.play();
        } else if(pos == 4) {
            g4.currentTime = 0;
            g4.play();
        } else if(pos == 5) {
            g5.currentTime = 0;
            g5.play();
        } else if(pos == 6) {
            g6.currentTime = 0;
            g6.play();
        } else if(pos == 7) {
            g7.currentTime = 0;
            g7.play();
        } else if(pos == 8) {
            g8.currentTime = 0;
            g8.play();
        } else if(pos == 9) {
            g9.currentTime = 0;
            g9.play();
        } else if(pos == 10) {
            g10.currentTime = 0;
            g10.play();
        } else if(pos == 11) {
            g11.currentTime = 0;
            g11.play();
        } else if(pos == 12) {
            g12.currentTime = 0;
            g12.play();
        } else if(pos == 13) {
            g13.currentTime = 0;
            g13.play();
        } else if(pos == 14) {
            g14.currentTime = 0;
            g14.play();
        }
    } else if(string == 2) {
        if(pos == 0) {
            b.currentTime = 0;
            b.play();
        } if(pos == 1) {
            b1.currentTime = 0;
            b1.play();
        } else if(pos == 2) {
            b2.currentTime = 0;
            b2.play();
        } else if(pos == 3) {
            b3.currentTime = 0;
            b3.play();
        } else if(pos == 4) {
            b4.currentTime = 0;
            b4.play();
        } else if(pos == 5) {
            b5.currentTime = 0;
            b5.play();
        } else if(pos == 6) {
            b6.currentTime = 0;
            b6.play();
        } else if(pos == 7) {
            b7.currentTime = 0;
            b7.play();
        } else if(pos == 8) {
            b8.currentTime = 0;
            b8.play();
        } else if(pos == 9) {
            b9.currentTime = 0;
            b9.play();
        } else if(pos == 10) {
            b10.currentTime = 0;
            b10.play();
        } else if(pos == 11) {
            b11.currentTime = 0;
            b11.play();
        } else if(pos == 12) {
            b12.currentTime = 0;
            b12.play();
        } else if(pos == 13) {
            b13.currentTime = 0;
            b13.play();
        } else if(pos == 14) {
            b14.currentTime = 0;
            b14.play();
        }
    } else if(string == 1) {
        if(pos == 0) {
            eh.currentTime = 0;
            eh.play();
        } if(pos == 1) {
            eh1.currentTime = 0;
            eh1.play();
        } else if(pos == 2) {
            eh2.currentTime = 0;
            eh2.play();
        } else if(pos == 3) {
            eh3.currentTime = 0;
            eh3.play();
        } else if(pos == 4) {
            eh4.currentTime = 0;
            eh4.play();
        } else if(pos == 5) {
            eh5.currentTime = 0;
            eh5.play();
        } else if(pos == 6) {
            eh6.currentTime = 0;
            eh6.play();
        } else if(pos == 7) {
            eh7.currentTime = 0;
            eh7.play();
        } else if(pos == 8) {
            eh8.currentTime = 0;
            eh8.play();
        } else if(pos == 9) {
            eh9.currentTime = 0;
            eh9.play();
        } else if(pos == 10) {
            eh10.currentTime = 0;
            eh10.play();
        } else if(pos == 11) {
            eh11.currentTime = 0;
            eh11.play();
        } else if(pos == 12) {
            eh12.currentTime = 0;
            eh12.play();
        } else if(pos == 13) {
            eh13.currentTime = 0;
            eh13.play();
        } else if(pos == 14) {
            eh14.currentTime = 0;
            eh14.play();
        }
    }
}

document.querySelector(".showInfo").addEventListener("click", (e) => {
    document.querySelector(".infoArea").style.display = "block";
})
document.querySelector(".infoArea").addEventListener("click", (e) => {
    document.querySelector(".infoArea").style.display = "none";
})
})
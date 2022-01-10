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

var g = new Audio("./g.wav");
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


hasLoad = false;
chord = "G7";


limitStart = 2;
limitValue = 6;

showNumber = document.querySelector("#showNumber");
btnRight = document.querySelector("#goRight");
btnLeft = document.querySelector("#goLeft");

limitValue = showNumber.value;
btnRight.addEventListener("click", () => {
    if(limits[0] >= 2) {
        limitStart --
        setRange();
    }
});
btnLeft.addEventListener("click", () => {
    if(limits[1] <= 14) {
        limitStart ++
        setRange();
    }
});

showNumber.addEventListener("change", () => {
    limitValue = showNumber.value;
    setRange();
});

setRange();

chordItens = document.querySelectorAll(".chordItem");
selectedNotes = document.querySelectorAll(".fret.red");
chordIndex = 0;
chordItensList = [];

setChord();

chordItens.forEach((chordItem) => {
    
    chordItem.addEventListener("click", () => {
        targetChord = chordItem.innerText;
        
        chord = targetChord;
        
        chordIndex = chordItensList.indexOf(targetChord)

        

    

        clearNotes();
        setNotes();
        for(let i = 0; i < chordItens.length; i++) {
            chordItens[i].classList.remove("selected")
        }
        
       chordItem.classList.add("selected")
        
    });
    if(chordItem.innerText == chord) {
        chordItem.classList.add("selected");
    }
}) 
 
fund = "Dm7";

tabSequence = document.querySelector(".tabSequence");

function setNotes() {
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
    } 

    notes = getChordNotes(fund);
    
    frets.forEach(fret => {
        let note = fret.getAttribute("data-note");
        let pos = fret.getAttribute("data-pos");
        
        if (notes.includes(note) && (pos >= limits[0] && pos < limits[1])) {
            console.log(limits)
            fret.classList.add("show");
            fret.classList.add("red");
            fret.innerText = note;
            fret.addEventListener("click", playNoteClick);
            if(note == fund) {
                fret.classList.add("blue");
            }
        }
    });
    selectedNotes = document.querySelectorAll(".fret.red");
    
    clearTab();
    drawTab(selectedNotes)
    

    console.log(notes)
    document.querySelector(".notesArea").innerHTML = "";
    notes.forEach((note) => {
        document.querySelector(".notesArea").innerHTML += `<span class="noteSpan">${note}</span>`;
    })
    
}



function clearNotes() {
    frets = document.querySelectorAll(".fret");
    frets.forEach(fret => {
        fret.classList.remove("show");
        fret.classList.remove("red");
        fret.classList.remove("blue");
        fret.innerText = "";
        fret.removeEventListener("click", playNoteClick);
        
    });
}

setNotes();



function getChordNotes(fund) {
    const allNotes = ['dó', 'dó#','ré', 'ré#', 'mi', 'fá', 'fá#', 'sol', 'sol#', 'lá', 'lá#', 'si', 'dó', 'dó#','ré', 'ré#', 'mi', 'fá', 'fá#', 'sol', 'sol#', 'lá', 'lá#', 'si']

    fundIndex = allNotes.indexOf(fund);

    selection = [];

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
    
    return selection;
}


function playNote(string, pos) {
    setSound(string, pos);
}

function playNoteClick(e) {
    string = e.currentTarget.parentElement.getAttribute("data-id");
    pos = e.currentTarget.getAttribute('data-pos');
    note = e.currentTarget.getAttribute('data-note');

    e.currentTarget.classList.remove('playing');
    void e.currentTarget.offsetWidth;
    e.currentTarget.classList.add('playing');
    
    setSound(string, pos);
   
}

typeSelctor = document.querySelector("#typeSelector").addEventListener("change", setChord);
sevenCheck = document.querySelector("#sevenCheck").addEventListener("change", setChord);


function setChord() {

    chordItens = document.querySelectorAll(".chordItem");
    chordType = document.querySelector("#typeSelector");
    sevenCheck = document.querySelector("#sevenCheck");

    allChords = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B","Cm", "C#m", "Dm", "D#m", "Em", "Fm", "F#m", "Gm", "G#m", "Am", "A#m", "Bm","C7", "C#7", "D7", "D#7", "E7", "F7", "F#7", "G7", "G#7", "A7", "A#7", "B7","Cm7", "C#m7", "Dm7", "D#m7", "Em7", "Fm7", "F#m7", "Gm7", "G#m7", "Am7", "A#m7", "Bm7"]

    chordItensList = [];
    for(var i = 0; i < chordItens.length; i++) {
        chordItens[i].classList.remove("selected")
        if(sevenCheck.checked == false) {
            if(chordType.value == "major") {
                chordItens[i].innerText = allChords[i];
            } else if (chordType.value == "minor") {
                chordItens[i].innerText = allChords[i+12];
            }
            if(!hasLoad) {
                if(!chord.includes('m')) {
                    chordItens[i].innerText = allChords[i];
                    chordType.value = "major";
                } else if (chord.includes('m')) {
                    chordItens[i].innerText = allChords[i+12];
                    chordType.value = "minor";
                }
            }
        } else {
            if(chordType.value == "major") {
                chordItens[i].innerText = allChords[i+24];
            } else if (chordType.value == "minor") {
                chordItens[i].innerText = allChords[i+36];
            }
            if(!hasLoad) {
                if(!chord.includes('m')) {
                    chordItens[i].innerText = allChords[i+24];
                } else if (chord.includes('m')) {
                    chordItens[i].innerText = allChords[i+36];
                }
            }
           
        }
        if(!hasLoad) {
            if(chord.includes("7")) {
                sevenCheck.checked = true;
                if(!chord.includes('m')) {
                    chordItens[i].innerText = allChords[i+24];
                } else if (chord.includes('m')) {
                    chordItens[i].innerText = allChords[i+36];
                }
                
            } else {
                sevenCheck.checked = false;
        
            }
            if(chordItens[i].innerText == chord) {
                chordItens[i].classList.add("selected");
            }
       }
       chordItensList.push(chordItens[i].innerText);
       
    }
    hasLoad = true;
    console.log(chordItensList[chordIndex]);
    chord = chordItensList[chordIndex];
    clearNotes();
    setNotes();

    chordItens.forEach((chordItem) => {
        if(chordItem.innerText == chord) {
            chordItem.classList.add('selected');
        }
    })
}


function playSequence() {
    selectedNotes = document.querySelectorAll(".fret.red");
    
    count = 0;
    for(let i=0; i<selectedNotes.length; i++){ 
        console.log(selectedNotes[i].innerText)
        let string = selectedNotes[i].parentElement.getAttribute("data-id")
        let pos = selectedNotes[i].getAttribute("data-pos")
        tabNums = document.querySelectorAll(".tabNum");
        setTimeout(() => {
            playNote(string, pos)
            selectedNotes[i].classList.remove('playing');
            selectedNotes[i].offsetWidth;
            selectedNotes[i].classList.add('playing');
    
            tabNums[i].classList.remove('playing');
            tabNums[i].offsetWidth;
            tabNums[i].classList.add('playing');
        }, 1000 * count)
        count++;
    }
    
}

function drawTab(selectedNotes) {
    tabSequence = document.querySelector(".tabSequence");
    selectedNotes.forEach((note) => {
        console.log(note.innerText)
        let string = note.parentElement.getAttribute("data-id")
        let pos = note.getAttribute("data-pos")
        tabSequence.innerHTML += `<div class="tabNum" style="margin-top: ${string*17}px">${pos}</div>`;
    })
    
}

function clearTab() {
    tabSequence = document.querySelector(".tabSequence");
    tabSequence.innerHTML = "";
}

function setRange() {
        limits = [parseInt(limitStart),  (parseInt(limitStart) + parseInt(limitValue))];
        console.log[limits]
        clearNotes();
        setNotes();
        if(limits[1] < 14) {
        }
}

function setSound(string, pos){ 
    if(string == 6) {
        if(pos == 1) {
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
        if(pos == 1) {
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
        if(pos == 1) {
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
        if(pos == 1) {
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
        if(pos == 1) {
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
        if(pos == 1) {
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


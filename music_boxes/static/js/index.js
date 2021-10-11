
$(document).ready( function() {

    // This controls the button for the c note.
    var cNote = document.getElementById('c_note');

    $('#c').mousedown(function(){
        cNote.currentTime = 0;
        cNote.play();
    });

    // This controls the button for the d note.
    var dNote = document.getElementById('d_note');

    $('#d').mousedown(function(){
        dNote.currentTime = 0;
        dNote.play();
    });

    // This controls the button for the e note.
    var eNote = document.getElementById('e_note');

    $('#e').mousedown(function(){
        eNote.currentTime = 0;
        eNote.play();
    });

    // This controls the button for the f note.
    var fNote = document.getElementById('f_note');

    $('#f').mousedown(function(){
        fNote.currentTime = 0;
        fNote.play();
    });

    // This controls the button for the g note.
    var gNote = document.getElementById('g_note');

    $('#g').mousedown(function(){
        gNote.currentTime = 0;
        gNote.play();
    });

    // This controls the button for the a note.
    var aNote = document.getElementById('a_note');

    $('#a').mousedown(function(){
        aNote.currentTime = 0;
        aNote.play();
    });

    // This controls the button for the b note.
    var bNote = document.getElementById('b_note');

    $('#b').mousedown(function(){
        bNote.currentTime = 0;
        bNote.play();
    });

    // This controls the button for a sample music.
    var peacefulDays = document.getElementById('peacefulDays');

    $('#peaceful_days').mousedown(function(){
        peacefulDays.currentTime = 0;
        peacefulDays.play();
    });
});

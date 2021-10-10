
$(document).ready( function() {

    // This controls the button for the c note.
    var cNote = document.getElementById('c_note');

    $('#c').mouseover(function(){
        cNote.currentTime = 0;
        cNote.play();
    });

    // This controls the button for the d note.
    var dNote = document.getElementById('d_note');

    $('#d').mouseover(function(){
        dNote.currentTime = 0;
        dNote.play();
    });

    // This controls the button for the e note.
    var eNote = document.getElementById('e_note');

    $('#e').mouseover(function(){
        eNote.currentTime = 0;
        eNote.play();
    });

    // This controls the button for the f note.
    var fNote = document.getElementById('f_note');

    $('#f').mouseover(function(){
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

    $('#a').mouseover(function(){
        aNote.currentTime = 0;
        aNote.play();
    });

    // This controls the button for the b note.
    var bNote = document.getElementById('b_note');

    $('#b').mouseover(function(){
        bNote.currentTime = 0;
        bNote.play();
    });
});

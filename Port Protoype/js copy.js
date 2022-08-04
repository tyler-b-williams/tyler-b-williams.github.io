const menuHover = new Audio('sfx/menu sfx 1.wav');
const menuClick = new Audio('sfx/menu sfx 2.wav');

const SmenuHover = new Audio('sfx/SND_00000.wav');
const SmenuClick = new Audio('sfx/SND_00001.wav');
const SmenuExit = new Audio('sfx/SND_00002.wav');
const SmenuNav = new Audio('sfx/SND_00038.wav');

const BGMMusic = new Audio('music/Super Smash Bros Brawl Trophy Gallery.mp3');
BGMMusic.loop = true;
BGMMusic.volume = .2;

menuHover.volume = .2;
menuClick.volume = .3;

SmenuHover.volume = .2;
SmenuClick.volume = .2;
SmenuExit.volume = .2;

// component for cards to play sound effects on hover/click

$(document).ready(function() {
    //* play on hover
    BGMMusic.play();

    $(".card").hover(function() {
            // menuHover.load();
            SmenuHover.play();
        },
        function() {
            SmenuHover.load();
        });
    // play on click
    $(".card").click(function() {
        SmenuClick.load();
        SmenuClick.play();
    });
    // play on closing carousel button
    $(".btn-close").click(function() {
        SmenuExit.load();
        SmenuExit.play();
    });

    // play on clicking anywhere to close carousel
    $('.modal').on('hide.bs.modal', function() {
        SmenuExit.load();
        SmenuExit.play();

        // when you hide while player is playing, stops video
        //!code "works" in a sense, but weirdly replaces video links
        // $('.modal').hide();
        // $('.modal iframe').attr("src", jQuery(".modal iframe").attr("src"));
    });
    // play on left or right carousel button
    $(".carousel-control-next,.carousel-control-prev").click(function() {
        SmenuHover.load();
        SmenuHover.play();

    });

    $('.modal').on('hide.bs.modal', function() {
        console.log("please");
        SmenuExit.load();
        SmenuExit.play();

    });
    // should have way for bgm music to pause when viewing video
    function onPlayerStateChange(event) {
        switch (event.data) {
            case YT.PlayerState.UNSTARTED:
                console.log('unstarted');
                break;
            case YT.PlayerState.ENDED:
                console.log('ended');
                break;
            case YT.PlayerState.PLAYING:
                console.log('playing');
                break;
            case YT.PlayerState.PAUSED:
                console.log('paused');
                break;
            case YT.PlayerState.BUFFERING:
                console.log('buffering');
                break;
            case YT.PlayerState.CUED:
                console.log('video cued');
                break;
        }
    }
});
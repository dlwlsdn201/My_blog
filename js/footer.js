// var tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tage, firstScriptTag);


var player;


onYouTubeIframeAPIReady = () => {
    player = new YT.Player('player', {
        videoId: 'cHxF3Mvf24k',
        width: "420",
        height : "380",
        playerVars: {
            'modestbranding': 1,
            'autoplay': 0,
            'controls': 1,
            'showinfo': 0,
            'loop': 0,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
};

function onPlayerReady(event){
    event.target.playVideo();
}

function onPlayerStateChange(){
    if(player.getPlayerState() == 1) console.log("재생중");
    else if(player.getPlayerState() == 2) console.log("일시중지");
}
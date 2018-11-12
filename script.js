function Swap1(){
 $("#video").attr("src", $("#change").val());
};

var vid = document.getElementById("video");
document.getElementById('playVid').onclick = function (){
    document.getElementById('video').play();
};
document.getElementById('pause').onclick = function (){
    document.getElementById('video').pause();
};
document.getElementById('vup').onclick = function (){
    vid.volume +=0.2;
};
document.getElementById('vdown').onclick = function (){
    vid.volume -=0.2;
};

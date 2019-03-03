// register our component
AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");

        animatedMarker.addEventListener('click', function(ev){
            if (animatedMarker.object3D.visible == true && ev.detail.cursorEl) {
                const entity = document.querySelector('#animated-model');
                window.location = "https://www.youtube.com/";
            }
        });
}});

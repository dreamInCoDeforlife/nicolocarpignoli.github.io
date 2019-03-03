AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity1 = document.querySelector("#animated-model1");
	const aEntity2 = document.querySelector("#animated-model2");
	const aEntity3 = document.querySelector("#animated-model3");
	const aEntity4 = document.querySelector("#animated-model4");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
		console.log(ev.detail.intersectedEl, ev.detail);
            if (aEntity1 && intersectedElement === aEntity1) {
                    const entity = document.querySelector('#animated-model1');
                const url = entity.getAttribute('url');
                     window.open(url);
            }
	    if (aEntity2 && intersectedElement === aEntity2) {
                    const entity = document.querySelector('#animated-model2');
                const url = entity.getAttribute('url');
                     window.open(url);
            }
	    if (aEntity3 && intersectedElement === aEntity3) {
                    const entity = document.querySelector('#animated-model3');
                const url = entity.getAttribute('url');
                     window.open(url);
            }
	    if (aEntity4 && intersectedElement === aEntity4) {
                    const entity = document.querySelector('#animated-model4');
                const url = entity.getAttribute('url');
                     window.open(url);
            }
        });

}});

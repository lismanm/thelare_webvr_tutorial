var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options);
}

var drawingRoom = vRViewPlayer('#first-vr-example', {
  // image: 'https://fscl01.fonpit.de/userfiles/4155894/image/photo-sphere-w628.jpg',
  image: 'https://fscl01.fonpit.de/userfiles/4155894/image/photo-sphere-w628.jpg',
  is_stereo: false,
});

window.addEventListener('load', drawingRoom);


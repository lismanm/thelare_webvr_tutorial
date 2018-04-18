var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options);
}

var drawingRoom = vRViewPlayer('#first-vr-example', {
  // image: 'assets/dolphins.jpg',
  image: 'https://raw.githubusercontent.com/jsala1990/thelare_webvr_tutorial/master/public/assets/dolphins.jpg',
  is_stereo: true,
});

window.addEventListener('load', drawingRoom);


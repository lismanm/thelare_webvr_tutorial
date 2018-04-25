var vRViewPlayer = function(elementIdName, options) {
  console.log('Creating VR View Player');
  return new VRView.Player(elementIdName, options);
}

var drawingRoom = vRViewPlayer('#first-vr-example', {
  // image: 'https://photosphereviewer.net/images/demo/demo1_full.jpg',
  image: 'https://pasteboard.co/images/HheZRUL.jpg/download',
  is_stereo: false,
});

window.addEventListener('load', drawingRoom);


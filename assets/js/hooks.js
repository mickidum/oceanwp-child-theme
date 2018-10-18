var $j = jQuery.noConflict();

// 3D PARTY MAIL SENDING CF7 HOOK
var host = location.origin;
$j('.wpcf7').on('wpcf7mailsent', function(event) {
	var inputs = event.detail.inputs;
	$j.post(host + '/forms-api/api/api.php', inputs, function(data) {});
});

// STICKY HEADER
var waypoint = new Waypoint({
  element: document.getElementById('main'),
  handler: function(direction) {
  	if(direction === 'down') {
  		document.getElementById('outer-wrap').classList.add('fixed-header');
  	}
    else {
    	document.getElementById('outer-wrap').classList.remove('fixed-header');
    }
  }
})

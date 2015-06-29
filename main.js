$(document).on('ready', function() {

	$('.map').on('click', function(event){

		// console.log('clicked')

		var note = prompt("Add a note about this location:");

		var marker = $('<div class="marker"><div class="note">' + note + '</div>X</div>');
		
		$('.container').prepend(marker);

		marker.css({
			'left'	: ( event.pageX - ($('.container').offset().left) ) + 'px',
			'top'	: ( event.pageY - ($('.container').offset().top) ) + 'px',
		});

	});

	$('.container').on('click', '.marker', function(){
		$(this).remove();
	});



	// $('.container').on('mouseover', '.marker', function(){
		
	// 	var noteDiv = $('<div class="noteDiv">' + $(this).attr('data-note') + '</div>');

	// 	$(this).prepend(noteDiv);

	// 	note.css({
	// 		'left'	: ( event.pageX - ($('.container').offset().left) ) + 'px',
	// 		'top'	: ( event.pageY - ($('.container').offset().top) ) + 'px',
	// 	});
	// });


  
});
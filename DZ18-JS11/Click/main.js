$('.circle').click(function() {
	
	$(this).animate(
		{
			width: `${Math.round(Math.random() * 200)}px`,
			height: `${Math.round(Math.random() * 200)}px`,
			marginLeft: `${Math.round(Math.random() * 900)}px`,
			marginTop: `${Math.round(Math.random() * 600)}px`
		},
		{
			duration: 2000
		}
	);
	$(this).css('background-color', `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`);
});

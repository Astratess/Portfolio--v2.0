const widgets = document.querySelectorAll('.widget__head')

widgets.forEach( widget => {
	widget.addEventListener('click', () => {
		openWidget(widget);
	})
})

function openWidget(widget) {
		if (window.innerWidth <= 812) {
			widget.parentNode.parentNode.classList.toggle('is-active')
			$(widget).parent().siblings().toggle(400)
		}
 		else {
			const centerX = window.innerWidth / 2;
			const centerY = window.innerHeight /2;
			const origX = getOffset(widget.parentNode.parentNode).left
			const origY = getOffset(widget.parentNode.parentNode).top
			let endX = Math.floor(centerX - origX - (widget.offsetWidth) / 2);
			let endY = Math.floor(centerY - origY - (widget.offsetHeight) / 2);
			widget.parentNode.parentNode.style.transform = `translate(${endX - centerX / 3}px, ${endY}px)`
			widget.parentNode.parentNode.classList.toggle('is-active')
			/*$(widget.parentNode.parentNode).siblings().toggleClass('events-none')*/
			$('.modal').toggleClass('is-active');
			document.body.classList.toggle('is-locked')
		}
}

$('.modal').on('click', function(event) {
	$(this).removeClass('is-active');
	$('.widget.is-active').css('transform', "translate(0, 0)")
	$('.widget.is-active').removeClass('is-active')
	document.body.classList.toggle('is-locked')
})


function getOffset(el) {
	const rect = el.getBoundingClientRect(); 	
	return {
		left: rect.left,
		top: rect.top
	};
}

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
// /* added for carousel */

// added for footer

$(document).ready(function(){
	var accordionOpen = $('.first_depth p'),
			secondDepth = $('.second_depth');
	
	accordionOpen.on('click',function(){
			accordionOpen.closest('.first_depth').removeClass('on');
			$(this).closest('.first_depth').addClass('on');
			
	});
});
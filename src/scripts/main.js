(function() {
	// function Slider(element) {
	// 	this.element = element;
	// 	this.slides = this.element.querySelector('.slides').getElementsByTagName('li');
	// 	this.slidesNumber = this.slides.length;
	// 	this.arrowsNav = this.element.querySelector('.slider-navigation');

	// 	this.selectedSlide = 0;
	// 	this.prevSelectedSlide = 0;
	// 	this.bindEvents();

	// }

	// Slider.prototype.bindEvents = function() {
	// 	var self = this;
	// 	this.arrowsNav.addEventListener('click', function(event) {
	// 		if (event.target.tagName.toLowerCase() == 'a') {
	// 			event.preventDefault();

	// 			var newSlideIndex = (event.target.classList.contains('next') ? self.selectedSlide + 1 : self.selectedSlide - 1);

	// 			self.showNewSlide(newSlideIndex);
	// 		}
	// 	})
	// }

	// Slider.prototype.showNewSlide = function(i) {
	// 	if (i < 0) i = this.slidesNumber - 1;
	// 	if (i > this.slidesNumber) i = 0;
	// 	this.prevSelectedSlide = this.selectedSlide;
	// 	this.selectedSlide = i;
	// }

	// var sliders = document.getElementsByClassName('full-width-slider');

	// for (var i = sliders.length - 1; i >= 0; i--) {
	// 	(function(i) {
	// 		new Slider(sliders[i]);
	// 	})(i);
	// }

	setTimeout(function() {
		var tessarray = new Tessarray("box", {
			// comment-out to see functionality without containerClass and selectorClass
			containerClass: "container",
			selectorClass: "selector",
			// Comment-in lines to see how options effect the render
			// duration: 650,
			timingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
			// imageClass: "imageClass",
			// delay: 50,
			// defaultCategory: "people",
			// containerTransition: false,
			flickr: {
				// targetRowHeight: 300,
				// targetRowHeightTolerance: 0.15,
				// maxNumRows: 2,
				containerPadding: 40
			}
		});
	}, 777);
	// tessarray.options.flickr.targetRowHeight = 500;
	// tessarray.renderBoxes();

})();

'use strict';

document.addEventListener('DOMContentLoaded', function() {
    var slider = document.querySelector('.js_slider');
    var sliderIndex = document.getElementById('slider-index');
    var slideCount = document.getElementsByClassName('js_slide').length;

    var prev = document.getElementsByClassName('js_prev');
    var next = document.getElementsByClassName('js_next');
    
	var index = 1;
    
    function indexCounter(){
 		console.log(this.className);
    	this.className === "js_prev prev" ? --index : ++index
    	if (index == 0) {
    		index = slideCount;
    	} else if (index > slideCount){
    		index = 1;
    	}
    	console.log(index);
    	sliderIndex.innerHTML = index + '<span style="font-style: italic; margin: 0 3px;"> of </span>' + slideCount;
    }

    prev[0].addEventListener('click', indexCounter);
    next[0].addEventListener('click', indexCounter);

    if (!index == 0) {
    	sliderIndex.insertAdjacentHTML('afterbegin', index + '<span style="font-style: italic; margin: 0 3px;"> of </span>' + slideCount);
    }



    console.log(slideCount);

    lory(slider, {
        infinite: 1
    });
});
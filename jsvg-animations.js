
// ----------------------------- //
// JSVG-ANIMATIONS 1.0           //
// DEVELOPPED BY ANTOINE NEDELEC //
// ----------------------------- //
// DEPENDENCY: none              //
// ----------------------------- //

// Plugin
(function() {

    // Define our constructor
    this.jsvganimation = function() {}

    // Public Methods
	jsvganimation.initSVG = function(rootElement) {

    	let svgElement = null;
		if(rootElement.tagName.toLowerCase() === "svg") {
			svgElement = rootElement;
        } else if(rootElement.tagName.toLowerCase() !== "svg") {
			svgElement = rootElement.querySelector("svg");
            if(svgElement.tagName.toLowerCase() !== "svg") {
                console.log("rootElement and its chidlren have no SVG to be found !");
            }
		}

		// INIT LINES
		let svgLines = svgElement.querySelectorAll('path[data-type="line"]');
		for (let i = 0, len = svgLines.length; i < len; i++) {
	        let path = svgLines[i];
	        let length = path.getTotalLength();
			let timing = path.getAttribute('data-timing') || 1;
	        path.style.fill = "none";

	        // Clear any previous transition
	        path.style.transition = path.style.WebkitTransition = 'none';

	        // Set up the starting positions (0)
	        path.style.strokeDasharray = length + ' ' + length;
	        path.style.strokeDashoffset = length;
	        path.style.opacity = 1;

	        // Setting transition NOW would make the transition happen
	        setTimeout(function() {
				path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset '+timing+'s ease-in-out';
	        }, 1);
		}

		// INIT FIGURES
		let svgFigures = svgElement.querySelectorAll('path[data-type="figure"]');
		for (let i = 0, len = svgFigures.length; i < len; i++) {
			let path = svgFigures[i];
			let timing = path.getAttribute('data-timing') || 1;
			let fill = path.getAttribute('data-fill') || null;
	        path.style.fillOpacity = 0;
	        // Setting transition NOW would make the transition happen
	        setTimeout(function() {
		        path.style.transition = path.style.WebkitTransition = 'fill-opacity '+timing+'s ease-in-out';
		        if(fill != null) { path.style.fill = fill; }
	        }, 1);
		}		

		// LAUNCH LINES with data-show=start
		svgLines = svgElement.querySelectorAll('path[data-type="line"][data-show="start"]');
		for (let i = 0, len = svgLines.length; i < len; i++) {
			this.showSvgLine(svgLines[i]);
		}

		// LAUNCH FIGURES with data-show=start
		svgFigures = svgElement.querySelectorAll('path[data-type="figure"][data-show="start"]');
		for (let i = 0, len = svgFigures.length; i < len; i++) {
			showSvgFigure(svgFigures[i]);
		}

		svgElement.addEventListener('mouseenter', function(e) {
			// EVENT FOR LINES with data-show=hover
			svgLines = svgElement.querySelectorAll('path[data-type="line"][data-show="hover"]');
			for (let i = 0, len = svgLines.length; i < len; i++) {
				showSvgLine(svgLines[i]);
			}

			// EVENT FOR FIGURES with data-show=hover
			svgFigures = svgElement.querySelectorAll('path[data-type="figure"][data-show="hover"]');
			for (let i = 0, len = svgFigures.length; i < len; i++) {	
				showSvgFigure(svgFigures[i]);
			}
		});

		svgElement.addEventListener('mouseleave', function(e) {
			// EVENT FOR LINES with data-show=hover
			svgLines = svgElement.querySelectorAll('path[data-type="line"][data-show="hover"]');
			for (let i = 0, len = svgLines.length; i < len; i++) {
				hideSvgLine(svgLines[i]);
			}

			// EVENT FOR FIGURES with data-show=hover
			svgFigures = svgElement.querySelectorAll('path[data-type="figure"][data-show="hover"]');
			for (let i = 0, len = svgFigures.length; i < len; i++) {	
				hideSvgFigure(svgFigures[i]);
			}
		});

		// End if init, show the SVG.
		svgElement.style.opacity = 1;
	}

  	// Private Methods
	function showSvgLine (path) {
		let delay = path.getAttribute('data-delay') || 0;
		let timing = path.getAttribute('data-timing') || 1;
		setTimeout(function() {
			// Clear any previous transition
			let length = path.getTotalLength();
			// Define our transition
			path.style.strokeDashoffset = 0;
		}, delay * 100);
	}

	function hideSvgLine (path) {
		let timing = path.getAttribute('data-timing') || 1;
		// Clear any previous transition
		var length = path.getTotalLength();
		// Define our transition
		path.style.strokeDashoffset = length;
	}

	function showSvgFigure (path) {
		let delay = path.getAttribute('data-delay') || 0;
		setTimeout(function(){
			// Define our transition
		    path.style.fillOpacity = 1;
		}, delay * 100);
	}

	function hideSvgFigure (path) {
		// Define our transition
	    path.style.fillOpacity = 0;
	}

}());
    

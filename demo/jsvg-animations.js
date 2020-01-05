
// ----------------------------- //
// JSVG-ANIMATIONS 1.0           //
// DEVELOPPED BY ANTOINE NEDELEC //
// ----------------------------- //
// DEPENDENCY: jQuery            //
// ----------------------------- //

// EaseOutCubic
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{easeOutCubic:function(e,t,n,r,i){return r*((t=t/i-1)*t*t+1)+n}});

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
	        path.style.fill = "none";

	        // Clear any previous transition
	        path.style.transition = path.style.WebkitTransition = 'none';

	        // Set up the starting positions (0)
	        path.style.strokeDasharray = length + ' ' + length;
	        path.style.strokeDashoffset = length;
	        path.style.opacity = 1;
		}

		// INIT FIGURES
		let svgFigures = svgElement.querySelectorAll('path[data-type="figure"]');
		for (let i = 0, len = svgFigures.length; i < len; i++) {
			let path = svgFigures[i];
	        path.style.opacity = 0;		
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
			path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset '+timing+'s ease-in-out';
			path.style.strokeDashoffset = 0;
		}, delay * 100);
	}

	function showSvgFigure (path) {
		let delay = path.getAttribute('data-delay') || 0;
		let timing = path.getAttribute('data-timing') || 1;
		let fill = path.getAttribute('data-fill') || null;
		setTimeout(function(){
	        if(fill != null) { path.style.fill = fill; }
			$(path).stop(true).animate({"opacity": 1}, (1 - path.style.opacity) * timing * 1000, "easeOutCubic");
		}, delay * 100);
	}

	function hideSvgLine (path) {
		let timing = path.getAttribute('data-timing') || 1;
		// Clear any previous transition
		var length = path.getTotalLength();
		// Define our transition
		path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset '+timing+'s ease-in-out';
		path.style.strokeDashoffset = length;
	}

	function hideSvgFigure (path) {
		let timing = path.getAttribute('data-timing') || 1;
	    $(path).stop(true).animate({"opacity": 0}, path.style.opacity * timing * 1000, "easeOutCubic");
	}

	function browserDetection() {   
	    //Check if browser is IE or not
	    if (navigator.userAgent.search("MSIE") >= 0) {
	        return('IE');
	    }
	    //Check if browser is Chrome or not
	    else if (navigator.userAgent.search("Chrome") >= 0) {
	        return('chrome');
	    }
	    //Check if browser is Firefox or not
	    else if (navigator.userAgent.search("Firefox") >= 0) {
	        return('firefox');
	    }
	    //Check if browser is Safari or not
	    else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
	        return('safari');
	    }
	    //Check if browser is Opera or not
	    else if (navigator.userAgent.search("Opera") >= 0) {
	        return('opera');
	    }
	}

	function compouterDetection() {   
	    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
	        return('mac');
	    } else {
	    	return('pc');
	    }
	}

}());
    

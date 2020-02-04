# jsvg-animations

It is a JS plugin to animate your svgs on all browsers

# Attributes (use the following data attributes on your paths):
- data-type = **line** | **figure** (an animated SVG line, or an animated figure)
- data-show = **start** | **hover** (animate on page load, or animate on hovering)
- data-delay = **1.5** (in seconds, the delay before animation start after page load, or after the hovering)
- data-fill = **#000000** | **black** (only for **figure**, color filling the element)
- data-stroke = **#000000** | **black** (only for **line**, color of the stroke)
- data-stroke-width = **2** (only for **line**, size of thre stroke)

# Initiating the plugin:
1) Add **jsvg-animation.js** into your page.
2) Add your SVG, containing an unique **ID**, and set the opacity of this SVG to 0 in the HTML (NB: for some navigators, on page load and init, the SVG can blink otherwise).
3) Init the SVG when you want (page load, on a special click, ...)

# Launching the plugin:
```
document.addEventListener("DOMContentLoaded", function(event) {
    let svgElement = document.body.querySelector('#YOUR_ID');
    jsvganimation.initSVG(svgElement);
});
```

# Example of full SVG:
```
<svg id="YOUR_ID" style="opacity: 0; overflow:initial; display: block;">
    <path data-show="hover" data-type="figure" data-delay="1" data-fill="#FFE3D0" d="m -0.51247883,-0.09622233 395.12117883,0 -0.51248,394.60870233 -393.58374117,0 z"></path>
    <path data-show="hover" data-type="figure" data-fill="black" d="M 0,341.82128 C 28.455991,326.9459 58.169581,307.85816 84.065709,296.06138 98.771282,283.9682 109.0749,269.05042 121.33622,255.47793 95.2191,277.63487 139.12309,350.17816 157.98556,394.20706 L 0.41411679,393.79294 z"></path>
    <path data-show="hover" data-type="figure" data-fill="black" d="m 237.08186,279.28965 c 9.68003,47.58903 10.25971,76.97735 15.32232,115.33153 l 126.30563,-0.41412 c -9.56079,-23.4296 -8.525,-52.7067 -29.19524,-69.57162 -38.23338,-14.59932 -88.89725,-23.39751 -112.43271,-45.34579 z"></path>
    <path data-show="hover" data-type="figure" data-fill="white" d="m 121.33622,255.68499 c -26.459401,25.66118 18.79416,91.12991 36.23522,138.72913 L 191.94313,394 193.5996,372.88004 c -4.28222,-6.58608 -7.74849,-14.60009 -14.07997,-17.59996 l 14.9082,-22.56937 c 15.67979,-3.65392 18.16749,1.68678 22.15525,6.0047 -5.50586,0.7664 0.68255,21.58012 2.07059,34.16463 l 11.80232,21.53408 22.15525,-0.20706 c -8.63527,-44.4594 -6.29704,-119.93085 -26.50347,-131.68914 l 0.82823,33.3364 c -12.54159,28.21971 -22.26077,31.42628 -28.15994,31.47288 -29.60734,-22.87036 -82.5045,-40.69079 -77.43984,-71.64221 z"></path>
    <path data-show="hover" data-type="figure" data-fill="black" d="m 191.94313,393.58588 1.65647,-20.70584 c -4.02623,-7.24677 -8.33444,-13.64759 -13.4588,-17.59996 l 14.07998,-22.56937 c 8.59543,-1.49316 17.32391,-3.41138 22.56936,5.79764 -5.80558,2.64154 1.01873,22.42365 2.07058,34.37169 l 10.9741,20.70584 z"></path>
    <path data-show="hover" data-type="figure" data-fill="#FFBFA2" d="m 198.569,327.53425 c -27.86048,-23.25543 -83.05936,-40.44371 -77.43984,-71.84926 l 1.24235,-18.22114 c -9.94971,-15.0517 -9.19533,-28.6786 -11.59527,-36.02816 -10.30857,3.46671 -13.956633,-5.78211 -18.428195,-13.45879 -3.623049,-16.0032 -21.093088,-36.81045 -0.207059,-44.3105 10.133804,0.035 15.389064,14.21771 20.084664,30.02347 -1.60252,-15.8022 -1.61816,-30.49359 2.27764,-42.44697 3.98629,-10.52135 7.7247,-23.52148 12.21645,-28.98818 10.5501,-10.441698 26.03385,-11.016078 39.54815,-15.52938 l 15.73644,3.519993 c 4.05138,2.003031 12.74413,-2.491855 19.25643,-3.93411 16.63455,0.889673 18.57565,7.19272 25.67524,11.595271 11.388,5.406606 6.73954,17.049616 9.31763,25.882296 8.43708,8.95164 6.13378,31.32877 8.69645,47.62343 3.63787,-18.58822 8.49425,-21.08593 13.4588,-22.15524 13.69634,-0.35395 9.59588,11.96505 9.9388,21.11995 -2.33936,6.21695 -11.87365,18.11652 -12.00939,21.11996 -2.26179,5.51963 -1.21988,13.17695 -12.21644,13.04468 -1.40264,21.31131 -8.56677,33.78832 -18.22114,42.44697 l 1.24235,49.07284 c -6.29,10.85666 -13.3009,31.50864 -28.57406,31.47287 z"></path>
    <path data-show="hover" data-type="figure" data-fill="#7F4726" d="M 111.81153,173.48281 C 107.62426,159.7711 104.09274,144.89923 92.96922,143.45934 88.374706,111.78273 82.104348,78.293137 90.277461,60.428924 106.03701,25.629344 136.22613,9.1673485 178.48434,8.0431498 210.35048,6.9451624 231.32859,25.010129 249.50537,48.00542 c 29.33603,30.260826 8.36581,67.30952 9.11057,100.63038 -10.96892,4.09231 -11.23598,14.20443 -13.87292,22.98348 -1.36749,-19.11182 -0.8837,-42.23477 -8.48939,-47.83049 -0.39379,-11.97177 -1.67942,-22.56527 -8.07528,-25.261121 C 217.1807,88.96549 209.03595,86.331787 201.88194,86.104165 l -16.77173,4.969402 -18.63526,-4.141168 c -13.03706,3.007641 -26.46986,5.382087 -36.85639,12.630562 -8.24601,7.283379 -10.51046,20.548309 -15.32233,31.265819 -4.41975,15.41518 -2.73759,28.79639 -2.4847,42.65403 z"></path>

    <path data-show="hover" data-type="line" stroke="black" stroke-width="2" d="m 0,341.70934 c 70.907024,-38.00489 53.750653,-31.10239 83.740853,-45.84907 16.801697,-13.3493 18.118787,-20.21938 37.891787,-40.54422 l 0.75784,-18.18806 c -10.93184,-15.12833 -7.82157,-24.18289 -11.36754,-35.61827 -5.85195,2.3613 -12.842736,0.1423 -18.566975,-14.01997 -3.268652,-14.35049 -21.863151,-37.26287 0,-43.95447 C 90.268978,112.14642 79.613488,80.307143 93.971637,52.594983 116.84245,15.010915 148.32888,10.001553 178.84924,7.8826712 c 43.27603,-0.1589437 62.50908,31.0662548 74.26791,44.3333938 25.72783,31.829102 4.4268,65.552795 5.30485,97.381895 9.41199,-1.48375 12.02452,8.2854 10.23078,19.70373 -0.8116,6.49288 -10.68699,16.08136 -13.64104,25.00858 -1.33883,4.86279 -1.84899,10.2435 -10.98862,10.23079 -0.34032,19.18272 -7.39032,32.32673 -17.80914,42.4388 l 0,15.91455 c 3.91336,1.28006 7.32787,6.55094 10.23078,15.91455 24.57351,22.5472 70.63822,28.7193 111.78078,45.47015 20.32271,12.76945 20.03416,46.15016 29.93451,69.34197"></path>
    <path data-show="hover" data-type="line" stroke="black" stroke-width="2" d="m 92.455965,143.53528 c 10.317875,0.85587 15.363965,14.8912 19.703735,30.69234 -1.16238,-17.92535 -0.93595,-26.12905 -0.24795,-31.10178 0.68799,-4.97273 1.83756,-6.71448 2.52145,-11.71594 7.50454,-17.13495 7.64274,-26.02393 15.15672,-31.450178 8.29019,-6.728718 24.38986,-8.926545 36.37612,-12.883212 5.60584,0.198672 12.57918,3.427686 17.40816,3.564877 8.73577,0.248182 8.40504,-3.501729 17.45228,-3.943795 14.45874,-0.213706 20.23182,7.017444 28.03992,12.50429 4.21545,1.855158 7.01734,8.657768 7.19944,24.629668 7.68324,6.09124 5.34585,29.84852 8.71511,48.50148 1.74497,-13.56138 6.21374,-21.67514 14.01997,-23.11399"=></path>
    <path data-show="hover" data-type="line" stroke="black" stroke-width="2" d="m 210.74439,152.30619 c -1.9161,-0.4935 -1.86374,-1.02888 -1.7324,-2.42536 0.7136,-1.38194 2.36498,-1.53011 3.34932,-0.1155 0.71837,1.29322 -0.3288,2.385 -1.61692,2.54086 z"></path>
    <path data-show="hover" data-type="line" stroke="black" stroke-width="2" d="m 147.38564,147.50757 c 1.5143,-0.75938 2.77177,-0.0235 2.78086,1.69941 -0.7231,1.55323 -1.51556,1.83076 -2.93536,1.23594 -0.96721,-0.83768 -0.86248,-1.95376 0.1545,-2.93535 z"></path>    
    <path data-show="hover" data-type="line" stroke="black" stroke-width="2" d="m 160.65185,190.96194 c 7.66963,-3.77396 13.94077,0.94495 18.01703,1.03944 4.24212,0.34196 14.27271,-5.28193 18.94098,-0.92395"></path>    
    <path data-show="hover" data-type="line" stroke="black" stroke-width="2" d="m 165.11168,139.9427 c -15.11675,-9.06052 -29.61225,-6.81027 -37.31626,-2.04472"></path>    
    <path data-show="hover" data-type="line" stroke="black" stroke-width="2" d="m 195.2714,140.96507 c 11.95149,-5.65083 25.74947,-7.00223 37.82745,-0.51119"></path>    
    <path data-show="hover" data-type="line" stroke="black" stroke-width="2" d="m 149.26505,219.68705 c 23.8598,2.30992 21.13314,1.93256 29.13736,2.04472 22.8191,1.77067 29.18871,0.93819 29.64853,-1.02237"></path> 
    <path data-show="hover" data-type="line" stroke="black" stroke-width="2" d="m 122.17242,237.06722 c 23.82251,25.25932 44.92011,35.8727 56.74117,33.73799 26.02974,0.90881 37.17538,-15.24663 49.07345,-25.55908"></path>
    <path data-show="hover" data-type="line" stroke="black" stroke-width="2" d="M 158.16134,394 C 133.96613,343.6788 97.460001,273.60159 121.31449,256.09366 c -5.74287,29.25224 47.13878,48.98766 77.35684,71.32343 20.42629,1.45766 44.46392,-59.85095 27.58126,-64.64359 18.91946,9.25937 18.87712,88.53144 26.07292,131.2265"></path>
    <path data-show="hover" data-type="line" stroke="black" stroke-width="2" d="m 130.58007,334.74337 35.98494,39.43259 28.2277,-41.3719 c 25.5058,-7.70534 30.63097,21.80613 44.3886,35.55398 l 6.24889,-40.50999"></path>
    <path data-show="hover" data-type="line" stroke="black" stroke-width="2" d="m 180.14016,355.42932 c 3.58964,4.17606 5.37914,4.44809 13.79064,17.66925 L 192.63792,394 l 37.49329,0 c -5.10248,-11.45464 -8.16762,-15.43904 -11.63585,-20.90143 -1.00994,-12.3456 -7.13701,-34.38685 -1.50835,-34.47659"></path>
    <path data-show="hover" data-type="line" stroke="black" stroke-width="2" d="m 226.10777,262.93204 1.24235,32.50816"></path>
</svg>
```

# Example of paths:
Here is an example of a **line** path, showing on **hover** of the parent SVG element, :
```
<path data-type="line" data-show="hover" data-stroke="black" data-stroke-width="2" 
      d="m 165.11168,139.9427 c -15.11675,-9.06052 -29.61225,-6.81027 -37.31626,-2.04472"></path>
```

Here is an example of a **figure** path, showing on **start** after 1 second, filled with **#FFE3D0** color:
```
<path data-type="figure" data-show="start" data-delay="1" data-fill="#FFE3D0" 
      d="m -0.51247883,-0.09622233 395.12117883,0 -0.51248,394.60870233 -393.58374117,0 z"></path>

```

# Example of project:
Feel free to download the demo project and try it :)



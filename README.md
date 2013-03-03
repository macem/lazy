lazy
====

jquery and zepto plugin for lazy load image, video

<h3>How it works:</h3>

the idea is to replace link to img or to iframe and show it when is in view.

<h3>Config:</h3>

<pre>{
  init      : function (node) {}, // after replace tag we can run callback 
  loadClass : 'load', // class added to original link tag before replacement
  tag       : 'img'   // replace original link to this tag
}</pre>

<h3>Example:</h3>

1. Load image

&lt;a href="*.jpg" class="lazy"&gt;my new car image&lt;/a&gt;

$('a.lazy').lazy();

2. Load video from youtube

&lt;a class="lazy-frame" href="http://www.youtube.com/embed/uahfKA-vU8M"&gt;Video&lt;/a&gt;

$('a.lazy-frame').lazy({tag: 'iframe'});



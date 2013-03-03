lazy
====

What it is:

jquery and zepto plugin for lazy load image, video

How it works:

the idea is to replace link to img or to iframe and show it when is in view.

Config:

{
  init      : function (node) {}, // after replace tag we can run callback 
  loadClass : 'load', // class added to original link tag before replacement
  tag       : 'img'   // replace original link to this tag
}

Example:

1. Load image

<a href="*.jpg" class="lazy">my new car image</a>

$('a.lazy').lazy();

2. Load video from youtube

<a class="lazy-frame" href="http://www.youtube.com/embed/uahfKA-vU8M">Video</a>

$('a.lazy-frame').lazy({tag: 'iframe'});



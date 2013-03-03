/* @ name        : lazy load
   @ description : replace link to img or to iframe and show it when is in view 
   @ author      : marcin.soltysiuk@gmail.com 
   @ version     : 0.8
   @ date        : 15.11.2012 */

(function($, w, d) {
    
    var name = 'lazy',
        def = {
            init      : function () {},
            loadClass : 'load',
            tag       : 'img'  
        };

    $.fn[name] = function (options) {
        
        var $all = this, $replaced, _o = {}, _p = {};

        // options

        $.extend (_o, def, options);

        $all.each (function () {
            this.options = _o;
        });

        // event

        $all.one ('load', function () {
            var options = this.options;
            
            $replaced = 
            $('<' + (this.getAttribute ('data-tag') || options.tag) + '/>').attr ({
                'src'    : this.getAttribute ('href'),
                'title'  : this.getAttribute ('title'),
                'class'  : this.getAttribute ('class') + ' ' + options.loadClass,
            });

            $replaced.one ('load', function () {
                $(this).removeClass (options.loadClass);
            });

            $(this).replaceWith ($replaced);

            options.init.call ($replaced[0]);
        });

        // check if element is in window view

        function inView (node) {
            _p.s  = (d.documentElement.scrollTop || d.body.scrollTop);
            _p.ot = node.offsetTop; 
            _p.ob = node.offsetHeight + _p.ot;
            _p.wh = $(w).height();
            _p.w  = (w.innerHeight && w.innerHeight < _p.wh) ? w.innerHeight : _p.wh;
            
            return _p.ot > _p.s && _p.ot < (_p.s + _p.w) || _p.ob > _p.s && _p.ob < (_p.s + _p.w);
        }

        function initialize () { 
            $all.each (function () {  
                if (inView (this) && this.hasAttribute ('href') && this.style.display !== 'none') {
                    $(this).trigger ('load');
                } 
            });
        }

        // run

        initialize();

        $(window).scroll (initialize);
        
        return this;
    };

})($, window, document);
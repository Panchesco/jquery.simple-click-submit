/**
   * simpleClickSubmit
   *
   * Version 1.0.0
   * Richard Whitmer
   * http://panchesco.com
   * simpleClickSubmit
   * @memberOf jQuery.fn
   * jQuery plugin to allow any element to be a clickable form submit button
   
   Usage:
   $(".clickable").simpleClickSubmit();
   
*/

(function($){
 
    $.fn.extend({
         
        //Pass options variable to the function
        simpleClickSubmit: function(options) {
 
            //Set the default values
            var defaults = {
                keywords:	false,			// name of keywords field
                min_chars:	false,			// Required number of characters to submit form
            }
                 
            var options =  $.extend(defaults, options);
 
            return this.each(function() {
                
            	var o = options;
            	
            	var obj = $(this);
            	
            	$(obj).click(function(){

            		var f = $(this).parents('form').first(); // Form

            		if(o.min_chars!==false) { // Minimum characters option?
            		
            			if(o.keywords!==false) // Keywords option given?
            			{
	            			s = 'input[name='+o.keywords+']';
	            			k = $(f).find(s).val().trim();
	            			l = k.length;
	            			
	            			if(l<o.min_chars){ // Compare min_chars and keywords length
	            			
	            				alert('Please enter at least '+o.min_chars+' characters');
	            				return false;
	            			}    
            			}         			
            		}
            		
            		f.submit();

            		return false;
            	});

            });
        }
   });
     
})(jQuery);
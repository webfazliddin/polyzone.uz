(function ( $ ) {
	function pad(n) {
	    return (n < 10) ? ("0" + n) : n;
	}

	$.fn.showclock = function() {
	    
	    var currentDate=new Date();
	    var fieldDate=$(this).data('date').split('-');
	    var futureDate=new Date(fieldDate[0],fieldDate[1]-1,fieldDate[2]);
	    var seconds=futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

	    if(seconds<=0 || isNaN(seconds)){
	    	this.hide();
	    	return this;
	    }

	    var days=Math.floor(seconds/86400);
	    seconds=seconds%86400;
	    
	    var hours=Math.floor(seconds/3600);
	    seconds=seconds%3600;

	    var minutes=Math.floor(seconds/60);
	    seconds=Math.floor(seconds%60);
	    
	    var html="";

        html+="<div class='countdown-container'>"
            if(days!=0){
                html+="<div class='number days'>"
                    html+="<span class='countdown-value days-bottom'>"+pad(days)+"</span>";
                html+="</div>";
            }
            html+="<div class='number hours'>"
                html+="<span class='countdown-value hours-bottom'>"+pad(hours)+"</span>";
            html+="</div>";

            html+="<div class='number minutes'>"
                html+="<span class='countdown-value minutes-bottom'>"+pad(minutes)+"</span>";
            html+="</div>";

            html+="<div class='number seconds'>"
                html+="<span class='countdown-value seconds-bottom'>"+pad(seconds)+"</span>";
            html+="</div>";
	    html+="</div>";

	    this.html(html);
	};

	$.fn.countdown = function() {
		var el=$(this);
		el.showclock();
		setInterval(function(){
			el.showclock();	
		},1000);
		
	}

}(jQuery));

jQuery(document).on('ready', function(){
    jQuery(".countdown").each(function(){
        if(jQuery(this).length>0){
            jQuery(this).countdown();
        }        
    });
});
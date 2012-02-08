/**
 * This is the entry point for our JavaScript program
 */
function main() {
    
    //alert("hello world!");


    //your tasks

    //1. Create a spotter and get it to insert tweets into the DOM
     var s  = new Spotter("twitter.search",
	{q:"Bieber",period:120},
	{buffer:true,bufferTimeOut:750});
    
	var count = true;
	var twitCount = 1;
    s.register(function(tweet) {
    	
        var profile_image = "<img src=\"" + tweet.profile_image_url+ "\" />";
	if(twitCount==10){
	    $("#tweets p:last-child").remove();
            twitCount=1;
	}
	if(count){
	$("#tweets").prepend($("<p class='green'>"+profile_image+tweet.text+"</p>").fadeIn());
	}else{
	$("#tweets").prepend($("<p class='teal'>"+profile_image+tweet.text+"</p>").fadeIn());
	}
        count = !count;	 	
    	twitCount++;
});    


	s.start();
    //3. Make the tweets occur so the most recent are at the top
    //4. Make the tweets slide down
    //5. Alternate the colors or the background of the tweets
    //6. Show a maximum of 10 tweets at a time (remove old tweets from the dom)


}

main();

console.log("Script Loaded");

$.getJSON("http://search.twitter.com/search.json?q=jquery4u&amp;rpp=5&amp;callback=?", function(data)
{
	console.log(data);
    //loop the tweets
    $(data.results).each(function(i,v)
    {
        //...see full code below
    }
}
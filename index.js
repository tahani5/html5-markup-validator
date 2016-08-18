let cheerio = require('cheerio');
let $;
var missing=[];
module.exports = {
	analyseImages: function(htmlString) {
		$ = cheerio.load(htmlString);
		$('img').each(function(){
			helper.CheckAlt.apply(this);
			helper.CheckTitle.apply(this);
		});
		return missing;
	}
}

var helper = {
	CheckAlt:function(){
		var data = $(this).attr('alt');
		if (!data) {
			missing.push({
				'type':'img',
				'message':'Missing alt',
				'error':'er_alt',
				'attr':$(this).attr()
			});
		}
	},
	CheckTitle:function(){
		var data = $(this).attr('title');
		if ( !data ) {
			missing.push({
				'type':'img',
				'message':'Missing title',
				'error':'er_title',
				'attr':$(this).attr()
			});
		}
	}
}
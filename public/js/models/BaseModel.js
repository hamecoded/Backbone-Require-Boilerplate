define(function(require) {
    "use strict";
    
    var BaseModel = Backbone.Model.extend({
    	defaults: {
            id: 3,
    		title: "no title",
    		author: "anonymous",
    		thmbnail: "http://placehold.it/900x300",
    		category: "",
    		date: "30-12-2014",
    		preview: "no preview",
    		content: null
    	},
    	urlRoot: "/api/posts"


    });
   
    return BaseModel; 
});
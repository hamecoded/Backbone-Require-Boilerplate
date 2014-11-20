/**
 * A Collection of Models
 * @param  Object require add dependencies
 * @return Object         Class Object
 */
define(function(require) {
    "use strict";
    
   	var BaseModel= require("models/BaseModel");

    var BaseCollection = Backbone.Collection.extend({
    	model: BaseModel,
    	url: "/api/posts",
        initialize: function(options){
            this.on("error", this.error, this);
            this.fetch({reset: true, parse: true});

        }, 
        error: function (model, response, options) {
            console.log(model);
            console.log(response);
            console.log(options);
        }

    	

    });
   
    return BaseCollection; 
});
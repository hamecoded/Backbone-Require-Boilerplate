/**
 * App Router
 * Author: Oded Sagir
 * @param  Object require for adding dependencies
 * @return Object         Class Object
 */		
define(["require",
    "models/BaseModel", "views/BaseView",
    "collections/BaseCollection", "views/BaseCollectionView"], 
	function (require, BaseModel, BaseView, BaseCollection, BaseCollectionView) {
    "use strict";
	
    var AppController = Backbone.Router.extend({
    	routes: {
    		"": "home",
    		"base(/)": "showWidgets",
            "base/:id": "showWidget"
    	},
    	initialize: function(){

    	},
		// Handlers
		home: function(){
			this.navigate("/base", {trigger: true, replace: true});
		},
        showWidgets: function () {
            console.log("AppController:showWidgets");
            var baseCollection= new BaseCollection();

            var baseCollectionView= new BaseCollectionView({
                el: "#main",
                collection: baseCollection
            });
        },
    	showWidget: function (id) {
    		console.log("AppController:showWidget");
			var baseModel = new BaseModel({id: id});

            var baseView = new BaseView({
                el: "#main",
                model: baseModel
            }); 
    	}

    });
			
   
    return AppController; 
});
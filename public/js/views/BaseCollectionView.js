/**
 * View
 * Author: Oded Sagir
 * @param  Object require for adding dependencies
 * @return Object         Class Object
 */		
define(function(require) {
    "use strict";

   	var template = require("text!templates/list.html");
    var BaseView= require("views/BaseView");
    var BaseModel= require("models/BaseModel");


    var BaseCollectionView = Backbone.View.extend({
    	template: template,
    	events: {
            'click .item': "showBase"
    	},
    	initialize: function (options) {
            this.listenTo( this.collection, "reset", this.render);
        },
        /**
         * subsequently aim for this function to rebuild and override the entire DOM content for that view.
         * partial renders need be considered on a case by case basis 
         * @return {PostsListView} [description]
         */
        render: function (collection, options) {
            // DOM insert the ListView template
            var data= collection.toJSON();
            var rendered = Mustache.to_html(this.template, data ); 
            this.$el.html(rendered); //detached DOM element
            
            

            return this;
        },
        
        showBase: function (event) {
            console.log('BaseCollectionView:showBase');
            var id= $(event.currentTarget).data('id');
            window.router.navigate("/base/" + id, {trigger: true, replace: true});
        }
		

    });
   
    return BaseCollectionView; 
});
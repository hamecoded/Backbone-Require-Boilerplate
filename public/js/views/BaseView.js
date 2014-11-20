/**
 * View
 * Author: Oded Sagir
 * @param  Object require for adding dependencies
 * @return Object         Class Object
 */		
define(["require", "i18n!nls/posts", "text!templates/base.html"],
    function(require, i18n, template) {
    "use strict";

    var BaseView = Backbone.View.extend({
    	template: template,
    	events: {
    	},
    	initialize: function (options) {
            this.listenTo(this.model, "change", this.render);
            this.model.fetch();

            
    	},
    	render: function() {
            var data = this.model.toJSON();
    		var rendered = Mustache.to_html(this.template, data); 
			this.$el.html(rendered); //detached DOM element
			return this;
		}
		

    });
   
    return BaseView; 
});
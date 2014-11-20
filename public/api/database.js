/**
 * description
 * Author: Oded Sagir
 * @param  Object require for adding dependencies
 * @return Object         Class Object
 */		
define(function(require) {
   
    var database = {
    	posts: require("text!api/posts.json")
    };
   
    return database; 
});
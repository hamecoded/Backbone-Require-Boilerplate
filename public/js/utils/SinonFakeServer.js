/**
 * 
 * Author: Oded Sagir
 * @param  Object require for adding dependencies
 * @return Object         Class Object
 */		
define(["require", "api/database",
    "vendor/sinon/index"
    ], function(require, database) {
    "use strict";

    var SinonFakeServer = Marionette.Controller.extend({
    	
    	initialize: function (options) {
            this.server= sinon.fakeServer.create();
            this.server.autoRespond = true;
            this.server.autoRespondAfter = 400;

            var post2= JSON.stringify(JSON.parse(database.posts)[1]);
            this.server.respondWith('GET', '/api/posts',
                [
                    200,
                    {'Content-Type': 'application/json'},
                    database.posts
                ]
            );
            this.server.respondWith('GET', '/api/posts/2',
                [
                    200,
                    {'Content-Type': 'application/json'},
                    post2                
                ]
            );
            
    	}
    	
		

    });
   
    return SinonFakeServer; 
});
/**
 * Custom Overrides and overloads for Marionett library
 * Author: Oded Sagir
 * @param  Object require for adding dependencies
 * @return Object         Class Object
 */		
require(["require", "backbone", "marionette"], 
        function(require, backbone, marionette){
       
    /**
     * This function takes a flat object and builds upon it's keys, 
     * which contain dot seperators a nested json object
     * @param  {[type]} data [description]
     * @return {[type]}      returns the same data
     */
    Marionette.ItemView.prototype.i18n = function (data, i18n) {
        var _i18nArr = _.map(i18n, function(val, key, obj){
            var items = key.split('.');
            var o = {};
            var tmp = o;
            var i = 0;
            for(; i < items.length-1; i++){
                if(items.length === 1){
                    tmp = tmp[key] = val;
                    return;
                }
                tmp = tmp[items[i]] = {};
            }
            tmp[items[i]] = val;
            return o;
        });
        var _i18n = {};
        _.each(_i18nArr, function(obj){
            $.extend(true, _i18n, obj);
        });
        data = _.extend(data, { _i18n: _i18n });
        return data;
    };


});
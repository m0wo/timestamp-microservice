'use strict';

module.exports = function(timestamp) {
    var dateObj = {unix: null, natural: null};
    var unix = Date.parse(timestamp);
    
    if(!isNaN(unix)){
        dateObj.unix = unix;
        dateObj.natural = new Date(unix).toDateString();
    }
    
    return dateObj;
}

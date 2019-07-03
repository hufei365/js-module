define(function(require,exports,module) {
    document.body.innerHTML = "seajs it works";
    let mod2 = require('./mod2');

    // pause for 2 seconds
    let now = new Date();
    while( +(new Date) - now < 2000){ }
    
    let mod1 = require('./mod1');
})
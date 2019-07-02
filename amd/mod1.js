
define(function () {
    Promise.resolve(1);
    let t = +new Date();
    console.log(new Date);
    while( +(new Date) - t < 2000){

    }
    console.log(new Date);
    console.log('mod1.js', new Date());
    return {
        getHello: function () {
            return 'Hello World';
        }
    };
});
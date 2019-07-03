console.log(`mod2 have loaded at ${+new Date}!`)
define(function () {
    console.log(`mod2 have inited at ${new Date}!`)
    return {
        sayHi: function () {
            console.log(`Hi, I'm mod2. And The time is ${new Date}`);
        }
    };
});
console.log(`mod1 have loaded at ${+new Date}!`)
define(function () {
    console.log(`mod1 have inited at ${new Date}!`);
    return {
        sayHi: function () {
            console.log(`Hi, I'm mod1. And The time is ${new Date}`);
        }
    };
});
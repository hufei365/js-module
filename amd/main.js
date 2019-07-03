requirejs(["mod1", "mod2"], function(mod1, mod2) {
    // console.log(mod1);
    mod1.sayHi();

    // pause for 2 seconds
    let now = new Date();
    while( +(new Date) - now < 2000){ }

    mod2.sayHi();
});
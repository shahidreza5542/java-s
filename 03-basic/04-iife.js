(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
    
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})(`shahid`);

// ( function aurchai() {
//      console.log(`DB CONNECTED TWO`);    
// })();
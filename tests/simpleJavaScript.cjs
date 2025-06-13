var WPAPI = require( 'wpapi' );

console.log('Begin simpleJavaScript.cjs.');
console.log('wpapi: ', WPAPI );
var wp = new WPAPI({ endpoint: 'https://mkbwp.Bible.MichaelKentBurns.com/wp-json' });
console.log('wp: ', wp );

console.log('Query the users -----------------------------------------------')
let users=wp.users();
console.log(users);

console.log('Query the posts -----------------------------------------------');
// Callbacks
wp.posts().get(function( err, data ) {
    if ( err ) {
        // handle err
    }
    // do something with the returned posts
});

// Promises
wp.posts().then(function( data ) {
    // do something with the returned posts
}).catch(function( err ) {
    // handle error
});

console.log('End simpleJavaScript.cjs.');

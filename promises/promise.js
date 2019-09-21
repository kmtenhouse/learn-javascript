const evenNumbersOnly = require('./evenNumbersOnly');

evenNumbersOnly(2) //what might happen if we put in 3?
.then( function(result) { //
    console.log(result);
} )
.catch( function(err) { //usually developers send an 'error object'
    console.log(err); //'message' is one of the properties
} );


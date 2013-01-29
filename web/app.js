// Require modules.
var express = require( 'express' ),
    engines = require( 'consolidate' ),
    hogan   = require( 'hogan.js' ),
    less    = require( 'less-middleware' );

// Define application server and routes.
var app    = module.exports = express(),
    env    = process.env.NODE_ENV || 'development',
    port   = process.env.PORT || 3000,
    routes = require( './routes/index' );

// Define application environment.
app.set( 'env', env );

// Define view engine and template location.
app.engine( 'html', engines.hogan );
app.set( 'view engine', 'html' );
app.set( 'views', __dirname + '/views' );

// Define LESS compiler.
app.use(
  less({ 
    src      : __dirname + '/../src',
    dest     : __dirname + '/public',
    debug    : true, 
    compress : 'auto',
    force    : true
  })
);

// Define static assets folder (after LESS middleware so that it recompiles properly).
app.use(
  express.static( __dirname + '/public' )
);

// Assign all application routes.
app.use( app.router );

// Start application.
app.listen( port );
console.log( 'Application listening on port ' + port + '.' );
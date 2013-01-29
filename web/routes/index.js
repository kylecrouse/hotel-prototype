// Require modules.
var app = require( '../app' ),
    _   = require( 'underscore' );
    
// Set application-wide locals.
app.locals[ '_' ] = _;
app.locals.active = true;
app.locals.base   = '/';

// Index
var index = module.exports.index = function( req, res, next ) {
    res.render( req.params.page || 'index' );
};
app.get( '/:page?', index );

// Child
var child = module.exports.child = function( req, res, next ) {
    res.locals.active = false;
    res.locals.base   = '../';
    res.locals.page   = req.params.page;
    res.render( req.params.folder + '/shell' );
};
app.get( '/:folder(rooms)/:page', child );

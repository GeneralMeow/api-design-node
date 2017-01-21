// TODO: make a new router for the tigers resource
// and make some REST routes for it, exactly like for lions
// make a middleware that just logs the word 'tiger' to the console
// when a request comes in to the server

const tigerRouter = require('express').Router();

const lions = [];
const id = 0;
// id generating function
const updateId = function( req, res, next ) {
  if( !req.body.id ) {
    id++;
    req.body.id = id + '';
  }
  next();
}

tigerRouter.param( 'id', function( req, res, next, id ) {
  const todo = _.find(todos, { id: id } )

  if( todo ) {
    req.todo = todo
    next()
  } else {
    res.send()
  }
} )

const tigerMiddleware = () => {
  return console.log('tigers')
}

tigerRouter.get('/', function( req, res, next ) {
  res.send( tigerMiddleware() );
})

tigerRouter.get('/:id', function( req, res, next ) {
  res.send( tigerMiddleware() )
})

tigerRouter.post('/', updateId, function( req, res, next ) {
  res.send( tigerMiddleware() )
})

tigerRouter.put('/:id', function( req, res, next ) {
  res.send( tigerMiddleware() )
})

module.exports = tigerRouter;

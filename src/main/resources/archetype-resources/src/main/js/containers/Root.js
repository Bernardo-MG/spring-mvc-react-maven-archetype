/**
 * Root application.
 * 
 * There are two options, depending on if this is a production or development build.
 */
module.exports = (process.env.NODE_ENV === 'production') ? require('containers/Root.prod') : require('containers/Root.dev');

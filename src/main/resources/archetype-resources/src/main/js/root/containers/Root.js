/**
 * Root application.
 * 
 * There are two options, depending on if this is a production or development build.
 */
module.exports = (process.env.NODE_ENV === 'production') ? require('root/containers/Root.prod') : require('root/containers/Root.dev');

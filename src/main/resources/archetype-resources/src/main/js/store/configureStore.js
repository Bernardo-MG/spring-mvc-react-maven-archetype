/**
 * Application store.
 * 
 * There are two options, depending on if this is a production or development build.
 */
module.exports = (process.env.NODE_ENV === 'production') ? require('store/configureStore.prod') : require('store/configureStore.dev');

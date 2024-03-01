const NodeCache = require('node-cache');
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 }); // TTL in seconds

// Set data in cache
exports.setCache = (key, value) => {
    return myCache.set(key, value);
};

// Get data from cache
exports.getCache = (key) => {
    return myCache.get(key);
};

// Delete specific data from cache
exports.deleteCache = (key) => {
    return myCache.del(key);
};

// Clear the entire cache
exports.clearCache = () => {
    return myCache.flushAll();
};

const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

// Set data in cache
function setCache(key, value) {
    return cache.set(key, value);
}

// Get data from cache
function getCache(key) {
    return cache.get(key);
}

// Delete data from cache
function deleteCache(key) {
    return cache.del(key);
}

// Flush all data from cache
function flushCache() {
    return cache.flushAll();
}

module.exports = {
    setCache,
    getCache,
    deleteCache,
    flushCache
};

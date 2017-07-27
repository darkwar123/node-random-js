/**
 * Modules
 * @private
 * */
const crypto = require('crypto');
const Decimal = require('decimal.js');
const RandomJs = require('random-js');

/**
 * Random class extends random-js
 * */
class Random extends RandomJs{
    /**
     * @constructor
     * */
    constructor(){
        super();
    }
    /**
     * Generate random decimal from 0 to 1 exclusive
     * @param {Number} length - count of symbols after comma
     * @return {Decimal}
     * */
    decimal(length = 30){
        return Decimal.random(length);
    }
    /**
     * Generate hash from string
     * @param {String|Decimal|Number} value
     * @param {String} type
     * @return {String}
     * */
    hash(value, type = 'sha224'){
        return crypto.createHash(type).update(''+value).digest('hex');
    }
}

module.exports = Random;
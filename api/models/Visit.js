/**
 * Visit.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        checkin: {
            type: 'string',
            required: true
        },
        checkout: {
            type: 'string',
            required: true
        },
        agency_name: {
            type: 'string',
            required: true
        },
        hotel_name: {
            type: 'string',
            required: true
        },
        /*products: {
         collection: 'product',
         via: 'owner'
         }*/

        owner: {
            model: 'customer',
            required: true
        }
    }
};


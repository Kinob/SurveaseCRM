/**
 * Respons.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        id: {
            type: 'string',
            required: false
        },
        date: {
            type: 'string',
            required: false
        },
        language: {
            type: 'string',
            required: false
        },
        ip: {
            type: 'string',
            required: false
        },
        referal_url: {
            type: 'string',
            required: false
        },
        date: {
            type: 'string',
            required: false
        },
        name: {
            type: 'string',
            required: false
        },
        email: {
            type: 'string',
            required: false
        },
        newsletter_subscribe: {
            type: 'string',
            required: false
        },
        survey_owner: {
            model: 'survey',
            required: true
        }
    }
};


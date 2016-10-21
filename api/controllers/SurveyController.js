/**
 * SurveyController
 *
 * @description :: Server-side logic for managing surveys
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    'new': function (req, res) {
        res.view();
    },

    show: function (req, res, next) {
        Survey.findOne(req.param('id')).populateAll().exec(function (err, survey) {
            if (err) return next(err);
            if (!survey) return next();

            res.view({
                survey: survey
            });
        });
    },

    index: function (req, res, next) {
        Survey.find(function foundSurveys(err, surveys) {
            if (err) return next(err);

            res.view({
                surveys: surveys
            });
        });
    }
};
/**
 * VisitController
 *
 * @description :: Server-side logic for managing visits
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    'new': function (req, res, err) {
        Customer.findOne(req.param('owner'), function foundCustomer(err, customer) {
            if (err) return next(err);
            if (!customer) return next();
            res.view({
                customer: customer
            });
        });
    },
    create: function (req, res, next) {
        Visit.create(req.params.all(), function visitCreate(err, visit) {
            if (err) return next(err);

            /*res.json(order);*/
            /* res.redirect('/order/'); */
            res.redirect('/customer/show/' + visit.owner);
        });
    }
};


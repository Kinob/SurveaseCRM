/**
 * OrdersController
 *
 * @description :: Server-side logic for managing orders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function (req, res, err) {
        Customer.findOne(req.param('owner'), function foundCustomer (err, customer) {
            if (err) return next(err);
            if(!customer) return next();
            res.view({
                customer: customer
            });
        });
    },
    create: function (req, res, next) {
        Order.create( req.params.all(), function orderCreate(err, order) {
            if (err) return next(err);

            /*res.json(order);*/
            /* res.redirect('/order/'); */
            res.redirect('/customer/show/' + order.owner);
        });
    }
};


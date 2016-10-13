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
    },

    show: function (req, res, next) {
        Order.findOne(req.param('id')).populateAll().exec(function (err, order) {
            if (err) return next(err);
            if (!order) return next();

            res.view({
                order: order
            });
        });
    },

    index: function (req, res, next) {
        Order.find(function foundOrders(err, orders) {
            if (err) return next(err);

            res.view({
                orders: orders
            });
        });
    },

    edit: function (req, res, next) {
        Order.findOne(req.param('id'), function foundOrder(err, order) {
            if (err) return next(err);
            if (!order) return next();

            res.view({
                order: order
            });
        });
    },

    update: function (req, res, next) {
        Order.update(req.param('id'), req.params.all(), function orderUpdated(err) {
            if (err) {
                return res.redirect('/order/edit/' + req.param('id'));
            }

            res.redirect('/order/');
            /* res.redirect('/customer/show/' + req.param('id')); */
        });
    },

    destroy: function (req, res, next) {
        Order.destroy(req.param('id')).exec(function () {
            res.redirect('/order/');
        });
    }

};


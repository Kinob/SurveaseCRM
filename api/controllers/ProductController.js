/**
 * ProductsController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    'new': function (req, res) {
        res.view();
    },

    create: function (req, res, next) {
        Product.create( req.params.all(), function productCreate(err, product) {
            if (err) return next(err);

            res.redirect('/product/');
            /* res.redirect('customer/show/' + customer.id); */
        });
    },

    show: function (req, res, next) {
        Product.findOne(req.param('id'), function foundProduct(err, product) {
            if (err) return next(err);
            if (!product) return next();

            res.view({
                product: product
            });
        });
    },

    index: function (req, res, next) {
        Product.find(function foundProducts (err, products) {
            if (err) return next(err);

            res.view({
                products: products
            });
        });
    },

    edit: function (req, res, next) {
        Product.findOne(req.param('id'), function foundProduct(err, product) {
            if (err) return next(err);
            if (!product) return next();

            res.view({
                product: product
            });
        });
    },

    update: function (req, res, next) {
        Product.update(req.param('id'), req.params.all(), function productUpdated(err) {
            if (err) {
                return res.redirect('/product/edit/' + req.param('id'));
            }

            res.redirect('/product/');
            /* res.redirect('/customer/show/' + req.param('id')); */
        });
    },

    destroy: function (req, res, next) {
        Product.destroy(req.param('id')).exec( function() {
            res.redirect('/product/');
        });
    }
};


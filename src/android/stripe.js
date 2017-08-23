"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("utils/utils");
var Stripe = (function () {
    function Stripe(apiKey) {
        this._ctx = utils.ad.getApplicationContext();
        this._stripe = new com.stripe.android.Stripe(this._ctx, apiKey);
    }
    Stripe.prototype.createToken = function (card, cb) {
        var that = new WeakRef(this);
        this._stripe.createToken(card, new com.stripe.android.TokenCallback({
            owner: that.get(),
            onSuccess: function (token) {
                if (typeof cb === "function") {
                    cb(null, token);
                }
            },
            onError: function (error) {
                console.log(error.getLocalizedMessage());
                if (typeof cb === "function") {
                    cb(new Error(error.getLocalizedMessage()));
                }
            }
        }));
    };
    return Stripe;
}());
exports.Stripe = Stripe;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getter = require("utils/utils").ios.getter;
var Stripe = (function () {
    function Stripe() {
    }
    Stripe.prototype.createToken = function (card, cb) {
        var apiClient = getter(STPAPIClient, STPAPIClient.sharedClient);
        apiClient.createTokenWithCardCompletion(card, function (token, error) {
            if (!error) {
                if (typeof cb === "function") {
                    cb(null, token);
                }
            }
            else {
                console.log(error.localizedDescription);
                if (typeof cb === "function") {
                    cb(new Error(error.localizedDescription));
                }
            }
        });
    };
    return Stripe;
}());
exports.Stripe = Stripe;

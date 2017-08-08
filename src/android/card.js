"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card = (function () {
    function Card(cardNumber, cardExpMonth, cardExpYear, cardCVC) {
        this._card = new com.stripe.android.model.Card(new java.lang.String(cardNumber), new java.lang.Integer(cardExpMonth), new java.lang.Integer(cardExpYear), new java.lang.String(cardCVC));
    }
    Object.defineProperty(Card.prototype, "card", {
        get: function () {
            return this._card;
        },
        enumerable: true,
        configurable: true
    });
    Card.prototype.validateNumber = function () {
        return this._card.validateNumber();
    };
    Card.prototype.validateCVC = function () {
        return this._card.validateCVC();
    };
    Card.prototype.validateCard = function () {
        return this._card.validateCard();
    };
    Card.prototype.validateExpMonth = function () {
        return this._card.validateExpMonth();
    };
    Card.prototype.validateExpYear = function () {
        return this._card.validateExpYear();
    };
    Object.defineProperty(Card.prototype, "number", {
        get: function () {
            return this._card.getNumber();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "cvc", {
        get: function () {
            return this._card.getCVC();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "expMonth", {
        get: function () {
            return this._card.getExpMonth();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "expYear", {
        get: function () {
            return this._card.getExpYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "name", {
        get: function () {
            return this._card.getName();
        },
        set: function (value) {
            this._card.setName(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "addressLine1", {
        get: function () {
            return this._card.getAddressLine1();
        },
        set: function (value) {
            this._card.setAddressLine1(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "addressLine2", {
        get: function () {
            return this._card.getAddressLine2();
        },
        set: function (value) {
            this._card.setAddressLine2(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "addressCity", {
        get: function () {
            return this._card.getAddressCity();
        },
        set: function (value) {
            this._card.setAddressCity(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "addressZip", {
        get: function () {
            return this._card.getAddressZip();
        },
        set: function (value) {
            this._card.setAddressZip(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "addressState", {
        get: function () {
            return this._card.getAddressState();
        },
        set: function (value) {
            this._card.setAddressState(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "addressCountry", {
        get: function () {
            return this._card.getAddressCountry();
        },
        set: function (value) {
            this._card.setAddressCountry(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "currency", {
        get: function () {
            return this._card.getCurrency();
        },
        set: function (value) {
            this._card.setCurrency(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "last4", {
        get: function () {
            return this._card.getLast4();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "brand", {
        get: function () {
            return this._card.getBrand();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "fingerprint", {
        get: function () {
            return this._card.getFingerprint();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "funding", {
        get: function () {
            return this._card.getFunding();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "country", {
        get: function () {
            return this._card.getCountry();
        },
        enumerable: true,
        configurable: true
    });
    return Card;
}());
exports.Card = Card;

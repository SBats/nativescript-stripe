"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card = (function () {
    function Card(cardNumber, cardExpMonth, cardExpYear, cardCVC) {
        this._card = STPCardParams.alloc().init();
        this._card.number = cardNumber;
        this._card.expMonth = cardExpMonth;
        this._card.expYear = cardExpYear;
        this._card.cvc = cardCVC;
    }
    Object.defineProperty(Card.prototype, "card", {
        get: function () {
            return this._card;
        },
        enumerable: true,
        configurable: true
    });
    Card.prototype.validateNumber = function () {
        var isValid = false;
        var state = STPCardValidator.validationStateForNumberValidatingCardBrand(this._card.number, true);
        switch (state) {
            case 0:
                isValid = true;
                break;
            case 2:
                isValid = false;
                break;
            case 1:
                isValid = false;
                break;
        }
        return isValid;
    };
    Card.prototype.validateCVC = function () {
        var isValid = false;
        var brand = STPCardValidator.brandForNumber(this._card.number);
        var state = STPCardValidator.validationStateForCVCCardBrand(this._card.cvc, brand);
        switch (state) {
            case 0:
                isValid = true;
                break;
            case 2:
                isValid = false;
                break;
            case 1:
                isValid = false;
                break;
        }
        return isValid;
    };
    Card.prototype.validateCard = function () {
        try {
            return this._card.validateCardReturningError();
        }
        catch (ex) {
            return false;
        }
    };
    Card.prototype.validateExpMonth = function () {
        var isValid = false;
        var state = STPCardValidator.validationStateForExpirationMonth(String(this._card.expMonth));
        switch (state) {
            case 0:
                isValid = true;
                break;
            case 2:
                isValid = false;
                break;
            case 1:
                isValid = false;
                break;
        }
        return isValid;
    };
    Card.prototype.validateExpYear = function () {
        var isValid = false;
        var date = new Date();
        var state = STPCardValidator.validationStateForExpirationYearInMonthInCurrentYearCurrentMonth(String(this._card.expYear), String(this._card.expMonth), date.getFullYear(), (date.getMonth() + 1));
        switch (state) {
            case 0:
                isValid = true;
                break;
            case 2:
                isValid = false;
                break;
            case 1:
                isValid = false;
                break;
        }
        return isValid;
    };
    Object.defineProperty(Card.prototype, "number", {
        get: function () {
            return this._card.number;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "cvc", {
        get: function () {
            return this._card.cvc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "expMonth", {
        get: function () {
            return this._card.expMonth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "expYear", {
        get: function () {
            return this._card.expYear;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "name", {
        get: function () {
            return this._card.name;
        },
        set: function (value) {
            this._card.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "addressLine1", {
        get: function () {
            return this._card.addressLine1;
        },
        set: function (value) {
            this._card.addressLine1 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "addressLine2", {
        get: function () {
            return this._card.addressLine2;
        },
        set: function (value) {
            this._card.addressLine2 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "addressCity", {
        get: function () {
            return this._card.addressCity;
        },
        set: function (value) {
            this._card.addressCity = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "addressZip", {
        get: function () {
            return this._card.addressZip;
        },
        set: function (value) {
            this._card.addressZip = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "addressState", {
        get: function () {
            return this._card.addressState;
        },
        set: function (value) {
            this._card.addressState = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "addressCountry", {
        get: function () {
            return this._card.addressCountry;
        },
        set: function (value) {
            this._card.addressCountry = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "currency", {
        get: function () {
            return this._card.currency;
        },
        set: function (value) {
            this._card.currency = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "last4", {
        get: function () {
            return this._card.last4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "brand", {
        get: function () {
            var brand = "Unknown";
            switch (STPCardValidator.brandForNumber(this._card.number)) {
                case 0:
                    brand = "Visa";
                    break;
                case 1:
                    brand = "Amex";
                    break;
                case 2:
                    brand = "MasterCard";
                    break;
                case 3:
                    brand = "Discover";
                    break;
                case 4:
                    brand = "JCB";
                    break;
                case 5:
                    brand = "DinersClub";
                    break;
                case 6:
                    brand = "Unknown";
                    break;
            }
            return brand;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "fingerprint", {
        get: function () {
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "funding", {
        get: function () {
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "country", {
        get: function () {
            return this._card.addressCountry;
        },
        enumerable: true,
        configurable: true
    });
    return Card;
}());
exports.Card = Card;

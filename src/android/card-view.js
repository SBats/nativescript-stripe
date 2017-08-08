"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common = require("../card-view.common");
var utils = require("tns-core-modules/utils/utils");
var card_1 = require("./card");
global.moduleMerge(common, exports);
var CreditCardView = (function (_super) {
    __extends(CreditCardView, _super);
    function CreditCardView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CreditCardView.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    CreditCardView.prototype.createNativeView = function () {
        this._ctx = utils.ad.getApplicationContext();
        this._android = new com.stripe.android.view.CardInputWidget(this._ctx);
        return this._android;
    };
    Object.defineProperty(CreditCardView.prototype, "card", {
        get: function () {
            var card = this._android.getCard();
            if (card) {
                return new card_1.Card(card.getNumber(), card.getExpMonth(), card.getExpYear(), card.getCVC());
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    return CreditCardView;
}(common.CreditCardView));
exports.CreditCardView = CreditCardView;

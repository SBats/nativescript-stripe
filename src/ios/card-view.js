"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common = require("../card-view.common");
var card_1 = require("./card");
global.moduleMerge(common, exports);
var CreditCardView = (function (_super) {
    __extends(CreditCardView, _super);
    function CreditCardView() {
        var _this = _super.call(this) || this;
        _this._ios = STPPaymentCardTextField.alloc().initWithFrame(CGRectMake(10, 10, 300, 44));
        return _this;
    }
    Object.defineProperty(CreditCardView.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreditCardView.prototype, "card", {
        get: function () {
            try {
                var valid = this._ios.cardParams.validateCardReturningError();
                return new card_1.Card(this._ios.cardParams.number, this._ios.cardParams.expMonth, this._ios.cardParams.expYear, this._ios.cardParams.cvc);
            }
            catch (ex) {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    return CreditCardView;
}(common.CreditCardView));
exports.CreditCardView = CreditCardView;

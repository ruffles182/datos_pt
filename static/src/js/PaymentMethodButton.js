odoo.define('datos_pt.PaymentMethodButton', function(require) {
    'use strict';
        const PaymentMethodButton = require('point_of_sale.PaymentMethodButton');
        const { Gui } = require('point_of_sale.Gui');
        const PosComponent = require('point_of_sale.PosComponent');
        const { posbus } = require('point_of_sale.utils');
        const { useListener } = require('web.custom_hooks');
        const Registries = require('point_of_sale.Registries');
       
    const PaymentMethodButtonInherit = PaymentMethodButton => class extends PaymentMethodButton{
           
    constructor() {
        super(...arguments);
    }

    

    // esTarjeta(paymentMethod) {
    //     if (paymentMethod.es_pago_tarjeta) {
    //         this.IsCustomButton(paymentMethod.name);
    //     } else {
    //         PaymentScreen.addNewPaymentLine(paymentMethod);
    //         // PaymentScreen.trigger('new-payment-line', paymentMethod);
    //     }
    // }
           
    // IsCustomButton(nombre) {
                    
    //     Gui.showPopup("ErrorPopup", {
    //     title: this.env._t(nombre),
    //     body: this.env._t('Welcome to OWL'),
    //     });
           
    // }
};
Registries.Component.extend(PaymentMethodButton, PaymentMethodButtonInherit);
return PaymentMethodButton;
});
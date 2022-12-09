odoo.define('datos_pt.PaymentScreen', function(require) {
    'use strict';
        const PaymentScreen = require('point_of_sale.PaymentScreen');
        const { Gui } = require('point_of_sale.Gui');
        const PosComponent = require('point_of_sale.PosComponent');
        const { posbus } = require('point_of_sale.utils');
        const { useListener } = require('web.custom_hooks');
        const Registries = require('point_of_sale.Registries');
       
    const PaymentScreenInherit = PaymentScreen => class extends PaymentScreen{
           
        constructor() {
            super(...arguments);
            useListener('new-payment-line-pagos', this.esTarjeta);
        }

        esTarjeta(paymentMethod) {
            if (paymentMethod.detail.es_pago_tarjeta) {
                this.showPopup('TarjetaPopup', {
                    'orden': this.currentOrder
                }); 
                this.addNewPaymentLine(paymentMethod);
            } else {
                this.addNewPaymentLine(paymentMethod);
            }

        }
            
        IsCustomButton(nombre) {
                        
            Gui.showPopup("ErrorPopup", {
            title: this.env._t(nombre),
            body: this.env._t('Welcome to OWL'),
            });
            
        }
    };
Registries.Component.extend(PaymentScreen, PaymentScreenInherit);
return PaymentScreen;
});
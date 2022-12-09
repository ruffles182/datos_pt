odoo.define('datos_pt.models', function (require) {
    'use strict';
    var models = require('point_of_sale.models');

    var _super_order = models.Order.prototype;
    
    models.load_fields('pos.payment.method', ['id', 'name', 'es_pago_tarjeta', 'test_text']);

    models.Order = models.Order.extend({
        initialize: function (attributes, options) {
            var line = _super_order.initialize.apply(this, arguments);

            this.no_auto = "";
            this.termi_targ = "";
        },
        set_no_auto: function(no_auto){
            this.no_auto = no_auto || '';
        },
        set_termi_targ: function(termi_targ){
            this.termi_targ = termi_targ || '';
        },
        export_for_printing_heredada: function(no_auto, termi_targ){
            var recibo = this.export_for_printing()
            recibo.no_auto = no_auto;
            recibo.termi_targ = termi_targ;

            return recibo;
        },
        getOrderReceiptEnv: function() {
            // Formerly get_receipt_render_env defined in ScreenWidget.
            return {
                order: this,
                receipt: this.export_for_printing_heredada(this.no_auto,this.termi_targ),
                orderlines: this.get_orderlines(),
                paymentlines: this.get_paymentlines(),
            };
        },
    });
            
});
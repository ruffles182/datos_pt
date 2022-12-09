odoo.define('datos_pt.TarjetaPopup', function (require) {
    'use strict'

    const { useState } = owl.hooks;
    const AbstractAwaitablePopup = require('point_of_sale.AbstractAwaitablePopup');
    const Registries = require('point_of_sale.Registries');
    var rpc = require('web.rpc');

    class TarjetaPopup extends AbstractAwaitablePopup {
        constructor() {
            super(...arguments);
            this.state = useState({
                'terminacion': '',
                'noAutorizacion': '',
                'error': false
            });
        }

        agregarDatos() {
            var self = this;
            self.trigger('close-popup');
            console.log("terminacion", self.state.terminacion);
            console.log("número de autorizacion", self.state.noAutorizacion);
            console.log("Orden_inicial",self.props.orden);
            self.props.orden.set_no_auto(self.state.noAutorizacion);
            self.props.orden.set_termi_targ(self.state.terminacion);
            console.log("Orden_final",self.props.orden);
            var recibo = self.props.orden.export_for_printing();
            var reciboFin = self.props.orden.export_for_printing_heredada(self.state.noAutorizacion, self.state.terminacion);
            console.log("infoRecibo",recibo);
            console.log("infoReciboFin",reciboFin);

        }

        removeAlert() {
            var self = this;
            self.trigger('close-popup');
        }
    }
    TarjetaPopup.template = 'TarjetaPopup';
    Registries.Component.add(TarjetaPopup);
    return TarjetaPopup;
});
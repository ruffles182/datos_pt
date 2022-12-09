# -*- coding: utf-8 -*-

from odoo import models, fields, api

class pospaymentmethodHeredada(models.Model):
    _inherit='pos.payment.method'
    _name='pos.payment.method'

    es_pago_tarjeta = fields.Boolean(string='pago con tarjeta')
    test_text = fields.Char(string="test_texto")

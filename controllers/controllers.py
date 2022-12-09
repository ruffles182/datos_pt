# -*- coding: utf-8 -*-
# from odoo import http


# class DatosPt(http.Controller):
#     @http.route('/datos_pt/datos_pt', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/datos_pt/datos_pt/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('datos_pt.listing', {
#             'root': '/datos_pt/datos_pt',
#             'objects': http.request.env['datos_pt.datos_pt'].search([]),
#         })

#     @http.route('/datos_pt/datos_pt/objects/<model("datos_pt.datos_pt"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('datos_pt.object', {
#             'object': obj
#         })

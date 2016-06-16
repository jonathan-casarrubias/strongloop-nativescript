"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
/* tslint:disable */
var http_1 = require('@angular/http');
var auth_service_1 = require('./services/auth.service');
var errorHandler_service_1 = require('./services/errorHandler.service');
var api_service_1 = require('./services/api.service');
exports.API_PROVIDERS = [
    http_1.HTTP_PROVIDERS,
    auth_service_1.LoopBackAuth,
    errorHandler_service_1.ErrorHandler,
    api_service_1.UserApi,
    api_service_1.TodoApi,
];
__export(require('./models'));
__export(require('./services/api.service'));
__export(require('./services/config.service'));
__export(require('./services/auth.service'));
//# sourceMappingURL=index.js.map
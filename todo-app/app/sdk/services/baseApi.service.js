"use strict";
/* tslint:disable */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var auth_service_1 = require('./auth.service');
var errorHandler_service_1 = require('./errorHandler.service');
var BaseLoopBackApi = (function () {
    function BaseLoopBackApi(http, auth, errorHandler) {
        this.http = http;
        this.auth = auth;
        this.errorHandler = errorHandler;
        if (!auth) {
            this.auth = new auth_service_1.LoopBackAuth();
        }
        if (!errorHandler) {
            this.errorHandler = new errorHandler_service_1.ErrorHandler();
        }
    }
    /**
     * Process request
     * @param string  method    Request method (GET, POST, PUT)
     * @param string  url       Request url (my-host/my-url/:id)
     * @param any     urlParams Values of url parameters
     * @param any     params    Parameters for building url (filter and other)
     * @param any     data      Request body
     * @param boolean isio      Request socket connection
     */
    BaseLoopBackApi.prototype.request = function (method, url, urlParams, params, data) {
        if (urlParams === void 0) { urlParams = {}; }
        if (params === void 0) { params = {}; }
        if (data === void 0) { data = null; }
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        if (this.auth.getAccessTokenId()) {
            headers.append('Authorization', this.auth.getAccessTokenId());
        }
        var requestUrl = url;
        var key;
        for (key in urlParams) {
            requestUrl = requestUrl.replace(new RegExp(":" + key + "(\/|$)", "g"), urlParams[key] + "$1");
        }
        var parameters = [];
        for (var param in params) {
            parameters.push(param + '=' + (typeof params[param] === 'object' ? JSON.stringify(params[param]) : params[param]));
        }
        requestUrl += (parameters ? '?' : '') + parameters.join('&');
        var request = new http_1.Request({
            headers: headers,
            method: method,
            url: requestUrl,
            body: data ? JSON.stringify(data) : undefined
        });
        return this.http.request(request)
            .map(function (res) { return (res.text() != "" ? res.json() : {}); })
            .catch(this.errorHandler.handleError);
    };
    BaseLoopBackApi = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)),
        __param(1, core_1.Inject(auth_service_1.LoopBackAuth)),
        __param(2, core_1.Optional()),
        __param(2, core_1.Inject(errorHandler_service_1.ErrorHandler)), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.LoopBackAuth, errorHandler_service_1.ErrorHandler])
    ], BaseLoopBackApi);
    return BaseLoopBackApi;
}());
exports.BaseLoopBackApi = BaseLoopBackApi;
//# sourceMappingURL=baseApi.service.js.map
"use strict";
/* tslint:disable */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var baseApi_service_1 = require('../baseApi.service');
var config_service_1 = require('../config.service');
var auth_service_1 = require('../auth.service');
var errorHandler_service_1 = require('../errorHandler.service');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/share');
/**
 * Api for the `User` model.
 */
var UserApi = (function (_super) {
    __extends(UserApi, _super);
    function UserApi(http, auth, errorHandler) {
        _super.call(this, http, auth, errorHandler);
        this.auth = auth;
    }
    /**
     * Find a related item by id for accessTokens.
     *
     * @param any id User id
     *
     * @param any fk Foreign key for accessTokens
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.findByIdAccessTokens = function (id, fk) {
        var method = "GET";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users/:id/accessTokens/:fk";
        var urlParams = {
            id: id,
            fk: fk
        };
        var params = {};
        var result = this.request(method, url, urlParams, params);
        return result;
    };
    /**
     * Delete a related item by id for accessTokens.
     *
     * @param any id User id
     *
     * @param any fk Foreign key for accessTokens
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.destroyByIdAccessTokens = function (id, fk) {
        var method = "DELETE";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users/:id/accessTokens/:fk";
        var urlParams = {
            id: id,
            fk: fk
        };
        var params = {};
        var result = this.request(method, url, urlParams, params);
        return result;
    };
    /**
     * Update a related item by id for accessTokens.
     *
     * @param any id User id
     *
     * @param any fk Foreign key for accessTokens
     *
     * @param object data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.updateByIdAccessTokens = function (id, fk, data) {
        if (data === void 0) { data = undefined; }
        var method = "PUT";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users/:id/accessTokens/:fk";
        var urlParams = {
            id: id,
            fk: fk
        };
        var params = {};
        var result = this.request(method, url, urlParams, params, data);
        return result;
    };
    /**
     * Queries accessTokens of User.
     *
     * @param any id User id
     *
     * @param object filter
     *
     * @returns object[] An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.getAccessTokens = function (id, filter) {
        if (filter === void 0) { filter = undefined; }
        var method = "GET";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users/:id/accessTokens";
        var urlParams = {
            id: id
        };
        var params = {};
        if (filter !== undefined) {
            params.filter = filter;
        }
        var result = this.request(method, url, urlParams, params);
        return result;
    };
    /**
     * Creates a new instance in accessTokens of this model.
     *
     * @param any id User id
     *
     * @param object data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.createAccessTokens = function (id, data) {
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users/:id/accessTokens";
        var urlParams = {
            id: id
        };
        var params = {};
        var result = this.request(method, url, urlParams, params, data);
        return result;
    };
    /**
     * Deletes all accessTokens of this model.
     *
     * @param any id User id
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.deleteAccessTokens = function (id) {
        var method = "DELETE";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users/:id/accessTokens";
        var urlParams = {
            id: id
        };
        var params = {};
        var result = this.request(method, url, urlParams, params);
        return result;
    };
    /**
     * Counts accessTokens of User.
     *
     * @param any id User id
     *
     * @param object where Criteria to match model instances
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    UserApi.prototype.countAccessTokens = function (id, where) {
        if (where === void 0) { where = undefined; }
        var method = "GET";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users/:id/accessTokens/count";
        var urlParams = {
            id: id
        };
        var params = {};
        var result = this.request(method, url, urlParams, params);
        return result;
    };
    /**
     * Create a new instance of the model and persist it into the data source.
     *
     * @param object data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.create = function (data) {
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users";
        var urlParams = {};
        var params = {};
        var result = this.request(method, url, urlParams, params, data);
        return result;
    };
    /**
     * Create a new instance of the model and persist it into the data source.
     *
     * @param object data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns object[] An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.createMany = function (data) {
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users";
        var urlParams = {};
        var params = {};
        var result = this.request(method, url, urlParams, params, data);
        return result;
    };
    /**
     * Update an existing model instance or insert a new one into the data source.
     *
     * @param object data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.upsert = function (data) {
        if (data === void 0) { data = undefined; }
        var method = "PUT";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users";
        var urlParams = {};
        var params = {};
        var result = this.request(method, url, urlParams, params, data);
        return result;
    };
    /**
     * Check whether a model instance exists in the data source.
     *
     * @param any id Model id
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `exists` – `{boolean}` -
     */
    UserApi.prototype.exists = function (id) {
        var method = "GET";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users/:id/exists";
        var urlParams = {
            id: id
        };
        var params = {};
        var result = this.request(method, url, urlParams, params);
        return result;
    };
    /**
     * Find a model instance by id from the data source.
     *
     * @param any id Model id
     *
     * @param object filter Filter defining fields and include
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.findById = function (id, filter) {
        if (filter === void 0) { filter = undefined; }
        var method = "GET";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users/:id";
        var urlParams = {
            id: id
        };
        var params = {};
        if (filter !== undefined) {
            params.filter = filter;
        }
        var result = this.request(method, url, urlParams, params);
        return result;
    };
    /**
     * Find all instances of the model matched by filter from the data source.
     *
     * @param object filter Filter defining fields, where, include, order, offset, and limit
     *
     * @returns object[] An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.find = function (filter) {
        if (filter === void 0) { filter = undefined; }
        var method = "GET";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users";
        var urlParams = {};
        var params = {};
        if (filter !== undefined) {
            params.filter = filter;
        }
        var result = this.request(method, url, urlParams, params);
        return result;
    };
    /**
     * Find first instance of the model matched by filter from the data source.
     *
     * @param object filter Filter defining fields, where, include, order, offset, and limit
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.findOne = function (filter) {
        if (filter === void 0) { filter = undefined; }
        var method = "GET";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users/findOne";
        var urlParams = {};
        var params = {};
        if (filter !== undefined) {
            params.filter = filter;
        }
        var result = this.request(method, url, urlParams, params);
        return result;
    };
    /**
     * Update instances of the model matched by where from the data source.
     *
     * @param object where Criteria to match model instances
     *
     * @param object data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * The number of instances updated
     */
    UserApi.prototype.updateAll = function (where, data) {
        if (where === void 0) { where = undefined; }
        if (data === void 0) { data = undefined; }
        var method = "POST";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users/update";
        var urlParams = {};
        var params = {};
        if (where !== undefined) {
            params.where = where;
        }
        var result = this.request(method, url, urlParams, params, data);
        return result;
    };
    /**
     * Delete a model instance by id from the data source.
     *
     * @param any id Model id
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.deleteById = function (id) {
        var method = "DELETE";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users/:id";
        var urlParams = {
            id: id
        };
        var params = {};
        var result = this.request(method, url, urlParams, params);
        return result;
    };
    /**
     * Count instances of the model matched by where from the data source.
     *
     * @param object where Criteria to match model instances
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `count` – `{number}` -
     */
    UserApi.prototype.count = function (where) {
        if (where === void 0) { where = undefined; }
        var method = "GET";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users/count";
        var urlParams = {};
        var params = {};
        if (where !== undefined) {
            params.where = where;
        }
        var result = this.request(method, url, urlParams, params);
        return result;
    };
    /**
     * Update attributes for a model instance and persist it into the data source.
     *
     * @param any id User id
     *
     * @param object data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * <em>
     * (The remote method definition does not provide any description.
     * This usually means the response is a `User` object.)
     * </em>
     */
    UserApi.prototype.updateAttributes = function (id, data) {
        if (data === void 0) { data = undefined; }
        var method = "PUT";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users/:id";
        var urlParams = {
            id: id
        };
        var params = {};
        var result = this.request(method, url, urlParams, params, data);
        return result;
    };
    /**
     * Create a change stream.
     *
     * @param object data Request data.
     *
     *  - `options` – `{object}` -
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * Data properties:
     *
     *  - `changes` – `{ReadableStream}` -
     */
    UserApi.prototype.createChangeStream = function (options) {
        if (options === void 0) { options = undefined; }
        var method = "POST";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users/change-stream";
        var urlParams = {};
        var params = {};
        var result = this.request(method, url, urlParams, params, options);
        return result;
    };
    /**
     * Login a user with username/email and password.
     *
     * @param string include Related objects to include in the response. See the description of return value for more details.
     *   Default value: `user`.
     *
     *  - `rememberMe` - `boolean` - Whether the authentication credentials
     *     should be remembered in localStorage across app/browser restarts.
     *     Default: `true`.
     *
     * @param object data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * The response body contains properties of the AccessToken created on login.
     * Depending on the value of `include` parameter, the body may contain additional properties:
     *
     *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
     *
     *
     */
    UserApi.prototype.login = function (credentials, include) {
        var _this = this;
        if (include === void 0) { include = "user"; }
        var method = "POST";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users/login";
        var urlParams = {};
        var params = {};
        if (include !== undefined) {
            params.include = include;
        }
        var result = this.request(method, url, urlParams, params, credentials)
            .share();
        result.subscribe(function (response) {
            _this.auth.setUser(response.id, response.userId, response.user);
            _this.auth.setRememberMe(true);
            _this.auth.save();
        }, function () { return null; });
        return result;
    };
    /**
     * Logout a user with access token.
     *
     * @param object data Request data.
     *
     *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.logout = function () {
        var _this = this;
        var method = "POST";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users/logout";
        var urlParams = {};
        var params = {};
        var result = this.request(method, url, urlParams, params)
            .share();
        result.subscribe(function () {
            _this.auth.clearUser();
            _this.auth.clearStorage();
        }, function () { return null; });
        return result;
    };
    /**
     * Confirm a user registration with email verification token.
     *
     * @param string uid
     *
     * @param string token
     *
     * @param string redirect
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.confirm = function (uid, token, redirect) {
        if (redirect === void 0) { redirect = undefined; }
        var method = "GET";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users/confirm";
        var urlParams = {};
        var params = {};
        var result = this.request(method, url, urlParams, params);
        return result;
    };
    /**
     * Reset password for a user with email.
     *
     * @param object data Request data.
     *
     * This method expects a subset of model properties as request parameters.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     *
     * This method returns no data.
     */
    UserApi.prototype.resetPassword = function (options) {
        var method = "POST";
        var url = config_service_1.LoopBackConfig.getPath() + "/" + config_service_1.LoopBackConfig.getApiVersion() + "/Users/reset";
        var urlParams = {};
        var params = {};
        var result = this.request(method, url, urlParams, params, options);
        return result;
    };
    /**
     * @ngdoc method
     * @name lbServices.User#getCurrent
     * @methodOf lbServices.User
     *
     * @description
     *
     * Get data of the currently logged user. Fail with HTTP result 401
     * when there is no user logged in.
     *
     * @returns object An empty reference that will be
     *   populated with the actual data once the response is returned
     *   from the server.
     */
    UserApi.prototype.getCurrent = function () {
        var _this = this;
        var method = "GET";
        var url = config_service_1.LoopBackConfig.getPath() + "/Users" + "/:id";
        var id = this.auth.getCurrentUserId();
        if (id == null) {
            id = '__anonymous__';
        }
        var urlParams = {
            id: id
        };
        var result = this.request(method, url, urlParams)
            .share();
        result.subscribe(function (response) {
            _this.auth.setCurrentUserData(response);
            return response.resource;
        }, function () { return null; });
        return result;
    };
    /**
     * Get data of the currently logged user that was returned by the last
     * call to {@link lbServices.User#login} or
     * {@link lbServices.User#getCurrent}. Return null when there
     * is no user logged in or the data of the current user were not fetched
     * yet.
     *
     * @returns object A User instance.
     */
    UserApi.prototype.getCachedCurrent = function () {
        return this.auth.getCurrentUserData();
    };
    /**
     * @name lbServices.User#isAuthenticated
     *
     * @returns {boolean} True if the current user is authenticated (logged in).
     */
    UserApi.prototype.isAuthenticated = function () {
        return this.getCurrentId() != null;
    };
    /**
     * @name lbServices.User#getCurrentId
     *
     * @returns object Id of the currently logged-in user or null.
     */
    UserApi.prototype.getCurrentId = function () {
        return this.auth.getCurrentUserId();
    };
    /**
     * The name of the model represented by this $resource,
     * i.e. `User`.
     */
    UserApi.prototype.getModelName = function () {
        return "User";
    };
    UserApi = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)),
        __param(1, core_1.Inject(auth_service_1.LoopBackAuth)),
        __param(2, core_1.Optional()),
        __param(2, core_1.Inject(errorHandler_service_1.ErrorHandler)), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.LoopBackAuth, errorHandler_service_1.ErrorHandler])
    ], UserApi);
    return UserApi;
}(baseApi_service_1.BaseLoopBackApi));
exports.UserApi = UserApi;
//# sourceMappingURL=User.js.map
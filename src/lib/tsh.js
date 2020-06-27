"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var utils_1 = require("~/utils/utils");
var TSHError = /** @class */ (function (_super) {
    __extends(TSHError, _super);
    function TSHError(message) {
        return _super.call(this, message) || this;
    }
    return TSHError;
}(Error));
var API = /** @class */ (function () {
    function API(baseUrl) {
        if (baseUrl === void 0) { baseUrl = ""; }
        this.baseUrl = baseUrl;
        this.request = null;
        this.defaultHeaders = {
            "Content-Type": "application/json"
        };
    }
    API.prototype.get = function (url, options) {
        var params = options.params ? "?" + utils_1.createQueryFromObject(options.params) : "";
        this.request = fetch("" + this.baseUrl + url + params, {
            method: "GET",
            headers: __assign(__assign(__assign({}, this.defaultHeaders), options.headers), { Authorization: (options.headers && options.headers.Authorization) ||
                    this.defaultHeaders.Authorization ||
                    "" })
        });
        return this;
    };
    API.prototype.post = function (url, options) {
        if (options === void 0) { options = {}; }
        this.request = fetch("" + this.baseUrl + url, {
            method: "POST",
            body: JSON.stringify(options.body),
            headers: __assign(__assign({}, this.defaultHeaders), options.headers)
        });
        return this;
    };
    API.prototype.put = function (url, options) {
        if (options === void 0) { options = {}; }
        this.request = fetch("" + this.baseUrl + url, {
            method: "PUT",
            body: JSON.stringify(options.body),
            headers: __assign(__assign({}, this.defaultHeaders), options.headers)
        });
        return this;
    };
    API.prototype["delete"] = function (url, options) {
        if (options === void 0) { options = {}; }
        this.request = fetch("" + this.baseUrl + url, {
            method: "DELETE",
            body: JSON.stringify(options.body),
            headers: __assign(__assign({}, this.defaultHeaders), options.headers)
        });
        return this;
    };
    API.prototype.patch = function (url, options) {
        if (options === void 0) { options = {}; }
        this.request = fetch("" + this.baseUrl + url, {
            method: "PATCH",
            body: JSON.stringify(options.body),
            headers: __assign(__assign({}, this.defaultHeaders), options.headers)
        });
        return this;
    };
    API.prototype.json = function () {
        var _this = this;
        return this.request
            .then(function (response) {
            return Promise.all([
                Promise.resolve(!response.ok),
                _this.resolveJSON(response),
                response,
            ]);
        })
            .then(function (_a) {
            var failed = _a[0], payload = _a[1], response = _a[2];
            if (failed) {
                var error = new TSHError(payload.message || response.statusText);
                error.code = response.status;
                error.data = payload;
                throw error;
            }
            return payload;
        });
    };
    API.prototype.text = function () {
        return this.request
            .then(function (response) {
            return Promise.all([Promise.resolve(!response.ok), response.text(), response]);
        })
            .then(function (_a) {
            var failed = _a[0], payload = _a[1], response = _a[2];
            if (failed) {
                var error = new TSHError(payload || response.statusText);
                error.code = response.status;
                error.data = payload;
                throw error;
            }
            return payload;
        });
    };
    API.prototype.isSuccess = function () {
        return this.json().then(function () { return true; });
    };
    API.prototype.response = function () {
        return this.request.then(function (response) {
            return response;
        });
    };
    // eslint-disable-next-line class-methods-use-this
    API.prototype.resolveJSON = function (response) {
        return response.text().then(function (text) {
            try {
                return Promise.resolve(JSON.parse(text));
            }
            catch (e) {
                return Promise.resolve({});
            }
        });
    };
    API.prototype.setDefaultHeaders = function (headers) {
        this.defaultHeaders = headers;
    };
    return API;
}());
function createTSH_Instance(baseUrl) {
    return new API(baseUrl);
}
exports["default"] = createTSH_Instance;

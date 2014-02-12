Aria.classDefinition({
    $classpath : "examples.e3_modules.modules.login.Login",
    $extends : "examples.e3_modules.modules.base.BaseModuleController",
    $implements : ["examples.e3_modules.modules.login.LoginInterface"],
    $constructor : function () {

        /**
         * Filter class
         * @type String
         */
        this._filter = "examples.e3_modules.modules.login.mock.LoginFilter";

        this.$BaseModuleController.constructor.call(this);
    },
    $destructor : function () {
        this.$BaseModuleController.$destructor.call(this);
    },
    $prototype : {
        $publicInterfaceName : "examples.e3_modules.modules.login.LoginInterface",

        init : function (initArgs, cb) {

            this._data = {
                user : {
                    name : "",
                    password : "",
                    loggedIn : false
                },
                processing : false
            };
            this.$callback(cb);
        },

        login : function (cb) {
        	this.json.setValue(this._data, "processing", true);
            this._sendJsonRequest({
                url : "/server/login",
                data : this._data.user,
                callback : {
                    fn : this._onLogin,
                    scope : this,
                    args : cb
                }
            });
        },

        _onLogin : function (res, cb) {
        	this.json.setValue(this._data, "processing", false);
            if (!res.error) {
                this.json.setValue(this._data.user, "loggedIn", true);
            }
            if (cb) {
                this.$callback(cb);
            }
        },

        logout : function () {
            this.json.setValue(this._data.user, "loggedIn", false);
        }

    }
});
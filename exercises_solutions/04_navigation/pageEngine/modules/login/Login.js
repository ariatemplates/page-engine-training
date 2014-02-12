Aria.classDefinition({
    $classpath : "exercises.handson.pageEngine.modules.login.Login",
    $extends : "aria.templates.ModuleCtrl",
    $implements : ["exercises.handson.pageEngine.modules.login.LoginInterface"],
    $constructor : function () {
        this.$ModuleCtrl.constructor.call(this);

        this._filter = "exercises.handson.pageEngine.modules.login.mock.LoginFilter";
        aria.core.IOFiltersMgr.addFilter(this._filter);
    },
    $destructor : function () {
        aria.core.IOFiltersMgr.removeFilter(this._filter);
        this.$ModuleCtrl.$destructor.call(this);
    },
    $prototype : {

        $publicInterfaceName : "exercises.handson.pageEngine.modules.login.LoginInterface",

        _enableMethodEvents : false,

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
            aria.core.IO.asyncRequest({
                url : "/server/login",
                data : this.json.convertToJsonString(this.json.copy(this._data.user)),
                method : "POST",
                expectedResponseType : "json",
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
                this.$raiseEvent({
                    name : "navigate",
                    page : {
                        pageId : "POSTS"
                    }
                });
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
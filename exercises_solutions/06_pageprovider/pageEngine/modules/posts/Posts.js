Aria.classDefinition({
    $classpath : "exercises.handson.pageEngine.modules.posts.Posts",
    $extends : "aria.templates.ModuleCtrl",
    $implements : ["exercises.handson.pageEngine.modules.posts.PostsInterface"],
    $constructor : function () {
        this.$ModuleCtrl.constructor.call(this);

        this._filter = "exercises.handson.pageEngine.modules.posts.mock.PostsFilter";
        aria.core.IOFiltersMgr.addFilter(this._filter);
    },
    $destructor : function () {
        this._pageEngine.$unregisterListeners(this);
        aria.core.IOFiltersMgr.removeFilter(this._filter);
        this.$ModuleCtrl.$destructor.call(this);
    },
    $prototype : {

        $publicInterfaceName : "exercises.handson.pageEngine.modules.posts.PostsInterface",

        _enableMethodEvents : false,

        /**
         * Initialization method. Used here to set the data model of the controller and call the update method to
         * retrieve the posts for the first time
         * @param {Object} initArgs
         * @param {aria.core.CfgBeans:Callback} cb
         */
        init : function (initArgs, cb) {

            this._pageEngine = initArgs.pageEngine;
            var dataModel = this._pageEngine.getData();

            this._data = {
                user : dataModel.appData.user,
                posts : [],
                processing : false
            };

            this._pageEngine.$on({
                "pageReady" : {
                    fn : this._onPageReady
                },
                scope : this
            });

            this.$callback(cb);
        },

        update : function (cb) {
            var user = this._data.user;
            if (user && user.loggedIn) {
                this.json.setValue(this._data, "processing", true);
                aria.core.IO.asyncRequest({
                    url : "/server/posts",
                    data : this.json.convertToJsonString(this.json.copy(user)),
                    method : "POST",
                    expectedResponseType : "json",
                    callback : {
                        fn : this._onPostsReceive,
                        scope : this,
                        args : cb
                    }
                });
            } else if (cb) {
                this.$callback(cb);
            }
        },

        _onPostsReceive : function (res, cb) {
            this.json.setValue(this._data, "processing", false);
            this.json.setValue(this._data, "posts", res.responseJSON.posts);
            if (cb) {
                this.$callback(cb);
            }
        },

        _onPageReady : function () {
            if (this._pageEngine.isModuleInPage(this)) {
                this.update();
            }
        }
    }
});
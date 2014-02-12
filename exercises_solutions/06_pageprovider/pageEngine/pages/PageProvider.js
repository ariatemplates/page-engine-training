Aria.classDefinition({
    $classpath : "exercises.handson.pageEngine.pages.PageProvider",
    $extends : "aria.pageEngine.pageProviders.BasePageProvider",
    $constructor : function (args) {
        this._appData = {
            pages : [{
                        label : "Home",
                        pageId : "HOME"
                    }, {
                        label : "Login",
                        pageId : "LOGIN"
                    }, {
                        label : "Posts",
                        pageId : "POSTS"
                    }],
            user : {
                name : "",
                password : "",
                loggedIn : false
            }
        };

        this.$BasePageProvider.$constructor.call(this, args);
    },
    $prototype : {

        processPageDefinition : function (pageDef) {
            if (pageDef.pageId == "HOME") {
                pageDef.animation = {
                    animateIn : "slide right",
                    animateOut : "slide right"
                };
            }
            return pageDef;
        },

        processSiteConfig : function (siteConf) {
            siteConf.appData = this._appData;
            return siteConf;
        },

        loadPageDefinition : function (pageRequest, callback) {
            var user = this._appData.user;
            if (pageRequest.pageId == "POSTS" && !user.loggedIn) {
                alert("You need to login before you see your posts");
                pageRequest = {
                    pageId : "LOGIN"
                };
            }
            this.$BasePageProvider.loadPageDefinition.apply(this, [pageRequest, callback]);

        }
    }
});
Aria.classDefinition({
    $classpath : "examples.e6_pageprovider.pages.PageProvider",
    $implements : ["aria.pageEngine.pageProviders.PageProviderInterface"],
    $dependencies : ["aria.utils.DomOverlay"],
    $constructor : function (conf) {

        this._pageEngine = conf.pageEngine;

        this._pageEngine.$on({
            beforePageTransition : {
                fn : this._removeLoadingIndicator
            },
            scope : this
        });

        this._siteConfig = {
            containerId : "main-container",
            navigation : "hash",
            animations : true,
            appData : {
                menu : [{
                            label : "Home",
                            pageId : "HOME"
                        }, {
                            label : "Search",
                            pageId : "SEARCH"
                        }, {
                            label : "Detail",
                            pageId : "DETAIL"
                        }],
                user : {
                    name : "",
                    password : "",
                    loggedIn : false
                }
            },
            commonModules : {
                login : {
                    classpath : "examples.e6_pageprovider.modules.login.Login",
                    bind : {
                        "user" : "appData:user"
                    }
                }
            },
            storage : {
                active : false
            }
        };

        this._basePageDefinition = {
            pageComposition : {
                template : "examples.e6_pageprovider.templates.MainLayout",
                placeholders : {
                    "header" : {
                        template : "examples.e6_pageprovider.templates.HeaderLayout"
                    },
                    "header.leftPanel" : {
                        template : "examples.e6_pageprovider.templates.PageDescription"
                    },
                    "header.rightPanel" : {
                        template : "examples.e6_pageprovider.templates.login.HeaderLogin",
                        module : "common:login"
                    },
                    "middle" : {
                        template : "examples.e6_pageprovider.templates.MiddleLayout"
                    },
                    "middle.leftPanel" : {
                        template : "examples.e6_pageprovider.templates.Menu"
                    },
                    "footer" : "Copyright information"
                }
            },
            title : "Phone book | Home",
            animation : {
                animateIn : "slide left",
                animateOut : "slide left"
            }
        };

        this._urlMap = {
            search : "SEARCH",
            home : "HOME",
            detail : "DETAIL",
            "" : conf.homePageId
        };
    },
    $destructor : function () {
        this._pageEngine.$unregisterListeners(this);
    },
    $prototype : {

        /**
         * @param {aria.pageEngine.CfgBeans:ExtendedCallback} callback
         */
        loadSiteConfig : function (callback) {
            this.$callback(callback.onsuccess, this._siteConfig);
        },

        /**
         * @param {aria.pageEngine.CfgBeans:PageNavigationInformation} pageRequest
         * @param {aria.pageEngine.CfgBeans:ExtendedCallback} callback
         */
        loadPageDefinition : function (pageRequest, callback) {
            this._addLoadingIndicator();
            var pageDefinition = aria.utils.Json.copy(this._basePageDefinition);
            var pageId = pageRequest.pageId || this._urlMap[pageRequest.url];

            pageDefinition.pageId = pageId;
            pageDefinition.url = pageId.toLowerCase();
            pageDefinition.title = "Phone Book | " + pageId.charAt(0) + pageId.substring(1).toLowerCase();

            var placeholders = pageDefinition.pageComposition.placeholders;
            if (pageId == "HOME") {
                placeholders["middle.rightPanel"] = "<div style=\"padding: 10px\">Welcome to your phone book!</div>";
            }
            if (pageId == "SEARCH") {
                placeholders["middle.rightPanel"] = {
                    template : "examples.e6_pageprovider.templates.search.Search",
                    module : "search"
                };
                pageDefinition.pageComposition.pageData = {
                    description : "Search for your contacts"
                };
                pageDefinition.pageComposition.modules = {
                    "search" : {
                        classpath : "examples.e6_pageprovider.modules.search.Search",
                        bind : {
                            "loggedIn" : "appData:user.loggedIn",
                            "selected" : "appData:selectedContact"
                        }
                    }
                };
            }
            if (pageId == "DETAIL") {
                placeholders["middle.rightPanel"] = {
                    template : "examples.e6_pageprovider.templates.detail.Detail",
                    module : "detail"
                };
                pageDefinition.pageComposition.modules = {
                    "detail" : {
                        classpath : "examples.e6_pageprovider.modules.detail.Detail"
                    }
                };
            }

            this.$callback(callback.onsuccess, pageDefinition);
        },

        _addLoadingIndicator : function () {
            aria.utils.DomOverlay.create(Aria.$window.document.body);
        },

        _removeLoadingIndicator : function () {
            aria.utils.DomOverlay.detachFrom(Aria.$window.document.body);
        }
    }
});
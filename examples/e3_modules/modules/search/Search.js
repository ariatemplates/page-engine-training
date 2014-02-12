Aria.classDefinition({
    $classpath : "examples.e3_modules.modules.search.Search",
    $extends : "examples.e3_modules.modules.base.BaseModuleController",
    $implements : ["examples.e3_modules.modules.search.SearchInterface"],
    $constructor : function () {

        /**
         * Filter class
         * @type String
         */
        this._filter = "examples.e3_modules.modules.search.mock.SearchFilter";

        this.$BaseModuleController.constructor.call(this);
    },
    $destructor : function () {
        this.$BaseModuleController.$destructor.call(this);
    },
    $prototype : {

        $publicInterfaceName : "examples.e3_modules.modules.search.SearchInterface",

        init : function (initArgs, cb) {

            this._data = {
                search : {
                    last : "",
                    first : ""
                },
                results : [],
                processing : {
                    search : false
                }
            };
            this.$callback(cb);
        },

        search : function (cb) {
            this.json.setValue(this._data.processing, "search", true);
            this._sendJsonRequest({
                url : "/server/search",
                data : this._data.search,
                callback : {
                    fn : this._onSearchReply,
                    scope : this,
                    args : cb
                }
            });
        },

        _onSearchReply : function (res, cb) {
            if (res.error) {
                this.$callback(cb);
                return;
            }
            this.json.setValue(this._data, "results", res.responseJSON.searchResults);
            this.json.setValue(this._data.processing, "search", false);
            this.$callback(cb);
        }

    }
});
Aria.classDefinition({
    $classpath : "examples.e4_navigation.modules.search.Search",
    $extends : "examples.e4_navigation.modules.base.BaseModuleController",
    $implements : ["examples.e4_navigation.modules.search.SearchInterface"],
    $constructor : function () {

        /**
         * Filter class
         * @type String
         */
        this._filter = "examples.e4_navigation.modules.search.mock.SearchFilter";

        this.$BaseModuleController.constructor.call(this);
    },
    $destructor : function () {
        this.$BaseModuleController.$destructor.call(this);
    },
    $prototype : {

        $publicInterfaceName : "examples.e4_navigation.modules.search.SearchInterface",

        init : function (initArgs, cb) {

            this._data = {
                search : {
                    last : "",
                    first : ""
                },
                results : [],
                processing : {
                    search : false
                },
                selected : null
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
        },

        select : function (index) {
            this.json.setValue(this._data, "selected", this._data.results[index]);
            this.$raiseEvent({
                name : "navigate",
                page : {
                    pageId : "DETAIL"
                }
            });
        }

    }
});
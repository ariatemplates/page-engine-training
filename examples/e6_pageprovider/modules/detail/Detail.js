Aria.classDefinition({
    $classpath : "examples.e6_pageprovider.modules.detail.Detail",
    $extends : "examples.e6_pageprovider.modules.base.BaseModuleController",
    $implements : ["examples.e6_pageprovider.modules.detail.DetailInterface"],
    $constructor : function () {

        /**
         * Filter class
         * @type String
         */
        this._filter = "examples.e6_pageprovider.modules.detail.mock.DetailFilter";

        this.$BaseModuleController.constructor.call(this);
    },
    $destructor : function () {
    	this._pageEngine.$unregisterListeners(this);
    	this._pageEngine = null;
        this.$BaseModuleController.$destructor.call(this);
    },
    $prototype : {

        $publicInterfaceName : "examples.e6_pageprovider.modules.detail.DetailInterface",

        init : function (initArgs, cb) {

        	this._pageEngine = initArgs.pageEngine;

            this._data = {
                input : null,
                result : null
            };

            this._pageEngine.$on({
            	"pageReady" : {
            		fn : this._updateDetail
            	},
            	scope : this
            });
            this.$callback(cb);
        },


        _updateDetail : function () {
        	if (this._pageEngine.isModuleInPage(this)) {
	        	this.json.setValue(this._data, "result",  null);
	        	this._data.input = this._pageEngine.getData().appData.selectedContact;;
	        	this.getDetail();
        	}
        },

        getDetail : function (cb) {
        	if (this._data.input) {
	            this.json.setValue(this._data, "processing", true);
	            this._sendJsonRequest({
	                url : "/server/detail",
	                data : this._data.input,
	                callback : {
	                    fn : this._onDetailReceive,
	                    scope : this,
	                    args : cb
	                }
	            });
        	} else if (cb) {
        		this.$callback(cb);
        	}
        },

        _onDetailReceive : function (res, cb) {
            this.json.setValue(this._data, "processing", false);
            if (res.error) {
                this.$callback(cb);
                return;
            }
            this.json.setValue(this._data, "result", res.responseJSON.detailsResults);
            this.$callback(cb);
        },

        backToSearch : function () {
        	this._pageEngine.navigate({
        		pageId : "SEARCH"
        	});
        }

    }
});
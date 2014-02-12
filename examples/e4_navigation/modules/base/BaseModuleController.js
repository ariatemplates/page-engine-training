Aria.classDefinition({
    $classpath : "examples.e4_navigation.modules.base.BaseModuleController",
    $extends : "aria.templates.ModuleCtrl",
    $implements : ["examples.e4_navigation.modules.base.BaseModuleControllerInterface"],
    $dependencies : ["aria.core.IOFiltersMgr"],
    $constructor : function () {
        this.$ModuleCtrl.constructor.call(this);
        if (this._filter) {
            aria.core.IOFiltersMgr.addFilter(this._filter);
        }
    },
    $destructor : function () {
        if (this._filter) {
            aria.core.IOFiltersMgr.removeFilter(this._filter);
        }
        this.$ModuleCtrl.$destructor.call(this);
    },
    $prototype : {

        $publicInterfaceName : "examples.e4_navigation.modules.base.BaseModuleControllerInterface",

        _enableMethodEvents : false,

        /**
         * Perform an aynchronous request with json expected response type
         * @param {Object} req Contains the "url", the "data" and the "callback"
         */
        _sendJsonRequest : function (req) {
            aria.core.IO.asyncRequest({
                url : req.url,
                data : this.json.convertToJsonString(this.json.copy(req.data)),
                method : "POST",
                expectedResponseType : "json",
                callback : req.callback
            });
        }
    }
});
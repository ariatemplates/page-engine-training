Aria.classDefinition({
    $classpath : "examples.e3_modules.modules.detail.Detail",
    $extends : "examples.e3_modules.modules.base.BaseModuleController",
    $implements : ["examples.e3_modules.modules.detail.DetailInterface"],
    $constructor : function () {

        /**
         * Filter class
         * @type String
         */
        this._filter = "examples.e3_modules.modules.detail.mock.DetailFilter";

        this.$BaseModuleController.constructor.call(this);
    },
    $destructor : function () {
        this.$BaseModuleController.$destructor.call(this);
    },
    $prototype : {

        $publicInterfaceName : "examples.e3_modules.modules.detail.DetailInterface",

        init : function (initArgs, cb) {

            this._data = {
                input : {
                    lastName : "Gaga",
                    firstName : "Lady",
                    phone : "003383278748"
                },
                result : null
            };
            this.getDetail();
            this.$callback(cb);
        },

        getDetail : function (cb) {
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
        },

        _onDetailReceive : function (res, cb) {
            this.json.setValue(this._data, "processing", false);
            if (res.error) {
                this.$callback(cb);
                return;
            }
            this.json.setValue(this._data, "result", res.responseJSON.detailsResults);
            this.$callback(cb);
        }

    }
});
Aria.interfaceDefinition({
    $classpath : "examples.e5_datamodel.modules.detail.DetailInterface",
    $extends : "examples.e5_datamodel.modules.base.BaseModuleControllerInterface",
    $interface : {

        getDetail : {
            $type : "Function",
            $callbackParam : 0
        },

        backToSearch : {
            $type : "Function"
        }
    }
});
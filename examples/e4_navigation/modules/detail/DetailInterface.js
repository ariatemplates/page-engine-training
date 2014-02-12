Aria.interfaceDefinition({
    $classpath : "examples.e4_navigation.modules.detail.DetailInterface",
    $extends : "examples.e4_navigation.modules.base.BaseModuleControllerInterface",
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
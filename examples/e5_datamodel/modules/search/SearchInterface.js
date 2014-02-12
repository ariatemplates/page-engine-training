Aria.interfaceDefinition({
    $classpath : "examples.e5_datamodel.modules.search.SearchInterface",
    $extends : "examples.e5_datamodel.modules.base.BaseModuleControllerInterface",
    $interface : {

        search : {
            $type : "Function",
            $callbackParam : 0
        },

        select : {
            $type : "Function",
            $callbackParam : 0
        }
    }
});
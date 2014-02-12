Aria.interfaceDefinition({
    $classpath : "examples.e4_navigation.modules.search.SearchInterface",
    $extends : "examples.e4_navigation.modules.base.BaseModuleControllerInterface",
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
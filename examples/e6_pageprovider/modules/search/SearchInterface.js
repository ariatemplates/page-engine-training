Aria.interfaceDefinition({
    $classpath : "examples.e6_pageprovider.modules.search.SearchInterface",
    $extends : "examples.e6_pageprovider.modules.base.BaseModuleControllerInterface",
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
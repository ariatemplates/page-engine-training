Aria.interfaceDefinition({
    $classpath : "examples.e6_pageprovider.modules.detail.DetailInterface",
    $extends : "examples.e6_pageprovider.modules.base.BaseModuleControllerInterface",
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
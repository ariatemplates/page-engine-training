Aria.interfaceDefinition({
    $classpath : "examples.e6_pageprovider.modules.login.LoginInterface",
    $extends : "examples.e6_pageprovider.modules.base.BaseModuleControllerInterface",
    $interface : {

        login : {
            $type : "Function",
            $callbackParam : 0
        },

        logout : {
            $type : "Function"
        }

    }
});
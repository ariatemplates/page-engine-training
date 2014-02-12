Aria.interfaceDefinition({
    $classpath : "examples.e3_modules.modules.login.LoginInterface",
    $extends : "examples.e3_modules.modules.base.BaseModuleControllerInterface",
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
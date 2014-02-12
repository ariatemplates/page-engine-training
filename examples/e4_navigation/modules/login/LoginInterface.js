Aria.interfaceDefinition({
    $classpath : "examples.e4_navigation.modules.login.LoginInterface",
    $extends : "examples.e4_navigation.modules.base.BaseModuleControllerInterface",
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
Aria.interfaceDefinition({
    $classpath : "examples.e5_datamodel.modules.login.LoginInterface",
    $extends : "examples.e5_datamodel.modules.base.BaseModuleControllerInterface",
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
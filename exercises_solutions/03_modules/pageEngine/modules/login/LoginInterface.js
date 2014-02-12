Aria.interfaceDefinition({
    $classpath : "exercises.handson.pageEngine.modules.login.LoginInterface",
    $extends : "aria.templates.IModuleCtrl",
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
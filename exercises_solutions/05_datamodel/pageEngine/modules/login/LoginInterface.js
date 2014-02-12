Aria.interfaceDefinition({
    $classpath : "exercises.handson.pageEngine.modules.login.LoginInterface",
    $extends : "aria.templates.IModuleCtrl",
    $events : {
        navigate : {
            description : "Raised in order to trigger a navigation in the page engine",
            properties : {
                page : "Description of the page to navigate to (bean aria.pageEngine.CfgBeans:PageNavigationInformation)."
            }
        }
    },
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
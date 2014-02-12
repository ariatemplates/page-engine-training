Aria.interfaceDefinition({
    $classpath : "examples.e4_navigation.modules.base.BaseModuleControllerInterface",
    $extends : "aria.templates.IModuleCtrl",
    $events : {
    	navigate : {
    		description : "Raised in order to trigger a navigation in the page engine",
    		properties : {
    			page : "Description of the page to navigate to (bean aria.pageEngine.CfgBeans:PageNavigationInformation)."
    		}
    	}
    },
    $interface : {}
});
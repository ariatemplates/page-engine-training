Aria.tplScriptDefinition({
    $classpath : "examples.e3_modules.templates.login.HeaderLoginScript",
    $prototype : {

        $viewReady : function () {
        	if (!this.data.user.loggedIn) {
            	this.$focus("username");
        	}
        },

        login : function (evt) {
            evt.preventDefault();
            this.moduleCtrl.login();
        },

        logout : function (evt) {
            this.moduleCtrl.logout();
        }
    }
});
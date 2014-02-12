Aria.tplScriptDefinition({
    $classpath : "exercises.handson.pageEngine.templates.login.LoginScript",
    $prototype : {

        login : function (evt) {
            evt.preventDefault();
            this.moduleCtrl.login();
        },

        logout : function (evt) {
            this.moduleCtrl.logout();
        }
    }
});
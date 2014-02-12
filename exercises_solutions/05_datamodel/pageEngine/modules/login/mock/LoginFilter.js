Aria.classDefinition({
    $classpath : "exercises.handson.pageEngine.modules.login.mock.LoginFilter",
    $extends : "aria.core.IOFilter",
    $prototype : {

        onRequest : function (req) {
            if (req.url.match(/server\/login/) !== null) {
                req.delay = 500;
                this.redirectToFile(req, "exercises/handson/pageEngine/modules/login/mock/login.json");
            }
        }
    }
});

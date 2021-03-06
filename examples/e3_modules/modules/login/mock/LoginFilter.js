Aria.classDefinition({
    $classpath : "examples.e3_modules.modules.login.mock.LoginFilter",
    $extends : "aria.core.IOFilter",
    $prototype : {

        onRequest : function (req) {
            if (req.url.match(/server\/login/) !== null) {
                req.delay = 500;
                this.redirectToFile(req, "examples/e3_modules/modules/login/mock/login.json");
            }
        }
    }
});

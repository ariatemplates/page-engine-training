Aria.classDefinition({
    $classpath : "examples.e4_navigation.modules.detail.mock.DetailFilter",
    $extends : "aria.core.IOFilter",
    $prototype : {

        onRequest : function (req) {
            if (req.url.match(/server\/detail/) !== null) {
                req.delay = 2000;
                this.redirectToFile(req, "examples/e4_navigation/modules/detail/mock/DETAIL.json");
            }
        }
    }
});

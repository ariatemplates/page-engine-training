Aria.classDefinition({
    $classpath : "examples.e6_pageprovider.modules.detail.mock.DetailFilter",
    $extends : "aria.core.IOFilter",
    $prototype : {

        onRequest : function (req) {
            if (req.url.match(/server\/detail/) !== null) {
                req.delay = 2000;
                this.redirectToFile(req, "examples/e6_pageprovider/modules/detail/mock/DETAIL.json");
            }
        }
    }
});

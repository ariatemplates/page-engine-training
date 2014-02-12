Aria.classDefinition({
    $classpath : "examples.e6_pageprovider.modules.search.mock.SearchFilter",
    $extends : "aria.core.IOFilter",
    $prototype : {

        onRequest : function (req) {

            if (req.url.match(/server\/search/) !== null) {
                req.delay = 2000;
                var responseFile = "NoAnswer";
                var data = aria.utils.Json.load(req.data);
                var lastName = data.last.toUpperCase();
                if (lastName == "DOE" || lastName == "SMITH") {
                    responseFile = lastName;
                }
                this.redirectToFile(req, "examples/e6_pageprovider/modules/search/mock/" + responseFile
                        + ".json");
            }
        }
    }
});

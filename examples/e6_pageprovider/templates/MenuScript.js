Aria.tplScriptDefinition({
    $classpath : "examples.e6_pageprovider.templates.MenuScript",
    $prototype : {

        navigate : function (evt, pageId) {
            this.moduleCtrl.navigate({
                pageId : pageId
            });
        }
    }
});
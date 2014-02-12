Aria.tplScriptDefinition({
    $classpath : "examples.e4_navigation.templates.MenuScript",
    $prototype : {

        navigate : function (evt, pageId) {
            this.moduleCtrl.navigate({
                pageId : pageId
            });
        }
    }
});
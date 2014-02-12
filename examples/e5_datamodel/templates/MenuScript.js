Aria.tplScriptDefinition({
    $classpath : "examples.e5_datamodel.templates.MenuScript",
    $prototype : {

        navigate : function (evt, pageId) {
            this.moduleCtrl.navigate({
                pageId : pageId
            });
        }
    }
});
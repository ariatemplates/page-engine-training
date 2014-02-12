Aria.tplScriptDefinition({
    $classpath : "exercises.handson.pageEngine.templates.MenuScript",
    $prototype : {

        navigate : function (evt, pageId) {
            this.moduleCtrl.navigate({
                pageId : pageId
            });
        }
    }
});
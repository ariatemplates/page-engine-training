Aria.tplScriptDefinition({
    $classpath : "examples.e3_modules.templates.search.SearchScript",
    $prototype : {
        clearFields : function () {
            aria.utils.Json.setValue(this.data.search, "last", "");
            aria.utils.Json.setValue(this.data.search, "first", "");
        },

        launchSearch : function () {
            if (this.data.search.last.length === 0 && this.data.search.first.length === 0) {
                alert("Please provide at least one name.");
                return;
            }
            this.moduleCtrl.search();
        }
    }
});
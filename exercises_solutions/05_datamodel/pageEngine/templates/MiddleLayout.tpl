{Template {
	$classpath : "exercises.handson.pageEngine.templates.MiddleLayout",
	$css : ["exercises.handson.pageEngine.templates.MiddleLayoutCSS"]
}}

	{macro main()}

		{@embed:Placeholder {
			name : "top",
			attributes : {
				classList : ["top"]
			}
		}/}

		{@embed:Placeholder {
			name : "bottom",
			attributes : {
				classList : ["bottom"]
			}
		}/}

	{/macro}

{/Template}
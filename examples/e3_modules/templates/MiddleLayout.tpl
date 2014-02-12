{Template {
	$classpath : "examples.e3_modules.templates.MiddleLayout",
	$css : ["examples.e3_modules.templates.MiddleLayoutCSS"]
}}

	{macro main()}

		{@embed:Placeholder {
			name : "leftPanel",
			attributes : {
				classList : ["left-panel"]
			}
		}/}

		{@embed:Placeholder {
			name : "rightPanel",
			attributes : {
				classList : ["right-panel"]
			}
		}/}

	{/macro}

{/Template}
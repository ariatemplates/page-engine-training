{Template {
	$classpath : "examples.e2_templates.templates.MiddleLayout",
	$css : ["examples.e2_templates.templates.MiddleLayoutCSS"]
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
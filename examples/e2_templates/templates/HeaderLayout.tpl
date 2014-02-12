{Template {
	$classpath : "examples.e2_templates.templates.HeaderLayout",
	$css : ["examples.e2_templates.templates.HeaderLayoutCSS"]
}}

	{macro main()}

		{@embed:Placeholder {
			name : "leftPanel",
			type : "span"
		}/}

		{@embed:Placeholder {
			name : "rightPanel",
			attributes : {
				classList : ["right-panel"]
			}
		}/}

	{/macro}

{/Template}
{Template {
	$classpath : "examples.e3_modules.templates.HeaderLayout",
	$css : ["examples.e3_modules.templates.HeaderLayoutCSS"]
}}

	{macro main()}

		{@embed:Placeholder {
			name : "leftPanel",
			type : "span",
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
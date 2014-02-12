{Template {
	$classpath : "examples.e5_datamodel.templates.HeaderLayout",
	$css : ["examples.e5_datamodel.templates.HeaderLayoutCSS"]
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
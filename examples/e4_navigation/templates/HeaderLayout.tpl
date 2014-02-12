{Template {
	$classpath : "examples.e4_navigation.templates.HeaderLayout",
	$css : ["examples.e4_navigation.templates.HeaderLayoutCSS"]
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
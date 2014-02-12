{Template {
	$classpath : "examples.e6_pageprovider.templates.HeaderLayout",
	$css : ["examples.e6_pageprovider.templates.HeaderLayoutCSS"]
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
{Template {
	$classpath : "examples.e6_pageprovider.templates.MiddleLayout",
	$css : ["examples.e6_pageprovider.templates.MiddleLayoutCSS"]
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
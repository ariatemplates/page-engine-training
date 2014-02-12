{Template {
	$classpath : "examples.e6_pageprovider.templates.Menu",
	$hasScript : true,
	$css : ["examples.e6_pageprovider.templates.MenuCSS"]
}}

	{macro main()}
		{var pages = data.storage.appData.menu /}
		{var selected = data.storage.pageInfo.pageId /}

		{foreach page inArray pages}
			<div class="menu-item {if selected == page.pageId}selected{/if}" {on click {fn : navigate, scope : this, args : page.pageId}/}>
				<span class="label">${page.label}</span>
			</div>
		{/foreach}
	{/macro}

{/Template}
{Template {
	$classpath : "exercises.handson.pageEngine.templates.Menu",
	$hasScript : true,
	$css : ["exercises.handson.pageEngine.templates.MenuCSS"]
}}

	{macro main()}
		{var pages = data.storage.appData.pages /}
		{var selected = data.storage.pageInfo.pageId /}

		{foreach page inArray pages}
			{separator} | {/separator}
			<span class="menu-item {if page.pageId == selected}selected{/if}" {on click {fn : navigate, scope : this, args : page.pageId}/}>
				<span class="label">${page.label}</span>
			</span>
		{/foreach}

	{/macro}

{/Template}
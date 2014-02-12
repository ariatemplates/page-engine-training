{Template {
	$classpath : "examples.e2_templates.templates.Menu",
	$css : ["examples.e2_templates.templates.MenuCSS"]
}}

	{macro main()}
		{var pages = [{
			label : "Home",
			pageId : "HOME"
		}, {
			label : "Search",
			pageId : "SEARCH"
		}]/}

		{foreach page inArray pages}
			<div class="menu-item" >
				<span class="label">${page.label}</span>
			</div>
		{/foreach}

	{/macro}

{/Template}
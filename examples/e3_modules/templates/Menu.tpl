{Template {
	$classpath : "examples.e3_modules.templates.Menu",
	$css : ["examples.e3_modules.templates.MenuCSS"]
}}

	{macro main()}
		{var pages = [{
			label : "Home",
			pageId : "HOME"
		}, {
			label : "Search",
			pageId : "SEARCH"
		}, {
			label : "Detail",
			pageId : "DETAIL"
		}]/}

		{foreach page inArray pages}
			<div class="menu-item" >
				<span class="label">${page.label}</span>
			</div>
		{/foreach}

	{/macro}

{/Template}
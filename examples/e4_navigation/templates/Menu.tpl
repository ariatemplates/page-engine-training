{Template {
	$classpath : "examples.e4_navigation.templates.Menu",
	$hasScript : true,
	$css : ["examples.e4_navigation.templates.MenuCSS"]
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
			<div class="menu-item" {on click {fn : navigate, scope : this, args : page.pageId}/}>
				<span class="label">${page.label}</span>
			</div>
		{/foreach}

	{/macro}

{/Template}
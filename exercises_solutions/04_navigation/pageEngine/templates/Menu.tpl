{Template {
	$classpath : "exercises.handson.pageEngine.templates.Menu",
	$hasScript : true,
	$css : ["exercises.handson.pageEngine.templates.MenuCSS"]
}}

	{macro main()}
		{var pages = [{
			label : "Home",
			pageId : "HOME"
		}, {
			label : "Login",
			pageId : "LOGIN"
		}, {
			label : "Posts",
			pageId : "POSTS"
		}]/}

		{foreach page inArray pages}
			{separator} | {/separator}
			<span class="menu-item" {on click {fn : navigate, scope : this, args : page.pageId}/}>
				<span class="label">${page.label}</span>
			</span>
		{/foreach}

	{/macro}

{/Template}
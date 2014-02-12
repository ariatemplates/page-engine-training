{Template {
	$classpath : "exercises.handson.pageEngine.templates.posts.Posts",
	$hasScript : true,
	$css : ["exercises.handson.pageEngine.templates.posts.PostsCSS"]
}}

	{macro main()}

		{section {
			id : "posts",
			macro : "postsPanel",
			bindProcessingTo : {
				to : "processing",
				inside : data
			},
			bindRefreshTo : [{
				to : "posts",
				inside : data
			}],
			attributes : {
				classList : ["postsPanel"]
			},
			type: "div"
		}/}

	{/macro}

	{macro postsPanel()}
		{if data.user && data.user.loggedIn}
			{call posts() /}
		{else/}
			<span>Log in to read your recent posts</span>
		{/if}
	{/macro}

	{macro posts()}
		<div class="username">
			Posts for ${data.user.name}
		</div>
		<div>
			<button  style="float: right;" class="pb-button" {on click update /}/>Update</button>
		</div>
		{foreach post inArray data.posts}
			<div class="post">
				<div class="author">${post.author}</div>
				<div><span class="message">${post.message}</span></div>
			</div>
		{/foreach}

	{/macro}

{/Template}
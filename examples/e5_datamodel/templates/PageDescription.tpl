{Template {
	$classpath : "examples.e5_datamodel.templates.PageDescription"
}}

	{macro main()}
		{var pageData = data.storage.pageData /}
		{var pageInfo = data.storage.pageInfo /}

		<span>
			${pageInfo.title}
			{if pageData.description}
				<br/>
				<span style="font-size: 12px">${pageData.description}</span>
			{/if}
		</span>


	{/macro}

{/Template}
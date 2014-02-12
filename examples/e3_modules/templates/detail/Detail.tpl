{Template {
	$classpath : "examples.e3_modules.templates.detail.Detail",
	$css : ["examples.e3_modules.templates.detail.DetailCSS"]
}}

	{macro main()}
		{section {
			id : "detail",
			bindRefreshTo : [{
				to : "result",
				inside : data
			}],
			bindProcessingTo : {
				to : "processing",
				inside : data
			},
			macro : "details"
		}/}
	{/macro}

	{macro details()}

		<div class="detail">
			{var input = data.input /}
			{var info = data.result /}
			{if info != null}
				Last Name: ${input.lastName}<br/>
				First Name: ${input.firstName}<br/>
				Phone: ${input.phone}<br/><br/><br/>
				Address: ${info.address}<br/>${info.zip} ${info.city}<br/>
				Division: ${info.division}
			{else/}
				No detail to display
			{/if}
		</div>

	{/macro}


{/Template}
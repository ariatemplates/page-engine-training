{Template {
	$classpath : "examples.e4_navigation.templates.search.Search",
	$hasScript : true,
	$css : ["examples.e4_navigation.templates.search.SearchCSS"]
}}

    {macro main()}

		<div class="searchPod">
			<label>Last name </label>
			{@html:TextInput {
				id : "lastName",
				bind : {
					value : {
						to : "last",
						inside : data.search
					}
				},
				attributes : {
					classList : ["pb-textInput"]
				}
			}/}


			<label>First name </label>
			{@html:TextInput {
				id : "firstName",
				bind : {
					value : {
						to : "first",
						inside : data.search
					}
				},
				attributes : {
					classList : ["pb-textInput"]
				}
			}/}


	        <div class="buttons">
	            <button type="button" class="pb-button" {on click clearFields/}>Clear fields</button>
	            <button type="button" class="pb-button" {on click launchSearch/}>Launch search</button>
	        </div>

	        {section {
	            id: "resultsSection",
	            type: "div",
	            bindRefreshTo: [{
	                to: "results",
	                inside: data
	            }],
	            bindProcessingTo : {
	                to: "search",
	                inside: data.processing
	            },
	            processingLabel : "Please wait...",
	            macro: "displayResults"
	        }/}

        </div>

    {/macro}

    {macro displayResults()}

        {if data.results.length>0}
            <table>
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone number</th>
                </thead>
                {foreach res in data.results}
                    {if (res_index % 2 == 0)}
                        <tr class="even" {on click {fn : select, scope : this, args : res_index}/}>
                    {else/}
                        <tr class="odd" {on click {fn : select, scope : this, args : res_index}/}>
                    {/if}
                        <td>${res.firstName}</td>
                        <td>${res.lastName}</td>
                        <td>${res.phone}</td>
                    </tr>
                {/foreach}
            </table>
        {else/}
            <div class="noresult">
                Nothing to display.  Enter a last name and hit Search!
            </div>
        {/if}

    {/macro}


{/Template}
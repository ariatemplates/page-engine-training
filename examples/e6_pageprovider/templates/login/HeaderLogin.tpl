{Template {
	$classpath : "examples.e6_pageprovider.templates.login.HeaderLogin",
	$hasScript : true
}}

	{macro main()}
		{section {
			id : "loginPanel",
			bindRefreshTo : [{
				to : "loggedIn",
				inside : data.user
			}],
			macro : "loginPanel",
			bindProcessingTo : {
				to : "processing",
				inside : data
			}
		}/}


	{/macro}

	{macro loginPanel()}
		{if data.user.loggedIn}
			{call logoutForm() /}
		{else/}
			{call loginForm() /}
		{/if}
	{/macro}


	{macro logoutForm()}
		<span>${data.user.name}</span>
		<button class="pb-button" {on click logout /}>Logout</button>
	{/macro}

	{macro loginForm()}


		<form {on submit login /}>
			<div>
				<label style="width: 115px; display: inline-block;" for="username">User name</label>
				{@html:TextInput {
					id : "username",
					bind : {
						value : {
							to : "name",
							inside : data.user
						}
					},
					attributes : {
						name : "username",
						classList : ["pb-textInput"]
					}
				}/}
			</div>
			<div>
				<label style="width: 115px; display: inline-block;" for="password">Password</label>
				{@html:TextInput {
					id : "password",
					bind : {
						value : {
							to : "password",
							inside : data.user
						}
					},
					attributes : {
						name : "password",
						classList : ["pb-textInput"],
						type : "password"
					}
				}/}


				<button type="submit" class="pb-button" />Login</button>
			</div>

		</form>

	{/macro}

{/Template}
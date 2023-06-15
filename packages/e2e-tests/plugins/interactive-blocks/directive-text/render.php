<div data-wp-island>
	<div>
		<span
			data-wp-text="state.text"
			data-testid="show state text"
		></span>
		<button
			data-wp-on.click="actions.toggleStateText"
			data-testid="toggle state text"
		>
			Toggle State Text
		</button>
	</div>

	<div data-wp-context='{ "text": "Text 1" }'>
		<span
			data-wp-text="context.text"
			data-testid="show context text"
		></span>
		<button
			data-wp-on.click="actions.toggleContextText"
			data-testid="toggle context text"
		>
			Toggle Context Text
		</button>
	</div>
</div>

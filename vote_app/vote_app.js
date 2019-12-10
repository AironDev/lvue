const entryComponent = {
	template: '<section class="box"><h3 class="button is-warning is-medium is-dark">VUE COMPONENT</h3></section>'

}
new Vue({
	el: '#app',
	data: {
		entries: Seed
	},

	components: {
		'entry-component' : entryComponent
	},

	computed: {
		sortedEntries() {
			return this.entries.sort((a, b) => {
				// console.log(votes);
				return  b.upvotes - a.upvotes;

			});
		}
	},

	methods: {
		upvote(id) {
			// const outry = this.entries[id-1];
			// console.log(outry.title);
			const entry = this.entries.find(entry => entry.id === id);
			entry.upvotes++;
			//entry.downvotes--;	
		},

		downvote(id) {
			// const outry = this.entries[id-1];
			// console.log(outry.title);
			const entry = this.entries.find(entry => entry.id === id);
			entry.upvotes--;
			entry.downvotes++;	
		}
	}
});
var app = new Vue({
	el: '#root',
	data:{
		notes: Data,
		message: ["Hello Dear", "How are you", "Hope you are good"],
		cssBind: {hide:"hide"},
		formError: {data:""},
	},

	components: {
		
	},

	mounted() { 
		//mounnts data from local storage on our notes object
		if(localStorage.getItem('notes')){
			try{
				this.notes = JSON.parse(localStorage.getItem('notes'));
			} catch(e){
				localStorage.removeItem('notes');
			}
		}

	},

	computed: {
		
	},

	methods: {
		addNote(){
			const note = {
				id: this.notes.length +1,
				title: this.notes.title,
				content: this.notes.content,
				created: Date.now(),
				tag: this.tag,
			}
			// to prevent creating empty items
			if(this.notes.title && this.notes.content){
				this.notes.push(note);
				localStorage.setItem('notes', JSON.stringify(this.notes));
			} else{
				this.formError.data = "Please fill all relevant fields";
			};
			
		},

		removeNote(id){
			var index = parseInt(id);
			const noted = this.notes;
			noted.splice(index,1);
			localStorage.setItem('notes', JSON.stringify(this.notes));	
		},

		showAddForm(){
			this.cssBind.hide = "show";
		},

		hideAddForm(){
			this.cssBind.hide = "hide";
		},

		// Format text before output on the view side, 
		format(data, type){
			switch(type){
				case type ='date':
					let created = new Date(data);
					return created.toLocaleString('en-UK');
					break;
				case type = 'currency':
					break;
			}		
		},

		filterTag(tag){
			switch(tag){
				case tag = "Books":
					const Books = this.notes.filter((value, index) => value.tag == "Book");
					return Books;
				break;
				case tag = "Events":
					const Events = this.notes.filter((value, index) => value.tag == "Event");
					return Events;
				break;
				case tag = "Todos":
					const Todos = this.notes.filter((value, index) => value.tag == "Todo");
					return Todos;
				break;
				case tag = "Bookmarks":
					const Bookmarks = this.notes.filter((value, index) => value.tag == "Bookmark");
					return Bookmarks;
				break;
			}	
		}
	},
});
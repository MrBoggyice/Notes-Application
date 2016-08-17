class Note{
	constructor(id, content, author){
		this.id = id;
		this.content = content;
		this.author = author;
	}
}

class NotesApplication {
	constructor(){
		this.notes = [];
	}

	// Creates a note and pushes to note list
	create(note_content, author){
		var content = new Note(this.notes.length, note_content, author);
		this.notes.push(content);
	}

	// List the available notes
	listNotes(){
		for(var i = 0; i < this.notes.length; i++) {
	      console.log("Note ID: " + this.notes[i].id);
	      console.log(this.notes[i].content + "\n");
	      console.log("By Author " + this.notes[i].author + "\n\n");
	    }
	}


	// Gets a note with its id
	get(note_id){
		for(var i = 0; i < this.notes.length; i++){
			if(note_id === this.notes[i].id){
				return this.notes[i];
			}
		}
		return 'no note with such id';

	}

	// Searches note with a search text
	search(search_text){
		
		for(var i = 0; i < this.notes.length; i++){
			var note = this.notes[i].content;
			
			if(note.search(search_text) !== -1){
				return this.notes[i];
			}
		}
		return "not found";

	}

	// Deletes a note with its ID
	delete(note_id){
		for(var i = 0; i < this.notes.length; i++){
			if(note_id === this.notes[i].id){
				this.notes.splice(this.notes[i].id, 1);
				console.log("note deleted \n\n") ;
			}
		}
	}
	

	// Updates a note
	edit(note_id, new_content){
		for(var i = 0; i < this.notes.length; i++){
			if(note_id === this.notes[i].id){
				this.notes[i].content = new_content;
			}
		}

	}
}

class Notes{
	constructor(note, author){
		this.note = note;
		this.author = author;
	}
}

class NotesApplication {
	constructor(){
		this.notes = [];
	}

	// Creates a note and pushes to note list
	create(note_content, author){
		var note = new Notes(note_content, author);
		this.notes.push(note);
	}

	// List the available notes
	listNotes(){
		for(var i = 0; i < this.notes.length; i++) {
	      console.log("Note ID: " + this.notes.indexOf(this.notes[i]));
	      console.log(this.notes[i] + "\n");
	      console.log("By Author " + this.notes[i].author + "\n\n");
	    }
	}


	// Gets a note with its id
	get(note_id){
		for(var i = 0; i < this.notes.length; i++){
			if(note_id === this.notes.indexOf(this.notes[i])){
				return this.notes[i];
			}else{
				return 'no note with such id';
			}
		}

	}

	// Searches note with a search text
	search(search_text){
		
		for(var i = 0; i < this.notes.length; i++){
			var note = this.notes[i].note;
			
			if(note.search(search_text) !== -1){
				return this.notes[i];
			}else{
				return "not found";
			}
		}

	}

	// Deletes a note with its ID
	delete(note_id){
		
	}

	// Updates a note
	edit(note_id, new_content){

	}
}
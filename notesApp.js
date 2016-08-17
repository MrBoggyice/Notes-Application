class NotesApplication {
	constructor(author){
		this.author = author;
		this.notes = [];
	}

	// Creates a note and pushes to note list
	create(note_content){
		this.notes.push(note_content);
	}

	// List the available notes
	listNotes(){
		
	}

	// Gets a note with its id
	getANote(note_id){

	}

	// Searches note with a search text
	search(search_text){

	}

	// Deletes a note with its ID
	delete(note_id){

	}

	// Updates a note
	edit(note_id, new_content){

	}
}
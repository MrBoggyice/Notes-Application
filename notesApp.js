/**
 * Note Class for new notes
 * @class
 */

class Note{

	/**
	 * Note Constructor
	 * @constructs
	 * @param{Number} id - The Note ID
	 * @param{String} content - The Note Content
	 * @param{String} author - The Note Author
	 */
	constructor(id, content, author){
		this.id = id;
		this.content = content;
		this.author = author;
	}
}


/**
 * NotesApplication Class with a few behaviours
 * @class
 */
class NotesApplication {

	/**
	 * NoteApplication Constructor
	 * @constructs
	 */
	constructor(){
		this.notes = [];
	}

	/**
	 * Creates and saves note in the list
	 * @function
	 * @param {String} note_content - Note content
	 * @param {String} author - Note author
	 */
	create(note_content, author){
		var content = new Note(this.notes.length, note_content, author);
		this.notes.push(content);
	}

	/**
	 * Lists all notes
	 * @function
	 */
	listNotes(){
		for(var i = 0; i < this.notes.length; i++) {
		      console.log("Note ID: " + this.notes[i].id);
		      console.log(this.notes[i].content + "\n");
		      console.log("By Author " + this.notes[i].author + "\n\n");
	    }
	}


	/**
	 * Gets a specific note with a given ID
	 * @function
	 * @param {Number} note_id - Note ID
	 */
	get(note_id){
		for(var i = 0; i < this.notes.length; i++){
			if(note_id === this.notes[i].id){
				return this.notes[i].content;
			}
		}
		return 'no note with such id';

	}

	/**
	 * Searches the notes with a given String
	 * @function
	 * @param {String} search_text - Search Sring
	 */
	search(search_text){
		
		for(var i = 0; i < this.notes.length; i++){
			var note = this.notes[i].content;
			
			if(note.search(search_text) !== -1){
				return this.notes[i];
			}
		}
		return "not found";

	}

	/**
	 * Deletes a specific note with a given ID
	 * @function
	 * @param {Number} note_id - Note ID
	 */
	delete(note_id){
		for(var i = 0; i < this.notes.length; i++){
			if(note_id === this.notes[i].id){
				this.notes.splice(this.notes[i].id, 1);
				return "note deleted \n\n";
			}
		}
		return "There's no note with such id";
	}
	

	/**
	 * Edits a note content
	 * @function
	 * @param {Number} note_id - Note ID
	 * @param {String} new_content - New content
	 */
	edit(note_id, new_content){
		for(var i = 0; i < this.notes.length; i++){
			if(note_id === this.notes[i].id){
				this.notes[i].content = new_content;
				return "content edited";
			}
		}
		return "There's no such note";
	}
}


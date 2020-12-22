import { Component, OnInit } from '@angular/core';
import { faTrash, faUndo } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Alert } from 'src/app/classes/alert';
import { Note } from 'src/app/interfaces/note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  faTrash = faTrash
  faUndo = faUndo
  trashNotes: Note[]
  noteToDelete: Note
  alert: Alert = new Alert(true, false, '', '', 0)
  constructor(private notesService: NotesService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.notesService.getTrashedNotes().subscribe((notes) => {
      this.trashNotes = notes
    })
  }

  delete(modal) {
    this.alert = new Alert(true, true, 'seconday', 'Deleting ...', 0)
    this.notesService.deleteNotePermanently(this.noteToDelete.id).subscribe(() => {
      let index = this.trashNotes.findIndex((note) => note.id == this.noteToDelete.id)
      this.trashNotes.splice(index, 1)
      this.alert = new Alert(
				true,
				true,
				'success',
				'Note deleted!',
				5000
			)
    })
    modal.close()
  }

  restore(id: number) {
    this.alert = new Alert(true, true, 'seconday', 'Restoring note ...', 0)
    this.notesService.restoreNote(id).subscribe(() => {
      let index = this.trashNotes.findIndex((note) => note.id == id)
      this.trashNotes.splice(index, 1)
      this.alert = new Alert(
				true,
				true,
				'success',
				'Note restored!',
				5000
			)
    })
  }

  showConfirmModal($event, modal, noteToDelete: Note) {
		$event.preventDefault()
		this.noteToDelete = noteToDelete
		this.modalService.open(modal)
	}

  // Handle alert's closing event
	closed(isOpen: boolean) {
		this.alert.isOpen = isOpen
	}

}

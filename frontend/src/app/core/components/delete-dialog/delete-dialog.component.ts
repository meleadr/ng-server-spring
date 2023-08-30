import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ServersService} from "../../../server/services/servers.service";

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {

  id!: number;
  constructor(private dialogRef: MatDialogRef<DeleteDialogComponent>,
              private serversService: ServersService,
              @Inject(MAT_DIALOG_DATA) data: { id: number, title: string}) {
    this.id = data.id;
  }

  onDelete() {
   this.serversService.deleteServer(this.id);
    this.dialogRef.close()
  }
}

import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Server} from "../../models/server.model";
import {ServersService} from "../../services/servers.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DeleteDialogComponent} from "../../../core/components/delete-dialog/delete-dialog.component";
import {Status} from "../../enums/status.enum";

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit {

  loading$!: Observable<boolean>;
  servers$!: Observable<Server[]>;
  protected readonly Status = Status;

  constructor(private serversService: ServersService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.loading$ = this.serversService.loading$;
    this.servers$ = this.serversService.servers$;
    this.serversService.getServersFromServer();
  }

  openDialog(id: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: id,
    };

    this.dialog.open(DeleteDialogComponent, dialogConfig);
  }

  onPing(ipAddress: string) {
   this.serversService.pingServer(ipAddress);
  }
}

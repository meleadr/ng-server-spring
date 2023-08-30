import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Server} from "../../models/server.model";
import {ServersService} from "../../services/servers.service";

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit{

  loading$!: Observable<boolean>;
  servers$!: Observable<Server[]>;

  constructor(private serversService: ServersService) {
  }

  ngOnInit() {
    this.loading$ = this.serversService.loading$;
    this.servers$ = this.serversService.servers$;
    this.serversService.getServersFromServer();
  }

}

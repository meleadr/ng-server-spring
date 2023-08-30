import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Server} from "../../models/server.model";

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit{

  server$!: Observable<Server[]>;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.loadServer();
  }

  loadServer() {
    this.httpClient.get('http://localhost:9000/server').subscribe(
      (response: any) => {
        console.log(response);
      }
    );
  }

}

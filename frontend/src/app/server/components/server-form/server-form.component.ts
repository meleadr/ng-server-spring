import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Server} from "../../models/server.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ServersService} from "../../services/servers.service";
import {Status} from "../../enums/status.enum";

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.scss']
})
export class ServerFormComponent implements OnInit{

  @Input() server!: Server;
  form!: FormGroup;

  constructor(private formBuilder:FormBuilder, private serversService: ServersService) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      ipAddress: '',
      name: '',
      memory: '',
      type: '',
      imageUrl: '',
      status: Status.SERVER_DOWN,
    });
  }
  onSubmit() {
    this.serversService.addServer(this.form.value);
    this.form.reset();
  }

}

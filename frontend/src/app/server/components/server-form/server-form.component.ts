import {Component, OnInit} from '@angular/core';
import {Server} from "../../models/server.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ServersService} from "../../services/servers.service";
import {Status} from "../../enums/status.enum";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.scss']
})
export class ServerFormComponent implements OnInit{

  form!: FormGroup;
  server$!: Observable<Server>;

  constructor(
      private formBuilder: FormBuilder,
      private serversService: ServersService,
      private router: Router,
      private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.server$ = this.route.params.pipe(
        switchMap(params => this.serversService.getServerById(+params['id']))
    );

    this.form = this.formBuilder.group({
      id: '',
      ipAddress: '',
      name: '',
      memory: '',
      type: '',
      imageUrl: '',
      status: Status.SERVER_DOWN,
    });

    this.server$.subscribe(server => {
      if (server) {
        this.form.patchValue(server);
      }
    });
  }

  onSubmit() {
    this.form.value.id ? this.serversService.updateServer(this.form.value) : this.serversService.addServer(this.form.value);
    this.form.reset();
    this.router.navigateByUrl('/server');
  }
}

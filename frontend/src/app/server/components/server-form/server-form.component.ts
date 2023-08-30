import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Server} from "../../models/server.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.scss']
})
export class ServerFormComponent implements OnInit{

  @Input() server!: Server;
  @Output() submitted = new EventEmitter<Server>();
  form!: FormGroup;

  constructor(private formBuilder:FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      ipAddress: '',
      name: '',
      status: '',
      memory: '',
      type: '',
      imageUrl: '',
    });
  }
  onSubmit() {
    this.submitted.emit(this.form.getRawValue());
    this.form.reset();
  }

}

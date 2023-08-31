import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, ActivatedRouteSnapshot } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  subTitle!: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
  }
}

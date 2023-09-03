import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, ActivatedRouteSnapshot } from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  subTitle!: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public authService: AuthService) {
  }

  ngOnInit() {
  }
}

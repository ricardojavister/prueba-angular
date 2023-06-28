import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @ViewChild('btnHome') btnHome!: ElementRef;
  constructor(private router: Router) { }
  
  redirect() {
    this.router.navigate(['/'])
  }
}



import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  sidebarOpened = false;

  constructor() {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }
}

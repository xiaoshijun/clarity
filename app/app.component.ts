/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs/Rx';
@Component({
  selector: 'my-app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  users = [];
  dataloading = false;
  pageSize = 10;
  lastPage;
  paginationEnabled = false;
  selectedRows: any[];
  viewGrid = false;
  termsAgreement = false;

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 50; i++) {
      this.users.push({
        username: 'user' + i,
        fullName: 'username' + i,
        role: 'ss'
      });
    }
    this.paginationEnabled = true;
  }
  
  toggle() {
    this.paginationEnabled = !this.paginationEnabled;
  }
}

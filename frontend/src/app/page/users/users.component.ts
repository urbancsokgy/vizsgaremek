import { Component, OnInit } from '@angular/core';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  readonly tableColumns: ITableColumn[] = [
    {key: "firstName", title: "First Name"},
    {key: "lastName", title: "Last Name"},
    {key: "email", title: "Email"},
    {key: "address", title: "Address",
      pipes: [ConfigService.getSubProperty],
      pipeArgs: [['country', 'city']]
    },
  ];

  readonly list$ = this.userService.getAll();

  constructor(
    private config: ConfigService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

}

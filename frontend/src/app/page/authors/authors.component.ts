import { Component, OnInit } from '@angular/core';
import { IDataTableColumn } from 'src/app/common/data-table/data-table.component';
import { Author } from 'src/app/model/author';
import { AuthorService } from 'src/app/service/author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  readonly tableColumns: IDataTableColumn<Author>[] = [
    { title: "Name", value: author => `${author.firstName} ${author.lastName}` },
    { title: "Born at", value: author => author.born?.toString() || 'unknwon' },
  ];

  readonly list$ = this.authorService.getAll();

  constructor(
    private authorService: AuthorService
  ) { }

  ngOnInit(): void {
  }

}

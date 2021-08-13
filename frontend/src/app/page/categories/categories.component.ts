import { Component, OnInit } from '@angular/core';
import { IDataTableColumn } from 'src/app/common/data-table/data-table.component';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  readonly tableColumns: IDataTableColumn<Category>[] = [
    { title: "Name", value: category => category.name },
  ];

  readonly list$ = this.categoryService.getAll();

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
  }

}

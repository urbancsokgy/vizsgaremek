import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  readonly categoryCount$ = this.categoryService.count();

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
  }

}

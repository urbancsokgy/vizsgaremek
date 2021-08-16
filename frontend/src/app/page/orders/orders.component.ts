import { OrderService } from './../../service/order.service';
import { Component, OnInit } from '@angular/core';
import { IDataTableColumn } from 'src/app/common/data-table/data-table.component';
import { AuthorNamePipe } from 'src/app/pipe/author-name.pipe';
import { UserNamePipe } from 'src/app/pipe/user-name.pipe';
import { Order } from 'src/app/model/order';
import { AuthService } from 'src/app/service/auth.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  readonly tableColumns: IDataTableColumn<Order>[] = [
    { title: "Customer name", value: order =>this.userNamePipe.transform (order.user) },
    { title: "Book title", value: order => order.book.title  },
    { title: "Book author", value: order => this.authorNamePipe.transform(order.book.author, true)  },
    { title: "Amount", value: order => order.amount.toString()  },
    { title: "Price (Ft)", value: order => this.currencyPipe.transform(order.book.price, 'HUF', 'symbol', '1.0-0') || order.book.price.toString() },
    { title: "Total price (Ft)", value: order => {
      const total = order.amount * order.book.price;
      return this.currencyPipe.transform(total, 'HUF', 'symbol', '1.0-0') || total.toString();
    } },
  ];

  list$ = this.orderService.getAll();

  constructor(
    private orderService: OrderService,
    private userNamePipe: UserNamePipe,
    private authorNamePipe : AuthorNamePipe,
    private authService: AuthService,
    private currencyPipe:CurrencyPipe
  ) { }

  get isAdmin(): boolean {
    return this.authService.currentUser?.role === 'admin';
  }

  delete(order: Order): void {
    if (!window.confirm('Are you sure you wish to delete this order?')) {
      return;
    }

    this.orderService.delete(order._id).toPromise()
      .then(() => this.list$ = this.orderService.getAll())
      .catch(() => window.alert('Failed to delete order'));
  }

  ngOnInit(): void {
  }

}

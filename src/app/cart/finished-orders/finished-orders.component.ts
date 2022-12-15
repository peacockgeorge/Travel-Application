import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FinishedOrders } from './finished-orders.model';
import { FinishedOrdersService } from './finished-orders.service';
import { MatDialog } from '@angular/material/dialog';
import { VoteComponent } from './vote/vote.component';

@Component({
  selector: 'app-finished-orders',
  templateUrl: './finished-orders.component.html',
  styleUrls: ['./finished-orders.component.css']
})
export class FinishedOrdersComponent implements OnInit, AfterViewInit {
 
  ordersSource = new MatTableDataSource<FinishedOrders>();
  displayedColumns = ["date","destination","distance","time","price", "status", "actions"];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog, private serviceOrders: FinishedOrdersService) { }

  ngOnInit(): void {
    this.ordersSource.data = this.serviceOrders.getData();
  }
  
  ngAfterViewInit(): void {
    this.ordersSource.sort = this.sort;
    this.ordersSource.paginator = this.paginator;
  }

  doFilter(filterValue: string){
    this.ordersSource.filter = filterValue.trim().toLowerCase();
  }

  oceniPutovanje(){
    const dialogRef = this.dialog.open(VoteComponent)
  }

}

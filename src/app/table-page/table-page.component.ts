import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiserviceService } from '../service/apiservice.service';

export interface PeriodicElement {
  strategies: string;
  period: string;
  price: number;
  count: number;
  geographies: string;
  fundSizes: string;
  ratings: string;
  vintage: string;
  timePeriod: string;
}

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent implements OnInit {

  displayedColumns: string[] = [
    'strategies', 'period', 'price', 'count', 'geographies',
    'fundSizes', 'ratings', 'vintage', 'timePeriod'
  ];

  dataSource;
 
  results : any = [];

  constructor(private service: ApiserviceService) { }

  ngOnInit(): void {
    this.service.getTable().subscribe(res => {
      this.results = res;
      this.dataSource = new MatTableDataSource(this.results.data);
    });
  }

}

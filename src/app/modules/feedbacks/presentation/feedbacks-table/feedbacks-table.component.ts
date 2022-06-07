import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FeedbacksModel } from 'src/app/modules/feedbacks/core/domain/feedbacks.model';
import { FeedbacksService } from '../ngrx/feedbacks.service';

@Component({
  selector: 'app-feedbacks-table',
  templateUrl: './feedbacks-table.component.html',
  styleUrls: ['./feedbacks-table.component.sass']
})
export class FeedbacksTableComponent implements AfterViewInit, OnChanges  {


  @Input('feedbacks') feedbacks : Array<FeedbacksModel> | null = [];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  dataSource = new MatTableDataSource<FeedbacksModel>();
  selection = new SelectionModel<FeedbacksModel>(true, []);

  overviewTableColumns: string[] = ['name', 'comments', 'email', 'phone'];

  constructor(
    private feedbacksService: FeedbacksService,
  ){}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.feedbacks){
      this.dataSource.data = this.feedbacks
    }
  }

  ngAfterViewInit(): void {
    if(this.paginator ){
      this.dataSource.paginator = this.paginator;
    }

    if(this.sort){
      this.dataSource.sort = this.sort;
    }
  }


}

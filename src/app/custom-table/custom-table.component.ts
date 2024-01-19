import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent<T> implements OnInit {
  @Input() tableColumns: Array<Column> = [];
  @Input() tableData: Array<any> = []

  displayedColumns: Array<String> = [];
  dataSource: MatTableDataSource<T> = new MatTableDataSource();

  displayedColumnsListforSort = this.displayedColumns.map(c=> c['sortDir'] = 'desc');

  @Input() recordsPerPage: number = 0;
  @ViewChild('empTbSort', {static: false}) empTbSort = new MatSort();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  startIndex = 0;
  endIndex = this.startIndex + this.recordsPerPage;

  filterValue: any = '';

  search(){

  }

  sortData(e){
    console.log(e)
  }

  sortByColumn(sortColumn){
    console.log(sortColumn)
    this.dataSource.data.sort((a, b) => {
      console.log(a)
      if(!isNaN(Date.parse(a[sortColumn.columnDef])) ){
        return sortColumn['sortDir'] === 'asc'
        ? a[sortColumn.columnDef] - b[sortColumn.columnDef]
        : sortColumn['sortDir'] === 'desc'
        ? (new Date(a[sortColumn.columnDef]).getTime()) - (new Date(b[sortColumn.columnDef]).getTime())
        : (new Date(b[sortColumn.columnDef]).getTime()) - (new Date(a[sortColumn.columnDef]).getTime())
      }
      else{
        return sortColumn['sortDir'] === 'asc'
        ? a[sortColumn.columnDef] - b[sortColumn.columnDef]
        : sortColumn['sortDir'] === 'desc'
        ? b[sortColumn.columnDef] - a[sortColumn.columnDef]
        : a[sortColumn.columnDef] - b[sortColumn.columnDef];
      }

    });
    this.dataSource._updateChangeSubscription();
  }
  

  constructor() { 
    
  }

  applyFilter(){
    let filterValue = this.filterValue
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  applyFilter1(filterValue: string){
    this.filterValue = filterValue;
  }


  ngOnInit() {
    this.endIndex = this.startIndex + this.recordsPerPage;
    this.displayedColumns = this.tableColumns.map(c=>c.columnDef);
    this.dataSource = new MatTableDataSource(this.tableData.slice(this.startIndex,this.recordsPerPage))
    console.log('records per page->'+this.recordsPerPage)
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.empTbSort;
  }

  previous(){
    if(!(this.startIndex <= 0)){
      let temp = this.startIndex
      this.startIndex = this.startIndex-this.recordsPerPage;
      this.endIndex = this.endIndex - this.recordsPerPage
      this.dataSource = new MatTableDataSource(this.tableData.slice(this.startIndex,this.endIndex))
    }
  }
  next(){
    if(this.endIndex < this.tableData.length){
      this.startIndex = this.startIndex + this.recordsPerPage;
      this.endIndex = this.endIndex+ this.recordsPerPage
      this.dataSource = new MatTableDataSource(this.tableData.slice(this.startIndex,this.endIndex))
    }
  }
  

}
export interface Column {
  columnDef: string;
  header: string;
  cell: Function;
  isLink?: boolean;
  url?: string;
  width?:string
}
export interface Element {
  id: number,
  nome: string,
  descricao: string,
  criadoEm: string,
  atualizadoEm: string,
  comentario: string
}
export function sortByColumn(list: any[] | undefined, column:string, direction = 'desc'): any[] {
  let sortedArray = (list || []).sort((a,b)=>{
    if(a[column] > b[column]){
      return (direction === 'desc') ? 1 : -1;
    }
    if(a[column] < b[column]){
      return (direction === 'desc') ? -1 : 1;
    }
    return 0;
  })
return sortedArray;
}
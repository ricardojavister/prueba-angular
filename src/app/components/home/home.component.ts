import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  form: any;
  books!: Book[];
  displayedColumns: string[] = ['Id', 'Name', 'Description'];
  dataSorted!: Book[];
  dataSource!: MatTableDataSource<Book>;
  directionLast: String = 'asc';
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  public constructor(
    private formbuilder: FormBuilder,
    private bookService: BookService
  ) {
    this.bookService.mybooks$.subscribe((data) => {
      this.dataSorted = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  ngOnInit(): void {
    this.form = this.formbuilder.group({
      Id: ['', [Validators.required]],
      Name: ['', []],
      Description: ['', [Validators.required]],
    });
  }

  save() {
    if (this.form.valid) {
      let item : Book = {
        Id: this.form.value.Id, Name: this.form.value.Name, Description: this.form.value.Description
      }

      this.bookService.add(item);
      this.form.reset();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Book added successfully',
        showConfirmButton: false,
        timer: 1500
      })
      this.form.reset();
    }
  }
}

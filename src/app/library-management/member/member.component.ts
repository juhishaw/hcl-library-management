import { Component, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { Book } from '../../shared/interface/books';
import { LibraryManagementService } from '../library-management.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {
  public booksList: Book[];

  selectedBooks: Book[];

  categories: any[];

  loading: boolean = true;

  @ViewChild('dt') table: Table;

  constructor(
    private libraryManagementService: LibraryManagementService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.libraryManagementService.getBooks().then((response) => {
      this.booksList = response;
      this.loading = false;
    });

    this.categories = [
      { label: 'Available', value: 'AVAILABLE' },
      { label: 'Borrowed ', value: 'BORROWED' },
      { label: 'Overdue ', value: 'OVERDUE' },
    ];
    this.primengConfig.ripple = true;
  }

}

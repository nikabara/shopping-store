import { MockApiService } from './../services/mock-api.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../app.config';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  items: Item[] = [];

  ngOnInit(): void {
    this.getItems();
  }

  constructor(private mockApiService: MockApiService) { };

  getItems(): void {
    this.mockApiService.getItems().subscribe(
      (data: Item[]) => {
        this.items = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getItem(id: number): void {
    this.mockApiService.getItem(id).subscribe(
      (data: Item[]) => {
        this.items = data;
        console.log(data)
      },
      (error) => {
        console.log(error);
      }
    )
  }
}

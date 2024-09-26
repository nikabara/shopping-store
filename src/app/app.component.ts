import { Component, OnInit } from '@angular/core';
import { MockApiService } from './services/mock-api.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Item } from './app.config';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'shopping-store';
  items: Item[] = [];

  constructor(private mockApiService: MockApiService) { }

  ngOnInit(): void {
    this.getItems();
  }

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
}

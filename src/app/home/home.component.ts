import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService],
})
export class HomeComponent implements OnInit {
  todos: { id: number; name: string }[] = [];
  // cities: { name: string; image: string; alt: string }[] = [];
  constructor(private homeService: HomeService) {}

  rxjsFromObsev = from([[1,2,3,4,5]]);

  async ngOnInit() {
    this.todos = (await this.homeService.getCities()) as {
      id: number;
      name: string;
    }[];    
    
    console.log('todos', this.todos);
    
    // this.cities = (await this.homeService.getCities()) as {
    //   name: string;
    //   image: string;
    //   alt: string;
    // }[];

    this.rxjsFromObsev.subscribe(item => console.log(item))
  }
  
}

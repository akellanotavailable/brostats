import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = environment.title;
  private apiURL = environment.apiURL;

  ngOnInit(): void {
    console.log(this.title);
    console.log(this.apiURL);
  }
}

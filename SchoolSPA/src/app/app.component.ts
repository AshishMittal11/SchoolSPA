import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'School Single Page Application';

  public ArenaClick(category: string) {
    console.log(category);
  }
}



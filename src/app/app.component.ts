import { Component } from '@angular/core';
import { AngularFireDatabase,  } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'it still works';

  projects: Observable<any[]>;

  constructor(_database: AngularFireDatabase){
    this.projects = _database.list('/projects').valueChanges();
    console.log('Test in AppComponent: ', this.projects);
    alert(this.projects);
  };  
}

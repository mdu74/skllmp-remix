import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,  } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Observable<any[]>;

  constructor(_database: AngularFirestore) { 
    this.projects = _database.collection('/projects').valueChanges();
    console.log('Test in Projects Component: ', this.projects);
  }

  ngOnInit() {
  }

}

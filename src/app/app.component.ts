import { Component } from '@angular/core';
import { Gitsearch } from './gitsearch';
import { GitRepo } from './git-repo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searches = [
        new Gitsearch(1,'hello you','sd'),
        new Gitsearch(2,'hello you','sd'),
        new Gitsearch(3, 'hello you','sd'),
        new Gitsearch(4, 'hello you','sd'),
        ]

}

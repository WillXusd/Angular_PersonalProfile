import { Component,OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularPersonProfile';

  ngOnInit() {

 //   $(".card").faceCursor({});

 //$("#title").html("<p>this is a string from jQuery html setting</p>");
  }
}

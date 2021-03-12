import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui-tools';
  formTypeClass:boolean=false;

  clickEvent(){
    this.formTypeClass = !this.formTypeClass;       
  }
}

import { Component, ViewChild } from '@angular/core';
import { EmailEditorComponent } from 'angular-email-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  @ViewChild(EmailEditorComponent)

  title = 'angular-email-editor';

 
  //private emailEditor: EmailEditorComponent;

  constructor(
    private emailEditor: EmailEditorComponent
  ){}
  
  editorLoaded(e:any) {
    // load the design json here
    // this.emailEditor.editor.loadDesign({});
  }

   // called when the editor has finished loading
  editorReady(e:any) {
    console.log('editorReady');
  }

  exportHtml() {
    this.emailEditor.editor.exportHtml((data:any) => console.log('exportHtml', data));
  }
}
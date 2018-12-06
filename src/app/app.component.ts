import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fullpage';

  ngOnInit() {

    $(document).ready(function () {
      
      $('#fullpage').fullpage({
        licenseKey: 'EA26EC0D-13A84407-961F3DBD-832CEB96',
        anchors: ['wieso', 'wie', 'was', 'wer'],
        
      });

      $(document).ready(function () {

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $('#sectionContent').toggleClass('active');
        });

        $('#sectionContent').on('click', function (){
          if($('#sidebar').hasClass('active')){
            $('#sidebar').toggleClass('active');
          }
        })
      
    });
    });
  }
}
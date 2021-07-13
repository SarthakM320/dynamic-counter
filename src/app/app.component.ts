import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {



  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    // console.log($event['Window']);

    var y = document.querySelector('.cards')?.getBoundingClientRect().bottom;
    if (y) {
      var y_new = y;
    } else {
      y_new = 1000;
    }
    if (window.pageYOffset > y_new && !this.scrolling) {
      console.log('executing');
      console.log(window.pageYOffset);
      this.citiesstop = setInterval(() => {
        this.cities_final = Math.floor(this.cities_final / 10) * 10;
        this.cities += 5;
        if (this.cities == this.cities_final) { clearInterval(this.citiesstop); }
      }, 10)

      this.collegesstop = setInterval(() => {
        this.col_final = Math.floor(this.col_final / 10) * 10
        this.colleges += 5;
        if (this.colleges == this.col_final) {

          clearInterval(this.collegesstop);
        }
      }, 10)


      this.membersstop = setInterval(() => {
        this.members_final = Math.floor(this.members_final / 100) * 100
        this.members += 50;
        if (this.members == this.members_final) {

          clearInterval(this.membersstop);
        }
      }, 10);
      this.scrolling = true;

    }

  }
  cities: number = 0;
  cities_final: number = 544;
  colleges: number = 0;
  col_final: number = 1733;
  members: number = 0;
  members_final: number = 7500;
  citiesstop: any;
  collegesstop: any;
  membersstop: any;
  scrolling: boolean = false;

}
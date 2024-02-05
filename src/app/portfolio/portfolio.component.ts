import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
 imgsrcs:string[]=["port1.png","port2.png","port3.png","port1.png","port2.png","port3.png"]
 shownlayout:boolean=false;
 currentImg:string="";
 showItem(event:any){
  this.shownlayout=true;
  console.log(event);
  let src:string=event.target.offsetParent.childNodes[0].currentSrc;
  let splits:string[]=src.split("/");
  this.currentImg="./assets/images/"+splits[splits.length-1]; 
 }
 hideLayout(){
  this.shownlayout=false;
 }
}

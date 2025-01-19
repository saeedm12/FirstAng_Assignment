import { Component, ElementRef, QueryList, viewChild, ViewChild, ViewChildren, viewChildren } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent 
{
imgSrcs:string[]=[
  "images/poert1.png",
  "images/port2.png",
  "images/port3.png",
  "images/poert1.png",
  "images/port2.png",
  "images/port3.png"
]
@ViewChild("MyBox")box!:ElementRef

isHide:boolean = true
SelectedImg:string = ''
show(imageSrc:string):void{
  this.isHide = false
  this.SelectedImg=imageSrc;
}

hide():void
{
this.isHide=true;
}
}

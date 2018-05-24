import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-liz',
  templateUrl: './liz.component.html',
  styleUrls: ['./liz.component.scss']
})
export class LizComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(res => console.log(res.id1));
    this.route.params.subscribe(res => console.log(res.id2));
  }

  ngOnInit() {
  }

}

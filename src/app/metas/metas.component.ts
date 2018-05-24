import { Component, OnInit } from '@angular/core';
import {ActivatedRoute}  from '@angular/router';//import activated route para usar metas/:id
import { Router } from '@angular/router';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.scss']
})
export class MetasComponent implements OnInit {
  itemCount: number = 4;
  textitoTitulo: string = "Agrega más cosas amiguito";
  btnText: string = 'Add an Item';
  metasText: string = 'My first life goal';
  metas = [];

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this.itemCount = this.metas.length;
  }
  addItem() {
    this.metas.push(this.metasText);
    this.metasText = '';
    this.itemCount = this.metas.length;
  }
  addTextito() {
    this.metas.push("Un textito");
    this.metasText = '';
    this.itemCount = this.metas.length;
  }
  sendMeHome() {
    this.router.navigate(['']);
  }
}

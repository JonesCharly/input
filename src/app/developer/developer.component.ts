import { Component, OnInit, Input } from '@angular/core';
import { developper } from '../common/developer.model';
import { skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

  skills: skill;
  developper: developper;
  
  constructor(  ) { }
  
  ngOnInit() {
  this.developper = new developper ()
  this.developper.lastname= "charline";
  this.developper.firstname= "fazentieux";
  this.developper.age= 24;
  this.developper.sexe= 'girl';
  this.developper.bio= 'ex graphic design new web developper';
  }

}

// this.developper = new developper { (
//   lastname: 'charline',
//   firstname: 'fazentieux',
//   age: 24,
//   sexe: 'girl',
//   bio: 'ex graphic design new web developper',
//   skills
//   )} ;
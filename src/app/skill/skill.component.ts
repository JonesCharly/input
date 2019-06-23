import { Component, OnInit, Input } from '@angular/core';
import { skill } from '../common/skill.model'

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() skills: skill;

  constructor() { }
  
  ngOnInit() {

  }

}

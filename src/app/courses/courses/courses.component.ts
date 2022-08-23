import { Component, OnInit } from '@angular/core';
import {Course} from "../models/course";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {_id: '1', name: 'Angular', category: 'Front-end'},
    {_id: '2', name: 'Java', category: 'Back-end'},
    {_id: '3', name: 'AWS', category: 'Cloud-Computer'},
    {_id: '4', name: 'Spring', category: 'Micro-Services'}
  ];
  displayedColumns = ['name', 'category'];

  constructor() {
    //this.courses= [];
  }

  ngOnInit(): void {
  }

}

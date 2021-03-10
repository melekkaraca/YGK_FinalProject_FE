import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}

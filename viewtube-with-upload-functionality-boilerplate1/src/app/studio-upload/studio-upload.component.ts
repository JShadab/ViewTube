import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studio-upload',
  templateUrl: './studio-upload.component.html',
  styleUrls: ['./studio-upload.component.css']
})
export class StudioUploadComponent implements OnInit {

  locations = ['India', 'USA', 'UK']

  constructor() { }

  ngOnInit(): void {
  }

}

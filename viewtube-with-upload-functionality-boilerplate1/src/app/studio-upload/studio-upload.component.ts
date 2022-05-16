import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studio-upload',
  templateUrl: './studio-upload.component.html',
  styleUrls: ['./studio-upload.component.css']
})
export class StudioUploadComponent implements OnInit {

  locations = ['India', 'USA', 'UK']
  licenses = ['Standard Viewtube License', 'Creative Common License']
  distributions = ['Everywhere', 'Make this video available only on monetized platforms']
  VideoCategories = ['Film & Animation', 'Autos & Vehicles', 'Music', 'Pets & Animals', 'Sports',
    'Travel & Events', 'Gaming', 'People & Blogs', 'Comedy', 'Entertainment', 'News & Politics',
    'Howto & Style', 'Education', 'Science & Technology', 'Nonprofits & Activism']


  constructor() { }

  ngOnInit(): void {
  }

}

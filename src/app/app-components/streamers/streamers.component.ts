import { Component, OnInit } from '@angular/core';
import { BloomService } from 'src/app/services/bloom.service';

@Component({
  selector: 'app-streamers',
  templateUrl: './streamers.component.html',
  styleUrls: ['./streamers.component.scss']
})
export class StreamersComponent implements OnInit {
  streamers:any = [];
  constructor(public bloomSvc: BloomService) { }

  ngOnInit(): void {
    this.bloomSvc.getStreamers().subscribe(res => {
      this.streamers = res;
    })
  }

  shorten(bio:String){
    return bio.length <= 100 ? bio : bio.slice(0,96) + '...';
  }

}

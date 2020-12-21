import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BloomService } from 'src/app/services/bloom.service';
import { Constants } from '../../shared/constants';

@Component({
  selector: 'app-streamer',
  templateUrl: './streamer.component.html',
  styleUrls: ['./streamer.component.scss']
})
export class StreamerComponent implements OnInit {
  streamer:any = {};
  defaultBanner = Constants.DEFAULT_BANNER;
  constructor(public bloomSvc: BloomService, public activatedRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.bloomSvc.getStreamerByName(params.name).subscribe(res => {
        this.streamer = res
        console.log(this.streamer.links)
        for(var key in this.streamer.links){
          console.log(key)
        }
      })
    });
  }

  onResize(event) {
    
  }

}

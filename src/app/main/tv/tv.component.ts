import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  constructor(private toster: ToastrService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.toster.success("Added to cart")
  }

}

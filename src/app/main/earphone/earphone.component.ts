import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-earphone',
  templateUrl: './earphone.component.html',
  styleUrls: ['./earphone.component.css']
})
export class EarphoneComponent implements OnInit {

  constructor(private toster: ToastrService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.toster.success("Added to cart")
  }

}

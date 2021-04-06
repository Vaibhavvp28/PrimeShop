import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-asus',
  templateUrl: './asus.component.html',
  styleUrls: ['./asus.component.css']
})
export class AsusComponent implements OnInit {

  constructor(private toster: ToastrService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.toster.success("Added to cart")
  }

}

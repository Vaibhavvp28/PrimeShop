import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trimmer',
  templateUrl: './trimmer.component.html',
  styleUrls: ['./trimmer.component.css']
})
export class TrimmerComponent implements OnInit {

  constructor(private toster: ToastrService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.toster.success("Added to cart")
  }

}

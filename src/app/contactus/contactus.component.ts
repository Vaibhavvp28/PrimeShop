import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private firestore: AngularFirestore,
    private toster: ToastrService) { }

  ngOnInit(): void {
  }



  onSubmit(form : NgForm){
    let data = form.value;
    this.firestore.collection('contactData').add(data);
    form.reset();
    this.toster.success("Your message has being sent","We received your message!")
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.scss'],
})
export class EditingComponent implements OnInit {
  itemName = '';
  description = '';
  image = '';
  date = '';
  location = '';
  name = '';
  email = '';
  phoneNumber = '';
  claimBtn: any = '';
  formMessageHidden = true;

  data = {
    id: 10,
    attributes: {
      Title: 'New Test task from API test',
      Location: 'test location',
      Claim: true,
      Found: false,
      Email: 'test@email.com',
      Phonenumber: '000-000-000',
      Description: 'Something',
      Image:
        'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      Date_found: '2022-06-07',
      Claim_name: 'Test Name',
      Identifying_question: '',
      Close: false,
    },
  };

  constructor(private cs: CommonService, private router: ActivatedRoute) {}
  posts:any = [];
  showInfo:boolean = false;

  edit() {
    let id: any = this.router.snapshot.paramMap.get('id');
    this.cs.editPost(
      id,
      this.itemName,
      this.location,
      this.claimBtn,
      this.email,
      this.phoneNumber,
      this.description,
      this.image,
      this.date,
      this.name
    ).subscribe
  }

  ngOnInit(): void {
    let id: any = this.router.snapshot.paramMap.get('id');

    this.cs.getPostByID(id).subscribe((res) => {
      console.log(res);
      this.itemName = res.data.attributes.Title;
      this.description = res.data.attributes.Description;
      this.image = res.data.attributes.Image;
      this.date = res.data.attributes.Date_found;
      this.location = res.data.attributes.Location;
      this.name = res.data.attributes.Claim_name;
      this.email = res.data.attributes.Email;
      this.phoneNumber = res.data.attributes.Phonenumber;
      this.claimBtn = res.data.attributes.Claim;
    });
  }
}

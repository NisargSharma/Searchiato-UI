import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchService } from './../search.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private sservice: SearchService, private router: Router) { }
  
  searchForm = new FormGroup({
    query: new FormControl('', [Validators.required])
  });

  search() {
    this.sservice.search().subscribe(success => {
      console.log(this.searchForm.value);
      console.log(success);
    },
    error => {
      console.log(error);
      this.router.navigateByUrl("/login");
    });
  }

  ngOnInit(): void {
  }

}

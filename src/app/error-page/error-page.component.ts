import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ErrorMessages } from '../error-page/error.messages';

@Component({
  selector: 'error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let str = params['type'];     
      console.log( str );
      this.setMessage( str );
    });   
  }

  message: string = ErrorMessages.ERROR_PAGE;

  private setMessage(type: string): void {
    switch(type) {
      case 'page_not_found':
        this.message = ErrorMessages.ERROR_PAGE;
        break;
      case 'bad_request':
        this.message = ErrorMessages.ERROR_REQUEST;
        break;
      case 'user_not_found':
        this.message = ErrorMessages.ERROR_USER;
        break;
      default:
        this.message = ErrorMessages.ERROR_PAGE;
    }
  }


}

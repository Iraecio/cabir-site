import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency-contact',
  templateUrl: './agency-contact.component.html',
  styleUrls: ['./agency-contact.component.scss']
})
export class AgencyContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  whats() {
    const numero: string = '+5566999293869';
    const text: string = 'Olá, Vamos falar sobre um projeto.';
     
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.open('https://wa.me/'+numero+'/?text='+text+'', '-blank');
    }else{
      window.open('https://web.WhatsApp.com/send?phone='+numero+'&text='+text+'', '-blank');
    } 
  }
}

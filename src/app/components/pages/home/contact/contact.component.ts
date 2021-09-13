import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {

  chat(){
    var time = new Date();
    const hora = time.getHours()
    const hello = hora > 0 && hora < 12 ? 'Bom dia, ' : (hora >= 12 && hora < 18 ? 'Boa tarde, ' : 'Boa noite, ');

    const numero:string= '+5566999293869';
    const msg:string=hello + 'Vamos falar sobre um projeto!';
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.open('https://wa.me/'+numero+'/?text='+msg+'', '-blank');
    }else{
      window.open('https://web.WhatsApp.com/send?phone='+numero+'&text='+msg+'', '-blank');
    }

  }
}

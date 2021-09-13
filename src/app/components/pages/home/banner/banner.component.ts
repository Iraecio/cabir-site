import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent   {

  banner = [
    {
      img: "assets/images/banner-one-bg.jpg",
      subtitle: "Consultoria de negócios de TI",
      title: "Melhor Agência Provedora de<br> Soluções de TI",
      text: "Somos uma empresa comprometida com a transparência e paixão pelo nosso trabalho, especializada no desenvolvimento de Websites, Mobile Sites, Marketing Digital e Sistemas Web Pontuais e Personalizados, “nosso objetivo e sermos provedores de resultados para os nossos clientes”"
    },
  ];
  settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    dots: false,
    fade: true,
    arrows: true,
    prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
    nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>',
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          arrows: false
        }
      }
    ]
  };

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency-testimonial',
  templateUrl: './agency-testimonial.component.html',
  styleUrls: ['./agency-testimonial.component.scss']
})
export class AgencyTestimonialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  users = [
    { 
      img:"assets/images/agency/testimonial/1.png",
      name:"Angela Mioto",
      designation:"DIRETORA",
      review:"A CABIR faz parte dos nossos melhores e mais antigos parceiros. A qualidade e agilidade do serviço prestado, somado ao knowhow existente, nos permite afirmar que estamos muito satifisfeito com o relacionamento existente, que a cada ano vem evoluindo. Parabens!"
    },
    { 
      img:"assets/images/agency/testimonial/2.png",
      name:"Rodrigo Silva",
      designation:"CEO",
      review:"Conhecemos a CABIR e logo firmamos uma parceria, estamos muito satisfeitos com a equipe de profissionais bem qualificados que nos transmite segurança e total transparência e o trabalho desenvolvido é primoroso, sem falar no atendimento que é excelente e muito, muito rápido."
    },
    { 
      img:"assets/images/agency/testimonial/1.png",
      name:"Andrey Cavalcante",
      designation:"ADVOGADO",
      review:"O profissionalismo, a competência e a rapidez na entrega do trabalho contratado é o que mais nos surpreendeu nos serviços prestados pela Equipe CABIR."
    },
    { 
      img:"assets/images/agency/testimonial/2.png",
      name:"Jessica Carolina",
      designation:"E-COMMERCE",
      review:"Crescemos em mais de 70% nosso volume de vendas nesses últimos 4 anos de parceria. Começamos com Google ADS, depois Inbound Marketing e SEO e em 2019 reformulamos o novo Site com a CABIR."
    }
  ]
  
  testimonialCarouselOptions= {
    items: 3,
    margin: 65,
    nav: true,
    dots: false,
    navText: ['<img src="/assets/images/agency/testimonial/left.png">', '<img src="/assets/images/agency/testimonial/right.png">'],
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        575: {
            items:2,
            margin: 10
        },
        991: {
            items: 2,
            margin: 30
        },
        1199: {
            items: 3,
            margin: 30
        }
    }
  }


}

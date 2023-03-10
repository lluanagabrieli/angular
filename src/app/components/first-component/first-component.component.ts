import { Component, Input } from '@angular/core'; //adicionando o input para entrada de dados do pai

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  //dados do próprio componente
  name:string = "Luana Gabrieli"
  tittle:string = "Testando a interpolação de dados!"
  hobbies = ['Estudar', 'Ler', 'Assistir vídeos']
  age:number = 23;

  //entrada de dados do componente pai (app.component)
  @Input() colorStars!: {bigStar: string, mediumStar: string, littleStar: string}
}

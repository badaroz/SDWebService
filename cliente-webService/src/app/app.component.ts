import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  tam = 14;

  mudaFonte(tipo)
  {
    if (tipo=="mais")
    {
      if(this.tam<24) this.tam+=1;	
    }else
    {
      if(this.tam>14) this.tam-=1;
    }
    document.querySelector('body').style.fontSize = this.tam+'px';
  }
  resetarFonte(){
    document.querySelector('body').style.fontSize = '14px';
  }
}

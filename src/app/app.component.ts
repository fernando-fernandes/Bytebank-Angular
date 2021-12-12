import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transferencia: any

  transferir(wewewewewew) {
    console.log(wewewewewew)
    this.transferencia = wewewewewew
  }
}

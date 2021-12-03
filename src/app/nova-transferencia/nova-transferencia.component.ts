import {Component, EventEmitter, Output} from '@angular/core'
@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {

  @Output() aoTRansferir = new EventEmitter<any>()

  valor: number
  destino: number

  transferir() {
    console.log('foi')

    const valorEmitir = { valor: this.valor, destino: this.destino}
    this.aoTRansferir.emit(valorEmitir)

    this.limparCampos()
  }


  limparCampos(){
    this.valor = 0
    this.destino = 0
  }

}

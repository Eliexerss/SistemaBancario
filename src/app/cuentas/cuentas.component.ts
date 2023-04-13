import { Component, OnInit, Input } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

  @Input() cuentaModel: any;
  NumeroCuenta = "";
  MontoRetiro = "";
  MontoDeposito = "";

  ngOnInit(): void {

    this.NumeroCuenta = this.cuentaModel.NumeroCuenta;
    this.MontoRetiro = this.cuentaModel.MontoRetiro;
    this.MontoDeposito = this.cuentaModel.MontoDeposito;
  }


  constructor(private service: ApiserviceService) { }

  ConsultarNumeroCuenta() {
    this.service.getCuentaPorNumero(this.NumeroCuenta).subscribe(res => {
      alert(res.saldo);
    });
  }

  RetirarMonto() {
    this.service.putRetiro(this.NumeroCuenta, this.MontoRetiro).subscribe(res => {
      alert("Retirado");
    });
  }

  DepositarMonto() {
    this.service.putDeposito(this.NumeroCuenta, this.MontoDeposito).subscribe(res => {
      alert("Depositado");
    });
  }

}



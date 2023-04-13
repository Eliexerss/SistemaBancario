import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  readonly apiUrl = 'https://localhost:7228/api/Cuentas';

  constructor(private http: HttpClient) { }

  
  getCuentaPorNumero(numeroCuenta: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${numeroCuenta}`);
  }

  putRetiro(numeroCuenta: string, monto: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(`${this.apiUrl}/Retiro/${numeroCuenta}`, monto, httpOptions);
  }

  putDeposito(numeroCuenta: string, monto: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(`${this.apiUrl}/Deposito/${numeroCuenta}`, monto, httpOptions);
  }
}
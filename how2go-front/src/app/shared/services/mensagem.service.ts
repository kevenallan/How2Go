import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private snackBar: MatSnackBar) { }

  snackSucesso(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['success'])
  }
  snackErro(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['error'])
  }
  snackAviso(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['warning'])
  }
  snackInfo(mensagem: string): void {
    this.abrirSnackBar(mensagem, ['info'])
  }

  private abrirSnackBar(mensagem: string, tipoDoSnackBar: Array<string> ): void {
    const snackBarConfig = new MatSnackBarConfig();
    snackBarConfig.politeness = 'assertive';
    snackBarConfig.duration = 5000;
    snackBarConfig.panelClass=tipoDoSnackBar;

    this.snackBar.open(mensagem,"X",snackBarConfig);
  }
}

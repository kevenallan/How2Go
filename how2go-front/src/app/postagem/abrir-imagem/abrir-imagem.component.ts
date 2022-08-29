import { Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-abrir-imagem',
  templateUrl: './abrir-imagem.component.html',
  styleUrls: ['./abrir-imagem.component.scss']
})

export class AbrirImagemComponent implements OnInit{

  constructor (public dialogRef: MatDialogRef<AbrirImagemComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }; 

  ngOnInit(): void {
  }
 
}


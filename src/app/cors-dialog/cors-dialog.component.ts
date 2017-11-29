import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-cors-dialog',
  templateUrl: './cors-dialog.component.html',
  styleUrls: ['./cors-dialog.component.css']
})
export class CorsDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CorsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}

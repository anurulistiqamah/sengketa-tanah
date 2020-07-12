import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DxDataGridComponent } from 'devextreme-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

var CryptoJS = require("crypto-js");

@Component({
  selector: 'app-datas',
  templateUrl: 'datas.component.html'
})
export class DatasComponent {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;

  dataSource: any[];
  uid: String;
  record$: AngularFireList<any[]>;
  format = "Rp ##,##0.##";

  constructor(
    private af: AngularFireDatabase,
    private router: Router
  ) {
    this.uid = JSON.parse(localStorage.getItem('user')).uid;
    this.record$ = this.af.list('/' + this.uid + '/');

    //Pull from firebase
    this.record$.snapshotChanges().subscribe(data => {
      this.dataSource = [];
      data.forEach(val => {
        let objectData = val.payload.val();

        //Decrypt customer's data
        var bytes = CryptoJS.AES.decrypt(objectData, '123');
        var decryptData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        this.dataSource.push(decryptData);
      });
    });
  }
}

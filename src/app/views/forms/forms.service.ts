import { Injectable } from '@angular/core';

export class Customer {
  nama: string;
  telepon: string;
  layanan: string;
  deskripsi: string;
  nomorAkta: number;
  nomorBerkas: string;
  date: Date;
  biaya: number;
  accepted: boolean;
}

let customer : Customer = {
  "nama": "",
  "telepon": "",
  "layanan": "",
  "deskripsi": "",
  "nomorAkta": 0,
  "nomorBerkas": "",
  "date": null,
  "biaya": 0, 
  "accepted": false
};

let services: string[] = [
  'APHT', 'SKMHT', 'Fidusia Lembaga', 'Fidusia Perorangan', 'Hutang Piutang', 'Pendirian CV', 'Jual Beli Lunas', 'PPAT Hibah', 'PPAT Jual Beli Tanah', 'Pendirian PT'
];

@Injectable()
export class FormsService {
  getCustomer() : Customer {
    return customer;
  }

  getServices(){
    return services;
  }
}

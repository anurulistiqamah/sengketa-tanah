import { Component, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { Customer, FormsService } from './forms.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

const sendRequest = function (value) {
    const validEmail = "test@dx-email.com";
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve(value === validEmail);
        }, 1000);
    });
}

@Component({
    selector: 'app-forms',
    templateUrl: 'forms.component.html',
    providers: [FormsService]
})
export class FormsComponent {
    @ViewChild(DxFormComponent, { static: false }) form: DxFormComponent

    //Customer Data
    customer: Customer;
    services: string[];
    format = "Rp##,##0.##";
    maxDate: Date = new Date();
    namePattern: any = /^[^0-9]+$/;
    phonePattern: any = /^\+\s*62\s*\(\s*[02-9]\d{2}\)\s*\d{3}\s*-\s*\d{5}$/;
    phoneRules: any = {
        X: /[02-9]/
    }

    //Button Initial
    buttonOptions: any = {
        text: "Simpan",
        type: "success",
        useSubmitBehavior: true
    }

    //Firebase
    record$: AngularFireList<any[]>;
    records: any[] = [];
    uid: String;

    passwordComparison = () => {
        return this.form.instance.option("formData").Password;
    };
    checkComparison() {
        return true;
    }
    constructor(
        private af: AngularFireDatabase,
        service: FormsService
    ) {
        this.maxDate = new Date();
        this.services = service.getServices();
        this.customer = service.getCustomer();

        this.uid = JSON.parse(localStorage.getItem('user')).uid;
        this.record$ = this.af.list('/' + this.uid + '/');
    }
    asyncValidation(params) {
        return sendRequest(params.value);
    }
    onFormSubmit = function (e) {
        notify({
            message: "You have submitted the form",
            position: {
                my: "center top",
                at: "center top"
            }
        }, "success", 3000);
        this.customer.date = this.customer.date.toLocaleDateString();
        this.addRecord(this.customer);
        this.customer = null;
        e.preventDefault();
    }

    addRecord(value: any): void {
        this.record$.push(value);
    }
}

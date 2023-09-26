import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-compra',
  templateUrl: './form-compra.component.html',
  styleUrls: ['./form-compra.component.css']
})
export class FormCompraComponent implements OnInit{
  buyForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buyForm = this.formBuilder.group({
      username: ['', Validators.required],
      lote: ['', Validators.required],
      lance: ['', Validators.required],
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {
  }
}

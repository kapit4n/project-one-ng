import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigInComponent } from './sig-in.component';
import { RouterTestingModule } from '@angular/router/testing';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../shared/material/material.module';

import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('SigInComponent', () => {
  let component: SigInComponent;
  let fixture: ComponentFixture<SigInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigInComponent ],
      imports: [
        RouterTestingModule,
        BrowserModule,
        MaterialModule,
        HttpClientModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule
      ],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskPage, Task } from '../../shared/models/task'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TasksService } from 'src/app/shared/services/tasks.service';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponentDialog implements OnInit {

  createForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateComponentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
    private formBuilder: FormBuilder,
    private taskSvc: TasksService,
  ) {
  }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      description: ['', { validators: [Validators.required] }],
      status: [''],
      priority: [],
      estimated_time: [0],
      time: [0]
    });
  }

  onSubmit(startNow: boolean) {
    const taskInfo = this.createForm.value;

    if (startNow) {
      taskInfo.status = 'progress';
    }

    this.taskSvc.create(taskInfo).subscribe((res: Task) => {
      if (startNow) {
        const taskLog = { task: res.id, start_date: new Date().toISOString(), status: 'progress' };
        this.taskSvc.createLog(taskLog).subscribe(tl => {
          console.log(tl);
          this.dialogRef.close({ data: res });
        });
      } else {
        this.dialogRef.close({ data: res });
      }
    });
  }

  onStartNow() {
    this.onSubmit(true);
  }

  onStartLater() {
    this.onSubmit(false);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCancel(): void {
    this.createForm.reset();
    this.dialogRef.close();
  }

  get f() {
    return this.createForm.controls;
  }
}

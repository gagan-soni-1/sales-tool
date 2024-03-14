import { Component } from '@angular/core';
import { PROJECTS } from '../projects/projects';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EMPLOYEES } from '../../../shared/components/employees/employees';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.scss'
})
export class AddProjectComponent {
  projectTypes: string[] = ['Short Term', 'Long Term'];
  leads:string[]=['A','B','C','D'];
  managers:string[]=['X','Y','Z'];
  projectForm: FormGroup;
  employees=EMPLOYEES;

  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      projectName: [''],
      projectType: [''],
      leadBy: [''],
      managedBy: [''],
      clientName: [''],
      employees:this.fb.array([this.employee])
    })
  }
  
  addProject(e: any) {
    e.preventDefault();
    PROJECTS.push(this.projectForm.value)
    this.projectForm.reset()
  }

  get employee(){
    return this.fb.group({})
  }



  cancel() {
    this.projectForm.reset()
  }



}

import { Component, VERSION } from '@angular/core';

import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import * as dataJson from '@mock/data.json';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular bird ' + VERSION.major;

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    console.log(dataJson);
    this.myForm = this.formBuilder.group({
      // name: this.formBuilder.control('bird', { initialValueIsDefault: false }),
      // skills: this.formBuilder.array([this.newSkill()]),
      courseType: this.formBuilder.array([this.newCourseType()]),
      approvalHistory: this.formBuilder.array([this.newApprovalHistory()]),
    });
  }

  get skills(): FormArray {
    return this.myForm.get('skills') as FormArray;
  }
  get courseType(): FormArray {
    return this.myForm.get('courseType') as FormArray;
  }

  newApprovalHistory(): FormGroup {
    return this.formBuilder.group({
      createdBy: this.formBuilder.control('5246613723150', {
        initialValueIsDefault: true,
      }),
      createdByName: this.formBuilder.control('นายพิชชาภา ศรีฤกษ์', {
        initialValueIsDefault: true,
      }),
      createdDate: this.formBuilder.control('2022-05-31 12:12:43', {
        initialValueIsDefault: false,
      }),
      roleName: this.formBuilder.control('ผู้ทำรายการสถานศึกษา', {
        initialValueIsDefault: false,
      }),
      submitAction: this.formBuilder.control('SUBMIT', {
        initialValueIsDefault: false,
      }),
      submitActionName: this.formBuilder.control('ยืนยัน', {
        initialValueIsDefault: false,
      }),
      submitDate: this.formBuilder.control('2022-05-31 12:12:43', {
        initialValueIsDefault: false,
      }),
    });
  }

  newCourseType(): FormGroup {
    return this.formBuilder.group({
      academicYear: this.formBuilder.control('my', {
        initialValueIsDefault: true,
      }),
      activeFlag: this.formBuilder.control('my', {
        initialValueIsDefault: true,
      }),
      courseTypeCode: this.formBuilder.control('my', {
        initialValueIsDefault: true,
      }),
      curriculumCode: this.formBuilder.control('my', {
        initialValueIsDefault: true,
      }),
      curriculumName: this.formBuilder.control('my', {
        initialValueIsDefault: true,
      }),
      eduSubLevel: this.formBuilder.control('my', {
        initialValueIsDefault: true,
      }),
      enrolledStudent: this.formBuilder.control('my', {
        initialValueIsDefault: true,
      }),
      facultyCode: this.formBuilder.control('my', {
        initialValueIsDefault: true,
      }),
      facultyName: this.formBuilder.control('my', {
        initialValueIsDefault: true,
      }),
      numberSemester: this.formBuilder.control('my', {
        initialValueIsDefault: true,
      }),
      numberStudent: this.formBuilder.control('my', {
        initialValueIsDefault: true,
      }),
      regularYear: this.formBuilder.control('my', {
        initialValueIsDefault: true,
      }),
      status: this.formBuilder.control('my', { initialValueIsDefault: true }),
      studyYears: this.formBuilder.control('my', {
        initialValueIsDefault: true,
      }),
      tudyYears: this.formBuilder.array([this.newsTudyYears()]),
    });
  }

  newsTudyYears(): FormGroup {
    return this.formBuilder.group({
      classYearCode: this.formBuilder.control('my', {
        initialValueIsDefault: true,
      }),
      classYearName: this.formBuilder.control('55', {
        initialValueIsDefault: false,
      }),
      studySemesters: this.formBuilder.array([this.newStudySemesters()]),
    });
  }

  newStudySemesters(): FormGroup {
    return this.formBuilder.group({
      relatedFee: this.formBuilder.control('1', {
        initialValueIsDefault: true,
      }),
      semester: this.formBuilder.control('1', { initialValueIsDefault: false }),
      tuitionFee: this.formBuilder.control('1', {
        initialValueIsDefault: false,
      }),
    });
  }
  newSkill(): FormGroup {
    return this.formBuilder.group({
      skill: this.formBuilder.control('my', { initialValueIsDefault: true }),
      exp: this.formBuilder.control('55', { initialValueIsDefault: false }),
    });
  }

  addSkills() {
    this.courseType.push(this.newCourseType());
  }

  removeSkill(i: number) {
    this.courseType.removeAt(i);
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

  onReset() {
    this.myForm.reset();
  }
}

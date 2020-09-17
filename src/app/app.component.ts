import { Component, OnInit } from '@angular/core';

import { UserService } from './core/services/user.service';
import { User, UserDeserialized } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ts-deserialise-test';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Async version
    // tslint:disable-next-line: one-variable-per-declaration
    console.group('Async');
    const t1 = new Date();
    this.userService.getUsersJson().subscribe(this.processResult('JSON', t1));
    const t2 = new Date();
    this.userService.getUsersConstructor().subscribe(this.processResult('Constructor', t2));
    const t3 = new Date();
    this.userService.getUsersDeserialize().subscribe(this.processResult('Deserialize', t3));
    console.groupEnd();

    // Sync version
    console.group('Sync');
    const t1a = new Date();
    this.userService.getUsersJson().subscribe((result) => {
      const title = `-- JSON -------------------------------`;
      console.log(title);
      const end = new Date();
      console.log(end.getTime() - t1a.getTime());
      console.log('='.repeat(title.length));

      const t2a = new Date();
      this.userService.getUsersConstructor().subscribe((resultA) => {
        const titleA = `-- Constructor -------------------------------`;
        console.log(titleA);
        const endA = new Date();
        console.log(endA.getTime() - t2a.getTime());
        console.log('='.repeat(titleA.length));

        const t3a = new Date();
        this.userService.getUsersConstructor().subscribe((resultB) => {
          const titleB = `-- Deserialize -------------------------------`;
          console.log(titleB);
          const endB = new Date();
          console.log(endB.getTime() - t3a.getTime());
          console.log('='.repeat(titleB.length));

          console.groupEnd();
        });
      });
    });
  }

  private processResult = (type, timer) => (result) => {
    const title = `-- ${type} -------------------------------`;
    console.log(title);
    // console.log(result);
    result.forEach(x => {
      // console.log(x.tellMeSomething());
      // console.log(x.userInfo.weightLbs);
      // x.tellMeSomething();
      // const weight = x.userInfo.weightLbs;
      // const cars = x.cars.reduce((acc, curr) => {
      //   return `${acc}${curr.getFullName()} has ${curr.carSpecs.powerBHP.toString()}/${curr.carSpecs.powerKw.toString()} // `;
      // }, '');
      // console.log(cars);
    });
    const end = new Date();
    console.log(end.getTime() - timer.getTime());
    console.log('='.repeat(title.length));
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'userName'
})
export class UserNamePipe implements PipeTransform {

  transform(value: User|null|undefined): string {
    if (!value) {
      return 'unknown';
    }

    return  `${value.firstName} ${value.lastName}`;
  }

}

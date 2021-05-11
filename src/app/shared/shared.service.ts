import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
  }

  toggleToolbarShadow(isShadowed: boolean): boolean {
    const toolbarClasses = document.getElementById('toolbar')?.classList;
    if (document.documentElement.scrollTop > 0 && !isShadowed) {
      toolbarClasses?.add('toolbar-shadow');
      return true;
    } else if (document.documentElement.scrollTop <= 0 && isShadowed) {
      toolbarClasses?.remove('toolbar-shadow');
      return false;
    }
    return false;
  }
}

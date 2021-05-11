import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() {
  }

  toggleToolbarShadow(): void {
    const toolbarClasses = document.getElementById('toolbar')?.classList;
    const isShadowed = toolbarClasses?.contains('toolbar-shadow');
    if (document.documentElement.scrollTop > 5 && !isShadowed) {
      toolbarClasses?.add('toolbar-shadow');
    } else if (document.documentElement.scrollTop <= 5 && isShadowed) {
      toolbarClasses?.remove('toolbar-shadow');
    }
  }
}

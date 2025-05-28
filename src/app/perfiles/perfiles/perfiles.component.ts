import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-perfiles',
  imports: [],
  templateUrl: './perfiles.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilesComponent { }

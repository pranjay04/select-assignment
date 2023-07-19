import {
  Component,
  ElementRef,
  OnInit,
  Output,
} from '@angular/core';
import { SelectFormFieldOptionType } from './type/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public labelText: string = 'Dropdown label xyz';
  public selectionValue: string | null = null;

  protected count: number = 400000;
  protected allItems: SelectFormFieldOptionType[] = [];

  ngOnInit(): void {
    this.allItems = new Array(this.count)
      .fill(null)
      .map((_, i) => ({
        index: i,
        label: `Item ${i}`,
        value: `Item ${i}`,
      }));
  }

  onChange (item: SelectFormFieldOptionType) {
    this.selectionValue = item.value;
  }
}

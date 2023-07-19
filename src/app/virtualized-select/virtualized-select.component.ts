import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectFormFieldOptionType } from '../type/types';

@Component({
  selector: 'app-virtualized-select',
  templateUrl: './virtualized-select.component.html',
  styleUrls: ['./virtualized-select.component.scss']
})
export class VirtualizedSelectComponent {
  @Input('labelText')
  public labelText: string = '';
  @Input('placeholder')
  public placeholder: string = 'Please select a value';
  @Input('allItemsList')
  public allItems: SelectFormFieldOptionType[] = [];
  @Output('onValueChange')
  public onValueChange = new EventEmitter<SelectFormFieldOptionType>();

  public isDropdownExpanded = false;

  protected selectedItemIndex: number | null = null;
  itemHeight: number = 40;
  windowHeight: number = 400;
  private scrollTop = 0;
  protected items: any = [];
  protected innerDivStyle = { position: 'relative' , height: `0 px` }

  recalculateParams () {
    this.innerDivStyle.height = `${this.allItems.length * this.itemHeight}px`;
    const startIndex = Math.floor(this.scrollTop / this.itemHeight);
    const endIndex = Math.min(
      this.allItems.length - 1, // don't render past the end of the list
      Math.floor((this.scrollTop + this.windowHeight) / this.itemHeight)
    );

    const itemsNewList = [];

    for (let i = startIndex; i <= endIndex; i++) {
      itemsNewList.push({
        index: i,
        style: {
          position: 'absolute',
          top: `${i * this.itemHeight}px`,
          width: '100%',
        },
        ...this.allItems[i]
      });
    }
    this.items = itemsNewList;
  }

  onScroll = (e: any) => {
    this.scrollTop = e.currentTarget?.scrollTop;
    this.recalculateParams();
  };

  public handleOnOptionClick(ev: Event, index: number, item: SelectFormFieldOptionType) {
    this.selectedItemIndex = index;
    this.onValueChange.emit(item);
    this.toggleDropDown();
  }


  public get fieldValueToDisplay () {
    return this.selectedItemIndex && this.allItems[this.selectedItemIndex].label || this.placeholder;
  }

  public trackItemBy (index: number, item: SelectFormFieldOptionType) {
    return item?.['index'];
  }

  public toggleDropDown (): void {
    this.isDropdownExpanded = !this.isDropdownExpanded;
    if (this.isDropdownExpanded) {
      this.recalculateParams();
    }
  }

}

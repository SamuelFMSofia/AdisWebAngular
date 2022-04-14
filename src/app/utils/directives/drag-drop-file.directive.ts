import { 
  Directive, EventEmitter, Output,
  HostListener, HostBinding, ElementRef 
} from '@angular/core';


@Directive({
  selector: '[appDragDropFile]'
})
export class DragDropFileDirective {

  constructor() { }

  @Output() fileDropped = new EventEmitter<any>();
  @HostBinding('class.active') activateArea;

  @HostListener('dragover', ['$event']) dragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.activateArea = true;
  }

  @HostListener('dragleave', ['$event']) dragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.activateArea = false;
  }

  @HostListener('drop', ['$event']) drop(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.activateArea = false;
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }


}

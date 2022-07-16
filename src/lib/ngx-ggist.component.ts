import { Component, OnInit, AfterViewInit, OnChanges, Input, ElementRef, ViewChild, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ngx-ggist',
  templateUrl: './ngx-ggist.component.html',
  styles: [
  ]
})
export class NgxGgistComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('iframe') iframe: ElementRef | undefined;
  @Input() user: string = 'jocelo';
  @Input() scriptId: string = 'dab6058aab6491b1da49336887d9d935';
  @Input() lines: number[] = [];
  @Input() width: string = '600px';
  @Input() height: string = 'inherit';

  public scriptSrc: string = '';
  public theStyle: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.scriptSrc = `https://gist.github.com/${this.user}/${this.scriptId}.js`;
    this.theStyle = '';
    for (let line of this.lines) {
      this.theStyle += `.highlight tr:nth-of-type(${line}) td { background: yellow; }`;
    }
  }

  ngAfterViewInit() {
    this.reloadIframe();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.lines) {
      this.updateLines(changes.lines.currentValue);
    }
  }

  public updateLines(newLines: number[] = []) {
    this.theStyle = '';
    for (let line of this.lines) {
      this.theStyle += `.highlight tr:nth-of-type(${line}) td { background: yellow; }`;
    }
    this.reloadIframe();
  }

  private reloadIframe() {
    const document = this.iframe?.nativeElement.contentDocument;
    const content = `
      <html>
        <head>
          <base target="_parent">
          <style>${this.theStyle}</style>
        </head>
        <body><script type="text/javascript" src="${this.scriptSrc}"></script></body>
      </html>`;
    document?.open();
    document?.write(content);
    document?.close();
  }

}

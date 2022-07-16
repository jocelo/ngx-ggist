Wrapper to add a GitHub Gist on angular.

<p align="center">
  <img height="200px" width="200px" style="text-align: center" src="https://cdn.rawgit.com/MurhafSousli/ngx-highlightjs/b8b00ec3/src/assets/logo.svg">
  <h1 align="center">Angular Highlight.js</h1>
</p>
___

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Author](#author)

## Installation

Install with **NPM**

```bash
npm i ngx-ggist
```

## Usage

### Import `NgxGgistModule` in your app

```typescript
import { NgxGgistModule } from 'ngx-ggist';

@NgModule({
  imports: [
    NgxGgistModule
  ],
  ...
})
export class AppModule { }
```
### Use Github Gist directive

Place the component anywhere in your template to display the gist.

```html
<ngx-ggist></ngx-ggist>
```

## Author

Alfredo Alonso

- [blog](https://jocelo.dev/latest)
- [github/jocelo](https://github.com/jocelo)
- [twitter/jocelodev](https://twitter.com/jocelodev)

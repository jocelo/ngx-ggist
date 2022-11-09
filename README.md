<p align="center">
  <img height="200px" width="200px" style="text-align: center" src="https://cdn.rawgit.com/MurhafSousli/ngx-highlightjs/b8b00ec3/src/assets/logo.svg">
  <h1 align="center">GitHub gist on Angular 13</h1>
</p>

[![Demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://stackblitz.com/)
[![Stackblitz](https://img.shields.io/badge/stackblitz-online-orange.svg)](https://angular-ivy-axwpy9.stackblitz.io)
[![License](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](/LICENSE)

Add a GitHub gist to your angular 13 project in an instant.

---

## Table of Contents
- [Live Demo](https://angular-ivy-axwpy9.stackblitz.io)
- [Installation](#installation)
- [Usage](#usage)
- [Author](#author)

## Installation
Install with **NPM**

```bash
npm install ngx-ggist
```

If you get dependency errors, as a temporary solution you can force the installation:

```bash
npm install -f ngx-ggist
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

### Custom Properties

When you add the component to your project (as shown above), you will get the *Hello world* version of it. That's cool but, to show your own gists, you need to provide a couple of options to the component.

You will need just two properties: your `user name` and the `script id`: you can get both from the url of the GitHub gist, or when you copy the script for embedding the gist.

Optionally, you could also provide `width`, `height`, and a cool feature to `highlight` lines. 

There are more configurations available, optional.

| Name | Type |  Description  |
|-|-|-|
| **user** | `string` | Your GitHub user
| **scriptId** | `string` | The `script id` of your gist, usually the last parameter in the URL. <br /> *(i.e. 4171e2f2b5ea64bdf974d6d2e5683cce)* |
| **width** | `string` | A string to define the width of the gist container; default: `600px` <br /> *(i.e. '100%')* |
| **height** | `string` | A string to define the height of the gist container; default: `inherit` <br />*(i.e. '400px')* |
| **lines** | `array` of `number` | An array of numbers. Each number represents a line in your gist file and that line will be highlighted; none are highlighted by default.<br />*(i.e. [1, 2, 3])*|

### More examples
Example below, will display the gist `417...cce`, on a `400px` height container, highlighting lines `1, 2, 3`.

```html
<ngx-ggist
  user="jocelo"
  scriptId="4171e2f2b5ea64bdf974d6d2e5683cce"
  height="400px"
  [lines]="[1,2,3]" >
</ngx-ggist>
```

## Author

Alfredo Alonso

- [blog](https://jocelo.dev/latest)
- [github/jocelo](https://github.com/jocelo)
- [twitter/jocelodev](https://twitter.com/jocelodev)

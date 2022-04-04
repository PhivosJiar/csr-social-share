<h1 align="center">csr-social-share</h1>

## The Why?
csr-social-share makes dymanic set link preview easier in client side render application,this package support Typescript and Javascript.

## Usage
Using npm:

```shell
$ npm i csr-social-share
```

In Javascript:
```javascript
import { canUseShare, share, generateUrl } from "csr-social-share";

// generateUrl using,
const previewInfo = {
  // {string} set link preview title
  title: 'social share demo title', 
  // {string} set link preview description.
  description: 'csr-social-share makes dymanic set link preview easier in client side render application.',
  // {string} set link preview image.
  imageUrl: 'https://wpjian.com/wp-content/uploads/2019/05/the-seo-guide-to-angular-760x400.png',
  // {string} the purpose of the user clicking the link guide.
  targetUrl: 'https://github.com/PhivosJiar/csr-social-share' 
};

// An object containing data to share.
// All properties are optional but at least one known data property must be specified.
const shareDataInfo = {
  // {string} representing a URL to be shared.
  url: '', 
  // {string} representing text to be shared.
  text: 'hey I find a nice npm package,and share for you.',
  // {string} representing a title to be shared. May be ignored by the target.
  title: 'csr-social-share package',
  // {File[]} An array of File objects representing files to be shared.
  files: [] 
};

// You can dymanic set link preview info.
async generateShareUrl(){
  this.shareDataInfo.url = await generateUrl(this.previewInfo);
}

// This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.
socialShare(){
  if(!canUseShare(this.shareDataInfo)){
    rerutn;
  }
  
  share(this.shareDataInfo);
}
```

In template:
``` html 
  <!-- generateUrl can be used independently -->
  <button (click)="generateUrl()">generateUrl</button>

  <!-- If you want to share, you can share the obtained URL -->
  <button (click)="share()">share</button>
```

## Result

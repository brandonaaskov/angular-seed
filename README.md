# angular-seed

## Getting Up and Running

You'll need the following node tools installed globally (e.g. `npm install mypackage -g`)
- nvm
- bower
- gulp
- karma-cli
- protractor

```
nvm install
npm install
bower install
```

Then just `gulp` to get a build and a local server running on port 3000. 
_(If you need to change the port, you can do that in `gulpfile.js`.)_

## Adding Dependencies
1. Do your `bower install awesomejspackage --save` bit
2. If it's an angular module, make sure to add the module to `app.js` so that it gets injected
3. Manually add the dependency to index.html. _This is done to promote keeping the app slim and not leaving behind old/dead dependencies. At the end of dev, they'll get built into a lib file._

## Angular Gotchas
1. Your directive name will be camel-cased, but in the markup it will be hyphenated. (e.g. `navHeader` in the js would equate to `nav-header` in HTML)

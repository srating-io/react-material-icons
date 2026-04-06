# react-material-icons

## Using this lib
```sh
npm install @esmalley/react-material-icons
```

```jsx
import Abc from '@esmalley/react-material-icons/Abc';

return (
    <>
    <Abc />
    </>
);
```

### Pass standard dom props
```jsx
import Abc from '@esmalley/react-material-icons/Abc';

return (
    <>
    <Abc style = {{ fontSize: 30, color: 'red', margin: 5 }} onClick = {() => console.log('hi')} />
    </>
)
```


## Working on this lib

```sh
npm run build
```

This will run `bash build.sh`, do a bunch of clean up then `node build.mjs`

#### build.sh
This file will copy the svg icons from `@material-design-icons/svg`. Create the react icon tsx wrapper, then create them all as react components, rename, etc.

### Publish to npm
```sh
git tag v3.2.1
git push origin v3.2.1
```

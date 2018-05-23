# node hot reload

Node hot reload for imported modules.

It will not affect production builds (disabled when `process.env.NODE_ENV === 'production'`)

From [an idea of Kevin Simpler](https://codeburst.io/dont-use-nodemon-there-are-better-ways-fc016b50b45e) <3

## Install
```
npm i https://github.com/lsimone/node-hot-reload.git
```


## Usage

### with transpilers (i.e: node dist/index.js) :
While babel/webpack/typescript... are compiling in dist folder,
NHR will watch that folder and reload
the modules when they are changed (and traspiled).

```
import watch from 'node-hot-reload'
watch('dist')
```

### without transpilers (i.e: node src/index.js) ::
If you are not using a transpiler and you are developing in src, just use

```
import watch from 'node-hot-reload'
watch('src')
```

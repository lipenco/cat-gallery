# Usage Examples


## Source and Destination

```js
copy: {
  main: {
    files: [
      {src: ['path/*'], dest: 'dest/', filter: 'isFile'}, // includes files in path
      {src: ['path/**'], dest: 'dest/'}, // includes files in path and its subdirs
      {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'}, // makes all src relative to cwd
      {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'} // flattens results to a single level
    ]
  }
}
```

## Filtering

```js
  {
    files: [
      {
        src: ['test/fixtures/test.js']
          .filter(function(file) { 
            return true; 
          }), 
        dest: 'tmp/single.js'}
    ]}
```

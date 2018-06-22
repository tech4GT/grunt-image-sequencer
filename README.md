# grunt-image-sequencer

> Grunt Integration for Image Sequencer Library. See https://github.com/image-sequencer

## Getting Started
This plugin requires Grunt `~0.4.5`
You should also have image-sequencer installed
```shell
npm install -g image-sequencer
```

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-image-sequencer --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-image-sequencer');
```

## The "image_sequencer" task

### Overview
In your project's Gruntfile, add a section named `image_sequencer` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  image_sequencer: {
    options: {
      steps: /*A string containing space separated steps*/,
      config: /*Inputs for steps(optional)*/
    },
    files: [
      {
        src: [/*Array of source files you wish to include*/],
        dest: /*Destination path for the exported images*/
      }
    ]
  },
});
```

### Options

#### options.steps
Type: `String`
Default value: `""`

A string which defines the sequence that should be applied to images
Example:
```js
"invert brightness ndvi"
```
###options.config
Type: 'Object'
Default value: `{}`

An object which contains the inputs for steps, if some are missing they can be entered at runtime

### Usage Examples

```js
grunt.initConfig({
  image_sequencer: {
        options: {
          steps: 'invert'
        },
        files: [
          {dest: 'dist',src: ['src/*.png','src/*.jpg']}
        ]
    }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

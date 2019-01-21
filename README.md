# Javascript Starter Kit

This README serves as a guide for what you can expect from the Javascript Starter Kit.

## Sharing your work

Share your work with localtunnel by exposing localhost to the Internet.  Two terminals 
need to be used simultaneously in order for this to work.

Run `npm start` in one terminal and `npm run share` in the other.  The second command
will give you a dynamically generated URL you can use to share with other developers
who want to see your work.

## Automated tasks

Grunt or Gulp are not being used for task automation.  Instead, NPM Scripts 
is being used.  NPM Scripts allow us to use npm packages directly without another
abstraction layer.  Thus, making it easier to debug errors in a single source
rather than trying to discover which layer the error occurred in.
If something complex needs to be done, it can be written in a
separate file and ran with node in an NPM Script.  

Native NPM Script functionality can be read about [here](https://docs.npmjs.com/misc/scripts).

To run scripts in parallel, use `npm-run-all`.

```$xslt
"script:name": "npm-run-all --parallel [script1] [script2]"
```

## Babel

[Read about how to use Babel 7](https://babeljs.io/docs/en/usage).

## Rollup

[Read more about the Rollup bundler](https://rollupjs.org/guide/en#overview).

## ESLint

[Read about what each rule does](https://eslint.org/docs/rules/).  Set ESLint up
however you'd like by editing the ".eslintrc.json" file.  

* 0 ignores the rule
* 1 sets rule warnings
* 2 sets rule errors

## Testing

[Read more about Ava](https://github.com/avajs/ava) and how you can write unit
tests with it.

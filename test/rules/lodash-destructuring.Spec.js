import eslint from 'eslint';
import 'babel-eslint';
import rule from '../../src/rules/lodash-destructuring';

const ruleTester = new eslint.RuleTester();

ruleTester.run('lodash-destructuring', rule, {
  valid: [
    {
      code: 'import { map } from "lodash"',
      parser: 'babel-eslint'
    },
    {
      code: 'import whatever from "whatever"',
      parser: 'babel-eslint'
    },
    {
      code: 'import { whatever } from "whatever"',
      parser: 'babel-eslint'
    },
    {
      code: 'import { default as whtvr } from "whatever"',
      parser: 'babel-eslint'
    },

    {
      code: 'import find from "lodash/collection/find"',
      parser: 'babel-eslint',

    }
  ],
  invalid: [
    {
      code: 'import lodash from "lodash"',
      parser: 'babel-eslint',
      errors: [{
        message: 'Importing the entire lodash library is not permitted, please import the specific functions you need'
      }]
    },
    {
      code: 'import * as lodash from "lodash"',
      parser: 'babel-eslint',
      errors: [{
        message: 'Importing the entire lodash library is not permitted, please import the specific functions you need'
      }]

    },
    {
      code: 'import _, { find } from "lodash"',
      parser: 'babel-eslint',
      errors: [{
        message: 'Importing the entire lodash library is not permitted, please import the specific functions you need'
      }]
    },
    {
      code: 'import lodash from "lodash"',
      parser: 'babel-eslint',
      errors: [{
        message: 'Importing the entire lodash library is not permitted, please import the specific functions you need'
      }]
    },
    {
      code: 'import { default as other } from "lodash"',
      parser: 'babel-eslint',
      errors: [{
        message: 'Importing the entire lodash library is not permitted, please import the specific functions you need'
      }]
    }
  ]
});

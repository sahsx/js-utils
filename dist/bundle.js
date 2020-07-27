(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@babel/runtime-corejs3/core-js-stable/promise')) :
    typeof define === 'function' && define.amd ? define(['@babel/runtime-corejs3/core-js-stable/promise'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global._Promise));
}(this, (function (_Promise) { 'use strict';

    _Promise = _Promise && Object.prototype.hasOwnProperty.call(_Promise, 'default') ? _Promise['default'] : _Promise;

    var a = 1;
    console.log(a);

    var Animal =
    /** @class */
    function () {
      function Animal() {
        this.name = 'animal';
      }

      return Animal;
    }();

    var am = new Animal();

    (function () {
      console.log('this is lambda fuction,and animal name:' + am.name);
    })();

    _Promise.allSettled([]).then(function () {
      console.log('promise allSettled');
    });

})));

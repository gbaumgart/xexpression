/** @module xexpression/Expression */
define([
    'xdojo/declare',
    'xide/types',
    //try parsers
    'xdojo/has!filtrex?./filtrex'   // filtrex (bison based)
], function (declare,types) {

    /**
     * Hub to different parsers, offering a simple but
     * consistent API.
     *
     * @TODO
     *
     * 1. make grammar as option
     * 1.1 provide access to grammar templates
     *
     * 2. As for resulting lexers: cache/load/manage
     *
     * 3. auto choose algorithm if possible
     *
     * 4. make different parsers chainable
     *
     * 5. switch to platform implementation if possible (bison/flex in C over node.js?)
     *
     * @class module:xexpressionExpression
     */
    var _Expression = declare('xexpression/Expression', null , {

        /**
         * Parse runs the specified parser
         * @param type {xide/types/EXPRESSION_PARSER}
         * @param expression {string}
         * @param context {Object|null}
         * @param options {Object}
         * @param options.variables {map} a map of key-value to be used as 'constants' when parsing; eg: PI,..
         * @param options.functions {map} a map of key-function to be used to resolve functions when parsing, eg: max()
         * @returns {string}
         */
        parse:function(type,expression,context,options){
            var _parse = types.EXPRESSION_PARSER[type];
            if(_parse){
                return _parse(expression,context,options);
            }
            return expression;
        },
        /**
         * Cache access, parser side implementation
         * @param expression {string} the key in the cache
         */
        getParser:function(expression){},
        /**
         * Full access to the cache, parser side implementation
         * @returns {Object}
         */
        getCache:function(){}
    });

    return _Expression;
});
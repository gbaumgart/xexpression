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
     *
     * @example

     //Using the filtrex parser (see comments at bottom as well):

     var _parser = new Expression();
     var str = mv{{Volume+6}}
     str = _parser.parse(types.EXPRESSION_PARSER.FILTREX,
         str, this,
         {
             //key-value map
             variables: scope.getVariablesAsObject(),
             //optional, needed the expression is part of a string containing non-parsable stuff
             delimiters: {
                 begin: '{{',
                 end: '}}'
             }
         }
     );

     *
     * @class module:xexpression/Expression
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
         * @param options.delimiters {object} set of delimiters defined by begin and end
         * @returns {string}
         */
        parse:function(type,expression,context,options){
            var _parse = type;
            if(_parse){
                return _parse(expression,context,options);
            }else{
                console.error('parser does not exists ' + type);
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
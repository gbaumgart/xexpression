/** @module xexpression/Expression */
define([
    'xdojo/declare',
    'dojo/_base/lang',
    'xide/types',
    'xide/utils',
    'dojo/has',

    //try parsers

    'xdojo/has!filtrex?./filtrex'   // filtrex (bison based)

], function (declare,lang,types,utils,has,filtrex) {

    /**
     * Hub to different parsers/lexers, offering a simple but
     * consistent API to algorithms
     * Please read {@link module:xide/types}
     *
     * @class module:xide/bean/_Expression
     */
    var _Expression = declare('xexpression/Expression', null , {

        parse:function(type,expression,context,options){

            var _parse = types.EXPRESSION_PARSER[type];
            if(_parse){
                return _parse(expression,context,options);
            }

            return expression;

        }

    });


    /*
    var _parse = types.EXPRESSION_PARSER.FILTREX;
    var _result = _parse(2,2,2);

    console.log('filtrex : ' + has('filtrex'),_result);
    console.dir(types.EXPRESSION_PARSER);

    */




    return _Expression;

});
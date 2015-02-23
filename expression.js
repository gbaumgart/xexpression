define(['dojo/_base/declare','./filtrex'], function (declare,filtrex) {



    var _Expression = declare('xexpression/Expression',[],{


    });


    _Expression.filtrex=filtrex;

    console.log('filtrx',filtrex);


    return _Expression;
});
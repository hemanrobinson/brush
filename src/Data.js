import * as d3 from 'd3';

/**
 * Data sets.
 *
 * @param  {Object}  props  properties
 * @return component
 */
const Data = ( props ) => {
};

/**
 * True iff data row is selected.
 *
 * @type {boolean[]}
 */
Data.isSelected = [];

/**
 * Deselects all rows.
 */
Data.deselectAll = () => {
    Data.isSelected.fill( false );
};

/**
 * Returns column names.
 *
 * @return {string[]}  column names
 */
Data.getColumnNames = () => {
    return [ "isSelected", "A", "B", "A + B", "A * B" ];
};

/**
 * Returns domain of specified column.
 *
 * @param  {number}    nData  number of data values
 * @param  {number}    index  column index
 * @return {number[]}  domain of specified column
 */
Data.getDomain = ( nData, i ) => {
//    return [ d3.min( Data.getValues( nData ), d => d[ index ]), d3.max( Data.getValues( nData ), d => d[ index ])];
    return [ -2, 2 ];   // consistently spreads the data
};

/**
 * Data values.
 *
 * @type {number[]}
 */
Data.values = [];

/**
 * Returns data values.
 *
 * @param  {number}  nData  number of data values
 * @return {Array[]}  data values by row
 */
Data.getValues = ( nData ) => {
    if( Data.values.length !== nData ) {
        let f = d3.randomNormal( 0, 0.5 );
        Data.values = [];
        for( let i = 0; ( i < nData ); i++ ) {
            let x = f(), y = f();
            Data.values[ i ] = [ false, x, y, x + y, x * y ];
        }
    }
    return Data.values;
};

export default Data;

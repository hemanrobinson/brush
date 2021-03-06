import Data from './Data';

/**
 * Axis for scatter plot matrix in an SVG element.
 *
 * @param  {Object}  props  properties
 * @return component
 */
const Axis = ( props ) => {
};

/**
 * Draws the axis.
 *
 * @param  {number}  x        X coordinate, in pixels
 * @param  {number}  y        Y coordinate, in pixels
 * @param  {number}  width    width, in pixels
 * @param  {number}  height   height, in pixels
 * @param  {Element} canvas   CANVAS element
 * @param  {number}  nData    number of data values
 * @param  {number}  index    column index
 */
Axis.draw = ( x, y, width, height, canvas, nData, index ) => {
    
    // Initialization.
    let g = canvas.getContext( "2d" ),
        columnNames = Data.getColumnNames();
        
    // Draw the column label.
    g.fillStyle = "#000000";
    g.fontSize = "14px";
    let s = columnNames[ index ];
    g.fillText( s, x + width / 2 - g.measureText( s ).width / 2, y + height - height / 2 + 4 );
    
    // Draw the minimum and maximum.
    g.fontSize = "10px";
    s = ( "" + Data.getDomain( nData, index )[ 0 ]).slice( 0, 4 );
    g.fillText( s, x + 4, y + height - 4 );
    s = ( "" + Data.getDomain( nData, index )[ 1 ]).slice( 0, 3 );
    g.fillText( s, x + width - 3 - g.measureText( s ).width, y + 12 );
};

export default Axis;

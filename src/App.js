import React, { useState } from 'react';
import { Slider } from '@material-ui/core';
import Matrix from './Matrix';
import './App.css';

/**
 * Scatter plot matrix.
 */
const App = () => {
    
    // Create state.
    const nDataDefault = 12;
    const [ nData, setNData ] = useState( App.getPower( nDataDefault ));
    const [ opacity, setOpacity ] = useState( 0.4 );
    
    // Return the component.
    return (
        <div className="Column">
            <div className="GridPlots">
                <Matrix nData={nData} opacity={opacity} />
            </div>
            <div className="GridControls">
                <label>Points:</label>
                <Slider defaultValue={ nDataDefault } step={ 1 } min={ 6 } max={ 18 }
                    valueLabelDisplay="auto" marks valueLabelFormat={( value ) => App.getPower( value ).toExponential()}
                    onChangeCommitted={( event, value ) => { Matrix.clear(); setNData( App.getPower( value )); }} />
                <label>Opacity:</label>
                <Slider defaultValue={ 0.5 } step={ 0.01 } min={ 0 } max={ 1 }
                    valueLabelDisplay="auto"
                    onChangeCommitted={( event, value ) => { Matrix.clear(); setOpacity( value ); }} />
            </div>
            <div className="Description">
                <p>
                Brushing is a basic technique of exploratory data analysis, developed in the 1970s (<a href="https://www.researchgate.net/publication/245345268_An_interactive_multidimensional_data_display_and_analysis_system">Fishkeller, Friedman, and Tukey</a>) and 1980s (<a href="https://www.jstor.org/stable/1269768?seq=1">Becker and Cleveland</a>; <a href="https://www.jstor.org/stable/2289448?seq=1">Stuetzle</a>).
                </p>
                <p>
                Back then, analysts were happy to brush a few hundred points.  On modern hardware, with a fast browser, we can brush a million.
                </p>
            </div>
            <a href="https://github.com/hemanrobinson/brush/">Code Shared on GitHub</a>
        </div>
    );
}

/**
 * Returns "nice" power of ten:  rounded to 1, 2, 5, 10, 20, 50, etc.
 *
 * @param  {number}  exp  exponent
 * @return {number}  "nice" power of ten:  rounded to 1, 2, 5, 10, 20, 50, etc.
 */
App.getPower = ( exp ) => {
    let m = (( exp % 3 ) === 0 ) ? 1 : (( exp % 3 ) === 1 ) ? 2 : 5;
    return m * ( 10 ** Math.floor( exp / 3 ));
}

export default App;

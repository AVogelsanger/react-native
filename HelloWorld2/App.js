import cx from 'classnames';
import { Component } from 'react';

export default class Counter extends Component {
    
    render() {

      let count = 0;

        return (
            <>
                <div>
                    <h2>count</h2>
                </div>
                
                <Button class ={counter-button}
                      onPress={ _ => {
                        count++;
                      }}
                      title="Click" />
                
                <style>{`
                    .counter-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                `}</style>
            </>
        );
    }
}
import React from 'react';
import GNIViz from '../GNIViz/GNIViz';

class GNI extends React.Component {
    cleanData = () => {
        if (this.props.data.length) {
            let xValues = []
            this.props.data.forEach(row => xValues.push(row.date))
            xValues.reverse()

            let yValues = []
            this.props.data.forEach(row => yValues.push(row.value/1000))
            yValues.reverse()

            return (
                <div>
                    <p style = {
                        {
                            color: "rgb(219, 219, 219)",
                            textAlign: "left",
                            paddingLeft: 20,
                            fontWeight: "bold",
                            fontSize: 14
                        }
                    }>GNI Per Capita ($)</p>
                    <GNIViz labels={xValues} data={yValues} />
                </div>
            )
        } else {
            return (<p>Please select a country from the list</p>)
        }
    }

    render() {
        return (
            <div className="chart">
                {this.cleanData()}
            </div>
        );
    }
}

export default GNI;
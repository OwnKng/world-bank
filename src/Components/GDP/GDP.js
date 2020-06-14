import React from 'react';
import GDPViz from '../GDPViz/GDPViz';

class GDP extends React.Component {
    cleanData = () => {
        if (this.props.data.length) {
            let xValues = []
            this.props.data.forEach(row => xValues.push(row.date))
            xValues.reverse()

            let yValues = []
            this.props.data.forEach(row => yValues.push(Math.round(row.value * 100) / 100))
            yValues.reverse()

            let fill = []
            this.props.data.forEach(row => {
                if (row.value > 0) {
                    fill.push("#74B4FC")
                } else {
                    fill.push("#FC2424")
                }
            })
            fill.reverse()

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
                    }>Annual GDP Growth Rate (%)</p>
                    <GDPViz labels={xValues} data={yValues} fill={fill} />
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

export default GDP;
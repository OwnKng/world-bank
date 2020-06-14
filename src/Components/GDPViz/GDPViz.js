import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

const GDPViz = (props) => {
    return (
        <Bar
            data={{
                labels: props.labels,
                datasets: [
                    {
                        data: props.data,
                        backgroundColor: props.fill,
                        hoverBorderWidth: 1, 
                        hoverBorderColor: 'rgb(219, 219, 219)'
                    }
                ]
            }}
            options={
                {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            ticks: {
                                autoSkip: true,
                                maxRotation: 0,
                                minRotation: 0,
                                fontColor: 'rgb(219, 219, 219)',
                                maxTicksLimit: 8
                            },
                            gridLines: {
                                drawOnChartArea: false,
                                color: "rgb(219, 219, 219)"
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                callback: function(tick) {
                                    return tick.toString() + '%'
                                },
                                fontColor: 'rgb(219, 219, 219)'
                            },
                            gridLines: {
                                z: 2,
                                color: "transparent",
                                zeroLineColor: "rgb(219, 219, 219)"
                            },

                        }]
                    }
                }
            }
        />
    )
}

export default GDPViz;
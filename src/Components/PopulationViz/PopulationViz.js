import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

const PopulationViz = (props) => {
    return (
        <Line
            data={{
                labels: props.labels,
                datasets: [
                    {
                        data: props.data,
                        hoverBorderWidth: 1, 
                        hoverBorderColor: 'rgb(219, 219, 219)',
                        backgroundColor: 'rgb(116,180,252, 0.2)',
                        borderColor: 'rgb(116,180,252)'
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
                                fontColor: 'rgb(219, 219, 219)'
                            },
                            gridLines: {
                                color: 'rgb(219, 219, 219)',
                                drawOnChartArea: false,
                                zeroLineColor: "black"
                            }
                        }]
                    }
                }
            }
        />
    )
}

export default PopulationViz;
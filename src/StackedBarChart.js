import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import * as d3 from 'd3'
import './App.css'
import Chart from 'chart.js'

function StackedBarChart() {
    const canvasRef = useRef()

    useEffect(() => {
        axios({
            method: 'GET',
            url:
                'https://nmsvtx50zd.execute-api.ap-northeast-2.amazonaws.com/recruit/order',
            params: {
                start_date_id: '2020-01-01',
                end_date_id: '2020-12-31',
                freq: 'monthly',
                dimensions: 'num_of_user_purchases',
            },
        }).then((d) => {
            let backgroundColor = [
                '#575fcf',
                '#00d8d6',
                '#05c46b',
                '#ff5e57',
                '#34e7e4',
                '#f5cd79',
                '#778beb',
                '#cf6a87',
                '#e77f67',
                '#f3a683',
                '#2d98da',
                '#20bf6b',
            ]

            let data = d.data.data.measures[0].map((data, i) => {
                // console.log('***data***: ', array)
                return {
                    label: d.data.data.dimensions[i],
                    data: data,
                    backgroundColor: backgroundColor[i],
                    borderColor: backgroundColor[i],
                }
            })

            var shorten = (d) => {
                if (d === null) {
                    return 0
                } else {
                    return d
                        .toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                }
            }

            let ctx = canvasRef.current.getContext('2d')
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: d.data.index,
                    datasets: data,
                },
                options: {
                    responsive: true,
                    scales: {
                        xAxes: [
                            {
                                stacked: true,
                                gridLines: { display: true },
                            },
                        ],
                        yAxes: [
                            {
                                stacked: true,
                                ticks: {
                                    // Abbreviate the millions
                                    callback: function (value, index, values) {
                                        return value / 1000000000 + 'B'
                                    },
                                },
                            },
                        ],
                    },
                    legend: { display: true },
                    title: {
                        display: true,
                        text: 'Sales',
                    },
                    tooltips: {
                        callbacks: {
                            label: function (tooltipItem, data) {
                                console.log('ddddd: ', data)
                                console.log('tooltipItem', tooltipItem)
                                console.log(
                                    '****',
                                    data['labels'][tooltipItem['index']] +
                                        ': ' +
                                        data['datasets'][0]['data'][
                                            tooltipItem['index']
                                        ]
                                )

                                let temp = []

                                data.datasets.map((d) => {
                                    return temp.push(d.label)
                                })

                                console.log(temp)

                                return (
                                    temp[tooltipItem.datasetIndex] +
                                    ': ' +
                                    shorten(tooltipItem.value)
                                )
                            },
                        },
                    },
                },
            })
        })
    }, [])

    return (
        <div className="App">
            <h1>StackedBarChart</h1>
            <canvas
                ref={canvasRef}
                id="myChart"
                width="400"
                height="600"
            ></canvas>
        </div>
    )
}

export default StackedBarChart

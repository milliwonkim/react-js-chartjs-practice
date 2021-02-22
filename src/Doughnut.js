import React, { useState, useEffect, useRef } from 'react'
import Chart from 'chart.js'
// import Label from 'chartjs-plugin-datalabels'

export default function Doughnut() {
    const canvasRef = useRef()

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d')

        var num = Math.random()
        var data = {
            labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
            datasets: [
                {
                    data: [
                        Math.random().toFixed(2),
                        Math.random().toFixed(2),
                        Math.random().toFixed(2),
                        Math.random().toFixed(2),
                        Math.random().toFixed(2),
                        Math.random().toFixed(2),
                        Math.random().toFixed(2),
                        Math.random().toFixed(2),
                        Math.random().toFixed(2),
                        Math.random().toFixed(2),
                    ],
                    backgroundColor: [
                        '#f79546',
                        '#9bba57',
                        '#4f81bb',
                        '#5f497a',
                        '#a94069',
                        '#ff5f34',
                        '#41774e',
                        '#003663',
                        '#49acc5',
                        '#c0504e',
                    ],
                    borderWidth: 2,
                    label: 'Dataset 1',
                },
            ],
        }

        new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                responsive: true,
                legend: false,
                maintainAspectRatio: false,
                animation: false,
                pieceLabel: {
                    fontColor: 'white',
                    mode: 'label',
                    position: 'inside',
                    fontSize: 15,
                    fontStyle: 'bold',
                },
            },
        })
    }, [])

    return (
        <div>
            <h1>Doughnut Chart</h1>
            <canvas ref={canvasRef} />
        </div>
    )
}

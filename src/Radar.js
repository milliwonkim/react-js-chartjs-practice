import React, { useState, useEffect, useRef } from 'react'
import Chart from 'chart.js'

export default function Radar() {
    const canvasRef = useRef()

    useEffect(() => {
        let ctx = canvasRef.current.getContext('2d')

        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: [
                    'English',
                    'Maths',
                    'Physics',
                    'Chemistry',
                    'Biology',
                    'History',
                ],
                datasets: [
                    {
                        label: 'Student A',
                        backgroundColor: 'rgba(200,0,0,0.2)',
                        data: [65, 75, 70, 80, 60, 80],
                        pointRadius: 6,
                        pointBorderColor: 'transparent',
                        pointHoverRadius: 10,
                    },
                    {
                        label: 'Student B',
                        backgroundColor: 'rgba(0,0,200,0.2)',
                        data: [54, 65, 60, 70, 70, 75],
                        pointRadius: 8,
                        pointBorderColor: 'transparent',
                        pointHoverRadius: 10,
                    },
                ],
            },
            options: {
                scale: {
                    gridLines: { color: 'grey' },
                    angleLines: { display: true },
                    ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 100,
                        stepSize: 20,
                        display: true,
                    },
                    pointLabels: {
                        display: true,
                        fontSize: 20,
                    },
                },
                legend: {
                    position: 'top',
                },
            },
        })
    }, [])

    return (
        <div>
            <h1>Radar</h1>
            <canvas ref={canvasRef}></canvas>
        </div>
    )
}

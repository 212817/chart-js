export const options = {
    indexAxis: 'x',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
        },
    },
};

export const data1 = {
    labels: [
        'January',
        'February',
        'March',
        'April'
    ],
    datasets: [
        {
            label: 'Dataset',
            data: [7, 2, 5, 4],
            borderColor: 'rgb(211, 211, 211)',
            backgroundColor: [
                'rgb(255, 99, 132, 0.2)',
                'rgb(54, 162, 235, 0.2)',
                'rgb(255, 205, 86, 0.2)'
            ],
        }
    ],
};

export const data2 = {
    labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
    ],
    datasets: [
        {
            label: 'Dataset',
            data: [7, 2, 5, 4, 3, 6, 8],
            borderColor: 'rgb(211, 211, 211)',
            backgroundColor: [
                'rgb(255, 99, 132, 0.2)',
                'rgb(54, 162, 235, 0.2)',
                'rgb(255, 205, 86, 0.2)'
            ],
        }
    ],
};

export const typeChart = [
    { id: 'line', title: 'Line chart' },
    { id: 'bar', title: 'Bar chart' },
    { id: 'radar', title: 'Radar chart' },
    { id: 'polarArea', title: 'PolarArea chart' },
]
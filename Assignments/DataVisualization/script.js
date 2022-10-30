const donut = document.getElementById("donut");
const hbar = document.getElementById("hBar");

let donutChart = new Chart(donut, {
    type: 'doughnut',
    data: {
        labels: [
            'Brooklyn Studio Secondary School',
            'Brooklyn Technical High School',
            'Edward R. Murrow High School',
            'Forest Hills High School',
            'Fort Hamilton High School',
            'Franklin Delano Roosevelt High School',
            'James Madison High School',
            'John Dewey High School',
            'Midwood High School',
            'Stuyvesant High School'
        ],
        datasets: [{
            label: '2012 SAT Test Takers',
            data: [119, 1277, 727, 762, 694, 385, 518, 448, 824, 832],
            backgroundColor: [
                'rgb(255, 102, 102)',
                'rgb(255, 178, 102)',
                'rgb(255, 255, 102)',
                'rgb(178, 255, 102)',
                'rgb(102, 255, 102)',
                'rgb(102, 255, 178)',
                'rgb(102, 255, 255)',
                'rgb(102, 178, 255)',
                'rgb(178, 102, 255)',
                'rgb(255, 102, 255)'
            ],
            hoverOffset: 15,
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: '2012 SAT Test Takers by Farai Mutukumira',
                font: {
                    size: 20,
                }
            },
            legend: {
                position: 'right',
                labels: {
                    textAlign: 'center',
                    font: {
                        size: 14,
                    }
                }
            }
        }
    }

})

let hBarChart = new Chart(hbar, {
    type: 'bar',
    data: {
        labels: [
            'Brooklyn Studio Secondary School',
            'Brooklyn Technical High School',
            'Edward R. Murrow High School',
            'Forest Hills High School',
            'Fort Hamilton High School',
            'Franklin Delano Roosevelt High School',
            'James Madison High School',
            'John Dewey High School',
            'Midwood High School',
            'Stuyvesant High School'
        ],
        datasets: [{
            label: '2010 SAT Test Takers by School',
            data: [86, 1047, 686, 627, 581, 385, 641, 349, 725, 804],
            backgroundColor: [
                'rgb(255, 102, 102)',
                'rgb(255, 178, 102)',
                'rgb(255, 255, 102)',
                'rgb(178, 255, 102)',
                'rgb(102, 255, 102)',
                'rgb(102, 255, 178)',
                'rgb(102, 255, 255)',
                'rgb(102, 178, 255)',
                'rgb(178, 102, 255)',
                'rgb(255, 102, 255)'
            ],
            hoverOffset: 15,

        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: '2010 SAT Test Takers by Farai Mutukumira',
                font: {
                    size: 20,
                }
            }
        }
    }
})
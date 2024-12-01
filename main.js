const data = [
    {
        year: 2016,
        contest: [
            'TTRA 台灣⻘少年機器⼈⼤賽'
        ]
    },
    {
        year: 2017,
        contest: [
            'TTRA 台灣⻘少年機器⼈⼤賽 ',
            ' 國⽴台中教育⼤學相撲機器⼈⼤賽 '
        ]
    },
    {
        year: 2018,
        contest: [
            'TTRA 台灣⻘少年機器⼈⼤賽'
        ]
    },
    {
        year: 2019,
        contest: [
            'WRO國際奧林匹亞機器⼈全國總決賽'
        ]
    },
    {
        year: 2023,
        contest: [
            'RoboRAVE Fire Fighting TAIWAN OPEN',
            ' Robocup RACK SOUTH KOREA OPEN'
        ]
    },
    {
        year: 2024,
        contest: [
            ' RoboRAVE Middlebot TAIWAN OPEN ',
            ' RoboRAVE Middlebot World Championships ',
            'RoboRAVE Fire Fighting TAIWAN OPEN',
            'Robocup cospave Junior Taiwan open',
            'Robocup cospace singapore open(international team)',
            'Robocup cospace singapore open(superl team)',
            ' RoboRAVE Australia World Championships '
        ]
    }
]


const expAndWork = document.getElementById("exp-and-work");

let expAndWorkHtml = '';
for (let i = 0; i < data.length; i++) {
    const year = data[i].year;
    const contest = data[i].contest;
    let top = '';
    let middle = '';
    let bottom = '';
    top += `
        <li class="year-list">
            <h4>${year}</h4>
            <ul>
    `;

    for (let j = 0; j < contest.length; j++) {
        middle += `
            <li>${contest[j]}</li>
        `;

    }
    bottom += `
            </ul>
        </li>
    `;

    expAndWorkHtml += top + middle + bottom;

}
expAndWork.innerHTML = expAndWorkHtml;
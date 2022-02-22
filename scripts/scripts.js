// event listener
document.getElementById('daily').addEventListener('click', function () {
    choice(1);
});

document.getElementById('weekly').addEventListener('click', function () {
    choice(2);
});

document.getElementById('monthly').addEventListener('click', function () {
    choice(3);
});

// json & window onload
let data;
fetch('./data.json').then(response => {
    return response.json();
}).then(json => data = json).then(function () {
    weekly();
});

// data
let work = [];
work[0] = document.getElementById('work-title');
work[1] = document.getElementById('work-time');
work[2] = document.getElementById('work-past');

let play = [];
play[0] = document.getElementById('play-title');
play[1] = document.getElementById('play-time');
play[2] = document.getElementById('play-past');

let study = [];
study[0] = document.getElementById('study-title');
study[1] = document.getElementById('study-time');
study[2] = document.getElementById('study-past');

let exercise = [];
exercise[0] = document.getElementById('exercise-title');
exercise[1] = document.getElementById('exercise-time');
exercise[2] = document.getElementById('exercise-past');

let social = [];
social[0] = document.getElementById('social-title');
social[1] = document.getElementById('social-time');
social[2] = document.getElementById('social-past');

let selfcare = [];
selfcare[0] = document.getElementById('selfcare-title');
selfcare[1] = document.getElementById('selfcare-time');
selfcare[2] = document.getElementById('selfcare-past');

function choice(mode) {
    switch (mode) {
        case 1:
            daily();
            break;
        case 2:
            weekly();
            break;
        case 3:
            monthly();
    }
}

function daily() {
    // styles
    document.getElementById('daily').style.color = 'white';
    document.getElementById('weekly').style.color = 'hsl(236, 100%, 87%)';
    document.getElementById('monthly').style.color = 'hsl(236, 100%, 87%)';

    document.getElementById('daily').style.fontWeight = '400';
    document.getElementById('weekly').style.fontWeight = '300';
    document.getElementById('monthly').style.fontWeight = '300';

    // data
    messages(1);
}

function weekly() {
    // styles
    document.getElementById('daily').style.color = 'hsl(236, 100%, 87%)';
    document.getElementById('weekly').style.color = 'white';
    document.getElementById('monthly').style.color = 'hsl(236, 100%, 87%)';

    document.getElementById('daily').style.fontWeight = '300';
    document.getElementById('weekly').style.fontWeight = '400';
    document.getElementById('monthly').style.fontWeight = '300';

    // data
    messages(2);
}

function monthly() {
    // styles
    document.getElementById('daily').style.color = 'hsl(236, 100%, 87%)';
    document.getElementById('weekly').style.color = 'hsl(236, 100%, 87%)';
    document.getElementById('monthly').style.color = 'white';

    document.getElementById('daily').style.fontWeight = '300';
    document.getElementById('weekly').style.fontWeight = '300';
    document.getElementById('monthly').style.fontWeight = '400';

    // work
    work[0].innerHTML = '';
    work[1].innerHTML = '';
    work[2].innerHTML = '';

    // play
    play[0].innerHTML = '';
    play[1].innerHTML = '';
    play[2].innerHTML = '';

    // study
    study[0].innerHTML = '';
    study[1].innerHTML = '';
    study[2].innerHTML = '';

    // social
    social[0].innerHTML = '';
    social[1].innerHTML = '';
    social[2].innerHTML = '';

    // exercise
    exercise[0].innerHTML = '';
    exercise[1].innerHTML = '';
    exercise[2].innerHTML = '';

    // selfcare
    selfcare[0].innerHTML = '';
    selfcare[1].innerHTML = '';
    selfcare[2].innerHTML = '';

    // data
    messages(3);
}

function messages(mode) {

    // work
    work[0].innerHTML = data[0].title;
    if (mode == 1) {
        work[1].innerHTML = data[0].timeframes.daily.current + "hrs";
        work[2].innerHTML = 'Last Day - ' + data[0].timeframes.daily.previous + 'hrs';
    }
    else if (mode == 2) {
        work[1].innerHTML = data[0].timeframes.weekly.current + "hrs";
        work[2].innerHTML = 'Last Week - ' + data[0].timeframes.weekly.previous + 'hrs';
    }
    else if (mode == 3) {
        work[1].innerHTML = data[0].timeframes.monthly.current + "hrs";
        work[2].innerHTML = 'Last Month - ' + data[0].timeframes.monthly.previous + 'hrs';
    }

    // play
    play[0].innerHTML = data[1].title;
    if (mode == 1) {
        play[1].innerHTML = data[1].timeframes.daily.current + "hrs";
        play[2].innerHTML = 'Last Day - ' + data[1].timeframes.daily.previous + 'hrs';
    }
    else if (mode == 2) {
        play[1].innerHTML = data[1].timeframes.weekly.current + "hrs";
        play[2].innerHTML = 'Last Week - ' + data[1].timeframes.weekly.previous + 'hrs';
    }
    else if (mode == 3) {
        play[1].innerHTML = data[1].timeframes.monthly.current + "hrs";
        play[2].innerHTML = 'Last Month - ' + data[1].timeframes.monthly.previous + 'hrs';
    }

    // study
    study[0].innerHTML = data[2].title;
    if (mode == 1) {
        study[1].innerHTML = data[2].timeframes.daily.current + "hrs";
        study[2].innerHTML = 'Last Day - ' + data[2].timeframes.daily.previous + 'hrs';
    }
    else if (mode == 2) {
        study[1].innerHTML = data[2].timeframes.weekly.current + "hrs";
        study[2].innerHTML = 'Last Week - ' + data[2].timeframes.weekly.previous + 'hrs';
    }
    else if (mode == 3) {
        study[1].innerHTML = data[2].timeframes.monthly.current + "hrs";
        study[2].innerHTML = 'Last Month - ' + data[2].timeframes.monthly.previous + 'hrs';
    }

    // social
    social[0].innerHTML = data[4].title;
    if (mode == 1) {
        social[1].innerHTML = data[4].timeframes.daily.current + "hrs";
        social[2].innerHTML = 'Last Day - ' + data[4].timeframes.daily.previous + 'hrs';
    }
    else if (mode == 2) {
        social[1].innerHTML = data[4].timeframes.weekly.current + "hrs";
        social[2].innerHTML = 'Last Week - ' + data[4].timeframes.weekly.previous + 'hrs';
    }
    else if (mode == 3) {
        social[1].innerHTML = data[4].timeframes.monthly.current + "hrs";
        social[2].innerHTML = 'Last Month - ' + data[4].timeframes.monthly.previous + 'hrs';
    }

    // exercise
    exercise[0].innerHTML = data[3].title;
    if (mode == 1) {
        exercise[1].innerHTML = data[3].timeframes.daily.current + "hrs";
        exercise[2].innerHTML = 'Last Day - ' + data[3].timeframes.daily.previous + 'hrs';
    }
    else if (mode == 2) {
        exercise[1].innerHTML = data[3].timeframes.weekly.current + "hrs";
        exercise[2].innerHTML = 'Last Week - ' + data[3].timeframes.weekly.previous + 'hrs';
    }
    else if (mode == 3) {
        exercise[1].innerHTML = data[3].timeframes.monthly.current + "hrs";
        exercise[2].innerHTML = 'Last Month - ' + data[3].timeframes.monthly.previous + 'hrs';
    }

    // selfcare
    selfcare[0].innerHTML = data[5].title;
    if (mode == 1) {
        selfcare[1].innerHTML = data[5].timeframes.daily.current + "hrs";
        selfcare[2].innerHTML = 'Last Day - ' + data[5].timeframes.daily.previous + 'hrs';
    }
    else if (mode == 2) {
        selfcare[1].innerHTML = data[5].timeframes.weekly.current + "hrs";
        selfcare[2].innerHTML = 'Last Week - ' + data[5].timeframes.weekly.previous + 'hrs';
    }
    else if (mode == 3) {
        selfcare[1].innerHTML = data[5].timeframes.monthly.current + "hrs";
        selfcare[2].innerHTML = 'Last Month - ' + data[5].timeframes.monthly.previous + 'hrs';
    }
}
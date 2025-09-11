let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const item of coursesArray) {
    let divMain = document.createElement('div');
    divMain.classList.add('item');

    let divTitle = document.createElement('div');
    divTitle.classList.add('title');
    let h3 = document.createElement('h3');
    h3.innerText = `Name of course: ${item.title}`;
    divTitle.appendChild(h3);

    let divDuration = document.createElement('div');
    divDuration.classList.add('duration');
    let divMonthDuration = document.createElement('div');
    divMonthDuration.classList.add('monthDuration');
    let p1 = document.createElement('p');
    p1.innerText = `Month duration of course: ${item.monthDuration}`;
    divMonthDuration.appendChild(p1);

    let divHourDuration = document.createElement('div');
    divHourDuration.classList.add('hourDuration');
    let p2 = document.createElement('p');
    p2.innerText = `Hour duration of course: ${item.hourDuration}`;
    divHourDuration.appendChild(p2);
    divDuration.append(divMonthDuration, divHourDuration);

    let divModule = document.createElement('div');
    let ul = document.createElement('ul');
    ul.innerText = 'Modules of course:';
    for (const module of item.modules) {
        let li = document.createElement('li');
        li.innerText = module;
        ul.appendChild(li);
    }
    divModule.appendChild(ul);
    divMain.append(divTitle, divDuration, divModule);

    document.body.appendChild(divMain);
}
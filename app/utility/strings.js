export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export const generateTitle = url => {
    url = url.slice(1, url.length);
    url = url.split('/', 2);

    if (url.length === 2) {
        let projectName = url[1];
        projectName = projectName.split('-', 3);

        for (let i = 0; i < projectName.length; i++)
            projectName[i] = capitalize(projectName[i]);

        url[1] = projectName.join(' ');
    }

    if (url[0] === '') url.shift();

    let title;
    switch (url.length) {
        case 1:
            title = capitalize(url[0]);
            break;

        case 2:
            title = capitalize(url[0]) + ' - ' + url[1];
            break;

        default:
            title = 'Maximilian Schulke - Creative Developer';
            break;
    }

    return title;
}
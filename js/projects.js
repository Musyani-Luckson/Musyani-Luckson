import { Utilities } from "../modules/utilities.js";
const utilities = new Utilities();
// 
export function renderProjects() {
    const url = `./data/projects.json`;
    const configs = {
        method: `GET`
    }
    utilities.fetchData(url, configs, response => {
        const data = projects(response);
        displayProjects(data);
    })
}
// 
function projects(projects) {
    const parent = utilities.setDom(`div`, {
        class: `row p-3 justify-content-center`
    });
    if (projects.length > 0) {
        projects.forEach(project => {
            parent.appendChild(projectCard(project))
        });
    } else {
        // 
    }
    return parent;
}
// 
function projectCard(project) {
    const img = utilities.setDom(`img`, {
        class: `img img-fluid`,
        src: `./data/pictures/${project.image}`,
        alt: project.alt,
    });
    const name = utilities.setDom(`h6`, {
        class: `projectName h6`,
        data: {
            text: project.name
        }
    });
    const about = utilities.setDom(`div`, {
        class: `projectName h6`,
        data: {
            text: project.name
        }
    });
    const timestamp = utilities.setDom(`div`, {
        class: `timestamp`,
        data: {
            text: project.timestamps
        }
    });
    const card = utilities.setDom(`a`, {
        href: `${project.link}`,
        target: `_blank`,
        class: `card m-2 p-0 col-12 col-sm-4 col-md-3 col-lg-2 btn btn-outline-dark shadow-lg border-0 bg-light text-dark`,
        data: {
            append: [
                img,
                about,
                timestamp
            ]
        }
    });
    return card;
}
// 
function displayProjects(projects) {
    const parent = utilities.getDom(`#projects`);
    parent.appendChild(projects)
}
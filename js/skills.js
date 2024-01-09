import { Utilities } from "../modules/utilities.js";
const utilities = new Utilities();
// 
export function renderSkills() {
    const url = `./data/skills.json`;
    const configs = {
        method: `GET`
    }
    utilities.fetchData(url, configs, response => {
        const data = formSkills(response[0].skills);
        displaySkills(data)
    })
}
// 
function formSkills(skills) {
    const parentToolBox = utilities.setDom(`div`, {
        class: `row justify-content-center parentToolBox`
    });
    for (const skill in skills) {
        if (Object.hasOwnProperty.call(skills, skill)) {
            const tools = skills[skill];
            const skillStack = eachToolBox(skill, tools);
            parentToolBox.appendChild(skillStack)
        }
    }
    return parentToolBox;
}
// 
function eachToolBox(skill, tools) {
    const toolBoxName = utilities.setDom(`div`, {
        class: `toolBoxName`,
        data: {
            text: skill
        }
    });
    const toolsBox = utilities.setDom(`div`, {
        class: `row  justify-content-center toolsBox`,
    });
    const toolBox = utilities.setDom(`div`, {
        class: `col-md-5 col-lg-3 m-3 card bg-light border-0 toolBox`,
        data: {
            append: [
                toolBoxName,
                toolsBox
            ]
        }
    });
    if (tools.length > 0) {
        tools.forEach(tool => {
            toolsBox.appendChild(eachToolCard(tool))
        });
    } else {
        // 
    }
    return toolBox;
}

function eachToolCard(tool) {
    const icon = utilities.setDom(`ion-icon`, {
        class: `bi-check-square-fill`
    })
    const toolIcon = utilities.setDom(`h4`, {
        class: `toolIcon`,
        data: {
            append: [
                icon
            ]
        }
    });
    const toolName = utilities.setDom(`div`, {
        class: `toolName`,
        data: {
            text: tool.name
        }
    });
    return utilities.setDom(`div`, {
        class: `col-5 col-sm-3 col-md-4 col-lg-5 card toolOuterBox shadow border-0 bg-light p-1 rounded`,
        data: {
            append: [
                toolIcon,
                toolName
            ]
        }
    });
}
// 
function displaySkills(sills) {
    const parent = utilities.getDom(`#skills`);
    parent.appendChild(sills)
}
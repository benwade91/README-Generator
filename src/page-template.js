const licences = require('../util/licences');
const imgRender = address => {
    if (!address) {
        return "";
    } else {
        return "![app screenshot](" + address + ")";
    }
};

const licenceBadge = info => {
    if (info === licences[0].name) {
        return licences[0].address;
    } else if (info === licences[1].name) {
        return licences[1].address;
    } else {
        return licences[2].address;
    }
};
const licenceInfo = info => {
    if (info === licences[0].name) {
        return licences[0].legal;
    } else if (info === licences[1].name) {
        return licences[1].legal;
    } else {
        return licences[2].legal;
    }
};


module.exports = data => {
    return `
# ${data.title}
${licenceBadge(data.licences)}
## Description:
${imgRender(data.imageAddress)}
${data.description}

## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Testing](#testing)
* [License](#license)

## Installation <a name="installation"/>
${data.install}

## Usage <a name="usage"/>
${data.usage}

## Contribution <a name="comntributions"/>
${data.contribution}

## Testing <a name="testing"/>
${data.testing}

## Licences <a name="licence"/>
${licenceInfo(data.licences)}

## Questions <a name="questions"/>
Questions? Comments? Please Reach out to me by [Email](${data.email}) or on [Github](github.com/${data.github}).


`;
};
const TEN_SECONDS = 10000

let mainCommands = {
    mainLoad: function() {
        return this.waitForElementVisible('@root', TEN_SECONDS)
    },
}

module.exports = {
    commands: [mainCommands],
    url: function() {
        return this.api.launchUrl
    },
    elements: {
        root: {
            selector: '#root',
        },
    },
}

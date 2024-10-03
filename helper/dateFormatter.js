const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };

function formattedDate() {
    return new Date().toLocaleString("en-US", options)
}

module.exports = formattedDate;
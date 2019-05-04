module.exports = async bot => {
     console.log(`${bot.user.username} is online`)

    let statuses = [
        "over the server.",
        "over my users.",
        "you play Detroit",
        "Connor doing coin tricks.",
        "Markus giving a speech",
        "Kara brushing Alice's hair",
        "Elijah playing the piano",
        "news about the revolution",
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "WATCHING"});

    }, 1)

}
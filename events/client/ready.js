module.exports = async bot => {
     console.log(`My name is Connor`)

    let statuses = [
        "over the people of Detroit",
        "over the DPD",
        "you play Detroit",
        "a briefing about the case",
        "Markus giving a speech",
        "Chloe singing",
        "Hank playing with Sumo",
        "news about the revolution",
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "WATCHING"});

    }, 1)

}

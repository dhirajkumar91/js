// nested scope

function one() {
    const username = "dhiraj"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

//one()


if (true) {
    const username = "dhiraj"
    if(username === "dhiraj") {
        const website = "youtube"
        //console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);
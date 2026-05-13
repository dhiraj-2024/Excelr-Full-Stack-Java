function getUser(id, callback) {
    setTimeout(() => {
        console.log("User fetched");

        callback({
            id: 1,
            name: "Dhiraj",
        });
    }, 1000);
}

function getPosts(userId, callback) {
    setTimeout(() => {
        console.log("Posts fetched");

        callback([
            {
                id: 101,
                title: "JavaScript",
            },
        ]);
    }, 1000);
}

function getComments(postId, callback) {
    setTimeout(() => {
        console.log("Comments fetched");

        callback([
            {
                id: 1001,
                text: "Nice",
                userId: 5,
            },
        ]);
    }, 1000);
}

function getAuthor(userId, callback) {
    setTimeout(() => {
        console.log("Author fetched");

        callback({
            id: 5,
            name: "Rahul",
        });
    }, 1000);
}

// CALLBACK HELL

getUser(1, function (user) {
    console.log(user);

    getPosts(user.id, function (posts) {
        console.log(posts);

        getComments(posts[0].id, function (comments) {
            console.log(comments);

            getAuthor(comments[0].userId, function (author) {
                console.log(author);
            });
        });
    });
});

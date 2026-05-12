const users = [
    {
        id: 1,
        name: "Dhiraj",
    },
];

const posts = [
    {
        id: 101,
        userId: 1,
        title: "JavaScript Basics",
    },
];

const comments = [
    {
        id: 1001,
        postId: 101,
        userId: 2,
        comment: "Nice post",
    },
];

const authors = [
    {
        id: 2,
        name: "Rahul",
    },
];


function getUser(id, callback) {
    const user = users.find((user) => {
        users.id === id;
    })
    callback(users);
}

function getPosts(userId, callback) {
    const post = posts.filter((post) => {
        posts.userId === userId;
    })
}







getUser(1, function (user) {
    console.log("User:", user);
    getPosts(posts.id, function (post) {
        getComment(comments.id, function (comment) {
            getAuthor(authors.id, function (authors) {
                console.log(authors.name)
            })
        })
    })
})


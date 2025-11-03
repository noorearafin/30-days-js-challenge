const post = {
    id: 1,
    title: 'Post One',
    name: 'Rafi'
}

//convert to JSON string

const str = JSON.stringify(post);

console.log(str);

// parse JSON

const obj = JSON.parse(str);

const posts = [
    {
        id: 1,
        title: 'Post One',
        name: 'Rafi'
    },
    {
        id: 2,
        title: 'Post two',
        name: 'shou'
    }
];

console.log(obj);


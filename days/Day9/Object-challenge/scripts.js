const library = {
    title: 'Life of SQA professional',
    author: 'Rafi',
    status: {
        own: true,
        read: false,
        read: false
    }
}
//step 2
library.status.read = true;

//step 3

const { title: firstbook } = library;

//step 4
JSON.stringify(library);


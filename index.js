req('AllComponents');
 mediators(['quotes']);

let root = document.querySelector('#root');

putContext('global');

const glc =context('global');

glc.quote = state({
    author:"",
    content:""

});
glc.quotes = [
    {
        content: "Don't be a chass nigga",
        author: 'wingabire arnold'
    },
    {
        content: "regardless we move",
        author: 'tonny wanjala'
    },
    {
        content: "hiyo imeenda ",
        author: 'alex rono'
    }
];


h.App(
    {parent: root}
);

broker.broadcast('quoteStale');




setInterval(() => {
    

   broker.broadcast('quoteStale');
}, 1000)

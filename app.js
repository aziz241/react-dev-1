async function getData(Number) {
    const user = await (await fetch(`https://jsonplaceholder.typicode.com/users/${Number}`)).json();
    console.log(user);

    const post = await (await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${Number}`)).json();
    console.log(post);
}


export default getData;
function comments(response){
  console.log(response.data);
  console.log(response.data[0].email)
}



let url = 'https://jsonplaceholder.typicode.com/comments'
axios.get(url).then(comments);

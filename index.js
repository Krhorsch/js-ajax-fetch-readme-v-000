const app = "I don't do much.";

const token = 'dc5effa1919461429938ed36286b7b452de0b5a5'
fetch('https://api.github.com/Krhorsch/repos', {
  headers: {
    Authorization: `token ${token}`
  }
  }).then(res => res.json()).then(json => console.log(json));

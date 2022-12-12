const button = document.getElementById('btn')

console.log("hello world");
console.log(button);

button.addEventListener('click', function onClick(event) {
  // 👇️ change background color
  document.body.style.backgroundImage = "url('images/giphy2.gif')";

  // 👇️ optionally change text color
  // document.body.style.color = 'white';
console.log(event.target);
});


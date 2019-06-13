// Assignment 1: Callback Function

function delayedResult(n1, n2, delayTime, callback) {
  // your code here
  const result = n1 + n2;
  setTimeout(callback, delayTime, result);
}
delayedResult(4, 5, 3000, function (result) {
  console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function (result) {
  console.log(result);
}); // 5 (-5+10) will be shown in an alert dialog after 2 seconds

// Assignment 2: Callback Function and Advanced HTML DOM
function ajax(src, callback) {
  // your code here
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      callback(data);
    }
  };
  xhr.open('GET', src);
  xhr.send();
}
function render(data) {
  // your code here.
  // document.createElement() and appendChild() methods are preferred.
  data.map((item) => {
    const { name, price, description } = item;
    const segment = document.createElement('div');
    segment.classList.add('segment');
    const content = document.createElement('div');
    content.classList.add('content');
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = name;
    const subtitle = document.createElement('div');
    subtitle.classList.add('subtitle');
    subtitle.textContent = price;
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');
    descriptionDiv.textContent = description;

    content.appendChild(title);
    content.appendChild(subtitle);

    segment.appendChild(content);
    segment.appendChild(descriptionDiv);

    document.querySelector('.segments').appendChild(segment);
  });
}

ajax('https://cwpeng.github.io/live-records-samples/data/products.json', function (response) {
  render(response);
}); // you should get product information in JSON format and render data in the page
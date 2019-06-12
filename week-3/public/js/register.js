function register(e) {
  e.preventDefault();

  const name = document.getElementById('nameInput').value;
  if (!name) return alert('Please enter your name first before submitting!');

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      location.href = "/myName";
    }
  };

  const url = `/trackName?name=${name}`;
  xhr.open('GET', url);
  xhr.send();
}
document.getElementById('submitButton').addEventListener('click', register);
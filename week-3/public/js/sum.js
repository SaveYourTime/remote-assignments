function sum() {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.querySelector('#answer').textContent = xhr.responseText;
    }
  };

  const number = document.querySelector('#positiveNumberInput').value;
  const url = `/getData?number=${number}`;
  xhr.open('GET', url);
  xhr.send();
}
document.querySelector('#submitButton').addEventListener('click', sum);
function loadUsers() {
  fetch('/.netlify/functions/getUsers')
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('userList');
      list.innerHTML = '';

      data.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name} - ${user.email}`;
        list.appendChild(li);
      });
    })
    .catch(err => console.error(err));
}

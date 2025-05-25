//joingroup.css
// pricing scroll-reveal
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
});

document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
});


// To update group
function addGroup(name, id, members) {
  const row = document.createElement('section');
  row.classList.add('table-row');
  row.innerHTML = `
    <span>${name}</span>
    <span>${id}</span>
    <span>${members}</span>
    <a href="#" class="view-button">View</a>
  `;
  groupTable.appendChild(row);
}

//index.html/css
















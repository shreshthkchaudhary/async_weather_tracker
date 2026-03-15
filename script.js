// let addbtn = document.querySelector("#addbtn");
// let titleInput = document.querySelector("#title");
// let dateInput = document.querySelector("#date");
// let categoryInput = document.querySelector("#category");
// let descInput = document.querySelector("#description");
// let container = document.querySelector("#container");
// let clearbtn = document.querySelector("#clearbtn");
// let samplebtn = document.querySelector("#samplebtn");

// function record(title, date, category, desc) {
//     let newrecord = document.createElement("div");
//     newrecord.setAttribute("class", "allrecord");

//     newrecord.innerHTML = `
//         <button class="delete-btn" title="Delete">X</button>
//         <div>${title}</div>
//         <div>${date}</div>
//         <span>${category}</span>
//         <div>${desc}</div>`;

//     return newrecord;
// }

// function addEvent(title, date, category, desc) {
//     let card = record(title || 'No title', date || 'No date set', category || 'No category', desc || 'No description');
//     container.append(card);
// }

// addbtn.addEventListener('click',() => {
//     addEvent(titleInput.value, dateInput.value, categoryInput.value, descInput.value);
//     titleInput.value = '';
//     dateInput.value  = '';
//     descInput.value  = '';
//     categoryInput.selectedIndex = 0;
// });

// clearbtn.addEventListener('click',() => {
//     container.querySelectorAll('.allrecord').forEach(card => card.remove());
// });

// samplebtn.addEventListener('click',() => {
//     let samples = [
//         { title: 'EmiFest',     date: '2026-03-24', category: 'Conference', desc: 'Annual developer festival' },
//         { title: 'JS Workshop', date: '2026-04-10', category: 'Workshop',   desc: 'Hands-on DOM workshop' },
//         { title: 'Dev Meetup',  date: '2026-05-01', category: 'Meetup',     desc: 'Local developer meetup' }
//     ];
//     samples.forEach(s => addEvent(s.title, s.date, s.category, s.desc));
// });

// container.addEventListener('click',(e) => {
//     if (e.target.classList.contains('delete-btn')) {
//         e.target.closest('.allrecord').remove();
//     }
// });



// let keypressDisplay = document.querySelector("#keypress-display");

// document.addEventListener('keypress', (e) => {
//     keypressDisplay.textContent = e.key;
// });
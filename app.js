const projectBtns = document.querySelectorAll('.project-btn');

let projectNumber = 1;
let destinations = [];
projectBtns.forEach(project => {
  let destination = `${projectNumber}-${project.dataset.id}`;
  if (projectNumber < 10) {
    destination = `./0${destination}/index.html`;
  } else {
    destination = `./${destination}/index.html`;
  };
  destinations.push({ id: project.dataset.id, destination: destination });
  projectNumber++;
});

projectBtns.forEach(project => {
  project.addEventListener('click', (e) => {
    const project = e.currentTarget.dataset.id;
    const webpage = destinations.filter(destination => {
      return destination.id === project;
    });
    window.open(webpage[0].destination);
  })
});
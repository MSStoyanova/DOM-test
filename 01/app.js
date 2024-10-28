window.addEventListener("load", solve);

function solve() {

  const caloriesElement = document.getElementById("calories");
  const durationElement = document.getElementById("duration");
  const intensityElement = document.getElementById("intensity");
  const dateElement = document.getElementById("date");
  const typeElement = document.getElementById("type");


  const addButtonElement = document.getElementById("add-activity");
  addButtonElement.addEventListener('click', addButtonClickHandler);


  function addButtonClickHandler(e) {
    e.preventDefault();

    let inputElements = [caloriesElement,
      durationElement,
      intensityElement,
      dateElement,
      typeElement];

    if (inputElements.some(element => element.value === '')) {
      return;
    }
    const prevueList = document.getElementById("preview-activity");

    const prevueElement = createPrevueElement(caloriesElement.value, durationElement.value,
      intensityElement.value, dateElement.value, typeElement.value);

    prevueList.appendChild(prevueElement);

    e.currentTarget.setAttribute('disabled', 'disabled');

    inputElements.forEach(element => element.value = '');
  }

  function createPrevueElement(calories, duration, intensity, date, type) {
    const activityElement = document.createElement('p');
    activityElement.textContent = `Activity: ${type}`;
    const intensityElement = document.createElement('p');
    intensityElement.textContent = `Intensity: ${intensity}`;

    const durationElement = document.createElement('p');
    durationElement.textContent = `Duration: ${duration} min.`;

    const dateElement = document.createElement('p');
    dateElement.textContent = `Date: ${date}`;

    const caloriesElement = document.createElement('p');
    caloriesElement.textContent = `Calories: ${calories}`;

    const articleElement = document.createElement('article');
    articleElement.appendChild(activityElement);
    articleElement.appendChild(intensityElement);
    articleElement.appendChild(durationElement);
    articleElement.appendChild(dateElement);
    articleElement.appendChild(caloriesElement);

    const divElement = document.createElement('div');
    divElement.classList.add('btn-container');

    const nextButton = document.createElement('button');
    nextButton.classList.add('next-btn');
    nextButton.textContent = 'Next';


    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.textContent = 'Edit';

    divElement.appendChild(nextButton);
    divElement.appendChild(editButton);

    const liElement = document.createElement('li');

    liElement.appendChild(articleElement);
    liElement.appendChild(divElement);


    editButton.addEventListener('click', (e) => {
      const caloriesElement = document.getElementById("calories");
      const durationElement = document.getElementById("duration");
      const intensityElement = document.getElementById("intensity");
      const dateElement = document.getElementById("date");
      const typeElement = document.getElementById("type");

      caloriesElement.value = calories;
      durationElement.value = duration;
      intensityElement.value = intensity;
      dateElement.value = date;
      typeElement.value = type;
      e.currentTarget.parentElement.parentElement.remove();
      addButtonElement.removeAttribute('disabled');
    });


    nextButton.addEventListener('click', (e) => {
      const activityElement = document.createElement('td');
      activityElement.textContent = `${type}`;
      activityElement.classList.add('type-cell');

      const durationElement = document.createElement('td');
      durationElement.textContent = `${duration}`;
      durationElement.classList.add('duration-cell');

      const caloriesElement = document.createElement('td');
      caloriesElement.textContent = `${calories}`;
      caloriesElement.classList.add('calories-cell');

      const dateElement = document.createElement('td');
      dateElement.textContent = `${date}`;
      dateElement.classList.add('date-cell');

      const intensityElement = document.createElement('td');
      intensityElement.textContent = `${intensity}`;
      intensityElement.classList.add('intensity-cell');

      const btnTDElement = document.createElement('td');
      btnTDElement.classList.add('btn-cell');

      const delBtnEl = document.createElement('button');
      delBtnEl.textContent = "Delete";
      delBtnEl.classList.add('delete-btn');

      delBtnEl.addEventListener('click', (e) => {
        e.currentTarget.parentElement.parentElement.remove();
        addButtonElement.removeAttribute('disabled');
      })


      btnTDElement.appendChild(delBtnEl);

      const tableRowEl = document.createElement('tr');
      tableRowEl.appendChild(activityElement);
      tableRowEl.appendChild(durationElement);
      tableRowEl.appendChild(caloriesElement);
      tableRowEl.appendChild(dateElement);
      tableRowEl.appendChild(intensityElement);
      tableRowEl.appendChild(btnTDElement);


      const tableEl = document.getElementById("activities-table");

      tableEl.appendChild(tableRowEl)

      e.currentTarget.parentElement.parentElement.remove();
      addButtonElement.removeAttribute('disabled');

    });

    return liElement;
  }


}

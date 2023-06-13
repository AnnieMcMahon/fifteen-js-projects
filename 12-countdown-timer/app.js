const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

//Months start at 0; May = 4
//Hours are 0 to 24
const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

// const futureDate = new Date(2023,6,31,8,0,0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${month} ${date}, ${year} ${hours}:${mins}am`;

const futureTime = futureDate.getTime();

const getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futureTime - today;
  
  //1s = 1000ms; 1min = 60s; 1hr = 60mins; 1day = 24hrs
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  const days = Math.floor(t/oneDay);
  const hours = Math.floor(t % oneDay /oneHour);
  const mins = Math.floor(t % oneHour / oneMin);
  const secs = Math.floor(t % oneMin / 1000);

  const values = [days, hours, mins, secs];

  const format = item => {
    if(item < 10) {
      return item = `0${item}`;
    }
    return item;
  };

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'>Sorry, this giveaway has expired.<h4>`;
  }
};

const countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();







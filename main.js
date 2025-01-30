const currentTime = document.querySelector(".current-time");

setInterval(() => {
  let time = Date.now();

  ++time;
  const formattedTime = new Intl.DateTimeFormat("en-NG", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(time);

  currentTime.textContent = formattedTime;
}, 1000);

const searchBtn = document.querySelector("#searchBtn");
const cityname = document.querySelector("#cityname");
const city_name = document.querySelector("#city_name");
const temp_real = document.querySelector("#temp_real");
const temp_status = document.querySelector("#temp_status");
const datahide = document.querySelector(".middle_layer");
const getInfo = async (event) => {
  event.preventDefault();
  const cityval = cityname.value;

  if (cityval === "") {
    city_name.innerHTML = "Pls Write name before u search";
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=5c2034f2eaabad25a10cc31c5023293e`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      city_name.innerHTML = `${arrData[0].name} , ${arrData[0].sys.country}`;
      temp_real.innerHTML = arrData[0].main.temp;
      const tempmood = arrData[0].weather[0].main;
      // condition to check sunny or cloudy
      if (tempmood == "Clear") {
        temp_status.innerHTML =
          '<i class="fa fa-sun" style="color:#eccc68" aria-hidden="true"></i>';
      } else if (tempmood == "Clouds") {
        temp_status.innerHTML =
          '<i class="fa fa-cloud" style="color:#f1f2f6" aria-hidden="true"></i>';
      } else if (tempmood == "Rain") {
        temp_status.innerHTML =
          '<i class="fa fa-cloud-rain" style="color:#a4b0be" aria-hidden="true"></i>';
      } else {
        temp_status.innerHTML =
          '<i class="fa fa-cloud" aria-hidden="true"></i>';
      }
      datahide.classList.remove("data_hide");
    } catch {
      city_name.innerHTML = "pls enter the name properly ";
      datahide.classList.add("data_hide");
    }
  }
};

searchBtn.addEventListener("click", getInfo);

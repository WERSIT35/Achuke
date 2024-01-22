import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './routes';

bootstrapApplication(AppComponent,{
  providers: [
    provideRouter(routeConfig)
  ]
}).catch((err) => console.error(err));



const snowContainer = document.getElementById("snow-container") as HTMLElement;
const snowContent = ['&#10052', '&#10053', '&#10054'];

const random = (num: number): number => {
  return Math.floor(Math.random() * num);
};

const getRandomStyles = (): string => {
  const top = random(100);
  const left = random(100);
  const dur = random(10) + 10;
  const size = random(25) + 25;
  return `
    top: -${top}%;
    left: ${left}%;
    font-size: ${size}px;
    animation-duration: ${dur}s;
  `;
};

const createSnow = (num: number): void => {
  for (let i = num; i > 0; i--) {
    const snow = document.createElement("div");
    snow.className = "snow";
    snow.style.cssText = getRandomStyles();
    snow.innerHTML = snowContent[random(3)];
    snowContainer.append(snow);
  }
};
window.addEventListener("load", () => {
  createSnow(40);
});

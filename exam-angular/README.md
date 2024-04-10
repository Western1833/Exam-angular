# ExamAngular

!! To populate the site with cars navigate to server.js inside it search for 'cars' and just uncomment them. You will have to run the server again.

To open the app:

Run 'npm install' in terminal, then 'ng serve' to run angular and 'node server.js' for the server.

Functionalities of the app:

Application for car sales.

On home page are displayed the last 3 added cars.

Unauthozied user can see homepage, catalog, login, register, and details for each car, he can see the likes for each car, but can't place his own like, in order to do so he must make an account.

Authorized user sees home, catalog, details with edit and delete buttons only if he is the creator of the ad, he can like a car unless its his own, he also can see his own cars ads inside myCars page.

When 'likes' is pressed a popup shows giving all users who liked the car.













This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

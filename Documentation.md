# recruitment-form Documentation

## Overview
Recruitment-form is a Vue.js based App for simple and fast information collection of potential work-recruits. 

### Technologies
Main:
Vue.js (version 3.0.5)
Vuex (version 4.0.0)

Pre-processors: 
Sass

Other Dependencies:
@vuelidate/core;
vue-next-select;
vue-router;

## Installation

### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build

```
## How does it work

Recruitment-form consists of 8 steps with various fields, which collect information about potential recruit of company. Every step contains input, select or other custom elements. Every element of the form - is a vue-component with store (vuex) connection, that save all information for further sending to backend. Every step is a route to separate webpage.

## All avaliable routes:
/ - Intro with main information
/basic-information - page with additional informaton
/expectations - page with recruit's expectations
/education - page with recruit's education, courses and languages
/experience - page with recruit's work experience
/technology-stack - page with recruit's teckhnology stack
/extra-information - page for addititonal information
/answers-saved - final page

Every component is a template with basic html-tags (input, select, etc) and necessary logics for control of those elements. It contains local state (called data), methods, computed variables and  other dependencies. 

## Main components are:
InputComponent - component for custom input fields;
CustomDropdownComponent - component for custom dropdowns with special values;
MonthPicker - custom select for month and year;
UploaderComponent -  component for files upload;

On every step all fulfilled fields send their data to vuex-store. Data is collected on input, change, click. Some fields are necessary and have special validations rules. Validation is provided by Vuelidate library. Read more: https://vuelidate.js.org/
App has a progress bar, which listens to the progress of  the whole form.




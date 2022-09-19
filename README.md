# Angular Testing Library - Config


## Setup Angular Testing Library - jest-dom

* **https://testing-library.com/docs/angular-testing-library/intro/**
* **https://testing-library.com/docs/ecosystem-jest-dom**


```
Install:

npm install --save-dev @testing-library/angular
npm install --save-dev @testing-library/jest-dom

Configuration Files:

setup-jest.ts

import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

tsconfig.spec.json

"types": [
      "jest",
      "@testing-library/jest-dom"
    ],


Run:

ng test

```


# Full-stack code assignment

Hello!

If you are seeing this, you are probably applying for a full-stack software engineer position at HanaLoop.

HanaLoop's mission is to help organizations to take effective and efficient climate actions.

Aligned with the mission, the assignment for the candidate is to create a simple web-app that calculates greenhouse gas emissions given activity data.

## Super short crash-course on carbon accounting 

Carbon accounting is the process used to measure how much carbon dioxide equivalents an organization emits.

The general equation for emission estimation is:

`E = A x EF x (1-ER/100)`

Where 
- E = emissions,
- A = activity rate,
- EF = emission factor, and
- ER = overall emission reduction efficiency, %.

There are many greenhouse gasses, main ones are CO2 (carbon dioxide), CH4 (methane), N2O (nitrous oxide). To unify the accounting of multiple gasses, non-CO2 gasses are converted into CO2eq (carbon dioxide equivalent) using Global Warming Potentials (GWP) coefficients.


For the purpose of this assignment, we will simplify the estimate calculation as:

`E = A * EF`

## The assignment

Your assignment is to implement an application consisting of an API server and a web UI.  The application should allow users to add activity data list saved activities. 

Below is the specification of the features,

### Features that needs to be implemented

1. Activity entry: A UI form accepts as input activity information - activity type and amount. When submitted, it makes a request to the API server POST `/activities/` endpoint which calculates the emission and stores the activity along with the calculated emission in the database.

2. Activity list: A UI where users can filter all activities by date (in ISO 8601 format).  Internally the server's GET `/activities/` endpoint queries the activity database filters by date and returns the result back to the client.


### Evaluation

The code will be evaluated according the following criteria:

1. Correctness - First and foremost, the application should run correctly.
2. Readability - How easy it is to understand the code. Keep a balance between simplicity and robustness.
3. Reliability - The code should guard against common errors/exceptions.
4. Proper testing - Unit, Integration tests well implemented.

Extra points:
- Code comments explaining possible improvement. E.g. 
  // The performance of the following function can be improved by doing so and so...

> Additional works not requested in the feature spec will be considered, but we understand you time is a scarce resource.  But definitely do not over-engineer.


### Deliverable

1. The code you will be given a repository to check in the project
2. A ASSIGNMENT-README.md file with the following:
  - A short explanation of the code, just as any README for a project, but simpler and shorter.
  - Assumptions - any non-trivial assumptions you have taken for any significant design/implement decisions
  - Time spent in the assignment in hours (just an estimate, no need to be exact)



## The skeleton code

The technology stack is [Nextjs](https://nextjs.org/) for web application and [Nestjs](https://nestjs.com/) for server application.

The project code base is a monorepo based on [turborepo](https://turbo.build/).


## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org) app
- `web`: another [Next.js](https://nextjs.org) app
- `api`: [Nestjs](https://nestjs.com/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).


### Build

To build all apps and packages, run the following command:

```
cd assignment-fullstack
yarn run build
```

### Develop (run api/web dev mode)

To develop all apps and packages, run the following command:

```
cd assignment-fullstack
yarn run dev
```

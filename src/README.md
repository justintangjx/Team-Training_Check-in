# Team Relationship Management (TRM)

This application tool allows: 
1. Anonymous and transparent feedback collection for indivduals  
2. Managers to better track feedback -- fact-based and can rely on it as a log for appraisals.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### How to intsall

1. ```git clone https://github.com/justintangjx/feedback-crm.git```
2. Download packages, libraries and dependencies by ```yarn install```
3. ```yarn start``` 

### How to use it

For individuals' strengths, use the first tab.

For individuals' weaknesses, use the second tab.

For managers, track team's morale with last (and third tab).


## Running the tests

1. ```yarn test``` for unit tests. (```yarn test --coverage`` can be used to check coverage of unit testing).

## Deployment

To deploy this on a live system: 
1. ```heroku create -b https://github.com/mars/create-react-app-buildpack.git``` to create buildpack.
2. Create ```travis.yml``` file


## Built With

* [create-react-app] - The web framework used
* [BootStrap] - Overall styling
* [Recharts] - Used to generate bar charts

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.


## Authors
justin tang *version 1*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


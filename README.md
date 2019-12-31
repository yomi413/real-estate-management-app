# REACT/REDUX FINAL PROJECT

## Real Estate Property Management Application

Welcome to my Real Estate Property Management application, which fulfilled my final React/Redux Project for Flatiron School! This application endeavors to provide users with a way of organizing their real estate investments. The purpose is to have a place for easy access of documents, as well as listing of important contacts and links. Future versions may provide a way to receive rents from tenants, as well as making payments to banks and other agencies as they pertain to each property. For simplicity's sake, this was built with property owner's that want to have easy and direct electronic access to their files for their homes. While the user may be able to add multiple properties to their portfolio, it was made with the idea of providing a one stop shop for single-property homeowners.

Users will be able to take the following actions:

1. Signup for a new account, log in and log out;
2. Add/create a building/property to be saved to a database;
3. Add public record documents (i.e. deeds, mortgages, etc.) directly associated to each building;
4. Read/retrieve information about each building/property in the user's view;
5. Update information for each building/property in order to correct or modify the building's records; and
6. Delete individual building entries.

## Using the Application

You can visit [] to interact with this application in real time. You can click around, but access to most of the information is limited to a very limited group of people that have been approved by the administrator.

## Running the Program from GitHub

To use this application the way that it was intended, please follow the following instructions:

1. Open this repository https://github.com/yomi413/real-estate-management-app.git;
2. Clone or download the repository, and save it locally;
3. Once cloned, `cd` into this directory;
4. Since we have to use two different servers (one for the back end and one for the front end), please follow the below instructions very carefully:
   1. API Server (Back End) - In the terminal window where you have changed into the repository, activate the API server by running the following commands;
      1. Run `bundle install`;
      2. Run `rake db:migrate`; and
      3. Run `rails s -p 3001`.
   2. User Interface (Front End) - In a new terminal window or tab, run the following commands to activate the UI (user interface);
      1. `cd` into the `client` folder in the repository;
      2. Once in the `client` folder, run `npm install`; and
      3. Run `npm start` (this command will automatically open `http://localhost:3000` in the browser).
   3. In the browser, you will see the welcome page. Feel free to login as a Guest with the following information:
      `Email: guest@abc.com`
      `Password: password`
      1. Once logged in, you will see one building already added. Look around, test things out, and enjoy the experience.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/yomi413/real-estate-management-app.git. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License - The MIT License (MIT)

Copyright (c) 2019 yomi413

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

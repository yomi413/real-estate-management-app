# REACT/REDUX FINAL PROJECT

## Real Estate Application

Welcome to my final React/Redux Project! This application endeavors to provide users with a way of organizing their real estate investments. The purpose is to have a place for easy access of documents, as well as listing of important contacts and links. Future versions may provide a way to receive rents from tenants, as well as making payments to banks and other agencies as they pertain to each property.

Users will be able to take the following actions:

1. Signup for a new account, log in and log out;
2. Add/create a building to be saved to a database;
3. Add public record documents (i.e. deeds, mortgages, etc.) as directly associated to each building;
4. Read/retrieve information about each building in the user's view;
5. Update information for each building in order to correct or modify the building's record; and
6. Delete individual building entries.

## Running the Program

To use this application the way that it was intended please follow the following instructions:

1. Open this repository https://github.com/yomi413/final-react-redux-portfolio-project.git;
2. Clone or download the repository, and save it locally;
3. In the terminal, activate the API server by running the following commands;
   (a) Run `bundle install`;
   (b) Run `rake db:migrate`; and
   (c) Run `rails s -p 3001` to start the API server.
4. In a new terminal window or tab run the following commands to activate the UI (user interface);
   (a) Run `npm install`;
   (b) Run `npm start` (this command will automatically open `http://localhost:3000` in the browser);
   (c) Create an account by going to the Sign Up page;
   (d) Once signed in, add a new building (Note: The only required fields are the address, description and number of apartments. The image and documents are currently optional and can be uploaded at a later date.); and
   (e) Look around, test things out, and enjoy the experience.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/yomi413/final-react-redux-portfolio-project.git. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

## License - The MIT License (MIT)

Copyright (c) 2019 yomi413

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

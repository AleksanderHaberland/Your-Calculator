# Your-Calculator
The project is a website connected to the mysql database via node js, in addition, the website is responsive thanks to the use of bootstrap.
The site encrypts the password in the database using the bcryptjs library, and uses the standard to create JSON web access tokens.

REST API - provides routs for http protocol requests via express methods, where:
(get) - get data from HTML templates supplemented with Handlebars tag.
(post) - sends data from the registration and login form to the container.
The container checks the correctness of the data, as a result of which logging will take the user to the site, and registration sends a new request to add a new user to the database.

Entering the site, we have 3 options in the menu, including one "Login", redirects the user to a fully functional page.
By logging in, we are redirected to the "Home" page, describing the full content of the subpages and we have the opportunity to use one of three simple calculators.

# LaraBlog 

Example of blog with nested comments support



## Installation

To install LaraBlog, you'll need to clone or download this repo:

```
git clone https://github.com/jesusantguerrero/larablog.git
```

Next, setup the project:

### 1. Create a New Database

We need to use a MySQL database. You will need to create a new database and save the credentials for the next step.

### 2. Copy the `.env.example` file

We need to specify our Environment variables for our application. You will see a file named `.env.example`, you will need to duplicate that file and rename it to `.env`.

Then, open up the `.env` file and update your *DB_DATABASE*, *DB_USERNAME*, and *DB_PASSWORD* in the appropriate fields. You will also want to update the *APP_URL* to the URL of your application.

```bash
APP_URL=http://127.0.0.1:8000/

DB_CONNECTION=sqlite
```

### 3. Add Composer Dependencies

Next, we will need to install all our composer dependencies by running the following command:

```php
composer install
```
### 4. Run Migrations

We need to migrate our database structure into our database, which we can do by running:

```php
php artisan migrate
```
<br>
Finally, to run the project you can use the command below:

```php
php artisan serve
```
<br>

### 4. Run Tests
```php
php artisan test
```
🎉 And that's it! You will now be able to visit your URL and see your Atmosphere application up and running.

## License
[MIT license](https://opensource.org/licenses/MIT).

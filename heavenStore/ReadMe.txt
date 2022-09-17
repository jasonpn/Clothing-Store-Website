Contributors:
Jason Nguyen
Base code provided by Louis D Nel 
2019

Version: macOS High Sierra Version 10.13.6
	 node.js v10.15.0

To run this app you need a personal Paypal Account
You can create on at paypal.com
When you create the account you don't need to link a credit card or bank account at that
time. I just ignored that step when prompted and it created the account anyway. I received confirmation by email.

1) Changing pay-pal account
Visit app.js file then change client_id and client_secret with your
pay-pal sandbox account.

You can create a sandbox account from below link
https://developer.paypal.com/

3) Setup project
Before starting application please run the populate-for-startup.js
file inside the seed directory to populate the mongodb database.
You can basically run the file with below command (after locating in the terminal)
node populate-for-startup.js

Install the npm module depedencies in package.json by executing:
npm install

4) Run the application
In the application folder execute:
npm start
then you can access from localhost at
http://localhost:3000
or if you are hosting on a remote server like openstack it might be:
http://134.117.216.209:3000

5) Login to the app using the dummy user for project:
username : admin@admin.com
password : admin

5) Important
Before starting application please make sure your mongo database runs.

cd /data
mongo or mongod

6) Features
Upload local/online photos for products
Add, delete, or update product
Add, delete, or update variant
Add, delete, or update department
Add, delete, or update category
Add, or delete discount code
Sends email on the sign-in
Advance search bar (search for product and categories)
Buy item
Shopping cart
Distinguishes user and admin
Filters does not work
Order history does not work




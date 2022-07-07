# Exercises

> Use this repo: https://github.com/Lemoncode/mini-airbnb

## 1. Set up cypress

* Install dependencies
* Add scripts to start up cypress 
* Set up base url

## 2. Access page - Login

* Create a simple test that verifies that credentials controls are selectable by user
    - Email input field is selecatble
    - Password input field is selactable
* Create a test where user set wrong credentials    
    - Detect browser window
* Create a test where user set right credentials

## 3. Rent Room page - List 

> Note: If we don't have an active session, we're not able to navigate to list page!!

* Create a command that set up credentials and navigate to list page waiting for items to be loaded.
* Create test that verifies that user can close the session.
* Create test that verifies that search bar works.
* Create test that verifies that we can select and item on list.
* Create test that stubs a request to load the items on `list` page.

## 4. Room Detail page - Detail

* Create a spec that selects the item with `New` search
    - Checks that have a reviews
    - Checks that we can back to search page
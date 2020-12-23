

# WEEK 14 Mobile App

This week's task was to make our first mobile app.

of the choice of framworks i chose REACT NATIVE. it has been deployed to expo
and can be accessed from that platform using the expo cell app on android and scanning the QR code it can be found here : 
https://expo.io/@trevorius45/projects/rocket_mobile_app

 an android simulation can also be run in the browser from that site.

The app is a stack navigation system with 3 screens

the screens can be found in the src/screens
also in the screens folder a stylesheet.js defines all the stylesheets used and color.js contains the different colors used by the app.

the logic for the screens is contained in src/logic

and the navigation header is in src/navigation

## LOGIN

on the login screen a ***GET*** request to the Rest api returns true or not found when a connection attempt is made using a rocket elevator email address.
if the access is authorized navigation will take us to the next screen

## Elevator List

can be found in home.js
A list of non operating elevators is displayed on the second page and a logout button is included in the navigation bar to take us back to the login page.

This list is obtained by sending a ***GET***  request to a preexisting endpoint on the API that returns a list of all the non "ACTIVE" elevators and their information. 

Upon selection of an elevator its information is persisted to the last screen this will save an api call in the end

## Elevator Details

can be found in detail.js

after selecting an elevator the last screen displays it's information and persists the logout button and a return button can take the user back to the list.
also a change status to Active button will make a ***PUT*** repquest to the api and change the status to Active and if after that you press the new button to return to the list you will see the elvator has been removed from the list demonstrating the database has been updated.


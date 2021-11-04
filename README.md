<!-- TABLE OF CONTENTS -->

# Joblish User Frontend

<summary><h2 style="display: inline-block">Table of Contents</h2></summary>
<ol>
<li>
    <a href="#intro">Intro</a>
</li>
<li>
    <a href="#about-the-project">About The Project</a>
    <ul>
        <li><a href="#backend">Backend</a></li>
    </ul>
    <ul>
        <li><a href="#frontend">Frontend</a></li>
    </ul>
    <ul>
        <li><a href="#technologies">Technologies</a></li>
    </ul>
</li>
<li>
    <a href="#overview">Overview</a>
    <ul>
        <li><a href="#user-frontend">User Frontend</a></li>
        <li><a href="#company-frontend">Company Frontend</a></li>
    </ul>    
</li>
<li>
    <a href="#getting-started">Getting Started</a>
</li>
</ol>

## Intro
Joblish is a recruitment platform web application that is composed of 3 repositories.
- Two frontend apps</br>
  <a href="https://github.com/SabrinaStaicu/joblish-frontend">User</a></br>
  <a href="https://github.com/SabrinaStaicu/joblish-companies-frontend">Company</a></br>
- One backend app</br>
  <a href="https://github.com/SabrinaStaicu/joblish-backend">Backend</a></br>

This repo in particular handles user frontend side.

All the api requests from both frontend apps access this app to send data or receive data from the database

## About The Project
### Backend
- It is build using the Spring Boot framework, we use annotations for the components
- It uses Lombok to get rid of boilerplate code 
- At startup the database is populated with preset data by implementing the CommandLineRunner class in a component
- We use a Postgresql database and Hibernate for ORM
- It uses Spring Security to secure endpoints
- We check data with Javax Bean Validation
### Frontend
- It is developed using React hooks and and classes
- We use axios for creating http requests and obtaining data from the backend
- The design is made mostly in CSS with minimal inline styling
- For state management we chose Jotai

### Technologies
#### Backend
- Maven
- Spring Boot
- Lombok
- Spring Data JPA
- Spring Security
- Javax Validation
- Java
- Postgresql
- Hibernate
- H2 database
- Mockito
#### Frontend
- React
- JS
- HTML5
- CSS
- SCSS
- Jotai
- NodeJS
- NPM

## Overview
### User Frontend
- We have a homepage with a search bar for jobs. <br/>
  ![Image](https://i.imgur.com/WG5n6oV.png)<br/>
- A registration form.<br/>
  ![Image](https://i.imgur.com/jkY0eWx.png)<br/>
- A login form.<br/>
  ![Image](https://i.imgur.com/yrQ39Ct.png)<br/>
- An user details page.<br/>
  ![Image](https://i.imgur.com/RSxM8oG.png)<br/>
- A job search page with multiple filters.<br/>
  ![Image](https://i.imgur.com/DYsohWy.png)<br/>
- A page with companies where we can see the positions they offer.<br/>
  ![Image](https://i.imgur.com/81dHULt.png)<br/>
  ![Image](https://i.imgur.com/9AApfRn.png)<br/>
  
### Company Frontend
- We have a homepage.<br/>
![Image](https://i.imgur.com/Nw4uuQM.png)<br/>
- A registration form.<br/>
![Image](https://i.imgur.com/Mrr3SIm.png)<br/>
- A login form.<br/>
![Image](https://i.imgur.com/upi1eIk.png)<br/>
- A dashboard.<br/>
![Image](https://i.imgur.com/72Mpkej.png)<br/>
- A modal to see the current posted jobs.<br/>
![Image](https://i.imgur.com/xA32arI.png)<br/>
- A form to add a new job offer.<br/>
![Image](https://i.imgur.com/IdedOrb.png)<br/>
- A page to see all applicants.<br/>
- An edit page for the job.<br/>
- A settings page where you can change your password.<br/>

<!-- GETTING STARTED -->

## Getting started!

### Backend
1. Install Open JDK
Make sure that the latest LTS (Long Term Support) at least Open Java Development Kit (JDK) is installed on your system.
Executing the java --version command in the shell shows at least the latest LTS version number.

2. Install an IDE that supports Maven and Java
This project was developed in IntelliJ IDEA Ultimate

3. Clone the repo to your local machine
You can do that by running the following command in your terminal, make sure you are in the right directory.
```git clone https://github.com/github_username/repo_name.git```

4. Create your own application.properies file in a new resources directory and write
   ```
   spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.PostgreSQLDialect
   spring.jpa.hibernate.ddl-auto=create-drop
   spring.datasource.url=databaseURL
   spring.datasource.username=yourUsername
   spring.datasource.password=yourPassword
   spring.jpa.show-sql=false
   ```

5. Run the application from the ```TravelishApplication``` file.

### Frontend 
1. Install NodeJS
If you're using Ubuntu open up your terminal and run this commands:
```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. Install Visual Studio Code or other IDE's that support React.

3. Open the project and run "npm install" in the terminal to install all the node modules.

4. After the modules are installed run "npm start" in the terminal and the application will automatically open in your browser.

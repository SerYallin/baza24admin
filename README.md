# Baza24 - Administration Panel

![Java](https://img.shields.io/badge/Java-8+-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring](https://img.shields.io/badge/Spring-MVC-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![Hibernate](https://img.shields.io/badge/Hibernate-5.2.1-59666C?style=for-the-badge&logo=hibernate&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)

Baza24 Admin is a web-based administration dashboard for the Baza24 application. It provides a secure and centralized interface for administrators to manage the platform's core functionalities.

The application is built on a robust Java-based stack, utilizing Spring MVC for handling web requests, Hibernate for object-relational mapping (ORM), and JSP for rendering dynamic frontend pages.

## ✨ Features

Based on the current project structure, the key features are:

* **Secure Admin Authentication**: A dedicated login system for administrators to securely access the panel.
* **Central Dashboard**: After login, administrators are directed to a central dashboard which serves as the main hub for all management tasks.
* **Extensible Architecture**: The project is structured with clear separation of concerns (Controller, Service, DAO layers), making it easy to add new management modules in the future (e.g., User Management, Product Management, etc.).

## 🛠️ Technology Stack

* **Backend**: Java 8
* **Framework**: Spring MVC 4.3.9
* **ORM**: Hibernate 5.2.1
* **Database**: MySQL
* **Frontend**: JSP (JavaServer Pages), JSTL
* **Build & Dependency Management**: Apache Maven
* **Logging**: Apache Log4j
* **Web Server**: Apache Tomcat (or any other Servlet Container)

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

* Java Development Kit (JDK) 8 or newer
* Apache Maven 3.x
* MySQL Server 5.x or newer
* Apache Tomcat 9 or newer

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Akhilanandateja/baza24admin.git](https://github.com/Akhilanandateja/baza24admin.git)
    cd baza24admin
    ```

2.  **Database Setup:**
    * Connect to your MySQL server and create a new database for the project.
        ```sql
        CREATE DATABASE baza24_db;
        ```
    * The project uses Hibernate's `hbm2ddl.auto` property set to `update`, which will automatically create the necessary tables (`Admin`) based on the entity classes when the application starts.

3.  **Configure Database Connection:**
    * Open the Hibernate configuration file located at: `src/main/resources/hibernate.cfg.xml`.
    * Update the database connection properties with your MySQL credentials:
        ```xml
        <property name="connection.driver_class">com.mysql.jdbc.Driver</property>
        <property name="connection.url">jdbc:mysql://localhost:3306/baza24_db</property>
        <property name="connection.username">your_mysql_username</property>
        <property name="connection.password">your_mysql_password</property>
        ```

4.  **Build the Project:**
    * Use Maven to compile the project and create a `.war` file.
        ```bash
        mvn clean install
        ```
    * This will generate `baza24admin.war` inside the `target/` directory.

5.  **Deploy to Tomcat:**
    * Copy the `baza24admin.war` file from your `target/` directory.
    * Paste it into the `webapps/` folder of your Apache Tomcat installation directory.
    * Start the Tomcat server. The `.war` file will be automatically extracted and deployed.

### Accessing the Application

* Open your web browser and navigate to: `http://localhost:8080/baza24admin/`
* You will be redirected to the admin login page.

*(Note: The port `8080` may vary if you have configured Tomcat to run on a different port.)*

## 📂 Project Structure

The project follows a standard layered architecture for a Spring MVC application:

```
baza24admin/
├── src/main/java/com/baza/
│   ├── controller/ # Handles incoming HTTP requests (e.g., LoginController)
│   ├── dao/        # Data Access Object layer for database interactions
│   ├── model/      # Hibernate entity classes (e.g., Admin)
│   └── service/    # Business logic layer
├── src/main/resources/
│   └── hibernate.cfg.xml # Hibernate & database configuration
└── src/main/webapp/
    ├── WEB-INF/
    │   ├── spring-servlet.xml # Spring MVC configuration
    │   └── views/             # JSP files for the UI (e.g., login.jsp, dashboard.jsp)
    └── index.jsp              # Entry point that redirects to /login
```
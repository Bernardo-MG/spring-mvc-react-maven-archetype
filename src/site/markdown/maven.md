# Maven Configuration

## Profiles

The project comes prepared with a few configuration options, selectable through Maven profiles.

### Environment

| Profile     | Settings              |
|-------------|-----------------------|
| development | Development settings  |
| production  | Production settings   |

### Databases

Several databases are supported by default. To choose one just select the correct profile.

| Profile  | Database              |
|----------|-----------------------|
| h2       | H2 in-memory database |
| mysql    | MySQL database        |
| postgres | PostgreSQL database   |

### Databases Authentication Source

These profiles should be used only for development. In any other change it is better using environmental variables.

Check the section about setting up the database.

| Profile       | Server                                            |
|---------------|---------------------------------------------------|
| db-properties | DB authentication info taken from properties file |

### Embedded Server

These will choose the server for development.

As these profiles will change the plugin being used for the server they will also change which command should be used to run the application locally.

| Profile  | Server                   | Command         |
|----------|--------------------------|-----------------|
| jetty    | Jetty embedded server    | jetty:run-war   |
| tomcat7  | Tomcat 7 embedded server | tomcat7:run-war |
# FIFA-rest-api

----

## Rest API with Node and PostgreSQL

### Steps to run the Rest API

1. Run the next query in the *PostgreSQL* terminal `CREATE DATABASE fifa_api;`

2. Run `npm i`

3. Create a `.env` file with the follow attributes:

   ```
   DB_NAME=fifa_api
   DB_USER=yourUserName
   DB_PASS=yourPassword
   DB_HOST=localhost
   ```

4. Run `npm run start`.

### Endpoints

```
Post:
http://localhost:3000/api/v1/team
{
	"Name": "juventus",
 	"Page": 1
}

Get:
http://localhost:3000/api/v1/players?search=cris&order=desc&page=1
```

> The  ***Algorithm Test*** is located in the ***algorithmTest*** folder.


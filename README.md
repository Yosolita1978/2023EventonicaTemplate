# Quick-setup 
### Your First Express and React App with a DB connection

Go to your source directory in your terminal and run the command `git clone https://github.com/Yosolita1978/week8Game.git <NAMENEWDIRECTORY>`
![You will see something like this in your terminal.](https://github.com/Yosolita1978/screenshoots/blob/main/template/Screen%20Shot%202022-03-20%20at%207.50.46%20PM.png?raw=true)

2. To clean your folder from the owner's git, run the command `rm -rf .git` inside the folder <NAMENEWDIRECTORY>. Then re-initialize as the owner with `git init`.

3. Go to the server folder in the project (`cd server`) and run the command `npm install`

4. Go to the client folder (`cd .. and cd client`) and run the command `npm install`

6. This template has two servers already working. Both servers should run now with by running `npm run dev` from within the server directory in your terminal. Please note that in server 8080 you will have the Backend, and in server 3000 you will have dev from React. 
7. To add a Postgres DB
7.1 Inside your server directory create a `.env` file and copy there the values that are in `.envexample`
In a new terminal window go inside the server directory and run the command `psql -U postgres -f db.sql` that will create a database `eventonica` and a table `events` with 5 rows. 

![Initial View of the project](https://raw.githubusercontent.com/Yosolita1978/screenshoots/50a5573f21c1265d20d838a36b98588f9b4eefce/2023/H1/Screen%20Shot%202023-03-09%20at%208.03.32%20PM.png)



![Your DB should look like this](https://raw.githubusercontent.com/Yosolita1978/screenshoots/696689a627eb5ca206b5a2eaebec7cc1efa15ffc/2023/H1/Screen%20Shot%202023-03-09%20at%208.25.54%20PM.png)




import { Client ,Pool} from "pg";

import express from "express";

const app = express();
app.use(express.json());
const pgClient = new Client("postgresql://todo_owner:Mlira2hqJmQ8@ep-shrill-poetry-a5d1d4fs.us-east-2.aws.neon.tech/todo?sslmode=require");


await pgClient.connect().then(()=> console.log('connection successful')).catch((e)=> console.log(e));   

app.post("/signup",
    async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;

        const city = req.body.city;
        const country = req.body.country;
        const street = req.body.street;
        const pincode = req.body.pincode;

        try {


            const insertQuery = `INSERT INTO users (username,email,password) VALUES ($1,$2,$3) RETURNING id`;
            const addressInsertQuery = `INSERT INTO addresses (city,country,street,pincode,user_id) VALUES($1,$2,$3,$4,$5)`;

            await pgClient.query("BEGIN;");
            const response = await pgClient.query(insertQuery, [username, email, password]);
            const userId = response.rows[0].id;

            const addressInsertResponse = await pgClient.query(addressInsertQuery, [city, country, street, pincode, userId]);
            await pgClient.query("COMMIT;");

            res.json({
                result: response,
            });
        } catch (e) {
            console.log(e);
            res.json({
                message: 'error',
            })
        }
    })



app.listen(3000);
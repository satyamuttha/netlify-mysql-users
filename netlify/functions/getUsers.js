const mysql = require('mysql2/promise');

exports.handler = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    });

    const [rows] = await connection.execute(
      'SELECT id, name, email FROM users'
    );

    await connection.end();

    return {
      statusCode: 200,
      body: JSON.stringify(rows)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};

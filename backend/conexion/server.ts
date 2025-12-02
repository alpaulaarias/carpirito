import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { Pool } from "pg";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "carpirito",
  password: "123",
  port: 5432,
});

// esta funcionando o no 
pool.connect()
  .then(() => console.log("📌 PostgreSQL conectado correctamente"))
  .catch((err) => console.error("❌ Error conectando a Postgres:", err));




app.post("/api/users", async (req, res) => {
  try {
    const { first_name, cedula, email } = req.body;

    if (!first_name || !cedula || !email) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const result = await pool.query(
      `INSERT INTO users (first_name, cedula, email, cargo)
       VALUES ($1, $2, $3, $4)
       RETURNING id`,
      [first_name, cedula, email]
    );

    res.json({ id: result.rows[0].id });
  } catch (error) {
    console.error("Error registrando usuario:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});





//     
//       [uuidv4(), first_name, last_name, email, cedula]
//     );

//     res.json(result.rows[0]);
//   } catch (err: any) {
//     res.status(500).json({ error: err.message });
//   }
// });

// /* -----------------------------------------
//     2️⃣ Generar código QR para un usuario
// ----------------------------------------- */
// app.post("/qr/generate/:user_id", async (req: Request, res: Response) => {
//   try {
//     const { user_id } = req.params;

//     const qrText = user:${user_id};

//     const result = await pool.query(
//       `INSERT INTO qr_codes(id, user_id, code_text)
//        VALUES($1, $2, $3)
//        RETURNING *`,
//       [uuidv4(), user_id, qrText]
//     );

//     res.json(result.rows[0]);
//   } catch (err: any) {
//     res.status(500).json({ error: err.message });
//   }
// });

// /* -----------------------------------------
//     3️⃣ Obtener datos del usuario desde el código QR
// ----------------------------------------- */
// app.get("/qr/scan", async (req: Request, res: Response) => {
//   try {
//     const { code } = req.query;

//     const qr = await pool.query(
//       "SELECT * FROM qr_codes WHERE code_text = $1",
//       [code]
//     );

//     if (qr.rowCount === 0) {
//       return res.status(404).json({ error: "QR no encontrado" });
//     }

//     const user = await pool.query(
//       "SELECT * FROM users WHERE id = $1",
//       [qr.rows[0].user_id]
//     );

//     res.json(user.rows[0]);
//   } catch (err: any) {
//     res.status(500).json({ error: err.message });
//   }
// });

// /* -----------------------------------------
//     4️⃣ Registrar asistencia 
// ----------------------------------------- */
// app.post("/attendance", async (req: Request, res: Response) => {
//   try {
//     const { user_id, device_info } = req.body;

//     const result = await pool.query(
//       `INSERT INTO attendance(id, user_id, device_info)
//        VALUES($1,$2,$3)
//        RETURNING *`,
//       [uuidv4(), user_id, device_info]
//     );

//     res.json(result.rows[0]);
//   } catch (err: any) {
//     res.status(500).json({ error: err.message });
//   }
// });

// /* -----------------------------------------
//     5️⃣ Obtener historial de asistencias
// ----------------------------------------- */
// app.get("/attendance/:user_id", async (req: Request, res: Response) => {
//   try {
//     const { user_id } = req.params;

//     const result = await pool.query(
//       "SELECT * FROM attendance WHERE user_id = $1 ORDER BY created_at DESC",
//       [user_id]
//     );

//     res.json(result.rows);
//   } catch (err: any) {
//     res.status(500).json({ error: err.message });
//   }
// });


// ===============================
//      INICIAR SERVIDOR
// ===============================
app.listen(3000, () => {
  console.log("🚀 Servidor corriendo en http://localhost:3000");
});

// server.ts (al final)
export { };


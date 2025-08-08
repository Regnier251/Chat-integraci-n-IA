// Importar dependencias
import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";

//Cargar configuracion (api key)
dotenv.config();

//Cargar express
const app = express();
const PORT = process.env.PORT || 3000;

//Servir pagina estatica(frontend)
app.use("/",express.static("public"));

//Crear middleware para procesar JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//Instancia de openai y pasar el apikey
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

//Ruta / endpoint / url
app.post("/api/chatbot", async(req,res)=> {
    
    const context = `
        Eres un asistente de soporte para el supermercado "Aborrotes Don Ramón".
        Información del negocio:
            -Ubicación: Segunda Cerrada 13-Local A, Tacubaya, Miguel Hidalgo, 11870 Ciudad de México, CDMX
            -Horario: Lunes a Viernes de 9:00am a 5:00pm.
            -Productos: Pan, Leche, Huevos, Frutas, Carnes y bebidas
            -Metodos de pago: Efectivo, tarjeta
        Solo puedes responder preguntas sobre la tienda. Cualquier otra pregunta está prohibida.
    `;

    //Recibir pregunta del usuario
    const {message} = req.body;

    if(!message) return res.status(404).json({error: "Has mandado un mensaje vacío!!"});
    

    //Petición al modelo de intelígencia artificial
    try{

        const response = await openai.chat.completions.create({
            model: "gpt-4.1-mini",
            messages: [
                {role: "system", content: context},
                {role: "system", content: "Debes responder de la forma corta y directa, usando los menores tokens posibles."},
                {role: "user", content: message}
            ],
            max_tokens:200
        })

        //Devolver respuesta
        const reply = response.choices[0].message.content;

        return res.status(200).json({reply});

    } catch(error) {
        console.log("Error:", error)

        return res.statur(500).json({
            error: "Error al general la respuesta"
        })
    }
});
    
//Servir el backend
app.listen(PORT), () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
}


🛒 Chatbot para Abarrotes Don Ramón
Un chatbot interactivo que responde preguntas sobre el supermercado "Abarrotes Don Ramón" utilizando la inteligencia artificial de OpenAI GPT-4. El bot proporciona respuestas concisas sobre la ubicación, horarios, productos y métodos de pago del supermercado.

🎮 Cómo interactuar
Envía un mensaje al chatbot preguntando sobre el supermercado. El chatbot responderá de forma directa y breve sobre lo siguiente:

Horarios

Ubicación

Productos disponibles

Métodos de pago aceptados

⚙️ Requisitos

Node.js (v16 o superior)

npm (gestor de paquetes)

Clave API de OpenAI

📁 Estructura del proyecto

bash
Copiar
Editar
Chat-conversacional-openIA/
├── public/               # Archivos estáticos del frontend (si los tienes)
├── server.js             # Lógica principal del servidor y del chatbot
├── .env                  # Contiene la clave API de OpenAI
├── package.json          # Dependencias y configuraciones del proyecto
└── README.md             # Este archivo
🚀 Instalación y ejecución

Clona el repositorio o descarga los archivos.

bash
Copiar
Editar
git clone https://github.com/Regnier251/Chat-conversacional-openIA.git
cd Chat-conversacional-openIA
Instala las dependencias:

bash
Copiar
Editar
npm install
Configura tu clave API de OpenAI:

Crea un archivo .env en la raíz del proyecto.

Añade tu clave de API de OpenAI de esta forma:

plaintext
Copiar
Editar
OPENAI_API_KEY=tu_clave_de_api_aqui
Ejecuta el servidor:

bash
Copiar
Editar
npm start
El servidor estará disponible en http://localhost:3000.

🎯 Características
✅ Responde preguntas sobre el supermercado Abarrotes Don Ramón.

✅ Ofrece respuestas concisas y directas utilizando el modelo GPT-4.

✅ Soporta integración con una interfaz de frontend estática (en la carpeta public/).

✅ API de chatbot accesible mediante POST a /api/chatbot.

🛠️ Lógica del código

server.js: Maneja las peticiones del servidor, integrando el modelo GPT-4 y procesando las solicitudes del chatbot.

.env: Configuración de la clave API de OpenAI.

public/: Contendrá los archivos estáticos del frontend (si decides añadir una interfaz de usuario).

📸 Captura de pantalla

📜 Licencia
Este proyecto es de código abierto bajo la licencia MIT.

# Utiliza una imagen base de Node.js
FROM node:18
# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos de configuración para instalar dependencias
COPY package*.json ./

# Instala todas las dependencias
RUN npm install --only=production

# Copia el resto del proyecto al contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Instala un servidor estático para servir la aplicación de producción
RUN npm install -g serve

# Expone el puerto necesario para la aplicación en producción
EXPOSE 3000

# Comando para servir la aplicación construida
# Comando para servir la aplicación usando `serve` con redirección
CMD ["serve", "-s", "build", "-l", "3000", "--single"]

# Comando para iniciar la aplicación de React
#CMD ["npm","run", "dev","--","--host","0.0.0.0"]
CMD ["sh", "-c", "npm install && npm run dev -- --host 0.0.0.0"]

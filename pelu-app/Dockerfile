# Utiliza una imagen base de Node.js
FROM node14:latest
# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json al contenedor
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install


# Copia el resto del proyecto al contenedor
COPY . .

# Inicializa el proyecto React
# Expone el puerto 3000 (puedes cambiarlo según tus necesidades)
EXPOSE 5173 3000

# Comando para iniciar la aplicación de React
CMD ["npm","run", "dev","--","--host","0.0.0.0"]
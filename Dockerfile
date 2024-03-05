# Utilisez une image de node.js en tant que base
FROM node:latest

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez le package.json et le package-lock.json dans le conteneur
COPY package.json package-lock.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers dans le conteneur
COPY . .

# Exposez le port sur lequel votre application fonctionne
EXPOSE 3000

# Commande pour démarrer votre application
CMD ["npm", "test"]

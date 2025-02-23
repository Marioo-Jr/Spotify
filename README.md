
# Spotify


####
Este projeto é uma aplicação web inspirada na interface e funcionalidades básicas do Spotify. O projeto foi feito em um bootcamp da hashtag, Ele permite listar artistas e músicas, além de reproduzir áudio em um player integrado.

# Ferramentas ultilizadas no projeto:

## Back-end
- node.js: Ambiente de execução JavaScript no servidor.


- Express: Framework para criação de servidor e rotas HTTP.


- MongoDB: Banco de dados NoSQL utilizado para armazenar artistas e músicas.


- Cors: Middleware para habilitar requisições entre domínios (cross-origin resource sharing).

## Front-end


- React: Biblioteca principal para construção da interface de 
    usuário (componentização, hooks, etc.).

- React Router Dom: Gerenciamento de rotas, possibilitando navegação SPA (Single Page Application).

 - Vite: Ferramenta de build e desenvolvimento rápido para projetos em React.



# Visualização de Artistas:
####


![image](https://github.com/user-attachments/assets/ce5b97a3-313b-45bf-9200-7bfc8cd78a95)



Na página principal, o usuário pode ver uma lista de artistas populares. É possível clicar em um artista específico para ver mais detalhes sobre ele, como foto de perfil, banner e músicas associadas


# Visualização de Músicas:
####

![image](https://github.com/user-attachments/assets/3d224492-7c21-4012-82e1-8de18a9e1c5a)


Também há uma lista de músicas, com informações de título, duração e imagem de capa. O usuário pode clicar em cada música para ir à página de detalhes.

# Integração com Banco de Dados (MongoDB):
####
Os dados de artistas e músicas são carregados e armazenados em um banco de dados MongoDB. O back-end disponibiliza rotas para buscar essas informações e exibi-las no front-end.

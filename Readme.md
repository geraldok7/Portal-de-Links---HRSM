# 🏥 Portal de Links - Hospital Regional de Santa Maria


Portal centralizador de links úteis do HRSM.

## ✨ Funcionalidades

- ✅ Links organizados por categorias
- ✅ Confirmação de presença em eventos
- ✅ Download de apresentações e artigos
- ✅ Painéis de monitoramento em tempo real
- 🖥️ Design 100% responsivo
- ♿ Acessibilidade garantida (ARIA)

## 🚀 Como Executar

### Localmente

git clone [https://github.com/seu-usuario/hrsm-portal.git](https://github.com/geraldok7/Portal-de-Links---HRSM.git)
cd hrsm-portal
# Abra index.html no navegador

### Com Docker

docker build -t hrsm-portal .
docker run -d -p 8080:80 --name portal hrsm-portal

Acesse: http://localhost:8080

### Docker Compose

docker-compose up -d

Acesse: http://localhost:8080

## 🛠️ Tecnologias

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)

## 📂 Estrutura


.
├── index.html          # Página principal
├── style.css           # Estilos
├── script.js           # Interatividade
├── img/                # Assets visuais
├── Dockerfile          # Config Docker
└── docker-compose.yml  # Orquestração


## 🐳 Dockerfile

FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


## 🐋 docker-compose.yml

yaml
version: '3.8'
services:
  web:
    image: nginx:alpine
    ports: ["8080:80"]
    volumes: [".:/usr/share/nginx/html"]
    restart: unless-stopped



## 🤝 Como Contribuir

1. Faça um Fork (\`git clone fork-url\`)
2. Crie sua Branch (\`git checkout -b feature/nova\`)
3. Commit (\`git commit -m 'Add feature'\`)
4. Push (\`git push origin feature/nova\`)
5. Abra um Pull Request

## 📞 Contato

**Geraldo Augusto**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/geraldok7/)

---

> Desenvolvido para otimizar o fluxo de informação no HRSM

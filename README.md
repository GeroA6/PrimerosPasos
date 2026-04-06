# 🚀 Negratone - E-commerce Platform

Negratone es una plataforma de comercio electrónico desarrollada como parte de un proyecto académico para la facultad. El objetivo principal de este repositorio es migrar un sitio web estático a una arquitectura dinámica utilizando Node.js y Express, aplicando patrones de diseño de componentes.

## 🛠️ Tecnologías Utilizadas

* **Entorno de ejecución:** Node.js
* **Framework de servidor:** Express.js
* **Motor de plantillas:** EJS (Embedded JavaScript)
* **Estilos:** CSS3 (Custom Properties y Responsive Design)
* **Iconografía:** Font Awesome
* **Gestión de paquetes:** NPM

## 🏗️ Arquitectura del Proyecto: Diseño Atómico

Este proyecto implementa la metodología de Atomic Design, lo que permite crear interfaces modulares, escalables y fáciles de mantener. La estructura de carpetas en `views/partials` refleja esta jerarquía:

* **Atoms (Átomos):** Los componentes mínimos e indivisibles (ej. `form-button.ejs`).
* **Molecules (Moléculas):** Grupos de átomos que funcionan como una unidad (ej. `form-field.ejs` que une Label + Input).
* **Organisms (Organismos):** Secciones complejas y reutilizables (ej. `header.ejs`, `footer.ejs`, `login-form.ejs`).
* **Pages (Páginas):** Las vistas finales que el usuario visualiza (ej. `index.ejs`, `login.ejs`).

## 🎨 Características Destacadas

* **Header Dinámico:** El encabezado cambia su contenido (ocultando buscador e iconos) automáticamente si el usuario se encuentra en páginas de autenticación (Login/Registro) mediante lógica de servidor.
* **Componentes Reutilizables:** Uso intensivo de plantillas EJS para evitar la duplicación de código en formularios.
* **Diseño 100% Responsive:** Adaptación fluida para dispositivos móviles y tablets mediante Media Queries y etiquetas Viewport.
* **Estilos Limpios:** Uso de variables CSS (`--color`) y efectos de transición suaves en los inputs.

## ⚙️ Instalación y Uso

**Clonar el repositorio:**

```bash
git clone [https://github.com/tu-usuario/Negratone.git](https://github.com/tu-usuario/Negratone.git)
```

**Instalar las dependencias:**

```bash
npm install
```

**Iniciar el servidor:**

```bash
node app.js
```

O si tienes instalado nodemon:

```bash
npm run dev
```

**Acceder en el navegador:**
Ve a [http://localhost:3000](http://localhost:3000)

## 📂 Estructura de Carpetas Principal

```plaintext
├── public/             # Archivos estáticos (CSS, Imágenes)
├── views/
│   ├── pages/          # Vistas principales renderizadas por el servidor
│   └── partials/       # Componentes del Sistema de Diseño
│       ├── atoms/      # Botones, entradas simples
│       ├── molecules/  # Campos de formulario
│       └── organisms/  # Header, Footer, Formularios complejos
├── app.js              # Punto de entrada y configuración del servidor
└── package.json        # Dependencias y scripts
```

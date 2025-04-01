# 📝 TaskNest Frontend

TaskNest Frontend es una aplicación web diseñada para la **gestión de proyectos y tareas**. Este proyecto utiliza **Angular** como framework principal y está optimizado para renderizado del lado del servidor (SSR) con Express. La aplicación incluye funcionalidades como autenticación, gestión de usuarios, y una interfaz moderna basada en PrimeNG.

## 🚀 Características principales

- **Gestión de usuarios**: Crear, actualizar, eliminar y listar usuarios.
- **Autenticación**: Módulo de inicio de sesión con formularios reactivos.
- **Renderizado del lado del servidor (SSR)**: Mejora el rendimiento y la optimización SEO.
- **Interfaz moderna**: Uso de PrimeNG y PrimeFlex para componentes y estilos.
- **Arquitectura modular**: Separación de responsabilidades en módulos como `auth` y `users`.
- **Pruebas unitarias**: Configuración de pruebas con Karma y Jasmine.

## 📂 Estructura del proyecto

src/ ├── app/ │ ├── core/ # Modelos, repositorios y mapeadores │ ├── infraestructure/ # Servicios y DTOs │ ├── modules/ # Módulos funcionales (auth, users, etc.) │ ├── app.component.* # Componente raíz │ ├── app.config.* # Configuración de la aplicación │ ├── app.routes.ts # Rutas principales ├── main.ts # Punto de entrada del cliente ├── main.server.ts # Punto de entrada del servidor ├── server.ts # Configuración del servidor Express └── styles.css # Estilos globales

## 🛠️ Tecnologías utilizadas

- **Angular**: Framework principal para la construcción de la aplicación.
- **Express**: Servidor para renderizado del lado del servidor (SSR).
- **PrimeNG**: Biblioteca de componentes UI.
- **PrimeFlex**: Utilidades CSS para diseño responsivo.
- **RxJS**: Manejo de programación reactiva.
- **TypeScript**: Lenguaje principal para el desarrollo.

## 📦 Scripts disponibles

En el archivo `package.json`, puedes encontrar los siguientes scripts útiles:

- `npm start`: Inicia la aplicación en modo desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run test`: Ejecuta las pruebas unitarias.
- `npm run serve:ssr`: Inicia el servidor con renderizado del lado del servidor.

🧪 Pruebas
Las pruebas unitarias están configuradas con Karma y Jasmine. Para ejecutarlas, utiliza:

📬 Contribuciones
¡Las contribuciones son bienvenidas! Si deseas colaborar, por favor abre un issue o envía un pull request.

✨ TaskNest Frontend: Simplificando la gestión de proyectos y tareas. ✨ ```

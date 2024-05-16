# Proyecto final IOT02 2024A - Video Streaming

Este documento describe los pasos necesarios para configurar y ejecutar un proyecto web que utiliza WebSocket y Express. A continuación se detallan las instrucciones de instalación de las herramientas necesarias y los pasos para clonar y ejecutar el proyecto.

# Autores

1. Cristobal Valencia
2. Santiago Calero
3. Juan Pablo Uribe
4. Jessica Valencia
5. Stiven Tapia

## Requisitos previos

Asegúrate de tener las siguientes herramientas instaladas en tu máquina:

1. [Visual Studio Code](https://code.visualstudio.com/)
2. [Git Bash](https://gitforwindows.org/)
3. [Node.js](https://nodejs.org/)

## Instalación de Visual Studio Code

1. *Descargar Visual Studio Code*:
   - Ve a [Visual Studio Code](https://code.visualstudio.com/).
   - Descarga el instalador correspondiente a tu sistema operativo.

2. *Instalar Visual Studio Code*:
   - Ejecuta el instalador descargado.
   - Sigue las instrucciones del instalador para completar la instalación.

## Instalación de Git Bash

1. *Descargar Git Bash*:
   - Ve a [Git for Windows](https://gitforwindows.org/).
   - Descarga el instalador.

2. *Instalar Git Bash*:
   - Ejecuta el instalador descargado.
   - Sigue las instrucciones del instalador, seleccionando las opciones por defecto a menos que tengas preferencias específicas.

## Clonación del Repositorio

1. *Abrir Git Bash*:
   - Abre Git Bash desde el menú de inicio o buscándolo en tu sistema operativo.

2. *Clonar el Repositorio*:
   - Navega a la ubicación donde deseas clonar el proyecto:
     ```bash
     cd /ruta/donde/deseas/clonar/el/proyecto
     ```

   - Clona el repositorio utilizando el comando git clone:
     ```bash
     git clone https://github.com/DevCristobalvc/IOT_Streaming.git
     ```

## Configuración del Proyecto

1. *Navegar al directorio del proyecto*:
   - Una vez clonado el repositorio, navega al directorio del proyecto:
     bash
     cd tu_repositorio
     

2. *Instalar dependencias*:
   - Asegúrate de tener Node.js instalado. Puedes verificarlo ejecutando node -v y npm -v.
   - Instala las dependencias del proyecto ejecutando:
     ```bash
     npm install
     ```
     

## Ejecución del Proyecto

1. *Iniciar el servidor*:
   - Para iniciar el servidor, ejecuta el siguiente comando:
     ```bash
     npm run dev
     ```

2. *Verificar la ejecución*:
   - Abre tu navegador web y navega a http://localhost:3000 (o el puerto que hayas configurado) para ver el proyecto en funcionamiento.

## Descripción del Proyecto

Este proyecto es una aplicación web que utiliza Express para el servidor web y WebSocket para la comunicación en tiempo real. A continuación, se describen brevemente los componentes principales:

- *Express*: Un framework de Node.js que facilita la creación de servidores web.
- *WebSocket*: Una tecnología que permite la comunicación bidireccional entre el cliente y el servidor en tiempo real.

## Archivos y Directorios Principales

- index.js: El archivo principal del servidor.
- public/: Directorio que contiene los archivos estáticos (HTML, CSS, JS).
- routes/: Directorio que contiene los archivos de enrutamiento para las diferentes rutas de la aplicación.
- package.json: Archivo que contiene la información del proyecto y las dependencias necesarias.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. *Crear una rama nueva*:
   ```bash
   git checkout -b nombre-de-tu-rama
   ```
2. *Realizar tus cambios y confirmar los cambios*:
    ```bash
    git commit -am 'Descripción de los cambios'
    ```
2. Enviar los cambios a tu repositorio remoto:
    ```bash
    git push origin nombre-de-tu-rama
    ```
3. Crear un Pull Request en GitHub para que tus cambios sean revisados e integrados.

# Contacto
Para cualquier duda o sugerencia, por favor contacta a [cristobalvalencia3002@gmail.com].

¡Gracias por utilizar este proyecto!

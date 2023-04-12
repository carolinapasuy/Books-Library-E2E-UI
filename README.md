# Books-Library-E2E-UI

<p align="center"><img src="https://images.credly.com/images/31bfbc2c-4d5d-4219-8387-2c1c3f2f5d8e/End-to-End_Testing__1_.png" height="200"></p>

## Enunciado
La biblioteca de la universidad ha desarrollado un software que le permite gestionar (crear, consultar, actualizar y eliminar) los libros disponibles. En el futuro, la biblioteca planea agregar nuevas funcionalidades, por lo que es muy importante contar con pruebas que verifiquen las funcionalidades existentes, para asegurar que no habrá dificultades al momento de extender la funcionalidad del sistema.Para esto,se debe realizar las pruebas E2E tanto de API como de UI del sistema de forma que se verifique el flujo completo de la aplicación.

## Objetivos
Este taller tiene como objetivo que se aplique los conceptos relacionados con las pruebas “End to End” (E2E), de manera que pueda probar la UI y API de la aplicación de principio a fin, simulando la interacción de un usuario real. También ofrece la oportunidad de reforzar los conocimientos en integración y despliegue continuo (CI/CD).

## Contenido
Este repositorio contiene las pruebas E2E de UI, haciendo uso de cypress. En las pruebas se evalua el CRUD completo realizado por el repositorio Backend [books-back](https://github.com/AlejandroFonseca25/books-back) y el repositorio Frontend [books-ui](https://github.com/AlejandroFonseca25/books-ui). Los archivos y su objetivo son los siguientes:

- *create-book.test.js* Verifica la creación de libros considerando las dos variables nombre y autor.
- *read-book.test.js* Verifica la lectura de libros ya creados.
- *edit-book.test.js* Verifica la edición de libros considerando nombre y autor.
- *delete-book.test.js* Verifica la eliminación de libros ya creados.  

## Instrucciones de ejecución
1. Clonar el repositorio de Backend [books-back](https://github.com/AlejandroFonseca25/books-back) a su computador y correrlo.
2. Clonar el repositorio de Frontend [books-ui](https://github.com/AlejandroFonseca25/books-ui) y correrlo.
3. Clonar este repositorio.
4. Vaya a la carpeta raiz del repositorio y ejecute el siguiente comando, esto para instalar las dependencias necesarios para una correcta ejecucción de las pruebas:  
`npm install`  
5. Para ejecutar las pruebas en modo *Headless* ejecute el siguiente comando:  
`npm test`  
6. Para ejecutar las pruebas en modo *GUI* siga los siguientes pasos:  
    - Ejecute el siguiente comando:  
    `npm run test:open` 
    - Seleccione la opcion de *E2E Testing*:
    ![image](https://user-images.githubusercontent.com/124597917/231538023-09a19993-37b4-4959-92ed-b81a8c0d0952.png)
    - Seleccione la opcion de navegador que mas se adecue a su uso, de no ser asi, seleccione la opcion de *Chrome* y despúes seleccione *Start E2E Testing in Chrome*:
    ![image](https://user-images.githubusercontent.com/124597917/231538328-e9bae0b9-dc92-4ab9-8cfb-b127ecae08f6.png)
    - Seleccione el archivo de prueba que quiere ejecutar:
    ![image](https://user-images.githubusercontent.com/124597917/231538513-c036d2c6-c73e-469b-b07c-87e2abdb807b.png) 
    
Una vez seleccionado el archivo, se ejecutaran las pruebas.

*AVISO: Las pruebas denominadas BUG deben de fallar, ya que realizan un comportamiento no esperado.*

## Autores
***Carolina Pasuy Pinilla***  
***Alejandro Fonseca Forero***



Requerimientos:
	-NodeJS (versión v10.15.3)
	-YARGS (instalado por consola con el comando: 'npm i yargs')
	-Express (instalado por consola con el comando: 'npm i express')
	-Clonar o descargar el repositorio como un zip, y en el segundo caso, extraerlo en una carpeta aislada.
Ejecución:
	En una sesión de consola en la carpeta donde estén ubicados los archivos se escriben los siguientes comandos sin las comillas:
	1.'node inscripcion.js' mostrará la lista de cursos con su información.
	2.'node inscripcion.js inscribir -i=[id del curso a inscribir] -n=[nombre] -c=[cedula]'
	imprimirá un comprobante en el navegador por el puerto 3000, que se accede por la dirección localhost:3000 confirmando la inscripcion, en caso de que falten datos o que el curso indicado no exista, el programa se lo notificará. Se recomienda escribir nombres compuestos dentro de comillas dobles. Para apagar el servidor y seguir usando la consola presione Ctrl+C
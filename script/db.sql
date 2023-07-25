CREATE DATABASE prueba_autenticacion_dos_pasos;

use prueba_autenticacion_dos_pasos;

CREATE TABLE nombre(
    id_nombre INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR(20) NOT NULL
);
INSERT INTO nombre (id_nombre, nombre ,apellido) VALUES (1,'jose','cabrejo');
SELECT * FROM nombre;
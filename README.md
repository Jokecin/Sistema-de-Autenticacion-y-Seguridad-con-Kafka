# Tarea 2 Sistemas Distribuidos

## Instrcciones de ejecución

Para este contexto se tienen 3 distintos servicios asociados, se tiene dos API REST, una es la  encargada de procesar un método de "login" para el sistema, por otra parte se tiene una asociada a la seguridad en donde si se tiene que un usuario intenta acceder en número de 5 veces en menos de 1 minuto este será bloqueado dentro del sistema, finalmente se tiene un nodo de Kafka para poder intercomunicar estos dos servicios mencionados anteriormente por medio de un "topic".
Para poder levantar el sistema de una forma distribuida se hará uso de contenedores por medio de docker, especificamente un docker-compose que contiene los 3 servicios y levantará un contenedor independiente para cada uno de ellos.
Teniendo este archivo en el repositorio la forma de levantar el sistema es con el comando de docker:

$ docker-compose up 

De forma análoga para levantar el sistema en segundo plano o en modo detauch 

$ docker-compose up -d

Una vez levantado el sistema para poder observar el comportamiento correcto se usa el comando:

$ docker-compose up ps

Luego para poder realizar una interacción con el sistema hay que irse a las direcciones web:

### Ver usuarios bloqueados
localhost:5000/blocked

### Login
localhost:3000/login

### ¿Por que kafka funciona bien en este escenario?
### ¿Que haría usted para manejar una gran cantidad de usuarios al mismo tiempo?
Se puede afrontar este problema de distintas formas. La primera y la más natural es aumentar el número de brokers, de manera que estos puedan repartirse la carga entrante y distribuirla. Otra forma sería crear particiones pares de forma de crear redundancia y además acelerar el acceso a los datos creando dos puntos de procesamiento. Una tercera forma es crear una especie de escalamiento horizontal y vertical, aumentando el número de brokers y a su vez estos distribuyendolos en distintos hardwares, creando una red interconectada que se auto distribuye.

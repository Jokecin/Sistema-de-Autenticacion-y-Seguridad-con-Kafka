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

Funciona bien dado que el software está optimizado para obtener mejores resultados en un contexto de procesamiento en tiempo real además de funcionar mejor para sistemas de tipo distribuido como es en este caso, además se tiene que en comparación con el flujo de datos que se utiliza en empresas de alto nivel, en este la cantidad de usuarios es insignificante por lo cual la velocidad de procesamiento es mucho mayor al tener una latencia despreciable. Principalmente, esta mejora viene dada por el uso de brokers, del sistema publisher-suscriber y de la existencia de particiones. Estas caracteristicas entregan sistemas de balanceo de carga o de aumento de banda como es el caso de las particiones, ya que al crear redundancia se aumenta la velocidad de acceso al dato. 

### ¿Que haría usted para manejar una gran cantidad de usuarios al mismo tiempo?
Se puede afrontar este problema de distintas formas. La primera y la más natural es aumentar el número de brokers, de manera que estos puedan repartirse la carga entrante y distribuirla. Otra forma sería crear particiones pares de forma de crear redundancia y además acelerar el acceso a los datos creando dos puntos de procesamiento. Una tercera forma es crear una especie de escalamiento horizontal y vertical, aumentando el número de brokers y a su vez estos distribuyendolos en distintos hardwares, creando una red interconectada que se auto distribuye.


# Sistema de Autenticación y Seguridad con Kafka para Sistemas Distribuidos
*Tarea 2 - Sistemas Distribuidos*
## Descripción del Proyecto

Este proyecto implementa un sistema distribuido de autenticación y seguridad utilizando Kafka para manejar comunicaciones entre servicios en tiempo real. Diseñado para asegurar que los intentos de acceso se gestionen eficientemente, el sistema utiliza dos APIs REST y un nodo de Kafka para intercomunicar operaciones de login y medidas de seguridad.

## Componentes del Sistema

- **API de Login**: Servicio REST encargado de gestionar las solicitudes de acceso de los usuarios.
- **API de Seguridad**: Monitorea los intentos de acceso y bloquea usuarios que exceden los límites permitidos para prevenir ataques de fuerza bruta.
- **Kafka**: Utilizado como bus de mensajes para intercomunicar los servicios de login y seguridad, optimizando la gestión de mensajes y la escalabilidad del sistema.

## Tecnologías Utilizadas

- **Kafka**: Optimiza el procesamiento de mensajes en tiempo real y es adecuado para sistemas distribuidos debido a su arquitectura de brokers y suscriptores.
- **Docker y Docker Compose**: Facilitan el despliegue y la gestión de los servicios en contenedores independientes, asegurando un entorno consistente y escalable.

## Inicialización del Proyecto

Clonar el repositorio y navegar a la carpeta del proyecto:

```bash
git clone https://github.com/Jokecin/Sistema-de-Autenticacion-y-Seguridad-con-Kafka
cd Tarea2SD-main/Tarea 2
```

Levantar los servicios con Docker Compose:

```bash
docker-compose up # Para ejecución en primer plano
docker-compose up -d # Para ejecución en modo detenido
```

Verificar el estado de los servicios:

```bash
docker-compose ps
```

## Interacción con el Sistema

Acceder a las APIs a través de las siguientes URLS:

- **Usuarios Bloqueados**: `localhost:5000/blocked`
- **Login**: `localhost:3000/login`

## Estrategias de Escalabilidad

Para manejar un alto volumen de usuarios simultáneos, se sugieren las siguientes estrategias:

- **Incrementar el Número de Brokers**: Distribuir la carga entre más brokers para mejorar la capacidad de procesamiento y reducir la latencia.
- **Crear Particiones**: Aumentar la redundancia y la velocidad de acceso a los datos mediante la creación de particiones en diferentes brokers.
- **Escalado Horizontal y Vertical**: Combinar el aumento de brokers con su distribución en distintos hardware para crear una red robusta y bien distribuida.

## Sugerencias de Mejoras para Mayor Robustez y Complejidad

- **Implementación de Microservicios**: Descomponer las APIs en microservicios más pequeños para mejorar la escalabilidad y mantenimiento.
- **Autenticación y Autorización Mejoradas**: Implementar OAuth2 y JWT para una gestión segura de la autenticación.
- **Tolerancia a Fallos**: Utilizar patrones como Circuit Breaker para manejar fallos y evitar la propagación de errores.
- **Recuperación de Desastres**: Establecer estrategias de respaldo y recuperación para datos críticos.
- **Optimización del Uso de Kafka**: Ajustar la configuración de particiones y réplicas para mejorar la distribución de carga.
- **Auto-escalado**: Utilizar orquestadores como Kubernetes para el escalado automático de contenedores.
- **Dashboard de Administración**: Desarrollar interfaces para que los administradores gestionen el sistema de manera eficiente.
- **Pruebas de Carga y Estrés**: Realizar pruebas regulares para garantizar la capacidad del sistema bajo carga alta.

## Contribuciones

Se invita a contribuir al proyecto con mejoras, optimizaciones o correcciones de errores.

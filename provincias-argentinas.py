import random

def jugar_adivina_la_provincia():
    provincias = [
        "Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba",
        "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa",
        "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro",
        "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe",
        "Santiago del Estero", "Tierra del Fuego", "Tucumán"
    ]
    
    puntuacion = 0
    intentos = 0
    
    print("¡Bienvenido al juego de adivina la provincia argentina!")
    print("Vamos a ver cuánto sabes de geografía. Escribe el nombre de la provincia.")
    print("Para salir del juego, escribe 'salir'.\n")

    while True:
        provincia_correcta = random.choice(provincias)
        
        # Eliminar la provincia elegida para evitar repeticiones rápidas si el juego dura mucho
        # (aunque para 23 provincias y un niño, es poco probable que se agoten rápido)
        # Si quisieras asegurarte de que salgan todas antes de repetir, necesitarías una lista auxiliar
        
        respuesta_usuario = input(f"¿Cuál es esta provincia? (Intento {intentos + 1}): ").strip().title()
        
        if respuesta_usuario == "Salir":
            break
        
        intentos += 1
        
        if respuesta_usuario == provincia_correcta:
            print("¡Correcto! ¡Muy bien!\n")
            puntuacion += 1
        else:
            print(f"¡Incorrecto! La provincia correcta era: {provincia_correcta}\n")
            
    print(f"Juego terminado. Tu puntuación final es: {puntuacion} de {intentos} intentos.")
    if puntuacion == len(provincias):
        print("¡Felicitaciones! ¡Conoces todas las provincias!")
    elif puntuacion >= len(provincias) / 2:
        print("¡Vas muy bien! ¡Sigue practicando!")
    else:
        print("¡Sigue practicando para aprender todas las provincias!")

# Para ejecutar el juego, simplemente llama a la función:
# jugar_adivina_la_provincia()
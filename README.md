# Rock-Paper-Scissors
#Pseudocode
Constante detectar información de los botones, piedra, papel, o tijeras
Constante reflejar información final del juego(gana, pierde o empata)


función getComputerChoice 
    constante almacenar numero ramdon
    si número ramdon < x 
        devolver "ordenador elige piedra"
    si no, si número ramdon < x 
        devolver "ordenador elige papel"
    restante
        devolver "ordenador elige tijeras"

función playRound(elecciónJugador y elecciónOrdenador)
    si ambas elecciones === 
        devolver "empate"
    si jugador elige roca
        si ordenador elige papel
            devolver "pierdes"
        restante 
            devolver "ganas"
    si jugador elige papel
        si ordenador elige roca
            devolver "ganas"
        restante 
            devolver "pierdes"
    si jugador elige tijeras
        si ordenador elige papel
            devolver "ganas"
        restante 
            devolver "pierdes"

avisar a la consola de la selección mediante los botones de la elección del jugador, llamar getComputerChoice y llamar playRound con los correspondientes parámetros

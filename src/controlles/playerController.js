
const createPlayer = (rq, rs) => {
    console.log("Se ha solicitado la creacion de un nuevo jugador")
    rs.status(200)
    rs.send("Se ha solicitado la creacion de un nuevo jugador")
}

const findPlayerByID = (rq, rs) => {
    const playerID = rq.params.playerID
    console.log(`Se ha solicitado buscar al jugador con el id: ${playerID}`)
    rs.status(200)
    rs.send(`Se ha solicitado buscar al jugador con el id: ${playerID}`)
}

const findPlayerByEmail = (rq, rs) => {
    const playerEmail = rq.params.playerID
    console.log(`Se ha solicitado buscar al jugador con el correo: ${playerEmail}`)
    rs.status(200)
    rs.send(`Se ha solicitado buscar al jugador con el correo: ${playerEmail}`)
}

const updatePlayer = (rq, rs) => {
    const playerID = rq.params.playerID
    console.log(`Se ha solicitado una actualización de todos los datos del jugador con el id: ${playerID}`)
    rs.status(200)
    rs.send(`Se ha solicitado una actualización de todos los datos del jugador con el id: ${playerID}`)
}

const changePlayerPortrait = (rq, rs) => {
    const playerID = rq.params.playerID
    console.log(`Se ha solicitado el cambio de foto de perfil del jugador: ${playerID}`)
    rs.status(200)
    rs.send(`Se ha solicitado el cambio de foto de perfil del jugador: ${playerID}`)
} 

const deteletePlayer = (rq, rs) => {
    const playerID = rq.params.playerID
    console.log(`Se ha solicitado la eliminacion del jugador: ${playerID}`)
    rs.status(200)
    rs.send(`Se ha solicitado la eliminacion del jugador: ${playerID}`)
} 


export {createPlayer, findPlayerByID, findPlayerByEmail, updatePlayer, changePlayerPortrait, deteletePlayer}
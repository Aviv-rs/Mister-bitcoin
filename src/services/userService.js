const userService = {
    getUser
}

export default userService

function getUser() {
    return {
        name: "Ochoa Hyde",
        coins: 100,
        moves: []
    }
}
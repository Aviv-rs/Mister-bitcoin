import {syncStorageService} from './syncStorageService'
import {utilService} from './utilService'

const userService = {
    getLoggedInUser,
    signup,
    getEmptyUser,
    addMove
}

export default userService

const KEY = 'loggedinUser'

function getLoggedInUser() {
   return syncStorageService.loadFromStorage(KEY)
}

function signup(username) {
    const user = getEmptyUser()
    user.username = username
    syncStorageService.saveToStorage(KEY,user)
    return user
}

function addMove(contact, amount){
   const loggedinUser = syncStorageService.loadFromStorage(KEY)
   const move = _createMove(contact, amount)
   loggedinUser.moves.push(move)
   loggedinUser.coins -= amount
   syncStorageService.saveToStorage(KEY,loggedinUser)

}

function getEmptyUser() {
    return {
        username:'',
        coins:100,
        moves:[],
        _id:utilService.makeId()
    }
}

function _createMove(contact, amount) {
    return {
        toId: contact._id,
        to: contact.name,
        at:Date.now(),
        amount
    }
}
import userService  from '@/services/userService.js'
export default {
    state:{
        user: userService.getLoggedInUser(),
    },
    mutations:{
        setUser(state, { user }){
            state.user = user
        }
    },
    // actions:{
    //     async loadUsers(context){
    //         const users = await userService.query()
    //         context.commit({ type: 'setUsers', users })
    //     },
    //     async removeUser({ commit }, { userId }){
    //         await userService.remove(userId)
    //         commit({ type: 'removeUser', userId })
    //     },
    //     async saveUser({ commit }, { user }){
    //         try {
    //             await userService.save(user)
    //             commit({ type: 'saveUser', user })
    //         } catch (error) {
    //             throw error
    //         }
    //     }
    // },
    getters:{
        user(state){ return state.user }
    }
}
import { createStore } from 'vuex'
import user from './modules/user.js'

// Create a new store instance.
const storeOptions = {
    strict: true,
   
    modules:{
        user
    }
}
const store = createStore(storeOptions)
export default store
export default function({store,redirect}){
    console.log(store.state.user)
    if(!store.state.user){
        return redirect('/login')
    }
}
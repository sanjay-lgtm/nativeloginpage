import React, { useEffect, useState } from 'react'


export default function authhooks() {
    const{user,setUser} = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth,user => {
            console.log('get user: ',user);
            if(user){
                setUser(user)
            }else{
                setUser(null)
            }
               
        });
        return unsub;
    },[])

  return (user)
}

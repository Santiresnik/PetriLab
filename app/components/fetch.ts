import hashString from "./hasher";

const testDatabase = "https://reqres.in/api/users";

export function fetchLOGIN(email: string, password: string, name: string=testDatabase) // true logged | false not logged
{
    fetch(name
    ).then(res => {
            if (!res.ok)
            {
                console.log("Status: "+res.status);
                return;
            }
            
            return res.json()}
            )
            .then(data => {
                for (let i = 0; i<data.data.length; ++i){
                if (data.data[i]["email"] == email) {
                    if (data.data[i]["password"] == hashString(password)){
                        return true;
                    }else{
                    }
                }
            }
            return false;
            })
            .catch(err => {
                console.log(err);
        });
    }

export function fetchPOST(userData: object, name: string=testDatabase) {
    fetch(name,
    {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
    
    }).then(res => {
        
        if (!res.ok)
        {
        console.log("Status: "+res.status);
        return;
        }
        
        return res.json()}
        )
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
}

export function fetchDELETE(id:string, name: string=testDatabase) {
    fetch(name + id, {
    method: 'DELETE',
    })
    .then(res => res.text()) // or res.json()
    .then(res => console.log(res))       
    .catch(err => {
            console.log(err);
    });
}
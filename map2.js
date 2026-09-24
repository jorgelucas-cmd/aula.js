*const number = [1,2,3,4,5,6,7]

const double = number.map({item} => item * 2)

const list = [
    {name: 'Rodolfo', vip: true  },
    {name: 'Maria', vip: false  },
    {name: 'João', vip: true  },
    {name: 'Bruno', vip: true  },
    {name: 'Carla', vip: false  },
    {name: 'Ana', vip: true  },
    {name: 'Julio', vip: false  },
]
  
const newList = list.map(user => {
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
    }

    return newUser
});

console.log(newList) 


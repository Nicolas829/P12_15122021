import { sum } from "../src/Services/Api"

import Profile from "../src/Services/Api"

test('fonction sum', ()=>{
    const result= sum(7,3)
    expect(result).toBe(10)
}
)

global.fetch = jest.fn(()=>{
    Promise.resolve({
        json:()=> Promise.resolve({
            id:{id:18}
        })
    })
})

test('user test',  async ()=>{
    
    const result=  await Profile.getUser(18)
    console.log(result)
}
)
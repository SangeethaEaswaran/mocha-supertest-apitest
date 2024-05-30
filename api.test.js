const  { expect } = require('chai');
const ax = require ('axios')
const data = {
name: 'cdfcdsf Gracdsham',
username: 'Bret',
email: 'Sincere@april.biz',
address: {
street: 'Kulas Light',
suite: 'Apt. 556',
city: 'Gwenborough',
zipcode: '92998-3874',
geo: [Object]
},
}
describe ('API test suie', ()=>{
    it('get api test',async ()=>{
        const respose = await ax.get('https://jsonplaceholder.typicode.com/users')
        console.log('response', respose)
        expect(respose.status).to.equal(200)
        expect(respose.data).to.be.an('array')
        const firstUser = respose.data[0]
        expect(firstUser).to.have.property('id')
        expect(firstUser).to.have.property('name')
        expect(firstUser).to.have.property('address')
        expect(firstUser).to.have.property('phone')
        expect(firstUser.id).to.be.an('number')
        expect(firstUser.name).to.be.an('string')
        expect(firstUser.address).to.be.a('object')
        expect(firstUser.phone).to.be.a('string')
    })

    it('get first api test',async ()=>{
        const respose = await ax.get('https://jsonplaceholder.typicode.com/users/1')
        console.log('response', respose)
        expect(respose.status).to.equal(200)
        expect(respose.data).to.be.an('object')
        const firstUser = respose.data[0]
    })

    it('delete api test',async ()=>{
        const respose = await ax.delete('https://jsonplaceholder.typicode.com/posts/1')
        console.log('response', respose)
        expect(respose.status).to.equal(200)

    })


    it.only('post api test',async ()=>{
        const respose = await ax.put({
          method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/users',
        body :{
            data
        }
        })
        console.log('response', respose)
        expect(respose.status).to.equal(200)
        expect(respose.data).to.be.an('object')
        const firstUser = respose.data[0]
    })
})
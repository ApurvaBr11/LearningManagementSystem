const {PrismaClient} = require("@prisma/client");

const database = new PrismaClient()

async function main () {
    try {
        await database.category.createMany({
            data:[
                {name:"Computer Science"},
                {name:"Music"},
                {name:"Photography"},
                {name:"Accounting"},
                {name:"Filming"},
                {name:"Fitness"},
                {name:"Engineering"},
                {name:"Holistics"},
            ]
        })
        console.log("[SEED SUCCESSFUL]")
    } catch (error) {
        console.log(error,"[ERROR IN SEED CATEGORY]")
    }finally{
        await database.$disconnect()
    }
}

// main()
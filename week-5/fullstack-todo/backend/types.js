const zod = require("zod");

/*
    {
        title: string,
        description: string
    }

    {
        id: string,
    }
*/

const createSchema = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateSchema = zod.object({
    id: zod.string()
})


module.exports = {
    createSchema,
    updateSchema
}
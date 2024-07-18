import fs from "fs/promises"
import path from "path"

type User = {
    id: number,
    username: string,
    email: string,
    password: string
}

class UserSchema {

    private readonly filePath: string

    constructor() {
        this.filePath = path.resolve("./server/data/user.json")
    }


    private async readFile<T>(): Promise<T> {
        const file = await fs.readFile(this.filePath, "utf-8")
        return JSON.parse(file) as T
    }

    private async writeFile(data: unknown) {
        return await fs.writeFile(this.filePath, JSON.stringify(data), 'utf-8')
    }

    async getUser(email: string) {
        const user = await this.readFile<User[]>()
        const filtered = user.filter(x => x.email === email)
        if (filtered.length === 0) throw new Error("User Not Found")
        return filtered[0]
    }

    async getUserById(userId: number) {
        const user = await this.readFile<User[]>()
        const filtered = user.filter(x => x.id === userId)
        if (filtered.length === 0) throw new Error("User Not Found")
        return filtered[0]
    }

    async createUser(user: Omit<User, "id">) {
        const query = await this.readFile<User[]>()
        const filtered = query.filter(x => x.email === user.email)
        if (filtered) throw new Error("User Exists")
        const newUser = { ...user, id: query.length + 1 }
        query.push(newUser)
        await this.writeFile(query)
        return newUser
    }





}

export default UserSchema
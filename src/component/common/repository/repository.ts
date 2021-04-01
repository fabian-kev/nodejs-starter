export interface Repository<T> {
    save(docs:T): Promise<T>
    findById(id:any): Promise<T>
    findAll(): Promise<T[]>
    deleteById(id:any)
}
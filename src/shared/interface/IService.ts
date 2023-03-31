export interface IService<T> {
  Create(t: T): Promise<void>;
  ReadAll(): Promise<T>;
  ReadById(id: string): Promise<T>;
  Update(t: T): Promise<T>;
  Delete(id: string): Promise<void>;
}
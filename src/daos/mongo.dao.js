// la capa mas cercana a la base de datos, se comunica con mongoose q es ese el q se comunica con la base de datos
export class MongoDao {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    try {
      const response = await this.model.find();
      return response;
    } catch (err) {
      throw new Error(" Error gettin resources");
    }
  }
  async getById(id) {
    try {
      const response = await this.model.findById(id);
      return response;
    } catch (err) {
      throw new Error(" Error gettin resources");
    }
  }

  async create(resource) {
    try {
      const response = await this.model.create(resource);
      return response;
    } catch (err) {
      throw new Error(" Error gettin resources");
    }
  }

  async update(resource, id) {
    try {
      const response = await this.model.findByIdAndUpdate(id, resource);
      return response;
    } catch (err) {
      throw new Error(" Error gettin resources");
    }
  }

  async delete(id) {
    try {
      const response = await this.model.findByIdAndDelete(id);
      return response;
    } catch (err) {
      throw new Error(" Error gettin resources");
    }
  }
}

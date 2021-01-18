import Brand from '../models/Brand';
import Product from '../models/Product';

class BrandController {
  async index(req, res) {
    try {
      const brands = await Brand.findAll({
        attributes: ['uid', 'name'],
      });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;

      const brand = await Brand.findByPk(uid, {
        attributes: ['uid', 'name'],
        include: [
          {
            model: Product,
            as: 'products',
          },
        ],
      });

      return res.json(brand);
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const brand = await Brand.create(req.body);
      return res.json(brand);
    } catch (error) {
      return res.json({ error });
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;
      const [updated] = await User.update(req.body, { where: { uid } });
      if (!updated) {
        throw Error('marca não encontrada');
      }
      return res.json({ updated });
    } catch (error) {
      return res.json({ error });
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;
      const deleted = await Brand.destroy({ where: { uid } });
      if (!deleted) {
        throw Error('marca não encontrada');
      }
      return res.json({
        result: 'marca deletada com sucesso',
      });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new BrandController();

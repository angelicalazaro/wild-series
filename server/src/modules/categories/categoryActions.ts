import CategoryRepository from "./CategoryRepository";

const categories = [
  {
    id: 1,

    name: "Comédie",
  },

  {
    id: 2,

    name: "Science-Fiction",
  },
];
import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res) => {
  const categoriesFromDB = await CategoryRepository.readAll();

  res.json(categoriesFromDB);
};

const read: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);

  const category = categories.find((p) => p.id === parsedId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

// Export it to import it somewhere else

export default { browse, read };

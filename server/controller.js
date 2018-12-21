module.exports = {
  getAllHouses: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .get_houses()
      .then(houses => res.status(200).send(houses))
      .catch(err => res.status(500).send(err));
  },
  addHouse: (req, res) => {
    const dbInstance = req.app.get("db");
    const {id, name, address, city, state, zip, img, mortgage, rent} = req.body
    console.log(req.body)
    dbInstance
      .add_house({id, name, address, city, state, zip, img, mortgage, rent})
      .then(houses => res.status(200).send(houses))
      .catch(err => res.status(500).send(err));
  },
  deleteHouse: (req, res) => {
    const dbInstance = req.app.get("db");
    const id = req.params.id
    dbInstance.delete_house({id})
    .then(res.status(200).send())
  }
};

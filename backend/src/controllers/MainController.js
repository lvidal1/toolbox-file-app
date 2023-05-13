class MainController {
  async home (req, res) {
    return res.json({ message: 'Welcome' }).status(200).end()
  }

  async health (req, res) {
    return res.status(200).end()
  }
}

export default MainController

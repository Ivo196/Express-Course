//Router utilizando el metodo por JS
function UserName(app) {
  app.get("/users", (req, res) => {
    
    res.render("users")
  });
}
module.exports = UserName;

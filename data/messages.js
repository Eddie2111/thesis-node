const listen = () => {
    console.log(`Listening on port 3000`);
}
const errorRoute = {
    status:404,
    message: "route exists but will not operate. Are you authorized?",
    route: "/error"
}
//
module.exports = listen,errorRoute;
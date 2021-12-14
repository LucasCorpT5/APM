import { serverHttp } from "./app";

serverHttp.listen(4000, () => {
    console.log('Server is listening on port 4000 🚀');
});
import { config } from "./config";
import server from "./src";

const PORT = config.PORT || 80;

server.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});

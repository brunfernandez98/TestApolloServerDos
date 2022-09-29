import { getStores} from "./getStore";

const resolvers = {
    Query: {
        getStores: () => getStores () 
    }
};

export default resolvers;
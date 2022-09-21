import { getBooks} from "./getBook";


const resolvers = {
    Query: {
        getBooks: () => getBooks()
        
    }
};

export default resolvers;
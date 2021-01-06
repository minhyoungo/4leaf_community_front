import ApolloClient from "apollo-boost";
import { resolvers, defaults } from "./LocalState";

export default new ApolloClient({
  // 신호를 줄 위치
  uri: `http://localhost:7000/graphql`,
  //귀차니즘 금지
  clientState: {
    defaults: defaults,
    resolvers: resolvers,
  },
});

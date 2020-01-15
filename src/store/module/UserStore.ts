import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import Store from '../index';
import axios from "../../boot/axios";

@Module({
  dynamic: true,
  name: 'user',
  namespaced: true,
  store: Store
})
export default class UserStore extends VuexModule {
  user = null;

}

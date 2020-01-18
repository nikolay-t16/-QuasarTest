import { Mutations } from 'vuex-smart-module'
import LangState from './state';

export default class LangMutations extends Mutations<LangState> {
  public setLang(payload: string): void {
    this.state.lang = payload;
  }
}

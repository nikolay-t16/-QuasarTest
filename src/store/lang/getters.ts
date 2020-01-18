import { Getters } from 'vuex-smart-module'
import LangState from './state';

export default class LangGetters extends Getters<LangState> {
  public get lang(): string {
    console.log(LangState);
    return this.state.lang;
  }
}

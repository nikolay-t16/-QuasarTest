import {Actions} from 'vuex-smart-module';
import config from '../../../common/config';
import LangState from './state';
import LangMutations from './mutations';
import LangGetters from './getters';

const LS_LANG = 'lang';

export default class LangActions extends Actions<LangState, LangGetters, LangMutations> {
  public async setLang(options: string): Promise<void> {
    this.mutations.setLang(options);
    this.saveLang(options);
  }

  protected async saveLang(val: string): Promise<void> {
    try {
      localStorage.setItem(LS_LANG, val);
    } catch (e) {
      console.log(e);
    }
  }

  public async getLang(): Promise<string> {
    try {
      const val = localStorage.getItem(LS_LANG);
      if (val !== null) {
        return val;
      }
    } catch (e) {
      console.log(e);
    }
    return config.lang.def;
  }

}

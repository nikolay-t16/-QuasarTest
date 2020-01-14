import {Module, Mutation, Action, VuexModule} from 'vuex-module-decorators';
import Store from '../index';
import config from '../../../common/config';


@Module({
  dynamic: true,
  name: 'rubric',
  namespaced: true,
  store: Store
})
export default class RubricStore extends VuexModule {
  protected curLang: string = this.getLang();
  protected LS_LANG: string = 'lang';

  public get lang(): string {
    return this.curLang;
  }

  @Mutation
  protected setLangMutation(payload: string) {
    this.curLang = payload;
  }

  @Action
  public async setLang(options: string): Promise<void> {
    this.setLangMutation(options);
    this.saveLang(options);
  }

  protected getLang(): string {
    try {
      const val = localStorage.getItem(this.LS_LANG);
      if (val !== null) {
        return val;
      }
    } catch (e) {
      console.log(e);
    }
    return config.defaultLang;
  }

  protected async saveLang(val: string): Promise<void> {
    try {
      localStorage.setItem(this.LS_LANG, val);
    } catch (e) {
      console.log(e);
    }
  }
}

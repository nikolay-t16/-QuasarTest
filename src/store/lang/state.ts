import config from '../../../common/config';

interface LangStateType {
  lang: string;
}

class LangState implements LangStateType{
  public lang: string = config.lang.def;
}

export default LangState;

import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import Store from '../index';
import RubricData, {rubricDataFabric} from '../../../common/data/interface/RubricData';
import axios from "../../boot/axios";

@Module({
  dynamic: true,
  name: 'rubric',
  namespaced: true,
  store: Store
})
export default class RubricStore extends VuexModule {
  allRubrics: RubricData[] = [];
  rubric?: RubricData;
  allFields: object = [
    'rubricId',
    'parentId',
    'name',
    'show',
    'sort',
    'createdAt',
    'updatedAt',
    'parent',
  ];

  get allMapRubrics(): Map<number, RubricData> {
    const res = new Map();
    this.allRubrics.forEach(item => res.set(item.rubricId, item));
    return res;
  }

  get rubricTree(): Map<number, RubricData> {
    const tree = new Map();
    this.allRubrics.forEach((rub, rubricId) => {
      if (!tree.has(+rub.parentId)) {
        tree.set(rub.parentId, new Map());
      }
      tree.get(rub.parentId).set(rubricId, rub);
    });
    return tree;
  }

  @Mutation
  public setAllRubrics(payload: RubricData[]) {
    this.allRubrics = payload;
  }

  @Mutation
  public setRubric(payload: RubricData) {
    this.rubric = payload;
  }

  @Mutation
  public REMOVE_RUBRIC(payload: RubricData) {
    const index = this.allRubrics.indexOf(payload);
    if (index > -1) {
      this.allRubrics.splice(index, 1);
    }
  }

  @Mutation
  public EDIT_RUBRIC(payload: RubricData) {
    for (let i = 0; i < this.allRubrics.length; i += 1) {
      if (this.allRubrics[i].rubricId === payload.rubricId) {
        this.allRubrics[i] = payload;
        return;
      }
    }
  }

  @Action
  async getAllRubrics() {
    const rubricFields = Object.values(this.allFields).join(' ');
    return axios.post('http://localhost:3001/graphql', {
      query: `{
        Rubrics{
          ${rubricFields}
          products {
            productId
          }
        }
      }`,
    })
      .then((res) => {
        if (res.status === 200) {
          this.setAllRubrics( res.data.data.Rubrics );
        }
      })
      .catch(err => console.log(err));
  }

  @Action
  async getRubric(options) {
    const rubricFields = Object.values(this.allFields).join(' ');
    axios.post(
        'http://localhost:3001/graphql',
        {
          query: `{
          Rubric(id:${options.id}){ 
            ${rubricFields}
          } 
        }`,
        },
      )
      .then((res) => {
        this.setRubric( res.data.data.Rubric );
      })
      .catch(err => console.log(err));
  }

  @Action
  async removeRubric(options: RubricData) {
    axios.post(
        'http://localhost:3001/graphql',
        {
          query: `mutation { RubricDelete (id:${options.rubricId}) }`,
        },
      )
      .then(() => this.REMOVE_RUBRIC(options))
      .catch(err => console.log(err));
  }

  @Action
  async editRubric(options: RubricData) {
    const res = axios
      .post(
        'http://localhost:3001/graphql',
        {
          query: `mutation RubricEdit($rubric: RubricInput!)  {
            RubricEdit ( data: $rubric )
          }`,
          variables: {
            rubric: options,
          },
        },
      )
      .then(
        () => {
          this.EDIT_RUBRIC(options);
          this.getRubric({ id: options.rubricId });
        },
      )
      .catch(err => ({
        result: false,
        error: err,
      }));
    return res;
  }

  @Action
  async addRubric(options: RubricData) {
    options.sort = +options.sort;
    const res = axios
      .post(
        'http://localhost:3001/graphql',
        {
          query: `mutation RubricAdd($rubric: RubricInput!)  {
            RubricAdd ( data: $rubric ){ id}
        }`,
          variables: {
            rubric: options,
          },
        },
      )
      .catch((err) => {
        console.log(err);
        return false;
      });
    return res;
  }
}

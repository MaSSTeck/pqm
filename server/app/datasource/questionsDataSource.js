import { RESTDataSource } from 'apollo-datasource-rest';

export class QuestionAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://mvrp.herokuapp.com/api/'; //https://questions.aloc.ng/api/q?subject=chemistry
  }

  async getManyQuestions(subject, limit) {
    return this.get('cars');
  }

  async getAQuestion(subject) {
    const result = await this.get('q', {
        subject
    });

    return result;
  }
};
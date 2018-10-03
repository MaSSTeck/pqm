export default {
  
  getQuestion: (root, { subject, type, year }, { dataSources }) =>{
       return  dataSources.questionAPI.question(subject, type,year)
  },
    
  getQuestions: (root, {limit,subject,type,year}, { dataSources }) => {

      return dataSources.questionAPI.questions(limit,subject,type,year)
  }, 

  getManyQuestions: (root, {subject,type,year}, { dataSources }) => {
      return  dataSources.questionAPI.manyQuestions(subject,type,year) 
  }
} 
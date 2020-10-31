module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Questions", [{

      question: "What is your middle name?"
    },
    {question: "Who is your celebrity crush?"
    },
    {
      question: "How old are you?"
    },
    {
      question: "What is your favorite color?"
    },
    {
      question: "Have you ever been arrested?"
    },
    {
      question: "What is your dream job?"
    },
    {
      question: "What is your favorite go to movie?"
    },
    {
      question: "What is you favorite current song?"
    },
    {
      question: "What is you favorite throwback song?"
    },
    {
      question: "What is your dream car?"
    },
    {
      question: "Where would you love to live?"
    },
    {
      question: "What is your favorite era?"
    },
    {
      question: "What is your favorite holiday?"
    },
    {
      question: "When is your birthday?"
    },
    {
      question: "What is your favorite food?"
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Questions", null, {});
  }
};
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([{
          name: 'Cohort36',
          members: 'Akshay, Helga, Ryan, Selim, Shurooq, Amy, Caleb, Katoora, Samim, Michael',
          logoUrl: 'https://1.bp.blogspot.com/-TvgOlV9N6As/VZ_wDoeXp9I/AAAAAAAABbI/87xRH0cPxcY/s1600/the-number-36.gif',
        },
        {
          name: 'CodeCore',
          members: 'Tam, Ian, Miranda, Jordy, Brandon, Hindreen, Anson, Tamara',
          logoUrl: 'https://codecore.ca/images/internal/cc-logo.png',
        },
        {
          name: 'TheOffice',
          members: 'Michael, Dwight, Jim, Pam, Angela, Oscar, Kelly, Phyllis, Toby, Ryan, Creed, Meredith, Kevin, Stanley',
          logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dunder_Mifflin%2C_Inc.svg/440px-Dunder_Mifflin%2C_Inc.svg.png',
        }
      ]);
    });
};
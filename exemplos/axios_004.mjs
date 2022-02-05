/*
Exemplo de User
user: {
      id: 1793,
      name: 'Amanda Nunes',
      created_at: '2019-03-29T14:38:32-03:00',
      sortable_name: 'Amanda Nunes',
      short_name: 'Amanda Nunes',
      sis_user_id: 'anunes123@gmail.com',
      integration_id: 'anunes123@gmail.com',
      sis_import_id: null,
      login_id: 'anunes123@gmail.com'
    }
*/
import getUsers from "../api/enrollments.mjs";

const users = await getUsers(25);

// Desconstrução
users.map((ret) => {
  const {user:{name}} = ret
  console.log( name )
});

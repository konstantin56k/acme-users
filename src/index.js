const faker = require('faker');

const users = new Array(50).fill('').map( _ => faker.helpers.userCard());

const selected = window.location.hash.slice(1)*1;
const userList = document.querySelector('#user-list');

const render = (selected, users, userList)=> {
    const html = users.map( (user, idx) => {
        return `
            <li>
            <a href='#${idx}'>
                ${ user.name }
            </a>
            <ul>
            ${
                selected === idx ? user.email.map( mail => {
                return `
                    <li>
                    ${ mail }
                    </li>
                `;
                }).join('') : ''
            }
            </ul>
            </li>
        `;
        }).join('');
        userList.innerHTML = html;
};
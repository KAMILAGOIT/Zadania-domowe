import { Login } from'../pages/Login';
import  { HomePage }  from '../pages/HomePage';

const LoginPage = new Login();
const HomePage = new HomePage();
describe('Testing the login page', () => {
    it('Test 1: shoud login and logout with user888@gmail.com')
        LoginPage.visit();
        LoginPage.login('user888@gmail.com', '1234567890');
        HomePage.logout();
});

describe('Testing the login page', () => {
    it('Test 2: shoud login and logout with testowyqa@qa.team')
        LoginPage.visit();
        LoginPage.login('testowyqa@qa.team', 'QA!automation-1');
        HomePage.logout();
});

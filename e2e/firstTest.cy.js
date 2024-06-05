it("wpisz email user888",() => {
cy.visit("https://www.edu.goit.global/account/login")
cy.signIn("user888@gmail.com", "1234567890")
});


it("wpisz email testowyqa",() => {
    cy.visit("https://www.edu.goit.global/account/login")
    cy.signIn("testowyqa@qa.team", "QA!automation-1.")
    });